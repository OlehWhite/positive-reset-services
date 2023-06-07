import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { PRIVATE_DATA } from '../../privateData';
import {
  ButtonSubmit,
  InputWrapper,
  Label,
  StyledForm,
  Success,
  Title
} from '../../careerOpportunities/styled';
import NameField from 'components/FormFields/NameField';
import ErrorValidation from 'components/ErrorValidation';
import PhoneNumberField from 'components/FormFields/PhoneNumberField';
import EmailField from 'components/FormFields/EmailField';
import PositionYouAreApplyingFor from 'components/FormFields/PositionField';
import DateField from 'components/FormFields/DateField';
import React from 'react';

export const PersonalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      Name: '',
      Phone: '',
      Email: '',
      Position_You_Are_Applying_For: '',
      Date: ''
    }
  });
  const [state, stateSubmit] = useFormspree(`${PRIVATE_DATA.keyID}`);

  const onSubmit = async (data: any) => {
    await stateSubmit(data);
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title>PERSONAL INFORMATION</Title>
        <InputWrapper>
          <Label>Your Name</Label>
          <NameField register={register} errors={errors} />
          <ErrorValidation errors={errors.Name} />
        </InputWrapper>
        <InputWrapper>
          <Label>Phone number</Label>
          <PhoneNumberField register={register} errors={errors} />
          <ErrorValidation errors={errors.Phone} />
        </InputWrapper>
        <InputWrapper>
          <Label>Email address</Label>
          <EmailField register={register} errors={errors} />
          <ErrorValidation errors={errors.Email} />
        </InputWrapper>
        <Title>POSITION</Title>
        <InputWrapper>
          <Label>Position you are applying for</Label>
          <PositionYouAreApplyingFor register={register} errors={errors} />
          <ErrorValidation errors={errors.Position_You_Are_Applying_For} />
        </InputWrapper>
        <InputWrapper>
          <Label>Available start date</Label>
          <DateField register={register} errors={errors} />
          <ErrorValidation errors={errors.Date} />
        </InputWrapper>
        {/*<Box sx={{margin: '30px 0 20px'}}>*/}
        {/*  <input type="file" onChange={handleFileChange} />*/}
        {/*</Box>*/}
        <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
          Submit
        </ButtonSubmit>
      </StyledForm>
      {state.succeeded && <Success>Your message was sent successfully!</Success>}
    </>
  );
};
