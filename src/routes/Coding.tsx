import Grid from "@mui/material/Grid";
import { GridColDef } from "@mui/x-data-grid";

import Display from "../components/Display";
import Dataframe from "../components/Dataframe";

// https://stackoverflow.com/questions/59541521/whats-the-meaning-of-typeof-arraynumber-in-typescript
const columns: GridColDef<(typeof rows)[number]>[] = [
  // { field: "id", headerName: "ID" },
  { field: "leetcodeNumber", headerName: "Number", type: "number" },
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

const rows = [
  {
    id: 1,
    leetcodeNumber: 1598,
    title: "Crawler Log Folder",
    date: "2024-07-10",
    understanding: 1,
    minuteSpent: 4,
    firstTime: 1,
    optimized: 0,
    sawSolution: 0,
    needReview: 1,
    topics: "stack, balance",
    level: "easy",
    language: "python",
    pickedFrom: "daily challenge",
    noEditorial: 0,
    comment: "",
    goodProblem: null,
    resource: null,
  },
  {
    id: 2,
    leetcodeNumber: 1598,
    title: "Crawler Log Folder",
    date: "2024-07-10",
    understanding: 1,
    minuteSpent: null,
    firstTime: 0,
    optimized: 1,
    sawSolution: 0,
    needReview: 1,
    topics: "stack, balance",
    level: "easy",
    language: "c++",
    pickedFrom: "daily challenge",
    noEditorial: 0,
    comment: "",
    goodProblem: null,
    resource: null,
  },
];

const Coding = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Display title="LeetCode">
          <Dataframe rows={rows} columns={columns} height={500} />
        </Display>
      </Grid>
    </Grid>
  );
};

export default Coding;
