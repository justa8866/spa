import { Button, TextField } from "@mui/material";
import React from "react";
import { Field, Form, Formik } from "formik";
import { NumberParam, useQueryParam } from "use-query-params";

interface IFilterInputValues {
  productId: number;
}

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

const InputFilter = () => {
  const onSubmit = (values: IFilterInputValues) => {
    setProductId(values.productId);
  };

  const [productId, setProductId] = useQueryParam("productId", NumberParam);

  return (
    <Formik
      initialValues={{ productId: productId ? productId : 0 }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field as={FilterInput} name="productId" />
        <Button type="submit" variant="contained">
          Filter
        </Button>
      </Form>
    </Formik>
  );
};

export default InputFilter;
