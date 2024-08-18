import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import Display from "../components/Display";
import SimpleTable from "../components/SimpleTable";

type Certification = {
  _id: string;
  date: string;
  name: string;
  organization: string;
  skill: string;
};

type Learning = {
  _id: string;
  startDate: string;
  endDate: string;
  name: string;
  platform: string;
  topic: string;
};

type Project = {
  _id: string;
  startDate: string;
  endDate: string;
  name: string;
  skill: string;
};

const columnsCertification = ["Date", "Name", "Organization", "Skill"];
const columnsLearning = ["Start date", "End date", "Name", "Platform", "Topic"];
const columnsProject = ["Start date", "End date", "Name", "Skill"];

const overview = (
  <Typography component="div">
    <ul>
      <li>
        Coding
        <ul>
          <li>
            Solve LeetCode <b>Daily Challenges</b>
          </li>
          <li>
            Solve LeetCode <b>1 hard problem per day</b>
          </li>
          <li>
            Join LeetCode <b>Contest</b> unless the schedule is blocked
          </li>
          <li>
            Weekly peer coding
            <ul>
              <li>Satoshi</li>
              <li>Toshiya</li>
            </ul>
          </li>
          <li>
            Complete Udemy{" "}
            <b>Beginning C++ Programming - From Beginner to Beyond</b>
          </li>
          <li>
            Maintain <b>JavaScript/TypeScript</b> skill
            <ul>
              <li>
                Complete LeetCode <b>30 Days of JavaScript</b>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Data engineering
        <ul>
          <li>
            Read <b>Designing Data-Intensive Applications</b>
          </li>
        </ul>
      </li>
      <li>
        Georgia Tech courses
        <ul>
          <li>
            Get <b>grade A</b> from Machine Learning for Trading
          </li>
          <li>
            Review Reinforcement Learning for Decision Making for <b>retake</b>
          </li>
        </ul>
      </li>
      <li>Web application</li>
      <li>
        Statistics and ML
        <ul>
          <li>
            Coursera <b>Machine Learning Specialization</b>
          </li>
        </ul>
      </li>
      <li>
        System design
        <ul>
          <li>
            Read <b>System Design Interview by Alex Xu</b>
          </li>
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
  const [rowsLearning, setRowsLearning] = useState<Learning[]>([]);
  const [rowsCertification, setRowsCertification] = useState<Certification[]>(
    []
  );
  const [rowsProject, setRowsProject] = useState<Project[]>([]);
  const [isLearningLoading, setIsLearningLoading] = useState<boolean>(false);
  const [isCertificationLoading, setIsCertificationLoading] =
    useState<boolean>(false);
  const [isProjectLoading, setIsProjectLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (
      url: string,
      stateFunction: (data: any) => void,
      key: string
    ) => {
      const res = await fetch(url);
      const data = await res.json();
      stateFunction(data[key]);
    };

    setIsLearningLoading(true);
    getData(
      `${process.env.REACT_APP_API_URL}/work/learnings`,
      setRowsLearning,
      "learnings"
    );
    setIsLearningLoading(false);

    setIsCertificationLoading(true);
    getData(
      `${process.env.REACT_APP_API_URL}/work/certifications`,
      setRowsCertification,
      "certifications"
    );
    setIsCertificationLoading(false);

    setIsProjectLoading(true);
    getData(
      `${process.env.REACT_APP_API_URL}/work/projects`,
      setRowsProject,
      "projects"
    );
    setIsProjectLoading(false);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Display title="Overview">{overview}</Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Learning">
          {!isLearningLoading && (
            <SimpleTable columns={columnsLearning} rows={rowsLearning} />
          )}
          {isLearningLoading && <CircularProgress />}
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Certification">
          {!isCertificationLoading && (
            <SimpleTable
              columns={columnsCertification}
              rows={rowsCertification}
            />
          )}
          {isCertificationLoading && <CircularProgress />}
        </Display>
      </Grid>
      <Grid item xs={12}>
        <Display title="Project">
          {!isProjectLoading && (
            <SimpleTable columns={columnsProject} rows={rowsProject} />
          )}
          {isProjectLoading && <CircularProgress />}
        </Display>
      </Grid>
    </Grid>
  );
};

export default Work;
