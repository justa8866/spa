import React from "react";
import CustomButton from "./CustomButtom.style";

interface Props {
  children: React.ReactNode;
}

const SubmitButton = ({ children }: Props) => {
  return (
    <CustomButton type="submit" variant="contained">
      {children}
    </CustomButton>
  );
};

export default SubmitButton;
