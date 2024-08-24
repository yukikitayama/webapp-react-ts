import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import Display from "../components/Display";
import SimpleTable from "../components/SimpleTable";

type Learning = {
  _id: string;
  startDate: string;
  endDate: string;
  name: string;
  platform: string;
  topic: string;
};

type Performance = {
  _id: string;
  date: string;
  title: string;
  composer: string;
  event: string;
  location: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

type Concert = {
  _id: string;
  date: string;
  event: string;
  artist: string;
  organization: string;
  location: string;
};

type Practice = {
  _id: string;
  startDate: string;
  endDate: string;
  title: string;
  composer: string;
};

const columnsLearning = ["Start date", "End date", "Name", "Platform", "Topic"];
const columnsMyPerformance = ["Date", "Title", "Composer", "Event", "Location"];
const columnsConcert = ["Date", "Event", "Artist", "Organization", "Location"];
const columnsPractice = ["Start date", "end date", "Title", "Composer"];

const overview = (
  <Typography component="div">
    <ul>
      <li>
        Learn music composition
        <ul>
          <li>
            Udemy <b>Music Composition 1</b>
          </li>
          <li>
            Udemy <b>Music Composition 2</b>
          </li>
          <li>
            Udemy <b>Music Theory</b>
          </li>
        </ul>
      </li>
      <li>
        Have more repertoire to play
        <ul>
          <li>Joe Hisaishi</li>
          <li>Ryuichi Sakamoto</li>
          <li>Yiruma</li>
          <li>Yuhki Kutamoto</li>
        </ul>
      </li>
      <li>
        Compose music pieces less than 1 minute and upload to <b>Short</b>
        <ul>
          <li>Short No. X</li>
        </ul>
      </li>
    </ul>
  </Typography>
);

const Music = () => {
  const [learnings, setLearnings] = useState<Learning[]>([]);
  const [performances, setPerformances] = useState<Performance[]>([]);
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [practices, setPractices] = useState<Practice[]>([]);
  const [isLearningLoading, setIsLearningLoading] = useState<boolean>(false);
  const [isPerformanceLoading, setIsPerformanceLoading] =
    useState<boolean>(false);
  const [isConertLoading, setIsConertLoading] = useState<boolean>(false);
  const [isPracticeLoading, setIsPracticeLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (
      url: string,
      stateFunction: (data: any) => void,
      key: string,
      loadingFunction: (flag: boolean) => void
    ) => {
      loadingFunction(true);

      const res = await fetch(url);
      const data = await res.json();
      // Exclude unnecessary columns in API response
      const tableData = data[key].map((element: any) => {
        const {createdAt, updatedAt, __v, ...rest} = element;
        return rest;
      })
      
      loadingFunction(false);
      stateFunction(tableData);
    };

    getData(
      `${process.env.REACT_APP_API_URL}/music/learnings`,
      setLearnings,
      "learnings",
      setIsLearningLoading
    );

    getData(
      `${process.env.REACT_APP_API_URL}/music/performances`,
      setPerformances,
      "performances",
      setIsPerformanceLoading
    );

    getData(
      `${process.env.REACT_APP_API_URL}/music/concerts`,
      setConcerts,
      "concerts",
      setIsConertLoading
    );

    getData(
      `${process.env.REACT_APP_API_URL}/music/practices`,
      setPractices,
      "practices",
      setIsPracticeLoading
    );
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Display title="Overview">{overview}</Display>
      </Grid>
      <Grid item xs={12} md={7}>
        <Display title="Learning">
          {!isLearningLoading && (
            <SimpleTable columns={columnsLearning} rows={learnings} />
          )}
          {isLearningLoading && <CircularProgress />}
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="My performance" addButton={true} formType="performance">
          {!isPerformanceLoading && (
            <SimpleTable columns={columnsMyPerformance} rows={performances} />
          )}
          {isPerformanceLoading && <CircularProgress />}
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Concerts">
          {!isConertLoading && (
            <SimpleTable columns={columnsConcert} rows={concerts} />
          )}
          {isConertLoading && <CircularProgress />}
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Practice">
          {!isPracticeLoading && (
            <SimpleTable columns={columnsPractice} rows={practices} />
          )}
          {isPracticeLoading && <CircularProgress />}
        </Display>
      </Grid>
    </Grid>
  );
};

export default Music;
