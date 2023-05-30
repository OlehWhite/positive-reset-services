import React, { FC } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { IInputFormField } from '../interfaces';
import { StyledInput } from '../styled';

const NameField: FC<IInputFormField> = ({ register, errors }) => {
  return (
    <StyledInput
      style={errors.Name && { border: '1px solid red' }}
      name="Name"
      register={register}
      registerOptions={
        {
          required: "This field is required",
          pattern: {
            value: /^[A-ZА-ЯҐЄІЇ][a-zA-ZА-Яа-яҐєії]*$/,
            message: 'The first letter must be capitalized. Numbers and special characters are not allowed'
          },
          minLength: {
            value: 3,
            message: 'Minimum number of characters - 3'
          },
          maxLength: {
            value: 255,
            message: 'Maximum number of characters - 255'
          }
        } as RegisterOptions
      }
    />
  );
};

export default NameField;
