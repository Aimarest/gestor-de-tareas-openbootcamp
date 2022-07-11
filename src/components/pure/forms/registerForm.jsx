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
}),required('You must confirm the password')
)


const submit = (values)=>{
    alert('Register user')
}
    
    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
