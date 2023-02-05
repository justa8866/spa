import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useListProductsQuery } from "../../services/Products";
import { Container } from "./Table.style";
import { TablePaginationActionsProps } from "./TablePaginationActionsProps";

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
    <Container>
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
    </Container>
  );
};

export default TablePaginationActions;
