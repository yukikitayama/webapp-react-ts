import { type ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

type DisplayProps = {
  title: string;
  children: ReactNode;
};

const DisplayStyle = {
  p: 2,
  display: "flex",
  flexDirection: "column",
};

const Display = ({ title, children }: DisplayProps) => {
  return (
    <Paper sx={DisplayStyle}>
      {/* gutterBottom add a bottom margin */}
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default Display;
