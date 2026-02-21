import { Address, InfoCard, InfoCardLink, TitleCard } from "@/otherPages/home/Location/styled";
import { Wrapper, Iframe, Block, Button, BoxWrapper } from "./styled";
import React, { FC, Dispatch, SetStateAction } from "react";
import { Box, Stack } from "@mui/material";
import LogoImgDark from "@/components/LogoImgDark/LogoImgDark";

type TAsideClinic = {
  location: any;
  setOpenIndex: Dispatch<SetStateAction<number>>;
};

export const AsideClinic: FC<TAsideClinic> = ({ setOpenIndex, location }) => {
  return (
    <Wrapper>
      <Block>
        <Box sx={{ marginTop: "20px" }}>
          <LogoImgDark />
        </Box>
        <Box>
          <Button onClick={() => setOpenIndex(-1)}>X</Button>
        </Box>
      </Block>
      <BoxWrapper>
        <TitleCard>{location?.title}</TitleCard>
        <Address>{location?.address}</Address>
        <InfoCard>{location?.tel}</InfoCard>
        <InfoCardLink>{location?.email}</InfoCardLink>

        <Stack component="a" href={location?.link} fontSize={14} mb={2} target="_blank">
          {location?.link}
        </Stack>
      </BoxWrapper>

      <Iframe src={location.googleMap}></Iframe>
    </Wrapper>
  );
};
