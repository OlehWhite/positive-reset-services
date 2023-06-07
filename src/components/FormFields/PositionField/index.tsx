import React, { FC } from 'react';
import { StyledInput } from '../styled';
import { IInputFormField } from '../interfaces';

const PositionYouAreApplyingFor: FC<IInputFormField> = ({ register, errors }) => {
  return (
    <StyledInput
      style={errors.Position_You_Are_Applying_For && { border: '1px solid red' }}
      name="Position_You_Are_Applying_For"
      register={register}
      registerOptions={{
        required: 'This field is required'
      }}
    />
  );
};

export default PositionYouAreApplyingFor;
