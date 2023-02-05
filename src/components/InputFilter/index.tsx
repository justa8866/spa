import React from "react";
import { Field, Formik } from "formik";
import { NumberParam, useQueryParam } from "use-query-params";
import FilterInput from "./FilterInput";
import SubmitButton from "../SubmitButton";
import InputFilterBox from "./InputFilterBox.style";
import { IFilterInputValues } from "./IFilterInputValues";

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
      <InputFilterBox>
        <Field as={FilterInput} name="productId" />
        <SubmitButton>Filter</SubmitButton>
      </InputFilterBox>
    </Formik>
  );
};

export default InputFilter;
