import { Box, styled } from '@mui/material';
import IMG from 'assets/icons/h9-parallax-1-1.jpg';

export const Container = styled(Box)(() => {
  return {
    width: '100%',
    backgroundImage: `url(${IMG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginTop: 50
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundSize: 'cover',
    margin: '0 auto',
    padding: '55px 0',
    maxWidth: 1300,

    '@media (max-width: 1335px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  };
});

export const Title = styled('h2')(() => {
  return {
    fontSize: 24,
    fontWeight: 600,
    color: 'white'
  };
});

export const Text = styled('h2')(() => {
  return {
    fontSize: 14,
    fontWeight: 400,
    color: 'white',
    lineHeight: '26px',
    padding: '24px 0'
  };
});

export const Label = styled(Box)(() => {
  return {};
});

export const Rating = styled(Box)(() => {
  return {};
});

export const TextRating = styled('p')(() => {
  return {
    fontSize: 16,
    color: 'white'
  };
});
