import React, { FC } from "react";
import {
  Contact,
  ContactAndFollow,
  ContactInfo,
  Email,
  Follow,
  FollowInfo,
  Link,
  Tel,
  Title,
  Wrapper,
  WrapperFollow,
  WrapperImg,
  LinkAddress,
} from "./styled";
import { Box } from "@mui/material";
import Image from "next/image";

import IMGPhoneLogo from "../../../../public/white-mobil.png";
import IMGFollowIcon from "../../../../public/white-follow-icon.png";
import IMGFacebook from "../../../../public/facebook-icon.svg";
import IMGLinkedin from "../../../../public/linkedin-icon.svg";

import LogoImg from "../../../LogoImg/LogoImg";

import ROUTES from "../../../../otherPages/path";

import { useGetProjects } from "../../../../services/getInfo";

export const LayoutHeader: FC = () => {
  const { project } = useGetProjects();

  const facebookLink = project?.links.find(
    (link) => link.title === "Facebook",
  )?.link;
  const linkedInLink = project?.links.find(
    (link) => link.title === "LinkedIn",
  )?.link;

  return (
    <Wrapper>
      <Box>
        <LogoImg />
      </Box>

      <ContactAndFollow>
        <Contact>
          <WrapperImg>
            <Image
              src={IMGPhoneLogo}
              width={25}
              height={42}
              alt="Phone"
              title="Phone"
            />
          </WrapperImg>

          <ContactInfo>
            <Tel href={`tel:${project?.tel}`}>{project?.tel}</Tel>

            <LinkAddress href={ROUTES.CONTACT_US}>
              <Email>{project?.email}</Email>
            </LinkAddress>
          </ContactInfo>
        </Contact>
        <Follow>
          <WrapperImg>
            <Image
              src={IMGFollowIcon}
              width={0}
              height={50}
              alt="Follow"
              title="Follow"
            />
          </WrapperImg>
          <FollowInfo>
            <Title>Follow Us</Title>

            <WrapperFollow>
              <Link href={facebookLink} target="_blank">
                <Image
                  src={IMGFacebook}
                  width={12}
                  height={12}
                  alt="Facebook"
                  title="Facebook"
                />
              </Link>

              <Link href={linkedInLink} target="_blank">
                <Image
                  src={IMGLinkedin}
                  width={12}
                  height={12}
                  alt="Linkedin"
                  title="Linkedin"
                />
              </Link>
            </WrapperFollow>
          </FollowInfo>
        </Follow>
      </ContactAndFollow>
    </Wrapper>
  );
};
