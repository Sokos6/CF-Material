import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CourseList from './CourseList';

export const NavBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Code Frequency Material
          </Typography>
        </Toolbar>
      </AppBar>
      <CourseList />
    </div>
  );
};

export default NavBar;
