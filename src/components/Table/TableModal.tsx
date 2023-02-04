import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import { DescriptionTable } from "./Table.style";
import { useTableModal } from "../../store/Modal/useModal";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
      <Box sx={style}>
        <Typography id="table-modal-title" variant="h6" component="h2">
          Product
        </Typography>
        <DescriptionTable id="table-modal-description" sx={{ mt: 2 }}>
          id: {id}, name: {name}, year: {year}, color: {color}, pantone_value:{" "}
          {pantone_value}
        </DescriptionTable>
      </Box>
    </Modal>
  );
};

export default TableModal;
