import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

//BUG: no se esta importando la funcion deleteCabin
export default function useDeleteCabin() {
  console.log('Hi from query hoook');

  //Este hook te da acceso a esa instancia global.
  const queryClient = useQueryClient(); //👉 Piensa en queryClient como una API para manipular el caché y los estados de red.
  //Desde ella puedes:
  // Invalidar queries (invalidateQueries)
  // Actualizar datos directamente (setQueryData)
  // Leer valores cacheados (getQueryData)
  // Prefetchear(prefetchQuery);

  //⚔️ 3. useMutation(): ejecutar acciones que cambian datos
  const { isPending: isDeleting, mutate: delteCabin } = useMutation({
    mutationFn: id => deleteCabinApi(id),
    //Se ejecuta solo si la mutación fue exitosa.
    onSuccess: () => {
      toast.success('cabin successfully deleted');
      //➡️ invalidateQueries({ queryKey: ['cabins'] }) marca la query 'cabins' como “stale” (obsoleta).
      //Esto provoca que React Query refetchee automáticamente los datos de esa query en segundo plano.
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    //Se dispara cuando ocurre un error durante la mutación (por ejemplo, el servidor responde 500).
    //Aquí muestra un toast con el mensaje del error.
    onError: error => toast.error(error.message),
  });

  return { isDeleting, delteCabin };
}
