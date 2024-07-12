import { type ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

type DisplayProps = {
  title: string;
  children: ReactNode;
  addButton?: boolean;
  openAdd?: (e: boolean) => void;
};

const DisplayStyle = {
  p: 2,
  display: "flex",
  flexDirection: "column",
};

const Display = ({ title, children, ...props }: DisplayProps) => {
  const OpenInputFormHandler = () => {
    props.openAdd!(true);
  };

  const titleWithAdd = (
    <Grid container>
      <Grid item xs={9} md={11}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={3} md={1} mb={1}>
        <Button variant="contained" onClick={OpenInputFormHandler}>Add</Button>
      </Grid>
    </Grid>
  );

  return (
    <Paper sx={DisplayStyle}>
      {/* gutterBottom add a bottom margin */}
      {!props.addButton && (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {title}
        </Typography>
      )}
      {props.addButton && titleWithAdd}
      {children}
    </Paper>
  );
};

export default Display;
