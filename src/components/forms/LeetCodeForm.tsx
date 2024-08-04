import { useState } from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { getLocalDate } from "../../utils/datetime";
import { codingPickedFroms } from "../../parameters/parameters";
import { getAuthToken } from "../../utils/auth";
import { useCustomSelector } from "../../store/hooks";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const InputForm = () => {
  const [level, setLevel] = useState("easy");
  const [language, setLanguage] = useState("python");
  const [pickedFrom, setPickedFrom] = useState("daily-challenge");

  const levelChangeHandler = (event: SelectChangeEvent) => {
    setLevel(event.target.value as string);
  };

  const languageChangeHandler = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  const pickedFromChangeHandler = (event: SelectChangeEvent) => {
    setPickedFrom(event.target.value as string);
  };

  return (
    <Grid container spacing={1}>
      {/* Date */}
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="data" required>
          Date
        </FormLabel>
        <OutlinedInput
          id="date"
          name="date"
          type="date"
          required
          defaultValue={getLocalDate()}
        />
      </FormGrid>
      {/* LeetCode number */}
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="number" required>
          LeetCode number
        </FormLabel>
        <OutlinedInput id="number" name="number" type="text" required />
      </FormGrid>
      {/* Level */}
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="level" required>
          Level
        </FormLabel>
        <Select name="level" value={level} onChange={levelChangeHandler}>
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormGrid>
      {/* Language */}
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="language" required>
          Language
        </FormLabel>
        <Select
          name="language"
          value={language}
          onChange={languageChangeHandler}
        >
          <MenuItem value={"python"}>Python</MenuItem>
          <MenuItem value={"c++"}>C++</MenuItem>
          <MenuItem value={"mysql"}>MySQL</MenuItem>
          <MenuItem value={"postgresql"}>PostgreSQL</MenuItem>
          <MenuItem value={"typescript"}>TypeScript</MenuItem>
        </Select>
      </FormGrid>
      {/* Title */}
      <FormGrid item xs={12}>
        <FormLabel htmlFor="title" required>
          Title
        </FormLabel>
        <OutlinedInput id="title" name="title" type="title" required />
      </FormGrid>
      {/* Topics */}
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="topics" required>
          Topics
        </FormLabel>
        <OutlinedInput id="topics" name="topics" type="text" />
      </FormGrid>
      {/* Picked from */}
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="pickedFrom" required>
          Picked from
        </FormLabel>
        <Select
          name="pickedFrom"
          value={pickedFrom}
          onChange={pickedFromChangeHandler}
        >
          {codingPickedFroms.map((e) => (
            <MenuItem value={e.value} key={e.value}>
              {e.display}
            </MenuItem>
          ))}
        </Select>
      </FormGrid>
      {/* Understanding */}
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="understanding">Understanding</FormLabel>
        <OutlinedInput
          id="understanding"
          name="understanding"
          type="number"
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
        />
      </FormGrid>
      {/* Minute spent */}
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="minuteSpent">Minute spent</FormLabel>
        <OutlinedInput id="minuteSpent" name="minuteSpent" type="number" />
      </FormGrid>
      {/* First time */}
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="firstTime">First time</FormLabel>
        <OutlinedInput id="firstTime" name="firstTime" type="number" />
      </FormGrid>
      {/* Optimized */}
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="optimized">Optimized</FormLabel>
        <OutlinedInput id="optimized" name="optimized" type="number" />
      </FormGrid>
      {/* Saw solution */}
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="sawSolution">Saw solution</FormLabel>
        <OutlinedInput id="sawSolution" name="sawSolution" type="number" />
      </FormGrid>
      {/* Need review */}
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="needReview">Need review</FormLabel>
        <OutlinedInput id="needReview" name="needReview" type="number" />
      </FormGrid>
      {/* No editorial */}
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="noEditorial">No editorial</FormLabel>
        <OutlinedInput id="noEditorial" name="noEditorial" type="number" />
      </FormGrid>
      {/* Good problem */}
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="goodProblem">Good problem</FormLabel>
        <OutlinedInput id="goodProblem" name="goodProblem" type="number" />
      </FormGrid>
      {/* Comment */}
      <FormGrid item xs={12}>
        <FormLabel htmlFor="comment">Comment</FormLabel>
        <OutlinedInput
          id="comment"
          name="comment"
          type="text"
          multiline={true}
        />
      </FormGrid>
      {/* Resource */}
      <FormGrid item xs={12}>
        <FormLabel htmlFor="resource">Resource</FormLabel>
        <OutlinedInput
          id="resource"
          name="resource"
          type="text"
          multiline={true}
        />
      </FormGrid>
    </Grid>
  );
};

export default InputForm;
