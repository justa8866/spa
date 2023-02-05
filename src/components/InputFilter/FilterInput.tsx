import { TextField } from "@mui/material";

const FilterInput = ({ ...props }) => {
  return (
    <TextField
      id="filter-input"
      label="Filter"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0 } }}
      {...props}
    />
  );
};

export default FilterInput;
