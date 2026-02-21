import React, { FC } from "react";
import { StyledInput } from "@/components/FormFields/styled";

const EmailField: FC<any> = ({ register, errors }: any) => {
  return (
    <StyledInput
      style={errors.Email && { border: "1px solid red" }}
      name="Email"
      register={register}
      registerOptions={{
        required: "This field is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Incorrect email format. Example: example@gmail.com",
        },
      }}
    />
  );
};

export default EmailField;
