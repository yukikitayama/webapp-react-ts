import Grid from "@mui/material/Grid";

import Display from "../components/Display";
import ThreeObject from "../components/ThreeObject";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ThreeObject />
      </Grid>
      <Grid item xs={12}>
        <Display title="Architecture"><div>architecture image</div></Display>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
