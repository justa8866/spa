import React, { useState } from "react";

import {
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  Paper,
  TableRow,
} from "@mui/material";

import { MuiTable, CellTable, ColoredTableRow } from "./Table.style";
import { IProduct } from "../../services/Products/IProduct";
import { useTableModal } from "../../store/Modal/useModal";
import {
  useListProductsQuery,
  rowsPerPage,
  useSearchProductsQuery,
} from "../../services/Products";
import Loader from "../Loader";
import TablePaginationActions from "./TablePaginationActions";
import { NumberParam, useQueryParam } from "use-query-params";

const productInit: IProduct = {
  color: "",
  id: 0,
  name: "",
  pantone_value: "",
  year: 0,
};

export default function Table() {
  const [pageNumber, setPageNumber] = useQueryParam("pageNumber", NumberParam);
  const [page, setPage] = useState<number>(pageNumber ? pageNumber : 0);

  const { data: products, isLoading, isFetching } = useListProductsQuery(page + 1);
  const [productId] = useQueryParam("productId", NumberParam);
  const searchProduct = useSearchProductsQuery(productId || 1);

  const isLoaded: boolean =
    isLoading || isFetching || searchProduct.isLoading || searchProduct.isFetching;

  const { handleModal } = useTableModal();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    setPageNumber(newPage);
  };

  const generateTableBody = (product: IProduct) => {
    return (
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
    );
  };

  return (
    <>
      <Loader open={isLoaded} />
      <TableContainer component={Paper}>
        <MuiTable aria-label="Table">
          <TableBody>
            {productId && productId > 0 && searchProduct?.data?.data
              ? generateTableBody(searchProduct?.data?.data || productInit)
              : products?.data.map(generateTableBody)}
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
