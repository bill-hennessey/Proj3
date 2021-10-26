import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';

import auth from '../../utils/auth';

const styles = {
  navStyle: {
    background:'#E91E63'

  },

  linkStyle:{
    color: 'white',
  },

}
  // Checks if user is logged in to conditionally render the Account/Login Page
  let loginLink = ''
  let loginText = ''

 if(auth.loggedIn()){
    console.log("You are logged in")
    loginLink = "/account"
    loginText = "Account"
  } else {
    console.log("You are NOT logged in")
    loginLink = "/login"
    loginText = "Login"
  }

export function BottomNav() {
  const [value, setValue] = React.useState(0);

  // check is user is logged in

  return (
    <>
    <CssBaseline />
    <Box sx={{ pb:0, borderRadius: 10, position: 'fixed', bottom: 0, left: 0, right: 0}}>
      <BottomNavigation
        showLabels
        style={styles.navStyle}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction href="/" label="Home" style={styles.linkStyle} icon={<HomeIcon />} />
        <BottomNavigationAction href={loginLink} label={loginText} style={styles.linkStyle}icon={<SupervisorAccountIcon />} />
        <BottomNavigationAction href="/favorites" label="Favorites" style={styles.linkStyle}icon={<FavoriteIcon />} />
        <BottomNavigationAction href="/movies" label="Movies" style={styles.linkStyle}icon={<LocalMoviesIcon />} />
        <BottomNavigationAction href="/aboutus" label="About Us" style={styles.linkStyle}icon={<GitHubIcon />} />
      </BottomNavigation>
    </Box>
    </>
  );
}
