import { Container, Title, Text, Label, Wrapper, Rating, TextRating } from "./styled";
import { LinearProgressWithLabel } from "@/components/LinearProgressWithLabel/LinearProgressWithLabel";
import IGMLabel from "@/public/signature-white-img.png";
import { FC } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import IMGLogo from "@/public/gLLTpCpk.png";

export const FranchiseOptions: FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${IMGLogo.src})` }}>
      <Wrapper>
        <Box style={{ width: "100%", maxWidth: 500 }}>
          <Title>THE ‘MENTAL HEALTH’ FRANCHISE IS BEYOND SUCCESSFUL.</Title>
          <Text>
            ‘Mental Health’ franchising allows to branch out and grow while giving people the
            opportunity to run their own business with the help and support of a larger company that
            has a proven formula for success.
          </Text>
          <Label>
            <Image src={IGMLabel} alt="Signature" title="Signature" />
          </Label>
        </Box>
        <Box>
          <Rating>
            <TextRating>Medical Service franchise</TextRating>
            <LinearProgressWithLabel value={94} />

            <TextRating>Business format franchise</TextRating>
            <LinearProgressWithLabel value={89} />

            <TextRating>Product distribution franchise</TextRating>
            <LinearProgressWithLabel value={72} />

            <TextRating>Management Franchise</TextRating>
            <LinearProgressWithLabel value={58} />
          </Rating>
        </Box>
      </Wrapper>
    </Container>
  );
};
