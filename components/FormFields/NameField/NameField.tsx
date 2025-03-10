import React, { FC } from "react";
import { RegisterOptions } from "react-hook-form";
import { StyledInput } from "../styled";

const NameField: FC<any> = ({ register, errors }: any) => {
  return (
    <StyledInput
      style={errors.Name && { border: "1px solid red" }}
      name="Name"
      register={register}
      registerOptions={
        {
          required: "This field is required",
          minLength: {
            value: 3,
            message: "Minimum number of characters - 3",
          },
          maxLength: {
            value: 255,
            message: "Maximum number of characters - 255",
          },
        } as RegisterOptions
      }
    />
  );
};

export default NameField;
