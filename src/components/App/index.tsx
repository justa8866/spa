import React, { Suspense } from "react";
import { Box, CssBaseline } from "@mui/material";
import Table from "../Table";
import { ToastContainer } from "react-toastify";
import FullscreenProgress from "../FullscreenProgress";

function App() {
  return (
    <Suspense fallback={<FullscreenProgress />}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Table />
        <ToastContainer autoClose={3000} />
      </Box>
    </Suspense>
  );
}

export default App;
