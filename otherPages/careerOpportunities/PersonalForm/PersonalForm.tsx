import { useForm } from "react-hook-form";
import { useSubmit } from "@formspree/react";
import {
  ButtonSubmit,
  InputWrapper,
  Label,
  StyledForm,
  Success,
  Title,
} from "@/otherPages/careerOpportunities/styled";
import NameField from "@/components/FormFields/NameField/NameField";
import ErrorValidation from "@/components/ErrorValidation/ErrorValidation";
import PhoneNumberField from "@/components/FormFields/PhoneNumberField/PhoneNumberField";
import EmailField from "@/components/FormFields/EmailField/EmailField";
import PositionYouAreApplyingFor from "@/components/FormFields/PositionField/PositionField";
import DateField from "@/components/FormFields/DateField/DateField";
import React, { useState } from "react";
import { PRIVATE_DATA } from "@/otherPages/privateData";

interface IForm {
  Name: string;
  Phone: string;
  Email: string;
  Position_You_Are_Applying_For: string;
  Date: string;
}

export const PersonalForm = () => {
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
      Position_You_Are_Applying_For: "",
      Date: "",
    },
  });
  const [submitted, setSubmitted] = useState(false);
  const submit = useSubmit(PRIVATE_DATA.keyID, {
    onSuccess: () => setSubmitted(true),
  });

  const onSubmit = async (data: IForm) => {
    setSubmitted(false);
    await (submit as (data: Record<string, unknown>) => Promise<void>)(
      data as unknown as Record<string, unknown>
    );
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
        <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
          Submit
        </ButtonSubmit>
      </StyledForm>
      {submitted && <Success>Your message was sent successfully!</Success>}
    </>
  );
};
