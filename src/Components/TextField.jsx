import React from 'react'
import {ErrorMessage, useField} from 'formik';

function TextField({label, ...props}) {
    const [field, meta] = useField(props);
    
  return (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <input type= 'text'
        className={`form-control shadow-none border border-info ${meta.touched && meta.error && 'is-invalid'}`}
        autoComplete='off'
        {...field}{...props}
        />
        <ErrorMessage name={field.name} component='div' className='error' />
        
    </div>
    
  )
}

export default TextField