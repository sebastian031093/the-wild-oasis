import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log('error in cabins', error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createCabin(newCabinObj) {
  const { data, error } = await supabase.from('cabins').insert([newCabinObj]);

  if (error) {
    console.log('error delete cabin', error);
    throw new Error('Cabin could not be created');
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
