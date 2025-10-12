import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log('error in cabins', error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}
