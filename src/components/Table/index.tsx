import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

import { MuiTable, CellTable, ColoredTableRow } from "./Table.style";
import TableRow from "@mui/material/TableRow";
import TablePaginationActions from "./TablePaginationActions";
import { IProduct } from "./IProduct";
import { IProductsDataResponse } from "./IProductsDataResponse";
import { useTableModal } from "../../store/Modal/useModal";

export default function CustomPaginationActionsTable() {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [total, setTotal] = useState<number>(0);
  const [rows, setRows] = useState<IProduct[]>([]);

  const { handleModal } = useTableModal();

  const apiCallback = useCallback(async () => {
    try {
      const res = await axios.get<IProductsDataResponse>(
        `https://reqres.in/api/products?per_page=${rowsPerPage}`
      );

      if (!res.data) {
        return;
      }

      const { page, total, data } = res.data;

      setPage(page);
      setTotal(total);
      setRows(data);

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [rows]);

  useEffect(() => {
    apiCallback();
  }, []);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable aria-label="Table">
          <TableBody>
            {rows.map((row) => (
              <ColoredTableRow
                key={row.id}
                color={row.color}
                onClick={() => {
                  handleModal(row);
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <CellTable align="right">{row.name}</CellTable>
                <CellTable align="right">{row.year}</CellTable>
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
                count={total}
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
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </MuiTable>
      </TableContainer>
    </>
  );
}
