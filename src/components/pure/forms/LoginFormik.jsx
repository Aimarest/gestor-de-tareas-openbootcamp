import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
const loginSchema = Yup.object().shape(
    {
        email:Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)
const LoginFormik = () => {
    const initialCredentials = {
        email:'', 
        password:''
    }
    return (
        <div>
    <h4>Login Formik</h4>
        <Formik
        // Initial values that the form will take

        initialValues={initialCredentials }

        // Yup validation schema

        validationSchema = {loginSchema}

        //onsubmit event

        onSubmit={ async (values) => {
        await new Promise((response) => setTimeout(response, 1000));
        alert(JSON.stringify(values, null, 2));

        // We save the data in the localStorage
        
        localStorage.setItem('credentials', values)
         }} 
         >


         {/* We obtain props from Formik*/}
         { props =>{
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
    
           }= props;
         return( 
           <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        {/*Email errors */ }
        {
            errors.email && touched.email && (
                <div className='error'>
                    <p>
                        {errors.email}
                    </p>
                </div>
            )
        }
<label htmlFor="password">Password</label>
        <Field id="password" name="password"   placeholder="password"
          type="password" />
 {/*password errors */ }
 {
            errors.password && touched.password && (
                <div className='error'>
                    <p>
                        {errors.password}
                    </p>
                </div>
            )
        }

        <button type="submit">Submit</button>
        {isSubmitting ? (<p>Login your credentials...</p>) : null}
</Form> 
         )
         }}
        </Formik>
        </div>
    );
}

export default LoginFormik;
