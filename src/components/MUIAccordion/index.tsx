import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import { Nav, Menu, SNav } from './styled';
import * as React from 'react';
import { Box } from '@mui/material';

export const MUIAccordion = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Menu>MENU</Menu>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
          <Nav to="/">HOME</Nav>
          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Menu>SERVICES</Menu>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
              <SNav to="/how-to-start">How to Start</SNav>
              <SNav to="/start-license">Start License</SNav>
              <SNav to="/training">Training</SNav>
              <SNav to="/interviews">Interviews</SNav>
              <SNav to="/erm">ERM</SNav>
              <SNav to="/find-location">Find Location</SNav>
              <SNav to="/community-integration">Community Integration</SNav>
              <SNav to="/office-layout-setup">Office Layout/Setup</SNav>
              <SNav to="/website">Website</SNav>
            </AccordionDetails>
          </Accordion>
          <Nav to="/telehealth">TELEHEALTH</Nav>
          <Nav to="/about-us">ABOUT US</Nav>
          <Nav to="/contact-us">CONTACT US</Nav>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
