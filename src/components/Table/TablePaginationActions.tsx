import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useListProductsQuery } from "../../services/Products";

interface TablePaginationActionsProps {
  page: number;
  count: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

const TablePaginationActions = (props: TablePaginationActionsProps) => {
  const { page, count, rowsPerPage, onPageChange } = props;
  const { isLoading, isFetching } = useListProductsQuery(page + 1);

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0 || isLoading || isFetching}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={
          page >= Math.ceil(count / rowsPerPage) - 1 || isLoading || isFetching
        }
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default TablePaginationActions;
