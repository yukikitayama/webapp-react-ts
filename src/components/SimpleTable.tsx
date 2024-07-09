import { type ReactNode } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type SimpleTableProps = {
  columns: string[];
  rows: any[];
};

const dataToElement = (row: any) => {
  let cells: ReactNode[] = [];
  
  // https://stackoverflow.com/questions/43389414/how-to-iterate-over-keys-of-a-generic-object-in-typescript
  // https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
  let key: keyof any;

  for (key in row) {
    if (key !== "id") {
      const value = row[key];
      cells.push(<TableCell>{value}</TableCell>);
    }
  }

  return <TableRow key={row.id}>{cells}</TableRow>;
};

const SimpleTable = ({ columns, rows }: SimpleTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => dataToElement(row))}
          {/* If not use function, https://mui.com/material-ui/react-table/#basic-table */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
