import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import Display from "../components/Display";
import SimpleTable from "../components/SimpleTable";

type Tournament = {
  date: string;
  name: string;
  location: string;
  format: string;
  level: number;
  result: string;
  comment: string;
};

const columnsTournament = [
  "Date",
  "Name",
  "Location",
  "Format",
  "Level",
  "Result",
  "Comment",
];

const overview = (
  <div>
    <ul>
      <li>
        Play tennis at least <b>once per week</b>
      </li>
      <li>
        Join tennis <b>tournament</b> at least <b>once per month</b>
      </li>
      <li>
        <b>Weight lifting</b> at least <b>3 times per week</b>
      </li>
      <li>
        <b>Running</b> at least <b>once per week</b>
      </li>
    </ul>
  </div>
);

const Tennis = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isTournamentLoading, setIsTournamentLoading] =
    useState<boolean>(false);

  useEffect(() => {
    const getData = async (
      url: string,
      stateFunction: (data: any) => void,
      key: string
    ) => {
      const res = await fetch(url);
      const data = await res.json();
      // Exclude unnecessary columns in API response
      const tableData = data[key].map((element: any) => {
        const { createdAt, updatedAt, __v, ...rest } = element;
        return rest;
      });
      stateFunction(tableData);
    };

    setIsTournamentLoading(true);
    getData(
      `${process.env.REACT_APP_API_URL}/tennis/tournaments`,
      setTournaments,
      "tournaments"
    );
    setIsTournamentLoading(false);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Display title="Overview">{overview}</Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Tournament">
          {!isTournamentLoading && (
            <SimpleTable columns={columnsTournament} rows={tournaments} />
          )}
          {isTournamentLoading && <CircularProgress />}
        </Display>
      </Grid>
    </Grid>
  );
};

export default Tennis;
