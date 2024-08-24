import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/Grid";

import { useCustomSelector } from "../store/hooks";
import Display from "../components/Display";
import { getAuthToken } from "../utils/auth";

type Overview = {
  _id: string;
  level: number;
  content: string;
};

const Asset = () => {
  const isAuth = useCustomSelector((state) => state.auth.isAuthenticated);
  const [overviews, setOverviews] = useState<Overview[]>([]);
  const [isOverviewLoading, setIsOverviewLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const token = getAuthToken();
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      const res = await fetch(`${process.env.REACT_APP_API_URL}/asset/overviews`, {
        method: "GET",
        headers: headers,
      });
      const data = await res.json();
      // Exclude unnecessary columns in API response
      const extractedData = data.overviews.map((element: any) => {
        const { level, ...rest } = element;
        return rest;
      });
      setOverviews(extractedData);
    };

    setIsOverviewLoading(true);
    
    getData();
    
    setIsOverviewLoading(false);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {!isAuth && (
          <Display title="Private content">
            <div>You need to be authenticated</div>
          </Display>
        )}
        {isAuth && (
          <Display title="Overview">
            {isOverviewLoading && <CircularProgress />}
            {!isOverviewLoading && <ul>{overviews.map(overview => (
              <li key={overview._id}>{overview.content}</li>
            ))}</ul>}
          </Display>
        )}
      </Grid>
    </Grid>
  );
};

export default Asset;
