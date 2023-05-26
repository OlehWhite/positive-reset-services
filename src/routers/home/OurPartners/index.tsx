import { FC } from 'react';
import { DATA_PARTNERS } from './mocData';
import { Container, Wrapper, Title, Img, WrapperImg } from './styled';
import { Box } from '@mui/material';

export const OurPartners: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>OUR PARTNERS</Title>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          {DATA_PARTNERS.map((partner, index) => (
            <WrapperImg key={index}>
              <Img src={partner.img} alt={partner.img} title={partner.img} />
            </WrapperImg>
          ))}
        </Box>
      </Wrapper>
    </Container>
  );
};
