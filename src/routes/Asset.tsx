import Grid from "@mui/material/Grid";

import { useCustomSelector } from "../store/hooks";
import Display from "../components/Display";

const Asset = () => {
  const isAuth = useCustomSelector((state) => state.auth.isAuthenticated);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        {!isAuth && <Display title="Private content"><div>You need to be authenticated</div></Display>}
        {isAuth && <Display title="Overview"><div>Save $500 USD in Chase</div></Display>}
      </Grid>
    </Grid>
  );
};

export default Asset;
