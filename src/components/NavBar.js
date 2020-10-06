import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export const Navbar = (props) => (
  <List component='nav'>
    <ListItem component='div'>
      <ListItemText inset>
        <Typography color='inherit' variant='h6'>
          Home
        </Typography>
      </ListItemText>
      <ListItemText inset>
        <Typography color='inherit' variant='h6'>
          Posts
        </Typography>
      </ListItemText>
      <ListItemText inset>
        <Typography color='inherit' variant='h6'>
          Contact
        </Typography>
      </ListItemText>
    </ListItem>
  </List>

)

export default Navbar;
