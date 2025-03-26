import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import {
  ButtonSubmit,
  InputWrapper,
  Label,
  StyledForm,
  Success,
  TextField,
  Title,
  Wrapper,
  WrapperHeader,
} from "../otherPages/appointmentRequest/styled";
import {Box, Stack, Typography} from "@mui/material";
import PreferredDataAndTimeField from "../components/FormFields/PreferredDataAndTimeField/PreferredDataAndTimeField";
import PhoneNumberField from "../components/FormFields/PhoneNumberField/PhoneNumberField";
import ErrorValidation from "../components/ErrorValidation/ErrorValidation";
import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";
import EmailField from "../components/FormFields/EmailField/EmailField";
import NameField from "../components/FormFields/NameField/NameField";
import { Feedbacks } from "../components/Feedbacks/Feedbacks";
import IMGHeader from "../public/NAPr4GWk.jpeg";
import React from "react";
import { PRIVATE_DATA } from "../otherPages/privateData";
import Head from "next/head";

interface IForm {
  Name: string;
  Phone: string;
  Email: string;
  Preferred_Data_And_Time: string;
  Message: string;
}

const AppointmentRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      Name: "",
      Phone: "",
      Email: "",
      Preferred_Data_And_Time: "",
      Message: "",
    },
  });
  const [state, stateSubmit] = useFormspree(`${PRIVATE_DATA.keyID}`);

  const onSubmit = async (data: any) => {
    await stateSubmit(data);
    reset();
  };

  return (
    <>
      <Head>
        <title>
          Positive Reset Services - Call Today | Appointment Request
        </title>
        <meta
          name="keywords"
          content="Appointment request, Book appointment, Schedule appointment, Online appointment, Request appointment, Book online, Healthcare appointment, Medical appointment, Appointment booking, Patient appointment"
        />
        <meta name="description" content="APPOINTMENT REQUEST" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>APPOINTMENT REQUEST</Title>
        </WrapperHeader>
        <Wrapper>
          <Stack width={1} maxWidth={1300} m="0 auto">
            <Typography
              sx={{
                fontSize: 14,
                color: "#959595",
                fontStyle: "italic",
                mt: -1,
              }}
            >
              {`"By providing a telephone number and submitting this form you are
              consenting to be contacted by call or SMS text message. Message &
              data rates may apply. You can reply STOP to opt-out of further
              text messaging. No mobile information will be shared with third
              parties/affiliates for marketing/promotional purposes. All other
              categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third
              parties."`}
            </Typography>
          </Stack>
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
                <PreferredDataAndTimeField
                  register={register}
                  errors={errors}
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Your Message</Label>
                <TextField
                  maxLength={1000}
                  style={errors.Message && { border: "1px solid red" }}
                  {...register("Message", {
                    required: "This field is required",
                  })}
                />
                <ErrorValidation errors={errors.Message} />
              </InputWrapper>
              <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
                Submit
              </ButtonSubmit>
            </StyledForm>
            {state.succeeded && (
              <Success>Your message was sent successfully!</Success>
            )}
          </Box>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default AppointmentRequest;
