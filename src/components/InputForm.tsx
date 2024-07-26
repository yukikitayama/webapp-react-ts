import { useState } from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { codingPickedFroms } from "../parameters/parameters";
import { getLocalDate } from "../utils/datetime";

type InputFormProps = {
  onClose: () => void;
};

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const InputForm = ({ onClose }: InputFormProps) => {
  const [date, setDate] = useState<string>(getLocalDate());
  const [number, setNumber] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [level, setLevel] = useState("easy");
  const [language, setLanguage] = useState("python");
  const [understanding, setUnderstanding] = useState<number | null>(null);
  const [minuteSpent, setMinuteSpent] = useState<number | null>(null);
  const [firstTime, setFirstTime] = useState<number | null>(null);
  const [optimized, setOptimized] = useState<number | null>(null);
  const [sawSolution, setSawSolution] = useState<number | null>(null);
  const [needReview, setNeedReview] = useState<number | null>(null);
  const [noEditorial, setNoEditorial] = useState<number | null>(null);
  const [goodProblem, setGoodProblem] = useState<number | null>(null);
  const [topics, setTopics] = useState<string | null>(null);
  const [pickedFrom, setPickedFrom] = useState("daily-challenge");
  const [comment, setComment] = useState<string | null>(null);
  const [resource, setResource] = useState<string | null>(null);

  const submitHandler = async () => {
    const body = JSON.stringify({
      date: date,
      number: number,
      level: level,
      language: language,
      title: title,
      topics: topics,
      pickedFrom: pickedFrom,
      understanding: understanding,
      minuteSpent: minuteSpent,
      firstTime: firstTime,
      optimized: optimized,
      sawSolution: sawSolution,
      needReview: needReview,
      noEditorial: noEditorial,
      goodProblem: goodProblem,
      comment: comment,
      resource: resource,
    });

    // console.log(body);

    try {
      const response = await fetch("http://localhost:8080/coding/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      const json = await response.json();
      console.log(json);
    } catch (e) {
      console.log(e);
    }

    onClose();
  };

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
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="date" required>
          Date
        </FormLabel>
        <OutlinedInput
          id="date"
          name="date"
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="number" required>
          LeetCode number
        </FormLabel>
        <OutlinedInput
          id="number"
          name="number"
          type="text"
          required
          value={number || ""}
          onChange={(e) => setNumber(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="level" required>
          Level
        </FormLabel>
        <Select value={level} onChange={levelChangeHandler}>
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="language" required>
          Language
        </FormLabel>
        <Select value={language} onChange={languageChangeHandler}>
          <MenuItem value={"python"}>Python</MenuItem>
          <MenuItem value={"c++"}>C++</MenuItem>
          <MenuItem value={"mysql"}>MySQL</MenuItem>
          <MenuItem value={"postgresql"}>PostgreSQL</MenuItem>
          <MenuItem value={"typescript"}>TypeScript</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="title" required>
          Title
        </FormLabel>
        <OutlinedInput
          id="title"
          name="title"
          type="title"
          required
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="topics" required>
          Topics
        </FormLabel>
        <OutlinedInput
          id="topics"
          name="topics"
          type="text"
          value={topics || ""}
          required
          onChange={(e) => setTopics(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="pickedFrom" required>
          Picked from
        </FormLabel>
        <Select value={pickedFrom} onChange={pickedFromChangeHandler}>
          {codingPickedFroms.map((e) => (
            <MenuItem value={e.value} key={e.value}>
              {e.display}
            </MenuItem>
          ))}
        </Select>
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="understanding">Understanding</FormLabel>
        <OutlinedInput
          id="understanding"
          name="understanding"
          type="number"
          value={understanding === 0 ? 0 : understanding || ""}
          onChange={(e) => setUnderstanding(+e.target.value)}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="minuteSpent">Minute spent</FormLabel>
        <OutlinedInput
          id="minuteSpent"
          name="minuteSpent"
          type="number"
          value={minuteSpent === 0 ? 0 : minuteSpent || ""}
          onChange={(e) => setMinuteSpent(+e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="firstTime">First time</FormLabel>
        <OutlinedInput
          id="firstTime"
          name="firstTime"
          type="number"
          value={firstTime === 0 ? 0 : firstTime || ""}
          onChange={(e) => setFirstTime(+e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="optimized">Optimized</FormLabel>
        <OutlinedInput
          id="optimized"
          name="optimized"
          type="number"
          value={optimized === 0 ? 0 : optimized || ""}
          onChange={(e) => setOptimized(+e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="sawSolution">Saw solution</FormLabel>
        <OutlinedInput
          id="sawSolution"
          name="sawSolution"
          type="number"
          value={sawSolution === 0 ? 0 : sawSolution || ""}
          onChange={(e) => setSawSolution(+e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="needReview">Need review</FormLabel>
        <OutlinedInput
          id="needReview"
          name="needReview"
          type="number"
          value={needReview === 0 ? 0 : needReview || ""}
          onChange={(e) => setNeedReview(+e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="noEditorial">No editorial</FormLabel>
        <OutlinedInput
          id="noEditorial"
          name="noEditorial"
          type="number"
          value={noEditorial === 0 ? 0 : noEditorial || ""}
          onChange={(e) => setNoEditorial(+e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12} md={3}>
        <FormLabel htmlFor="goodProblem">Good problem</FormLabel>
        <OutlinedInput
          id="goodProblem"
          name="goodProblem"
          type="number"
          value={goodProblem === 0 ? 0 : goodProblem || ""}
          onChange={(e) => setGoodProblem(+e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="comment">Comment</FormLabel>
        <OutlinedInput
          id="comment"
          name="comment"
          type="text"
          value={comment || ""}
          onChange={(e) => setComment(e.target.value)}
          multiline={true}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="resource">Resource</FormLabel>
        <OutlinedInput
          id="resource"
          name="resource"
          type="text"
          value={resource || ""}
          onChange={(e) => setResource(e.target.value)}
          multiline={true}
        />
      </FormGrid>
      {/* Actions */}
      <FormGrid item xs={12} md={6}>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <Button variant="contained" onClick={submitHandler}>
          Add
        </Button>
      </FormGrid>
    </Grid>
  );
};

export default InputForm;
