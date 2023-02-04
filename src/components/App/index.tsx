import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Table from "../Table";
import { ModalProvider } from "../../store/Modal";

function App() {
  return (
    <ModalProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Table />
      </Box>
    </ModalProvider>
  );
}

export default App;
