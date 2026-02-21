import { Container, Block, Title, Text, Img, WrapperBox, WrapperImg } from "./styled";
import { Box } from "@mui/material";
import IMGOne from "@/public/Icon01.png";
import IMGTwo from "@/public/Icon02.png";
import IMGThree from "@/public/Icon03.png";
import Image from "next/image";

export const InfoPost = () => {
  return (
    <Container>
      <Block>
        <WrapperImg>
          <WrapperBox>
            <Image
              width={82}
              height={82}
              src={IMGOne}
              alt="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
              title="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
            />
          </WrapperBox>
        </WrapperImg>
        <Box>
          <Title>CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS</Title>
          <Text>
            A trusted and easily accessible platform for franchisees to inform new and existing
            patients about services and updates on new practices and new opportunities.
          </Text>
        </Box>
      </Block>
      <Block>
        <WrapperImg>
          <WrapperBox>
            <Image
              width={82}
              height={82}
              src={IMGTwo}
              alt="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
              title="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
            />
          </WrapperBox>
        </WrapperImg>
        <Box>
          <Title>WEBSITE BENEFITS YOU GET</Title>
          <Text>
            An easy-to-navigate website. Mobile responsiveness. High-quality content and blogs.
            Fresh content that gets updated often. Social media links. Professional look and high
            quality graphics.
          </Text>
        </Box>
      </Block>
      <Block>
        <WrapperImg>
          <WrapperBox>
            <Image
              width={82}
              height={82}
              src={IMGThree}
              alt="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
              title="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
            />
          </WrapperBox>
        </WrapperImg>
        <Box>
          <Title>HAVING AN EXCELLENT FRANCHISE WEBSITE HAS BECOME EVEN MORE IMPORTANT</Title>
          <Text>
            In 2021, potential franchisees used mostly the internet to find the right business to
            buy a franchise: “Out of 5,892 registered franchisees who have invested in a franchise.
            . . 43%, inquired through the franchisor’s franchise development website”.
          </Text>
        </Box>
      </Block>
    </Container>
  );
};
