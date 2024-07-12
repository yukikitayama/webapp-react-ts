import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Display from "../components/Display";
import SimpleTable from "../components/SimpleTable";

const columnsLearning = ["Start date", "End date", "Name", "Platform", "Topic"];
const columnsMyPerformance = ["Date", "Piece", "Composer", "Event", "Location"];
const columnsConcert = ["Date", "Name", "Location", "Organization"];

const rowsLearning = [
  {
    id: "0",
    startDate: "2024-05-17",
    endDate: "2024-06-06",
    name: "Music composition 1",
    platform: "Udemy",
    topic: "Music composition",
  },
  {
    id: "1",
    startDate: "2024-06-07",
    endDate: "",
    name: "Music composition 2",
    platform: "Udemy",
    topic: "Music composition",
  },
  {
    id: "2",
    startDate: "2024-07-02",
    endDate: "",
    name: "Music theory",
    platform: "Udemy",
    topic: "Music theory",
  },
];
const rowsMyPerformance = [
  {
    id: "0",
    date: "2024-02-17",
    piece: "Energy Flow",
    composer: "Ryuichi Sakamoto",
    event: "BAMC February 2024",
    location: "Berkeley Piano Club",
  },
  {
    id: "1",
    date: "2024-03-24",
    piece: "Energy Flow",
    composer: "Ryuichi Sakamoto",
    event: "NMSM",
    location: "Unitarian Universalist Church of Palo Alto",
  },
];

const rowsConcert = [
  {
    id: "0",
    date: "2024-06-11",
    name: "Monty Alexander",
    location: "Miner Auditorium",
    organization: "SFJAZZ",
  },
  {
    id: "1",
    date: "2024-05-19",
    name: "J.S. Bach St. John Passion BWV 245",
    location: "Calvary Presbyterian Church",
    organization: "San Francisco Bach Choir",
  },
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
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Display title="Overview">{overview}</Display>
      </Grid>
      <Grid item xs={12} md={7}>
        <Display title="Learning">
          <SimpleTable columns={columnsLearning} rows={rowsLearning} />
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="My performance">
          <SimpleTable
            columns={columnsMyPerformance}
            rows={rowsMyPerformance}
          />
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Concerts">
          <SimpleTable
            columns={columnsConcert}
            rows={rowsConcert}
          />
        </Display>
      </Grid>
    </Grid>
  );
};

export default Music;
