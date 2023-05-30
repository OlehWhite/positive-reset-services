import React, { FC } from 'react';
import {
  TextField,
  Wrapper,
  StyledForm,
  InputWrapper,
  Title,
  Label,
  Success
} from 'components/FormFields/styled';
import { ButtonSubmit } from 'components/FormFields/styled';
import { useForm as useFormspree } from '@formspree/react';
import EmailField from 'components/FormFields/EmailField';
import ErrorValidation from 'components/ErrorValidation';
import NameField from 'components/FormFields/NameField';
import { PRIVATE_DATA } from '../../privateData';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';

export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      Mail: '',
      Name: '',
      Text: ''
    }
  });
  const [state, stateSubmit] = useFormspree(`${PRIVATE_DATA.keyID}`);

  const onSubmit = async (data: any) => {
    await stateSubmit(data);
    reset();
  };

  return (
    <Wrapper>
      <Box>
        <Title>CONTACT FORM</Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Label>Your Name</Label>
            <NameField register={register} errors={errors} />
            <ErrorValidation errors={errors.Name} />
          </InputWrapper>
          <InputWrapper>
            <Label>Your Email </Label>
            <EmailField register={register} errors={errors} />
            <ErrorValidation errors={errors.Email} />
          </InputWrapper>
          <InputWrapper>
            <Label>Your Message</Label>
            <TextField
              maxLength={400}
              style={errors.Text && { border: '1px solid red' }}
              {...register('Text', { required: 'This field is required' })}
            />
            <ErrorValidation errors={errors.Text} />
          </InputWrapper>
          <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
            Send
          </ButtonSubmit>
        </StyledForm>
        {state.succeeded && <Success>Your message was sent successfully!</Success>}
      </Box>
    </Wrapper>
  );
};
