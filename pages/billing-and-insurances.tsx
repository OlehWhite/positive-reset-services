import {
  Title,
  WrapperHeader,
  Wrapper,
  Block,
  Text,
  WrapperBlock,
} from "@/otherPages/billingAndInsurances/styled";
import React from "react";
import { Box } from "@mui/material";
import IMGOne from "@/public/Billing01.jpg";
import IMGTwo from "@/public/Billing02.jpg";
import IMGHeader from "@/public/xGbNIxtA.jpeg";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import Image from "next/image";
import Head from "next/head";

const BillingAndInsurances = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Billing and Insurances</title>
        <meta
          name="keywords"
          content="Billing and insurances, Insurance coverage, Payment options, Medical billing, Insurance claims, Billing services, Healthcare billing, Insurance reimbursement, Insurance providers, Payment assistance"
        />
        <meta name="description" content="BILLING AND INSURANCES" />
        <meta name="description2" content="FINANCIAL RESOURCES" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>BILLING AND INSURANCES</Title>
        </WrapperHeader>
        <Wrapper>
          <Block>
            <Box>
              <Image
                id="image"
                width={630}
                height={419}
                src={IMGOne}
                alt="BILLING & INSURANCES"
                title="BILLING & INSURANCES"
              />
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
              <Title>FINANCIAL RESOURCES</Title>
              <Text>We accept all Credit and Debit cards and Cash.</Text>
              <Text>Refund Policy: Once service is rendered the payment is final.</Text>
              <Text>
                If you have questions about your bill, please contact our billing department at
                847-729-6001. For questions regarding your insurance, please contact your insurance
                company directly.
              </Text>
              <Text>
                Our Clinic does not discriminate on the basis of race, color, religion, sex,
                national origin, creed, alienage, citizenship status age, marital status,
                partnership status, disability, sexual orientation, conviction record, or source of
                payment.
              </Text>
            </WrapperBlock>
            <Box>
              <Image
                id="image"
                width={500}
                height={750}
                src={IMGTwo}
                alt="FINANCIAL RESOURCES"
                title="FINANCIAL RESOURCES"
              />
            </Box>
          </Block>
        </Wrapper>
        <Feedbacks />
      </Box>
    </>
  );
};

export default BillingAndInsurances;
