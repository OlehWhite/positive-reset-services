import { Container, Img, Info, Post, Text, Title, WrapperHeader } from './styled';
import { Box } from '@mui/material';
import IMGOne from 'assets/icons/01-5.jpg';
import IMGTwo from 'assets/icons/04-7.jpg';
import IMGThree from 'assets/icons/08-1.jpg';
import { Feedbacks } from 'components/Feedbacks';
import React from 'react';
import PointImportant from 'components/PointImportant';

export const OfficeLayoutSetup = () => {
  return (
    <Box>
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
