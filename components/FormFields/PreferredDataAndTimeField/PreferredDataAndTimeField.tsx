import React from "react";
import { StyledInput } from "@/components/FormFields/styled";

const PreferredDataAndTimeField = ({ register }: any) => {
  return (
    <StyledInput
      name="Preferred_Data_And_Time"
      register={register}
      registerOptions={{ required: "" }}
    />
  );
};

export default PreferredDataAndTimeField;
