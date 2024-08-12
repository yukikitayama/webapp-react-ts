import Grid from "@mui/material/Grid";

import Display from "../components/Display";
import Routine from "../components/Routine";

const overview = (
  <ul>
    <li>
      3 types of hapiness
      <ul>
        <li>
          Achievement
          <ul>
            <li>Work promotion</li>
            <li>Music performance</li>
            <li>Win tennis match</li>
          </ul>
        </li>
        <li>
          Social interaction
          <ul>
            <li>Work discussion</li>
            <li>Meet friends</li>
            <li>Talk to family</li>
          </ul>
        </li>
        <li>
          Relaxation
          <ul>
            <li>Walk</li>
            <li>Wall tennis</li>
            <li>Drink coffee</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Weekend
      <ul>
        <li>
          LeetCode hard
        </li>
        <li>Georgia Tech</li>
        <li>Music composition</li>
        <li>Web application</li>
      </ul>
    </li>
  </ul>
);

const Life = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Display title="Overview">{overview}</Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Routine">
          <Routine />
        </Display>
      </Grid>
    </Grid>
  );
};

export default Life;
