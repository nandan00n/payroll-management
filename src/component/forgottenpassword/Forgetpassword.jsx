import { Avatar, Button, Paper, TextField } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import './forgetpassword.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function Login({ handleChange }) {

    const initialValues = {
        username: ''
    }

    const onSubmit = (values, props) => {
        console.log(values);
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
        console.log(props)
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("* Required"),
    })

    return (
        <>
                    <div className='container'>
                        <div className='image'>
                    <img src={require('../assests/bg.jpg')} alt='logo'/>
                            </div>
                        <Paper elevation={10} className='paperStyle1'>
                            <div align={'center'}>
                                <Avatar className='favatarstyle'>
                                    <LoginIcon />
                                </Avatar>
                                <h2 className="title">Password Recovery</h2>
                                <h4 className="titlecontent">Please enter your email below</h4>
                            </div>
                            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                                {(props) => (
                                    <Form className='form-container'>
                                <div className='fb-textfield'>
                                        {console.log(props)}
                                        <Field as={TextField} className='textfield1' label='Username  or Email' name='username'
                                            placeholder="Username  or Email" fullWidth align={'center'}
                                            helperText={<ErrorMessage name='username' />}
                                            />
                                            </div>
                                <div className='btn'>
                                        <Button variant="contained" disabled={props.isSubmitting} type='submit' color='primary' fullWidth>{props.isSubmitting ? 'Loading' : 'Submit'}</Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </Paper>
                    </div>
        </>
    )
}




