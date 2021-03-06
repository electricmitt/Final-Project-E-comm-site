import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const SignUpFront = () => {

    const paperStyle = {padding: 20, height: '70vh', width: 380, margin: "20px auto"};
    const avatarStyle = {backgroundColor: 'green'};
    const btnstyle = {margin: '8px 0'};
    return (
        <Grid style={paperStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2> 
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                    name="checkedB"
                    color="primary"
                    />
                    }
                    label="Remember me"
                    />  
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>      
            </Paper>
        </Grid>
    )
}

export default SignUpFront