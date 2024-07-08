import React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CommonList = ({ rows, columns, onRowClick }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableColumnMenu
        onRowClick={onRowClick}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f2f2f2",
          },
          "& .MuiDataGrid-cell": {
            textAlign: "center",
          },
        }}
      />
    </Box>
  );
};

export default CommonList;