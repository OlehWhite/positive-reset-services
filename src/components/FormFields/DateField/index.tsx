import React, { FC } from 'react';
import { StyledInput } from '../styled';
import { IInputFormField } from '../interfaces';

const DateField: FC<IInputFormField> = ({ register, errors }) => {
  return (
    <StyledInput
      type='date'
      style={errors.Date && { border: '1px solid red' }}
      name="Date"
      register={register}
      registerOptions={{
        required: 'This field is required'
      }}
    />
  );
};

export default DateField;
