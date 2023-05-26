import { Container, Title, Text, Label, Wrapper, Rating, TextRating } from './styled';
import { LinearProgressWithLabel } from 'components/Raiting';
import IGMLabel from 'assets/icons/signature-white-img.png';
import { DATA_RATING } from './mocData';
import { Box } from '@mui/material';
import { FC } from 'react';

export const FranchiseOptions: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Box style={{ width: '100%', maxWidth: 665 }}>
          <Title>THE ‘MENTAL HEALTH’ FRANCHISE IS BEYOND SUCCESSFUL.</Title>
          <Text>
            ‘Mental Health’ franchising allows to branch out and grow while giving people the
            opportunity to run their own business with the help and support of a larger company that
            has a proven formula for success.
          </Text>
          <Label>
            <img src={IGMLabel} alt="Signature" title="Signature" />
          </Label>
        </Box>
        <Box>
          {DATA_RATING.map((rating, index) => (
            <Rating key={index}>
              <TextRating>{rating.text}</TextRating>
              <LinearProgressWithLabel value={rating.rating} />
            </Rating>
          ))}
        </Box>
      </Wrapper>
    </Container>
  );
};
