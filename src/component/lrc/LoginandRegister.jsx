import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Login from '../login/Login';
import Register from '../register/Register';
import './loginandregister.css';

export default function LoginandRegister() {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle2 = { width: 480, margin: '20px auto', borderRadius: '25px !important' }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <>
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${ index }`}
                    aria-labelledby={`simple-tab-${ index }`}
                    {...other}
                >
                    {value === index && (
                        <Box >
                            <div>{children}</div>
                        </Box>
                    )}
                </div>
            </>
        );
    }
    return (
        <div className='parent-container'>

            <div className='outer-container'>
                <div className='login-image'>
                    <img src={require('../assests/login.jpg')} alt='login-image' />
                </div>

            <div className='inner-container'>
                    <Paper elevation={20} style={paperStyle2}>

                <Tabs value={value} onChange={handleChange} className='tabs-container' aria-label="disabled tabs example">
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Login handleChange={handleChange} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Register handleChange={handleChange} />
                </TabPanel>
            </Paper>
            </div>
            </div>
         
        </div>
    )
}