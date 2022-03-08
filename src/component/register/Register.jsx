import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Link, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import '../login/login.css'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {FormHelperText} from '@material-ui/core'
// import { Link } from "react-router-dom";


export default function Login({ handleChange }) {

    const paperStyle = { padding: '20px', width: 450, margin: '0px auto',height:'83vh'}
    const avatarStyle = { backgroundColor: 'red' }
    const textfield = { marginBottom: '11px' }
    const register = { marginTop: "8px" }
    // const create = { marginTop: "10px" }

    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phonenumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
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
                <Paper style={paperStyle}>
                    <Grid align={'center'}>
                        <Avatar style={avatarStyle}>
                            <HowToRegIcon />
                        </Avatar>
                        <h2>Register</h2>
                        <h4>Please fill this form to create an account</h4>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>

                                <Field as={TextField} style={textfield} label='Name' name='name'
                                    placeholder="Name" fullWidth align={'center'} helperText={<ErrorMessage name="name" />} />
                                <Field as={TextField} style={textfield} label='Email' name='email' placeholder="Email" fullWidth align={'center'} helperText={<ErrorMessage name="email" />} />
                                <FormControl>
                                </FormControl>
                                <FormHelperText><ErrorMessage name="gender" /></FormHelperText>

                                <Field as={TextField} style={textfield} name='phonenumber' label='Phone number' placeholder="Phone number" type={'phone'} fullWidth align={'center'} helperText={<ErrorMessage name="phonenumber" />} />
                                <Field as={TextField} style={textfield} name='password' label='Password' type='password' placeholder="Password" fullWidth  helperText={<ErrorMessage name="password" />} />
                                <Field as={TextField} style={textfield} name='confirmPassword' type='password' label='Confirm Password' placeholder="Confirm Password" fullWidth helperText={<ErrorMessage name="confirmPassword" />} />
                               
                                <Button style={register} variant="contained" disabled={props.isSubmitting}
                                    type='submit' color='primary' fullWidth>{props.isSubmitting ? 'Loading' : 'Register'}</Button>
                                <Typography style={register}>
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




