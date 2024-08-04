import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const PerformanceForm = () => {
  return (
    <Stack spacing={1} mt={1}>
      <TextField
        label="Date"
        name="date"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <TextField label="Title" name="title" />
      <TextField label="Composer" name="composer" />
      <TextField label="Event" name="event" />
      <TextField label="Location" name="location" />
    </Stack>
  );
};

export default PerformanceForm;
