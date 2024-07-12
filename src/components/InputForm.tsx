import { useState } from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type InputFormProps = {
  onClose: () => void;
}

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const InputForm = ({ onClose }: InputFormProps) => {
  const [date, setDate] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [title, setTitle] = useState<string>("");
  const [level, setLevel] = useState("easy");
  const [language, setLanguage] = useState("python");

  const submitHandler = () => {
    console.log(date, title, level, language);
    onClose();
  };

  const levelChangeHandler = (event: SelectChangeEvent) => {
    setLevel(event.target.value as string);
  };

  const languageChangeHandler = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
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
      <FormGrid item xs={12}>
        <FormLabel htmlFor="title" required>
          Title
        </FormLabel>
        <OutlinedInput
          id="title"
          name="title"
          type="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="level" required>
          Level
        </FormLabel>
        <Select value={level} onChange={levelChangeHandler}>
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormGrid>
      <FormGrid item xs={12}>
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
