import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Display from "../components/Display";
import SimpleTable from "../components/SimpleTable";

type Performance = {
  _id: string;
  date: string;
  title: string;
  composer: string;
  event: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const columnsLearning = ["Start date", "End date", "Name", "Platform", "Topic"];
const columnsMyPerformance = ["Date", "Title", "Composer", "Event", "Location"];
const columnsConcert = ["Date", "Name", "Location", "Organization"];
const columnsPractice = ["Start date", "end date", "Title", "Composer"];

const rowsLearning = [
  {
    _id: "0",
    startDate: "2024-05-17",
    endDate: "2024-06-06",
    name: "Music composition 1",
    platform: "Udemy",
    topic: "Music composition",
  },
  {
    _id: "1",
    startDate: "2024-06-07",
    endDate: "",
    name: "Music composition 2",
    platform: "Udemy",
    topic: "Music composition",
  },
  {
    _id: "2",
    startDate: "2024-07-02",
    endDate: "",
    name: "Music theory",
    platform: "Udemy",
    topic: "Music theory",
  },
];

const rowsConcert = [
  {
    _id: "0",
    date: "2024-06-11",
    name: "Monty Alexander",
    location: "Miner Auditorium",
    organization: "SFJAZZ",
  },
  {
    _id: "1",
    date: "2024-05-19",
    name: "J.S. Bach St. John Passion BWV 245",
    location: "Calvary Presbyterian Church",
    organization: "San Francisco Bach Choir",
  },
];

const rowsPractice = [
  {
    _id: "0",
    startDate: "2024-03-14",
    endDate: "2024-06-22",
    title: "River Flows in You",
    composer: "Yiruma"
  },
  {
    _id: "1",
    startDate: "2024-03-16",
    endDate: "",
    title: "Kiss the Rain",
    composer: "Yiruma"
  }
];

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
  const [performances, setPerformances] = useState<Performance[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/music/performances`
      );
      const data = await res.json();
      const fetchedData = data.performances.map((performance: Performance) => ({
        _id: performance._id,
        date: performance.date,
        title: performance.title,
        composer: performance.composer,
        event: performance.event,
        location: performance.location,
      }));
      setPerformances(fetchedData);
    };

    getData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Display title="Overview">{overview}</Display>
      </Grid>
      <Grid item xs={12} md={7}>
        <Display title="Learning">
          <SimpleTable columns={columnsLearning} rows={rowsLearning} />
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="My performance" addButton={true} formType="performance">
          <SimpleTable columns={columnsMyPerformance} rows={performances} />
        </Display>
      </Grid>
      <Grid item xs={12} md={6}>
        <Display title="Concerts">
          <SimpleTable columns={columnsConcert} rows={rowsConcert} />
        </Display>
      </Grid>
      <Grid item xs={12} md={6}>
        <Display title="Practice">
          <SimpleTable columns={columnsPractice} rows={rowsPractice} />
        </Display>
      </Grid>
    </Grid>
  );
};

export default Music;
