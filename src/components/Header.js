import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';

// TODO: Need to set up react router to link these to pages

const Header = () => (
  <AppBar color='primary' position='static'>
    <Toolbar>
      <Typography variant='h6' color='inherit'>
        My Header
      </Typography>
      <Navbar />
    </Toolbar>
  </AppBar>
)

export default Header;