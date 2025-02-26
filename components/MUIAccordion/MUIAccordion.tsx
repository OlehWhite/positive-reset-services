import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import { Menu } from "./styled";
import * as React from "react";
import { Box } from "@mui/material";
import Link from "next/link";

export const MUIAccordion = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Menu>MENU</Menu>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          <Link href="/" id="dark-link">
            HOME
          </Link>
          <Accordion sx={{ boxShadow: 0 }}>
            <AccordionSummary
              sx={{ padding: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Menu>SERVICES</Menu>
            </AccordionSummary>
            <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/how-to-start" id="dark-link">
                How to Start
              </Link>
              <Link href="/state-license" id="dark-link">
                State License
              </Link>
              <Link href="/training" id="dark-link">
                Training
              </Link>
              <Link href="/interview" id="dark-link">
                Interviews
              </Link>
              <Link href="/emr" id="dark-link">
                ERM
              </Link>
              <Link href="/find-location" id="dark-link">
                Find Location
              </Link>
              <Link href="/community-integration" id="dark-link">
                Community Integration
              </Link>
              <Link href="/office-layout-setup" id="dark-link">
                Office Layout/Setup
              </Link>
              <Link href="/website" id="dark-link">
                Website
              </Link>
              <Link href="/appointment-request" id="dark-link">
                Appointment Request
              </Link>
              <Link href="/billing-and-insurances" id="dark-link">
                Billing and Insurances
              </Link>
              <Link href="/career-opportunities" id="dark-link">
                Career Opportunities
              </Link>
              <Link href="/medication-management" id="dark-link">
                Medication Management
              </Link>
              <Link href="/child-and-adolescent" id="dark-link">
                Child and Adolescent
              </Link>
            </AccordionDetails>
          </Accordion>
          <Link href="/telehealth" id="dark-link">
            TELEHEALTH
          </Link>
          <Link href="/about-us" id="dark-link">
            ABOUT US
          </Link>
          <Link href="/contact-us" id="dark-link">
            CONTACT US
          </Link>
          <Link href="/blogs" id="dark-link">
            BLOGS
          </Link>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
