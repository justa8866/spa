import React from "react";
import { Modal, Typography } from "@mui/material";
import { useTableModal } from "../../store/Modal/useModal";
import { Container, DescriptionTable } from "./TableModel.style";

const TableModal = () => {
  const { isOpen, handleModal, data } = useTableModal();
  const { id, name, year, color, pantone_value } = data;

  return (
    <Modal
      open={isOpen}
      onClose={() => handleModal(data)}
      aria-labelledby="table-modal-title"
      aria-describedby="table-modal-description"
    >
      <Container>
        <Typography id="table-modal-title" variant="h6" component="h2">
          Product
        </Typography>
        <DescriptionTable id="table-modal-description">
          id: {id}, name: {name}, year: {year}, color: {color}, pantone_value:{" "}
          {pantone_value}
        </DescriptionTable>
      </Container>
    </Modal>
  );
};

export default TableModal;
