import React from "react";
import { CircularProgress } from "@mui/material";
import CustomBackdrop from "./Loader.style";

interface ILoader {
  open: boolean;
}

const Loader = ({ open }: ILoader) => {
  return (
    <CustomBackdrop open={open}>
      <CircularProgress color="inherit" />
    </CustomBackdrop>
  );
};

export default Loader;
