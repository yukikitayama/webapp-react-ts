import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

const contentStyle = {
  backgroundColor: (theme: any) =>
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  flexGrow: 1,
  height: "100vh",
  overflow: "auto",
};

const Content = () => {
  return (
    // component="div" is for resolving the issue: "Expression produces a union type that is too complex to represent.ts(2590)" with react-three-fiber
    <Box sx={contentStyle} component="div">
      {/* This Toolbar adds space above the Container to have space with the real navigation top bar */}
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Content;
