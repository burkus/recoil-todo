import { Input, InputGroup, Button, FormErrorMessage, FormControl } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TodoForm } from "types/todo-form";
import useAddTodo from "hooks/useAddTodo";

export default function AddTodo() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TodoForm>({
        defaultValues: {
            title: '',
            description: ''
        }
    })
    const addTodo = useAddTodo()

    const onSubmit: SubmitHandler<TodoForm> = (data) => {
        addTodo(data.title, data.description)
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
        >
            <InputGroup flexDirection='column' gap={1} paddingBottom={1}>
                <FormControl isInvalid={errors?.title ? true : false}>
                    <Input
                        placeholder='Start new todo...'
                        isInvalid={errors?.title ? true : false}
                        type='text'
                        {...register('title', {
                            required: 'A Title is required'
                        })}
                    />
                    {errors?.title && <FormErrorMessage>{errors.title.message}</FormErrorMessage>}
                </FormControl>

                <Input
                    placeholder='Optional description'
                    type='text'
                    {...register('description')}
                />
            </InputGroup>

            <Button colorScheme='blue' type='submit'>Add</Button>
        </form>
    )
}   