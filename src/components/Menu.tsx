import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
// import PianoIcon from '@mui/icons-material/Piano';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import { drawerWidth } from '../parameters/parameters';

type MenuProps = {
  open: boolean;
  toggleDrawer: () => void;
};

const listItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/dashboard" >
      <ListItemIcon>
        <DashboardIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/work" >
      <ListItemIcon>
        <WorkIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Work" />
    </ListItemButton>
    <ListItemButton component={Link} to="/music">
      <ListItemIcon>
        <LibraryMusicIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Music" />
    </ListItemButton>
    <ListItemButton component={Link} to="/tennis">
      <ListItemIcon>
        <SportsTennisIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Tennis" />
    </ListItemButton>
  </React.Fragment>
);

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      // Styles when menu is closed
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9)
        }
      })
    }
  })
);

const toggleIconRightStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  px: [1]
};

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <StyledDrawer variant="permanent" open={props.open} >
    <Toolbar sx={toggleIconRightStyle}>
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {listItems}
      </List>
    </StyledDrawer>
  );
};

export default Menu;