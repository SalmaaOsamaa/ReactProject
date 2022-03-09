import React from 'react'
import { useField, ErrorMessage } from 'formik';
import '../assets/css/UserForm.css';


const TextField = (props) => {
    const [field, meta] = useField(props);
    console.log(field, meta);
    return (
        <div>
            <div class="input-group flex-nowrap mb-3">
                <input autoComplete='off' class={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'} `} placeholder="" aria-describedby="addon-wrapping"  {...field} {...props} />


                <ErrorMessage component="div" className='error' name={field.name} />

            </div>
        </div>
    )
}

export default TextField