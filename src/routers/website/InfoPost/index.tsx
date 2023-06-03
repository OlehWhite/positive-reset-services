import { Container, Block, Title, Text, Img } from './styled';
import { Box } from '@mui/material';
import IMGOne from 'assets/icons/Icon01.png';
import IMGTwo from 'assets/icons/Icon02.png';
import IMGThree from 'assets/icons/Icon03.png';

export const InfoPost = () => {
  return (
    <Container>
      <Block>
        <Box>
          <Img
            src={IMGOne}
            alt="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
            title="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
          />
        </Box>
        <Box>
          <Title>CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS</Title>
          <Text>
            A trusted and easily accessible platform for franchisees to inform new and existing
            patients about services and updates on new practices and new opportunities.
          </Text>
        </Box>
      </Block>
      <Block>
        <Box>
          <Img
            src={IMGTwo}
            alt="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
            title="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
          />
        </Box>
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
        <Box>
          <Img
            src={IMGThree}
            alt="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
            title="CAPACITY FOR POTENTIAL ELECTRONIC PATIENTS"
          />
        </Box>
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
