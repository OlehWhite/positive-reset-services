import React, { FC } from 'react';
import { StyledInput } from '../styled';
import { IInputFormField } from '../interfaces';

const EmailField: FC<IInputFormField> = ({ register, errors }) => {
  return (
    <StyledInput
      style={errors.Email && { border: '1px solid red' }}
      name="Email"
      register={register}
      registerOptions={{
        required: "This field is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Incorrect email format. Example:Standart@gmail.com'
        }
      }}
    />
  );
};

export default EmailField;
