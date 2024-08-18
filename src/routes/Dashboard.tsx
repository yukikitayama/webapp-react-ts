import Grid from "@mui/material/Grid";

import Display from "../components/Display";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Display title="Architecture"><div>architecture image</div></Display>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
