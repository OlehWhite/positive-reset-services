import React, { FC } from 'react';
import { StyledInput } from '../styled';
import { IInputFormField } from '../interfaces';

const PreferredDataAndTimeField: FC<IInputFormField> = ({ register, errors }) => {
  return <StyledInput name="Preferred_Data_And_Time" register={register} registerOptions={{ required: '' }} />;
};

export default PreferredDataAndTimeField;
