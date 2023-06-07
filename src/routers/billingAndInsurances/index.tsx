import { Helmet } from 'react-helmet-async';
import { Title, WrapperHeader, Wrapper, Block, Img, Text, WrapperBlock } from './styled';
import React from 'react';
import { Box } from '@mui/material';
import IMGOne from '../../assets/icons/Billing01.jpg';
import IMGTwo from '../../assets/icons/Billing02.jpg';
import { Feedbacks } from 'components/Feedbacks';

export const BillingAndInsurances = () => {
  return (
    <>
      <Helmet>
        <title>Positive Reset Services - Call Today | Billing and Insurances</title>
        <meta name="description104" content="BILLING AND INSURANCES" />
        <meta
          name="description105"
          content="BILLING & INSURANCES
We accept Medicaid, Medicare, all commercial insurance plans and private pay. In situations where individuals have no insurance coverage and have financiial eligibility, payment is adjusted to a sliding scale."
        />
        <meta
          name="description106"
          content="FINANCIAL RESOURCES
We accept all Credit and Debit cards and Cash.

Refund Policy: Once service is rendered the payment is final.

If you have questions about your bill, please contact our billing department at 847-729-6001. For questions regarding your insurance, please contact your insurance company directly.

Our Clinic does not discriminate on the basis of race, color, religion, sex, national origin, creed, alienage, citizenship status age, marital status, partnership status, disability, sexual orientation, conviction record, or source of payment.

"
        />
      </Helmet>
      <WrapperHeader>
        <Title>BILLING AND INSURANCES</Title>
      </WrapperHeader>
      <Wrapper>
        <Block>
          <Box>
            <Img src={IMGOne} alt="BILLING & INSURANCES" title="BILLING & INSURANCES" />
          </Box>
          <WrapperBlock>
            <Title>BILLING & INSURANCES</Title>
            <Text>
              We accept Medicaid, Medicare, all commercial insurance plans and private pay. In
              situations where individuals have no insurance coverage and have financiial
              eligibility, payment is adjusted to a sliding scale.
            </Text>
          </WrapperBlock>
        </Block>
        <Block>
          <WrapperBlock>
            <Title>BILLING & INSURANCES</Title>
            <Text>We accept all Credit and Debit cards and Cash.</Text>
            <Text>Refund Policy: Once service is rendered the payment is final.</Text>
            <Text>
              If you have questions about your bill, please contact our billing department at
              847-729-6001. For questions regarding your insurance, please contact your insurance
              company directly.
            </Text>
            <Text>
              Our Clinic does not discriminate on the basis of race, color, religion, sex, national
              origin, creed, alienage, citizenship status age, marital status, partnership status,
              disability, sexual orientation, conviction record, or source of payment.
            </Text>
          </WrapperBlock>
          <Box>
            <Img src={IMGTwo} alt="BILLING & INSURANCES" title="BILLING & INSURANCES" />
          </Box>
        </Block>
      </Wrapper>
      <Feedbacks />
    </>
  );
};
