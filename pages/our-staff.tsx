import type { GetStaticProps } from "next";
import React from "react";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import {
  Container,
  Title,
  WrapperHeader,
  WrapperCards,
  Prescribers,
} from "@/otherPages/ourStaff/style";
import Head from "next/head";
import PersonCardComponent from "@/otherPages/ourStaff/PersonCardComponent";
import IMGHeader from "@/public/4Z8WMNtQ.jpeg";
import { useProject } from "@/context/ProjectContext";
import { getProjectData } from "@/services/getInfo";

const OurStaff = () => {
  const { project } = useProject();

  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Our Staff</title>
      </Head>
      <OtherHeader />
      <WrapperHeader
        style={{
          backgroundImage: `url(${IMGHeader.src})`,
        }}
      >
        <Title>OUR STAFF MEMBERS</Title>
      </WrapperHeader>
      {project?.providers.length === 0 ? (
        <Title sx={{ fontSize: "50px", margin: "40px 0" }}>Coming soon...</Title>
      ) : (
        <Container>
          <Prescribers>
            <Title sx={{ margin: "35px 0" }}>PROVIDERS</Title>
            <WrapperCards>
              {project?.providers.map((provider, index) => (
                <PersonCardComponent key={index} provider={provider} />
              ))}
            </WrapperCards>
          </Prescribers>
        </Container>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const project = await getProjectData();
    return {
      props: { project },
      revalidate: 10800,
    };
  } catch {
    return { props: { project: null }, revalidate: 10800 };
  }
};

export default OurStaff;
