import { Table, TableCell, TableRow, Typography } from "@mui/material";
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

export const DescriptionTable = styled(Typography)({
  width: "160px",
});
