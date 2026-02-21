import React, { FC } from "react";
import { StyledInput } from "@/components/FormFields/styled";

const DateField: FC<any> = ({ register, errors }: any) => {
  return (
    <StyledInput
      type="date"
      style={errors.Date && { border: "1px solid red" }}
      name="Date"
      register={register}
      registerOptions={{
        required: "This field is required",
      }}
    />
  );
};

export default DateField;
