import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { GridColDef } from "@mui/x-data-grid";

import Display from "../components/Display";
import Dataframe from "../components/Dataframe";

type Log = {
  _id: string;
  date: string;
  number: string;
  level: string;
  language: string;
  topics: string;
  pickedFrom: string;
  understanding: number;
  minuteSpent: number;
  firstTime: number;
  optimized: number;
  sawSolution: number;
  noEditorial: number;
  goodProblem: number;
  comment: string;
  resource: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// https://stackoverflow.com/questions/59541521/whats-the-meaning-of-typeof-arraynumber-in-typescript
// const columns: GridColDef<(typeof rows)[number]>[] = [
const columns: GridColDef<Log>[] = [
    // { field: "id", headerName: "ID" },
  { field: "number", headerName: "Number", type: "number" },
  { field: "title", headerName: "Title", width: 200 },
  { field: "date", headerName: "Date" },
  { field: "level", headerName: "Level" },
  { field: "language", headerName: "Language" },
  { field: "understanding", headerName: "Understanding", type: "number" },
  { field: "minuteSpent", headerName: "Minute spent", type: "number" },
  { field: "firstTime", headerName: "First time", type: "number" },
  { field: "optimized", headerName: "Optimized", type: "number" },
  { field: "sawSolution", headerName: "Saw solution", type: "number" },
  { field: "needReview", headerName: "Need review", type: "number" },
  { field: "topics", headerName: "Topics", width: 150 },
  { field: "pickedFrom", headerName: "Picked from", width: 150 },
  { field: "noEditorial", headerName: "No editorial", type: "number" },
  { field: "comment", headerName: "Comment", width: 200 },
  { field: "goodProblem", headerName: "Good problem", type: "number" },
  { field: "resource", headerName: "Resource" },
];

const Coding = () => {
  const [open, setOpen] = useState(false);
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/coding/logs`);
      const data = await res.json();
      const fetchedLogs = data.logs.map((log: Log) => ({...log, id: log._id}));
      setLogs(fetchedLogs);
    };

    getData();
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  const openHandler = (res: boolean) => {
    setOpen(res);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Display title="LeetCode" addButton={true} formType="leetcode">
          <Dataframe rows={logs} columns={columns} height={500} />
        </Display>
      </Grid>
    </Grid>
  );
};

export default Coding;
