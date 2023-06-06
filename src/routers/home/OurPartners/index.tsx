import { FC } from 'react';
import { DATA_PARTNERS } from './mocData';
import { Container, Wrapper, Title, Img, WrapperImg, Block } from './styled';
import { Box } from '@mui/material';
import {Helmet} from "react-helmet-async";

export const OurPartners: FC = () => {
  return (
    <Container>
      <Helmet>
        <meta
          name="description14"
          content="JERSEY BEHAVIORAL CARE Metal Health Clinic"
        /><meta
          name="description15"
          content="OCEAN INSIGHT CENTER Metal Health Clinic"
        /><meta
          name="description16"
          content="POSITIVE RESET Metal Health Clinic"
        />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>OUR PARTNERS</Title>
        </Box>
        <Block>
          {DATA_PARTNERS.map((partner, index) => (
            <WrapperImg key={index}>
              <Img src={partner.img} alt={partner.img} title={partner.img} />
            </WrapperImg>
          ))}
        </Block>
      </Wrapper>
    </Container>
  );
};
