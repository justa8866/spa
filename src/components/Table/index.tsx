import React, { useState } from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

import { MuiTable, CellTable, ColoredTableRow } from "./Table.style";
import TableRow from "@mui/material/TableRow";
import TablePaginationActions from "./TablePaginationActions";
import { IProduct } from "../../services/Products/IProduct";
import { useTableModal } from "../../store/Modal/useModal";
import { useListProductsQuery, rowsPerPage } from "../../services/Products";
import Loader from "../Loader";

export default function Table() {
  const [page, setPage] = useState<number>(0);
  const {
    data: products,
    error,
    isLoading,
    isFetching,
  } = useListProductsQuery(page + 1);

  const { handleModal } = useTableModal();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <>
      <Loader open={isLoading || isFetching} />
      <TableContainer component={Paper}>
        <MuiTable aria-label="Table">
          <TableBody>
            {products?.data.map((product: IProduct) => (
              <ColoredTableRow
                key={product.id}
                color={product.color}
                onClick={() => {
                  handleModal(product);
                }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <CellTable align="right">{product.name}</CellTable>
                <CellTable align="right">{product.year}</CellTable>
              </ColoredTableRow>
            ))}
            <TableRow>
              <TableCell colSpan={6} />
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[rowsPerPage]}
                colSpan={3}
                count={products?.total || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                showFirstButton={false}
                showLastButton={false}
                onPageChange={handleChangePage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </MuiTable>
      </TableContainer>
    </>
  );
}
