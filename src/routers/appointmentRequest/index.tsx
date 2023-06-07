import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { PRIVATE_DATA } from '../privateData';
import {
  ButtonSubmit,
  InputWrapper,
  Label,
  StyledForm,
  Success,
  TextField,
  Title,
  Wrapper,
  WrapperHeader
} from './styled';
import { Box } from '@mui/material';
import PreferredDataAndTimeField from 'components/FormFields/PreferredDataAndTimeField';
import PhoneNumberField from '../../components/FormFields/PhoneNumberField';
import EmailField from '../../components/FormFields/EmailField';
import ErrorValidation from '../../components/ErrorValidation';
import NameField from '../../components/FormFields/NameField';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Feedbacks } from 'components/Feedbacks';

export const AppointmentRequest = () => {
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
      Preferred_Data_And_Time: '',
      Message: ''
    }
  });
  const [state, stateSubmit] = useFormspree(`${PRIVATE_DATA.keyID}`);

  const onSubmit = async (data: any) => {
    await stateSubmit(data);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Positive Reset Services - Call Today | Appointment Request</title>
        <meta name="description103" content="APPOINTMENT REQUEST" />
      </Helmet>
      <WrapperHeader>
        <Title>APPOINTMENT REQUEST</Title>
      </WrapperHeader>
      <Wrapper>
        <Box>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <Label>Your Name</Label>
              <NameField register={register} errors={errors} />
              <ErrorValidation errors={errors.Name} />
            </InputWrapper>
            <InputWrapper>
              <Label>Your Phone Number</Label>
              <PhoneNumberField register={register} errors={errors} />
              <ErrorValidation errors={errors.Phone} />
            </InputWrapper>
            <InputWrapper>
              <Label>Your Email Address</Label>
              <EmailField register={register} errors={errors} />
              <ErrorValidation errors={errors.Email} />
            </InputWrapper>
            <InputWrapper>
              <Label>Preferred Date and Time</Label>
              <PreferredDataAndTimeField register={register} errors={errors} />
            </InputWrapper>
            <InputWrapper>
              <Label>Your Message</Label>
              <TextField
                maxLength={1000}
                style={errors.Message && { border: '1px solid red' }}
                {...register('Message', { required: 'This field is required' })}
              />
              <ErrorValidation errors={errors.Message} />
            </InputWrapper>
            <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </ButtonSubmit>
          </StyledForm>
          {state.succeeded && <Success>Your message was sent successfully!</Success>}
        </Box>
      </Wrapper>
      <Feedbacks />
    </>
  );
};
