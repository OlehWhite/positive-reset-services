import { Container, Title, Text, Label, Wrapper, Rating, TextRating } from "./styled";
import IGMLabel from "@/public/signature-white-img.png";
import { FC } from "react";
import { Box } from "@mui/material";
import { LinearProgressWithLabel } from "@/components/LinearProgressWithLabel/LinearProgressWithLabel";
import IMG from "@/public/h9-parallax-1-1.jpg";
import Image from "next/image";

export const VisionStatement: FC = () => {
  return (
    <Container
      style={{
        backgroundImage: `url(${IMG.src})`,
      }}
    >
      <Wrapper>
        <Box style={{ width: "100%", maxWidth: 500 }}>
          <Title>WHAT WE INTEND TO ACCOMPLISH</Title>

          <Text>
            Like our Mission, our Vision is ambitious. It describes what we believe to be a future
            we can help create, one which has significant improvements in the state of mental
            well-being.
          </Text>

          <Label>
            <Image src={IGMLabel} width={231} height={55} alt="Signature" title="Signature" />
          </Label>
        </Box>

        <Box>
          <Rating>
            <TextRating>Psychological Evaluation</TextRating>
            <LinearProgressWithLabel value={100} />

            <TextRating>Medication Management</TextRating>
            <LinearProgressWithLabel value={65} />

            <TextRating>Couples Therapy</TextRating>
            <LinearProgressWithLabel value={89} />

            <TextRating>Anger Management</TextRating>
            <LinearProgressWithLabel value={94} />
          </Rating>
        </Box>
      </Wrapper>
    </Container>
  );
};
