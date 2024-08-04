import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import Display from "../components/Display";
import SimpleTable from "../components/SimpleTable";

const columnsCertification = ["Date", "Name", "Organization", "Skill"];
const columnsLearning = ["Start date", "End date", "Name", "Platform", "Topic"];

const rowsCertification = [
  {
    id: "0",
    date: "2024-01-12",
    name: "Certified Kubernetes Application Developer",
    organization: "The Cloud Native Computing Foundation",
    skill: "Kubernetes, Docker",
  },
  {
    id: "1",
    date: "2024-03-08",
    name: "C++ Certified Entry-Level Programmer CPE",
    organization: "C++ Institute",
    skill: "C++",
  },
];

const rowsLearning = [
  {
    id: "0",
    startDate: "2024-07-02",
    endDate: "",
    name: "React & TypeScript - The Practical Guide",
    platform: "Udemy",
    topic: "React, TypeScript"
  },
  {
    id: "1",
    startDate: "2024-04-24",
    endDate: "",
    name: "Beginning C++ Programming - From Beginner to Beyond",
    platform: "Udemy",
    topic: "C++"
  },
];

const overview = (
  <Typography component="div">
    <ul>
      <li>Coding
        <ul>
          <li>Solve LeetCode <b>Daily Challenges</b></li>
          <li>Solve LeetCode <b>1 hard problem per day</b></li>
          <li>Join LeetCode <b>Contest</b> unless the schedule is blocked</li>
          <li>Weekly peer coding
            <ul>
              <li>Satoshi</li>
              <li>Toshiya</li>
            </ul>
          </li>
          <li>Complete Udemy <b>Beginning C++ Programming - From Beginner to Beyond</b></li>
          <li>Maintain <b>JavaScript/TypeScript</b> skill
            <ul>
              <li>Complete LeetCode <b>30 Days of JavaScript</b></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Data engineering
        <ul>
          <li>Read <b>Designing Data-Intensive Applications</b></li>
        </ul>
      </li>
      <li>Georgia Tech courses
        <ul>
          <li>Get <b>grade A</b> from Machine Learning for Trading</li>
          <li>Review Reinforcement Learning for Decision Making for <b>retake</b></li>
        </ul>
      </li>
      <li>Web application</li>
      <li>Statistics and ML
        <ul>
          <li>Coursera <b>Machine Learning Specialization</b></li>
        </ul>
      </li>
      <li>System design
        <ul>
          <li>Read <b>System Design Interview by Alex Xu</b></li>
        </ul>
      </li>
    </ul>
  </Typography>
);

const project = (
  <Typography component="div">
    <ul>
      <li>React/TypeScript dashboard</li>
    </ul>
  </Typography>
);

const Work = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Display title="Overview">{overview}</Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Learning">
          <SimpleTable columns={columnsLearning} rows={rowsLearning} />
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Certification">
          <SimpleTable columns={columnsCertification} rows={rowsCertification} />
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Project">{project}</Display>
      </Grid>
    </Grid>
  );
};

export default Work;
