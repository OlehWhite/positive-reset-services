import { Container, Img, Info, Post, Text, Title, WrapperHeader } from './styled';
import { Box } from '@mui/material';
import IMGOne from 'assets/icons/01-5.jpg';
import IMGTwo from 'assets/icons/04-7.jpg';
import IMGThree from 'assets/icons/08-1.jpg';
import { Feedbacks } from 'components/Feedbacks';
import React from 'react';
import PointImportant from 'components/PointImportant';
import {Helmet} from "react-helmet-async";

export const OfficeLayoutSetup = () => {
  return (
    <Box>
      <Helmet>
        <title>Positive Reset Services - Call Today | Office Layout/Setup</title>
        <meta
          name="description89"
          content="Office Layout/Setup"
        />
        <meta
          name="description90"
          content="BEFORE YOU START
Before planning out a new office layout, you need to work with Positive Reset Services headquarter office to confirm the following:
• Number of employees on-site, by department.
• Employees that require private offices.
• Number of remote or flex employees who may occasionally require a workstation.
• Department-specific needs for location or desk configuration. Do certain departments collaborate often?"
        />
        <meta
          name="description91"
          content="MAKE A LIST OF EVERYTHING YOU NEED
Before even looking for office space, you may want to make a list of everything you will need in your new office, from desks and chairs to computer hardware, as well as any tasks like setting up your internet connection. Knowing your business needs will help ensure you choose the correct office size and location to support yourself and team members who share your workspace."
        />
        <meta
          name="description92"
          content="DESIGN YOUR OFFICE FLOOR PLAN
Once you add everything on your checklist, consider the layout of your office space. This will help you to confirm how much furniture to buy. For example, do you need official entrance and waiting room: because you will be accepting patients, private room for employee meetings? Should a doctor, social worker or counselors have their own room? Break room or kitchen: It’s nice to give employees a place for breaks. It’s helpful to have a refrigerator and microwave too. Based on the amount of rooms you have and the kind of work being done, your floor plan can maximize your office space for productivity."
        />
        <meta
          name="description93"
          content="1. OPTIMIZE SPACE AND INCREASE EFFICIENCY One of the biggest factors in determining the revenue of a mental health clinic is the number of patients they can see. Using your rooms efficiently is important in order to allow your staff to see patients in a timely manner. For practices struggling with space issues, one of the best ways to optimize space and increase efficiency may this: assign small groups of rooms to specialists and support staff."
        />
        <meta
          name="description93"
          content="2. CONSIDER THE BIG PICTURE With the help of a space management tool, start by creating a floor plan of your current layout and resources. The next step is to decide how you would like to change the overall layout of your office—meaning the big picture changes you’d like to make to change company culture and productivity. You may consider an open office plan to encourage visibility and collaboration, or you might want cubicles to ensure privacy and concentration."
        />
        <meta
          name="description93"
          content="3. MAP OUT FURNITURE PLACEMENT Keep in mind that wayfinding plays a key role in your employees’ productivity, and ensure that the design you pick will encourage the appropriate amount of interaction between employees. Experiment with different layout options to determine the best balance between an aesthetic design and the needs of your business."
        />
        <meta
          name="description93"
          content="4. FIND AN INTERNET PROVIDER Before committing to any office lease, make sure the location is serviceable by a high-speed internet provider. Research which internet service provider (ISP) can connect your office well before you move in. Then, once you’ve found a few providers, compare their plans, prices, and contracts. Also, remember that commercial accounts often differ from residential ones, so be careful when looking at their terms."
        />
      </Helmet>
      <WrapperHeader>
        <Title>OFFICE LAYOUT/SETUP</Title>
      </WrapperHeader>
      <Container>
        <Post>
          <Info>
            <Title>BEFORE YOU START</Title>
            <Text>
              Before planning out a new office layout, you need to work with Positive Reset Services
              headquarter office to confirm the following:
              <br />
              • Number of employees on-site, by department. <br />
              • Employees that require private offices.
              <br />
              • Number of remote or flex employees who may occasionally require a workstation.
              <br />
              • Department-specific needs for location or desk configuration. Do certain departments
              collaborate often?
              <br />
            </Text>
          </Info>
          <Box>
            <Img src={IMGOne} alt="BEFORE YOU START" title="BEFORE YOU START" />
          </Box>
        </Post>
        <Post>
          <Box>
            <Img
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
              own room? Break room or kitchen: It’s nice to give employees a place for breaks. It’s
              helpful to have a refrigerator and microwave too. Based on the amount of rooms you
              have and the kind of work being done, your floor plan can maximize your office space
              for productivity.
            </Text>
          </Info>
          <Box>
            <Img
              src={IMGThree}
              alt="DESIGN YOUR OFFICE FLOOR PLAN"
              title="DESIGN YOUR OFFICE FLOOR PLAN"
            />
          </Box>
        </Post>
        <Box sx={{ marginTop: '50px' }}>
          <Title>4 POINTS THAT ARE VERY IMPORTANT</Title>
          <PointImportant />
        </Box>
      </Container>
      <Feedbacks />
    </Box>
  );
};
