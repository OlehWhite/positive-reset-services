import { FC } from 'react';
import { DATA_PARTNERS } from './mocData';
import { Container, Wrapper, Title, Img, WrapperImg, Block } from './styled';
import { Box } from '@mui/material';

export const OurPartners: FC = () => {
  return (
    <Container>
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
