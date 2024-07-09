import Grid from "@mui/material/Grid";

import Display from "../components/Display";
import SimpleTable from "../components/SimpleTable";

const Music = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Display title="Learning">
          <SimpleTable />
        </Display>
      </Grid>
    </Grid>
  );
};

export default Music;
