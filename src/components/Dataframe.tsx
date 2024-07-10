import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { dataframePageSizeOptions } from "../parameters/parameters";

type DataframeProps = {
  rows: any[];
  columns: any[];
  height: number;
};

const initialState = {
  pagination: {
    paginationModel: {
      pageSize: 10,
    },
  },
};

const Dataframe = ({ rows, columns, height }: DataframeProps) => {
  return (
    <Box sx={{ height: height, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={initialState}
        pageSizeOptions={dataframePageSizeOptions}
      />
    </Box>
  );
};

export default Dataframe;
