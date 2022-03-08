import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import './login.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'



export default function Login({ handleChange }) {

    const initialValues = {
        username: '',
        password: '',
        remember: false
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
        password: Yup.string().required("Please enter your password")
            .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character")
    })

    return (
        <>
       
        <div>
            <Grid>
                <Paper className='paperStyle'>
                    <Grid align={'center'}>
                        <Avatar className='avatarstyle'>
                            <LoginIcon />
                        </Avatar>
                        <h2>Login</h2>
                        <h4>Please enter the details below</h4>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                        {(props) => (
                            <Form >
                                {console.log(props)}
                                <Field as={TextField} className='textfield' label='Username' name='username'
                                    placeholder="Username" fullWidth align={'center'}
                                    helperText={<ErrorMessage name='username' />}
                                />
                                <Field as={TextField} className='textfield' label='Password' name='password'
                                    placeholder="Password" fullWidth type={'password'}
                                    helperText={<ErrorMessage name='password' />}
                                />
                                <Field as={FormControlLabel} name='remember' control={
                                    <Checkbox
                                        color="primary"
                                    />
                                } label='Remember me' />
                                <Button className='signin' variant="contained" disabled={props.isSubmitting} type='submit' color='primary' fullWidth>{props.isSubmitting ? 'Loading' : 'Login'}</Button>
                            </Form>
                        )}

                    </Formik>
                    <Typography className='signin' >
                        <Link href="#" > Forgot Password ?
                        </Link>
                    </Typography>
                    <Typography className='create' > Do you have an account ?
                        <Link href="#" onClick={() => handleChange("event", 1)}>Create an Account
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
        </>
    )
}




