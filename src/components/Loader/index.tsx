import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

interface ILoader {
  open: boolean;
}

const Loader = ({ open }: ILoader) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
