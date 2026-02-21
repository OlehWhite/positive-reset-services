import {
  Container,
  Info,
  Post,
  Text,
  Title,
  WrapperHeader,
} from "@/otherPages/officeLayoutSetup/styled";
import { Box } from "@mui/material";
import IMGOne from "@/public/01-5.jpg";
import IMGTwo from "@/public/04-7.jpg";
import IMGThree from "@/public/08-1.jpg";
import IMGHeader from "@/public/Setup.jpg";
import React from "react";
import Image from "next/image";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import PointImportant from "@/components/PointImportant/PointImportant";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import Head from "next/head";

const OfficeLayoutSetup = () => {
  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Office Layout Setup</title>
        <meta
          name="keywords"
          content="Office Layout Design,
Efficient Office Setup,
Productive Workspace Configuration,
Ergonomic Office Furniture,
Office Organization Tips,
Optimal Office Space Planning,
Collaborative Office Environment,
Office Layout Ideas,
Creating a Functional Office Setup,
Maximizing Office Efficiency"
        />
        <meta name="description" content="OFFICE LAYOUT/SETUP" />
        <meta name="description2" content="BEFORE YOU START" />
        <meta name="description3" content="MAKE A LIST OF EVERYTHING YOU NEED" />
        <meta name="description4" content="DESIGN YOUR OFFICE FLOOR PLAN" />
        <meta name="description5" content="4 POINTS THAT ARE VERY IMPORTANT" />
      </Head>
      <OtherHeader />
      <Box>
        <WrapperHeader
          style={{
            backgroundImage: `url(${IMGHeader.src})`,
          }}
        >
          <Title>OFFICE LAYOUT/SETUP</Title>
        </WrapperHeader>
        <Container>
          <Post>
            <Info>
              <Title>BEFORE YOU START</Title>
              <Text>
                Before planning out a new office layout, you need to work with Positive Reset
                Services headquarter office to confirm the following:
                <br />
                • Number of employees on-site, by department. <br />
                • Employees that require private offices.
                <br />
                • Number of remote or flex employees who may occasionally require a workstation.
                <br />
                • Department-specific needs for location or desk configuration. Do certain
                departments collaborate often?
                <br />
              </Text>
            </Info>
            <Box>
              <Image
                id="image"
                width={625}
                height={468}
                src={IMGOne}
                alt="BEFORE YOU START"
                title="BEFORE YOU START"
              />
            </Box>
          </Post>
          <Post>
            <Box>
              <Image
                id="image"
                width={625}
                height={351}
                src={IMGTwo}
                alt="MAKE A LIST OF EVERYTHING YOU NEED"
                title="MAKE A LIST OF EVERYTHING YOU NEED"
              />
            </Box>
            <Info>
              <Title>MAKE A LIST OF EVERYTHING YOU NEED</Title>
              <Text>
                Before even looking for office space, you may want to make a list of everything you
                will need in your new office, from desks and chairs to computer hardware, as well as
                any tasks like setting up your internet connection. Knowing your business needs will
                help ensure you choose the correct office size and location to support yourself and
                team members who share your workspace.
              </Text>
            </Info>
          </Post>
          <Post>
            <Info>
              <Title>DESIGN YOUR OFFICE FLOOR PLAN</Title>
              <Text>
                Once you add everything on your checklist, consider the layout of your office space.
                This will help you to confirm how much furniture to buy. For example, do you need
                official entrance and waiting room: because you will be accepting patients, private
                room for employee meetings? Should a doctor, social worker or counselors have their
                own room? Break room or kitchen: It’s nice to give employees a place for breaks.
                It’s helpful to have a refrigerator and microwave too. Based on the amount of rooms
                you have and the kind of work being done, your floor plan can maximize your office
                space for productivity.
              </Text>
            </Info>
            <Box>
              <Image
                id="image"
                width={625}
                height={294}
                src={IMGThree}
                alt="DESIGN YOUR OFFICE FLOOR PLAN"
                title="DESIGN YOUR OFFICE FLOOR PLAN"
              />
            </Box>
          </Post>
          <Box sx={{ marginTop: "50px" }}>
            <Title>4 POINTS THAT ARE VERY IMPORTANT</Title>
            <PointImportant />
          </Box>
        </Container>
        <Feedbacks />
      </Box>
    </>
  );
};

export default OfficeLayoutSetup;
