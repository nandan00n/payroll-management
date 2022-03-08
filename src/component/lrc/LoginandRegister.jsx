import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Login from '../login/Login';
import Register from '../register/Register';

export default function LoginandRegister() {
    const [value,setValue]= useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle={width:490, margin:'20px auto'}

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${ index }`}
                aria-labelledby={`simple-tab-${ index }`}
                {...other}
            >
                {value === index && (
                    <Box >
                        <Typography>{children}</Typography>
                    </Box>
                )}
                
            </div>
        );
    }
  return (
      <Paper elevation={20} style={paperStyle}>

          <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
              <Tab label="Login" />
              <Tab label="Register" />
          </Tabs>
          <TabPanel value={value} index={0}>
              <Login handleChange={handleChange}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
              <Register handleChange={handleChange}/>
          </TabPanel>
      </Paper>
  )
}
