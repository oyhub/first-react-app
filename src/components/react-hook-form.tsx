import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function ReactHookForm() {
    const schema = yup.object({
        firstName: yup
            .string()
            .min(3, 'Your first name should be at least 3 characters.')
            .max(10, 'Your first name cannot be longer than 10 characters')
            .required('Please enter your first name'),
        lastName: yup
            .string()
            .min(3, 'Your last name should be at least 3 characters.')
            .max(10, 'Your last name cannot be longer than 10 characters')
            .required('Please enter your last name'),
        role: yup
            .string(),
        age: yup
            .number()
            .min(18, 'Your age must be 18 or higher')
            .max(100, 'Your age must be 100 or lower')
            .typeError('Your age must be a number')
            .required()
    }).required();

    const { register,
        handleSubmit,
    formState: {errors},
    } = useForm({
        resolver: yupResolver(schema)
    });


    
    function onSubmit(data: any) {
        console.log(data);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')}/>
            <p>{errors.firstName?.message}</p>
            <input {...register('lastName')}/>
            <p>{errors.lastName?.message}</p>
            <input type="number" {...register('age')}/>
            <p>{errors.age?.message}</p>
            <select {...register('role')}>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="admin">Admin</option>
                <option value="other">Other</option>
            </select>
            <p>{errors.role?.message}</p>
            <input type="submit"/>
        </form>
    )
}

export default ReactHookForm;