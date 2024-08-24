import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { blueGrey, grey } from '@mui/material/colors';

import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import Content from '../components/Content';
import FormDialog from '../components/FormDialog';

// const defaultTheme = createTheme();
const defaultTheme = createTheme({
  palette: {
    primary: {
      // main: indigo[500]
      main: grey[700]
    },
    secondary: {
      main: blueGrey[500]
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // backgroundColor: indigo[700],
          backgroundColor: grey[800],
          // backgroundColor: blueGrey[700],
          color: "white"
        }
      }
    }
  }
});

const RootLayout = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* This display: flex can place navigation, menu and content nicely */}
      <Box sx={{ display: 'flex' }} component="div">
        <CssBaseline />
        <FormDialog />
        <Navigation open={open} toggleDrawer={toggleDrawer} />
        <Menu open={open} toggleDrawer={toggleDrawer} />
        <Content />
      </Box>
    </ThemeProvider>
  );
};

export default RootLayout;