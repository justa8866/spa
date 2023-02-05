import { Table, TableCell, TableRow, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MuiTable = styled(Table)({
  minWidth: 500,
});

export const CellTable = styled(TableCell)({
  width: "160px",
});

export const ColoredTableRow = styled(TableRow)((props) => ({
  backgroundColor: props.color,
}));

export const Container = styled(Box)({
  marginLeft: "10px",
  flexShrink: 0,
});
