import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log('error in cabins', error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createEditCabin(newCabinObj, id) {
  console.log('createEditCabin', { newCabinObj, id });

  const hasImagePath = newCabinObj.image?.startsWith?.(supabaseUrl);

  //https://ewbzafbxyiyubwqemsoc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imageName = `${Math.random()}-${newCabinObj.image.name}`.replaceAll('/', '');
  const imagePath = hasImagePath
    ? newCabinObj.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log('imagePath', imagePath);

  let query = supabase.from('cabins');
  //A. create cabin
  if (!id) query = query.insert([{ ...newCabinObj, image: imagePath }]);
  //B. EDIT cabin.
  if (id) query = query.update({ ...newCabinObj, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log('error delete cabin', error);
    throw new Error('Cabin could not be created');
  }
  //2. upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabinObj.image);
  //3. Delete the cabin iF there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('Cabin image could not be upoloadin and the cabin was not created');
  }

  return data;
}

export async function delteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.log('error delete cabin', error);
    throw new Error('Cabin could not be deleted');
  }

  return data;
}
