import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import TextField from './TextField';
import '../assets/css/UserForm.css';


const UserFormLogin = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 ')
            .min(2, 'must be 2 or more')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 ')
            .min(2, 'must be 2 or more')
            .required('Required'),
        email: Yup.string()
            .email('email is invalid')
            .required('Email is Required'),
        password: Yup.string()
            .min(6, ' password must be atleast 6 characters or more')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'password is not matching')
            .required('confirming your password is Required'),
        Zip: Yup.string()
            .required('Required'),

    })

    return (

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                Zip: ''

            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik => (
                <div>

                    <h1 className='my-4 font-weight-bold-display-4 text-center'>
                        Signup
                    </h1>

                    <Form>
                        <TextField type="text" label="FirstName" name="firstName" placeholder='FirstName' />
                        <TextField type="text" label="lastName" name="lastName" placeholder='LastName' />
                        <TextField type="email" label="email" name="email" placeholder='E-mail' />
                        <TextField type="password" label="password" name="password" placeholder='password' />
                        <TextField type="password" label="confirmpassword" name="confirmPassword" placeholder='Confirm Password' />
                        <TextField type="text" label="Zip" name="Zip" placeholder='Zip Code' />

                        <button type="button" class="btn btn-primary mt-3">SignUp</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default UserFormLogin