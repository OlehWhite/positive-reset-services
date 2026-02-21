import React, { FC } from "react";
import { StyledInput } from "@/components/FormFields/styled";

const PositionYouAreApplyingFor: FC<any> = ({ register, errors }: any) => {
  return (
    <StyledInput
      style={errors.Position_You_Are_Applying_For && { border: "1px solid red" }}
      name="Position_You_Are_Applying_For"
      register={register}
      registerOptions={{
        required: "This field is required",
      }}
    />
  );
};

export default PositionYouAreApplyingFor;
