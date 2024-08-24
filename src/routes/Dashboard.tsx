import Grid from "@mui/material/Grid";

import Display from "../components/Display";
import ThreeObject from "../components/ThreeObject";

const Dashboard = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <ThreeObject />
      </Grid>
      <Grid item xs={12}>
        <Display title="Architecture">
          <img
            src="/images/architecture.png"
            alt="architecture"
            height="350"
            style={{ alignSelf: "center" }}
          />
        </Display>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
