import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../../services/apiCabins';
import toast from 'react-hot-toast';

export default function useUPdateteCabin(reset) {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin succesfully edited');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: error => toast.error(error.message),
  });

  return { editCabin, isEditing };
}
