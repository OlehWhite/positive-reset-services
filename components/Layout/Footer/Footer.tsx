import {
  Container,
  Wrapper,
  Menu,
  Logo,
  WorkingHours,
  RecentPosts,
  Text,
  Ul,
  Li,
  WrapperPost,
  Post,
  Title,
  ImgPost,
  Contact,
  ContactInfo,
  Email,
  Tel,
  WrapperImg,
  TextLogo,
  Day,
  WrapperAlarm,
  WrapperPosition,
  Days,
  Copyright,
  Links,
  Twitter,
  Linkedin,
  Facebook,
  TitleFooter,
} from "./styled";
import React, { FC } from "react";
import { Box } from "@mui/material";
import ModalServices from "../../ModalServices/ModalServices";
import IMGFacebook from "../../../public/facebook-footer.svg";
import IMGLinkedin from "../../../public/linkedin-footer.svg";
import IMGAlarmClock from "../../../public/alarm-clock.png";
import IMGPhoneLogo from "../../../public/silver-mobil.png";
import IMGTwitter from "../../../public/twitter-footer.svg";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../LogoImg/LogoImg";
import { useGetProjects } from "../../../services/getInfo";

const BASE_MENU = [
  { page: "Home", path: "/" },
  { page: "Services", path: "/services" },
  { page: "Тelehealth", path: "/telehealth" },
  { page: "Appointment request", path: "/appointment-request" },
  { page: "About Us", path: "/about-us" },
  { page: "Contact us", path: "/contact-us" },
  { page: "Career Opportunities", path: "/career-opportunities" },
];

export const Footer: FC = () => {
  const { project } = useGetProjects();

  const facebookLink = project?.links.find(
    (link) => link.title === "Facebook",
  )?.link;
  const linkedInLink = project?.links.find(
    (link) => link.title === "LinkedIn",
  )?.link;
  const twitterLink = project?.links.find(
    (link) => link.title === "Twitter",
  )?.link;

  return (
    <Container>
      <Wrapper>
        <Logo>
          <LogoImg />
          <TextLogo>
            POSITIVE RESET SERVICES is a successful franchise company that opens
            Mental Health Clinics across United States.
            <br />
            POSITIVE RESET SERVICES operates as a professional system that has
            stood the test of time, achieving financial success and delivering
            successful treatment outcomes.
          </TextLogo>

          <Contact>
            <WrapperImg>
              <Image
                src={IMGPhoneLogo}
                width={25}
                height={40}
                alt="Phone"
                title="Phone"
              />
            </WrapperImg>

            <ContactInfo>
              <Tel href={`tel:${project?.tel}`}>{project?.tel}</Tel>

              <Email>{project?.email}</Email>
            </ContactInfo>
          </Contact>
        </Logo>

        <Menu>
          <Title>MENU</Title>

          <Ul>
            {BASE_MENU.map((link, index) => (
              <Li key={index}>
                {link.page !== "Services" ? (
                  <Link href={link.path} passHref id="white-footer-link">
                    {link.page}
                  </Link>
                ) : (
                  <ModalServices />
                )}
              </Li>
            ))}
          </Ul>
        </Menu>

        {project?.blogs.length > 0 && (
          <RecentPosts>
            <Title>RECENT BLOG</Title>

            <WrapperPost>
              {project?.blogs
                ?.map((blog, index) => (
                  <Post key={index}>
                    <ImgPost
                      src={blog.image}
                      alt="First Post"
                      title="Second Post"
                    />

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Text>{blog?.title}</Text>
                    </Box>
                  </Post>
                ))
                .reverse()
                .slice(0, 3)}
            </WrapperPost>
          </RecentPosts>
        )}

        <WorkingHours>
          <WrapperPosition>
            <WrapperAlarm>
              <Image
                src={IMGAlarmClock}
                width={45}
                height={45}
                alt="Alar"
                title="Alarm"
              />
            </WrapperAlarm>
          </WrapperPosition>

          <Days>
            {project?.schedule.map((day, index) => (
              <Day key={index}>
                {day.day}: {day.open} - {day.close}
              </Day>
            ))}
          </Days>
        </WorkingHours>
      </Wrapper>

      <Copyright>
        <TitleFooter>
          Copyright © 2025 Vimax LLC. All rights reserved
        </TitleFooter>

        <Links>
          <Facebook href={facebookLink} target="_blank">
            <Image
              src={IMGFacebook}
              width={20}
              height={20}
              alt="Facebook"
              title="Facebook"
            />
          </Facebook>

          <Twitter href={twitterLink} target="_blank">
            <Image
              src={IMGTwitter}
              width={20}
              height={20}
              alt="Twitter"
              title="Twitter"
            />
          </Twitter>

          <Linkedin href={linkedInLink} target="_blank">
            <Image
              src={IMGLinkedin}
              width={20}
              height={20}
              alt="Linkedin"
              title="Linkedin"
            />
          </Linkedin>
        </Links>
      </Copyright>
    </Container>
  );
};
