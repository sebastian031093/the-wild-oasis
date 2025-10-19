import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';
import useCreateCabin from './hooks/useCreateCabin';
import useUpdateteCabin from './hooks/useUpdateCabin';

//TODO:refactor this component.
function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useUpdateteCabin();
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  //TODO: AQUI VALIDAMOS SI EL FORM ES PARA EDITAR O CREAR, LO QUE HACE QUE USE LOS VALORES QUE LLEGAN DE LA TABLA CABINS O UN OBJETO VACIO.
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: data => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: data => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(err) {
    console.log('Somthig is missing', err);
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" errors={errors?.name?.message}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* why the ...? Because this will return an object { onChange, onBlur, customer, ref }, and by spreading we then add all these to the element [show dev tools] */}
        {/* include validation with required or other standard HTML validation rules: required, min, max, minLength, maxLength, pattern, validate */}
        {/* errors will return when field validation fails  */}

        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register('name', {
            required: 'This filed is required',
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" errors={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This filed is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" errors={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This filed is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>
      {/* //BUG: we need a validation for discount  */}
      <FormRow label="Discount" errors={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: "Can't be empty, make it at least 0",
            //validate: value => getValues().regularPrice >= value || 'Discount should be less than regular price',
          })}
        />
      </FormRow>

      <FormRow label="Description for website" errors={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register('description', {
            required: 'This filed is required',
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" errors={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'This file is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button onClick={() => onCloseModal?.()} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
