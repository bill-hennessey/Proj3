import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import {pink} from '@mui/material/colors'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Auth from '../utils/auth';
import cow from '../../src/bigcow.png';

const styles = {
  mainheader: {
    textAlign:'center',
},
  header: {
    textAlign:'center',
    color:'rgb(233,30,99)'
},
  buttons:{
    color:'rgb(233,30,99)'
},
  spanStyle:{
      color:'rgb(233,30,99)',
      fontWeight:'bolder'
  },
  cow:{
    position:'fixed',
    width:'100%',
    bottom:50
  }
};

export const Account = () => {
    let user = Auth.getUser();
    let loggedIn = '';

    if (Auth.loggedIn()){
        loggedIn = "already logged in!"
    } else {
        loggedIn = "NOT logged in!"
    }

    return (
        <>
        <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
            <Icon icon="mdi:cow" />
          </Avatar>

        <Typography 
        style={styles.mainheader}
        >
          <h2>Hello {user.data.firstName}!</h2>
          <p>You are {loggedIn}</p>

            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: pink[500] }}
                onClick={()=> Auth.logout()}
            >Logout</Button>


        </Typography>

      <img style={styles.cow} alt="I am a big cow in a field" src={cow}/>
        </>
    )
}
