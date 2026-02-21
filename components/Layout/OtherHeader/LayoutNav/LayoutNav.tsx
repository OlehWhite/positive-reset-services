import { Container, Wrapper, WrapperSidebar } from "./styled";
import { Box } from "@mui/material";
import { BASE_NAV } from "./constants";
import { MUIAccordion } from "@/components/MUIAccordion/MUIAccordion";
import { WrapperMenu } from "@/components/Layout/HomeHeader/LayoutNavHed/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { Services } from "@/components/Services/Services";
import { Sidebar } from "@/otherPages/home/Sidebar/Sidebar";
import React from "react";

export const LayoutNav = () => {
  const router = useRouter();

  const handleNavClick = (link: string) => {
    router.push(link);
  };

  return (
    <Container>
      <Wrapper>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <WrapperMenu>
            <MUIAccordion />
          </WrapperMenu>

          {BASE_NAV.map((link, index) => (
            <Box sx={{ display: "inline-block" }} key={index}>
              {link.name === "SERVICES" ? (
                <Services color={"#555"} />
              ) : (
                <Link
                  key={index}
                  href={link.path}
                  passHref
                  onClick={() => handleNavClick(link.path)}
                  id="link"
                >
                  {link.name}
                </Link>
              )}
            </Box>
          ))}
        </Box>
        <WrapperSidebar>
          <Sidebar />
        </WrapperSidebar>
      </Wrapper>
    </Container>
  );
};
