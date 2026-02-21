import React, { FC } from "react";
import { StyledInput } from "@/components/FormFields/styled";

const PhoneNumberField: FC<any> = ({ register, errors }: any) => {
  return (
    <StyledInput
      style={errors.Phone && { border: "1px solid red" }}
      name="Phone"
      register={register}
      registerOptions={{
        required: "This field is required",
        pattern: {
          value: /^\d+$/,
          message: "Only numbers are allowed to be entered",
        },
      }}
    />
  );
};

export default PhoneNumberField;
