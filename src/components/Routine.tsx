import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { lightBlue } from "../utils/style";

function createData(
  startTime: string,
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
  sunday: string
) {
  return {
    startTime,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  };
}

const rows = [
  createData("05:00", "", "", "", "", "", "", ""),
  createData("05:30", "Shower", "Shower", "Shower", "Shower", "Shower", "", ""),
  createData(
    "06:00",
    "LeetCode",
    "LeetCode",
    "LeetCode",
    "LeetCode",
    "LeetCode",
    "",
    ""
  ),
  createData(
    "06:30",
    "LeetCode",
    "LeetCode",
    "LeetCode",
    "LeetCode",
    "LeetCode",
    "",
    ""
  ),
  createData(
    "07:00",
    "Data engineer",
    "Data engineer",
    "Data engineer",
    "Data engineer",
    "Data engineer",
    "",
    ""
  ),
  createData(
    "07:30",
    "Breakfast",
    "Breakfast",
    "Breakfast",
    "Breakfast",
    "Breakfast",
    "",
    ""
  ),
  createData("08:00", "", "", "", "", "", "", ""),
  createData("08:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("09:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("10:00", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("10:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("11:00", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("11:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("12:00", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("12:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("13:00", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("13:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("14:00", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("14:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("15:00", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("15:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("16:00", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("16:30", "Work", "Work", "Work", "Work", "Work", "", ""),
  createData("17:00", "", "Work", "Work", "", "", "", ""),
  createData("17:30", "", "", "Work", "LeetCode", "LeetCode", "", ""),
  createData(
    "18:00",
    "Tennis",
    "",
    "Work",
    "Georgia Tech",
    "Georgia Tech",
    "",
    ""
  ),
  createData("18:30", "Tennis", "Gym", "", "Gym", "Gym", "", ""),
  createData("19:00", "Tennis", "Dinner", "Dinner", "Dinner", "Dinner", "", ""),
  createData("19:30", "", "Dinner", "Dinner", "Dinner", "Dinner", "", ""),
  createData("20:00", "Shower", "Piano", "Piano", "Piano", "Piano", "", ""),
  createData(
    "20:30",
    "Dinner",
    "C++, Music theory",
    "C++, Music theory",
    "C++, Music theory",
    "C++, Music theory",
    "",
    ""
  ),
  createData(
    "21:00",
    "Go to bed",
    "Go to bed",
    "Go to bed",
    "Go to bed",
    "Go to bed",
    "",
    ""
  ),
  createData("21:30", "", "", "", "", "", "", ""),
  createData("22:00", "", "", "", "", "", "", ""),
];

const nonFreeTime = ["Shower", "Breakfast", "Dinner", "Go to bed", "Work", ""];

const Routine = () => {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Start time</TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
            <TableCell>Saturday</TableCell>
            <TableCell>Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.startTime}>
              <TableCell>{row.startTime}</TableCell>
              <TableCell
                sx={{
                  backgroundColor: !nonFreeTime.includes(row.monday)
                    ? lightBlue
                    : "",
                }}
              >
                {row.monday}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: !nonFreeTime.includes(row.tuesday)
                    ? lightBlue
                    : "",
                }}
              >
                {row.tuesday}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: !nonFreeTime.includes(row.wednesday)
                    ? lightBlue
                    : "",
                }}
              >
                {row.wednesday}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: !nonFreeTime.includes(row.thursday)
                    ? lightBlue
                    : "",
                }}
              >
                {row.thursday}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: !nonFreeTime.includes(row.friday)
                    ? lightBlue
                    : "",
                }}
              >
                {row.friday}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: !nonFreeTime.includes(row.saturday)
                    ? lightBlue
                    : "",
                }}
              >
                {row.saturday}
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: !nonFreeTime.includes(row.sunday)
                    ? lightBlue
                    : "",
                }}
              >
                {row.sunday}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Routine;
