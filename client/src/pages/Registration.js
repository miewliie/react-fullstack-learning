import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Registration() {
    const initialValues = {
        username: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("You must input your username"),
        password: Yup.string().min(4).max(20).required(),
    })

    const onSubmit = () => {};

  return (
    <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="formContainer">
                <label>Username: </label>
                <ErrorMessage name='username' component="span" />
                <Field 
                autocomplete='off'
                id="inputCreatePost" 
                name="username" 
                placeholder="(Ex. Miew..)" 
                />

                <label>Password: </label>
                <ErrorMessage name='password' component="span" />
                <Field 
                autocomplete='off'
                id="inputCreatePost" 
                name="password" 
                placeholder="Your Password..." 
                />

                <button type='submit'> Create Post</button>

            </Form>
      </Formik>
    </div>
  )
}

export default Registration
