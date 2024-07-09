import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = ["Start date", "End date", "Name", "Platform", "Topic"];

const rows = [
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

const SimpleTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.platform}</TableCell>
              <TableCell>{row.topic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
