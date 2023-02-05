import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#fff",
  border: "2px solid #000",
  padding: 4,
});

export const DescriptionTable = styled(Typography)({
  width: "160px",
  marginTop: "2px",
});
