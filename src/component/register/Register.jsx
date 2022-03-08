import { Avatar, Button, FormControl, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import '../login/login.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {FormHelperText} from '@material-ui/core'
import './register.css'

export default function Login({ handleChange }) {

    const initialValues = {
        name: '',
        email: '',
        phonenumber: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Its too short').required('Required'),
        email: Yup.string().email('Enter a valid mail').required('Required'),
        phonenumber: Yup.number().typeError('Enter Valid Phone Number').required('Required'),
        password:Yup.string().required("Please enter your password")
            .matches( /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character" ),
        confirmPassword: Yup.string().required("Please confirm your password").oneOf([Yup.ref('password'), null], "Passwords don't match.")
    });

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)

        setTimeout(() => {

            props.resetForm()
            props.isSubmitting(false)
        }, 2000)
    }

    return (
        <div>
            <Grid>
                <Paper className='paperStyle'>
                    <Grid align={'center'}>
                        <Avatar className='avatarStyle'>
                            <HowToRegIcon />
                        </Avatar>
                        <h2>Register</h2>
                        <h4>Please fill this form to create an account</h4>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>

                                <Field as={TextField} className='textfield' label='Name' name='name'
                                    placeholder="Name" fullWidth align={'center'} helperText={<ErrorMessage name="name" />} />
                                <Field as={TextField} className='textfield' label='Email' name='email' placeholder="Email" fullWidth align={'center'} helperText={<ErrorMessage name="email" />} />
                                <FormControl>
                                </FormControl>
                                <FormHelperText><ErrorMessage name="gender" /></FormHelperText>

                                <Field as={TextField} className='textfield' name='phonenumber' label='Phone number' placeholder="Phone number" type={'phone'} fullWidth align={'center'} helperText={<ErrorMessage name="phonenumber" />} />
                                <Field as={TextField} className='textfield' name='password' label='Password' type='password' placeholder="Password" fullWidth  helperText={<ErrorMessage name="password" />} />
                                <Field as={TextField} className='textfield' name='confirmPassword' type='password' label='Confirm Password' placeholder="Confirm Password" fullWidth helperText={<ErrorMessage name="confirmPassword" />} />
                               
                                <Button className='register' variant="contained" disabled={props.isSubmitting}
                                    type='submit' color='primary' fullWidth>{props.isSubmitting ? 'Loading' : 'Register'}</Button>
                                <Typography className='register'>
                                    <Link href="#" onClick={() => handleChange("event", 0)}> Already have an Account?
                                    </Link>
                                </Typography>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </div>
    )
}




