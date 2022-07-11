import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Models:
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterForm = () => {

   let user = new User();

const initialValues = {

    username: '',
 email:'',
 password: '',
 confirm:'',
 role:ROLES.USER
}

const registerSchema = Yup.object().shape(
username: Yup.string()
.min(6,'username too short')
.max(12,'username too long')
.required('username is required'),
email:Yup.string().email('Invalid email format').required('Email is required'),
password: Yup.string().required('Password is required').min(8,'Password too short'),
confirm: Yup.string().when('password',{
    is:value => (value && value.length > 0 ? true : false),
    then: Yup.string().oneOf(
        [Yup.ref('password')],
        '¡Password must match!'
    )
}),required('You must confirm the password'),
role: Yup.string().oneOf(ROLES.USER, ROLES.ADMIN, 'You must select a Role: User / Admin').required('Role is required')
)


const submit = (values)=>{
    alert('Register user')
}
    
    return (
        <div>
          <h4>Register Formik</h4> 
          <Formik initialValues={initialValues}


            //onsubmit event

        onSubmit={ async (values) => {
        await new Promise((response) => setTimeout(response, 1000));
        alert(JSON.stringify(values, null, 2));
        
        // Yup validation schema

        validationSchema = {registerSchema}
         }} 
        >
             {/* We obtain props from Formik*/}
    
             {({errors,values, touched,isSubmitting, handleBlur,handleChange}) => (
        
        <Form>
        <label htmlFor="username">Username</label>
     <Field
       id="username"
       name="username"
       placeholder="Your username"
       type="text"
     />
      {/*Username errors */}
       
     { errors.username && touched.username && (
        <ErrorMessage name = 'username ' component = 'div'></ErrorMessage>
     )}
     <label htmlFor="email">Email</label>
     <Field
       id="email"
       name="email"
       placeholder="example@email.com"
       type="email"
     />
     {/*Email errors*/ }
     {
        
             <ErrorMessage name="email" component='div'/>
             
         
     }
<label htmlFor="password">Password</label>
     <Field id="password" name="password"   placeholder="password"
       type="password" />
{/*password errors */ }
                        {

                            <ErrorMessage name="password" component='div' />
                        }
     <label htmlFor="confirm">Confirm password</label>
     <Field id="confirm" name="confirm"   placeholder="Confirm your password"
       type="password" />
{/*Confirm password errors */ }
   { 
    errors.confirm && touched.confirm && 
   ( <ErrorMessage name="confirm " component='div'/> )}

   <label htmlFor="role">role</label>
    
     <button type="submit">Submit</button>

     {isSubmitting ? (<p>Saving your credentials...</p>) : null}
</Form> )};

        </Formik>
        </div>
    );
}

export default RegisterForm;
