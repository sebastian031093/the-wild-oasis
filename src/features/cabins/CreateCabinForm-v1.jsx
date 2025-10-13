import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

//TODO:refactor this component.
function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: obj => createCabin(obj),
    onSuccess: () => {
      toast.success('New cabin succesfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: error => toast.error(error.message),
  });

  function onSubmit(data) {
    console.log('Hi from submit form..', data);
    //mutate(data);
    mutate({ ...data, image: data.image.item(0) });
  }

  function onError(err) {
    console.log('Somthig is missing', err);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" errors={errors?.name?.message}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* why the ...? Because this will return an object { onChange, onBlur, customer, ref }, and by spreading we then add all these to the element [show dev tools] */}
        {/* include validation with required or other standard HTML validation rules: required, min, max, minLength, maxLength, pattern, validate */}
        {/* errors will return when field validation fails  */}

        <Input
          type="text"
          id="name"
          disabled={isPending}
          {...register('name', {
            required: 'This filed is required',
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" errors={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
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
            required: 'This file is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isPending}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
