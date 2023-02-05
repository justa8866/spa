import { Backdrop } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomBackdrop = styled(Backdrop)(({ theme }) => ({
  color: "#fff",
  zIndex: theme.zIndex.drawer + 1,
}));

export default CustomBackdrop;
