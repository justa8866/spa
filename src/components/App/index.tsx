import React, { Suspense } from "react";
import { Container, CssBaseline } from "@mui/material";
import Table from "../Table";
import { ToastContainer } from "react-toastify";
import FullscreenProgress from "../FullscreenProgress";
import InputFilter from "../InputFilter";
import { MainContainer } from "./App.style";

function App() {
  return (
    <Suspense fallback={<FullscreenProgress />}>
      <MainContainer>
        <Container>
          <CssBaseline />
          <InputFilter />
        </Container>
        <Container>
          <CssBaseline />
          <Table />
          <ToastContainer autoClose={3000} />
        </Container>
      </MainContainer>
    </Suspense>
  );
}

export default App;
