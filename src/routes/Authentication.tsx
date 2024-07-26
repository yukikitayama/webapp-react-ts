import Grid from "@mui/material/Grid";

import Display from "../components/Display";
import LoginForm from "../components/LoginForm";

const Authentication = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Display title="Login">
          <LoginForm />
        </Display>
      </Grid>
    </Grid>
  );
};

export default Authentication;
