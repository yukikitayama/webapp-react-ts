import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box';

import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import Content from '../components/Content';

const defaultTheme = createTheme();

const RootLayout = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* This display: flex can place navigation, menu and content nicely */}
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <Navigation open={open} toggleDrawer={toggleDrawer} />
        <Menu open={open} toggleDrawer={toggleDrawer} />
        <Content />
      </Box>
    </ThemeProvider>
  );
};

export default RootLayout;