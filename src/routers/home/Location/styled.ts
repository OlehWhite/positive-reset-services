import { styled, Box } from '@mui/material';
import Slider from 'react-slick';

export const Container = styled(Box)(() => {
  return {
    maxWidth: 1300,
    width: '100%',
    margin: '105px auto 100px',
  };
});

export const Info = styled(Box)(() => {
  return {
    textAlign: 'center',
    maxWidth: 1040,
    width: '100%',
    margin: '0 auto'
  };
});

export const Carusell = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 34
  };
});

export const Title = styled('h2')(() => {
  return {
    fontSize: 27,
    color: '#373737'
  };
});

export const Text = styled('p')(() => {
  return {
    fontSize: 18,
    color: '#666',
    lineHeight: '30px'
  };
});

export const Clinicals = styled(Slider)(() => {
  return {
    maxWidth: 1150,
    margin: '0 auto',
    textAlign: 'center',

    '@media (max-width: 1335px)': {
     width: 370
    }
  };
});

export const LeftButton = styled('img')(() => {
  return {
    width: 48,
    cursor: 'pointer',

    '@media (max-width: 1335px)': {
      display: 'none'
    }
  };
});

export const RightButton = styled('img')(() => {
  return {
    width: 48,
    height: 48,
    cursor: 'pointer',

    '@media (max-width: 1335px)': {
      display: 'none'
    }
  };
});

export const Img = styled('img')(() => {
  return {
    width: 350
  };
});

export const TitleCard = styled('h2')(() => {
  return {
    fontSize: 27,
    color: '#3498db',
    fontWeight: 400,
    margin: '34px 0 12px'
  };
});

export const Address = styled('address')(() => {
  return {
    fontSize: 14,
    color: '#6a767e',
    fontWeight: 600
  };
});

export const InfoCard = styled('p')(() => {
  return {
    fontSize: 14,
    color: '#959595',
    fontWeight: 400
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 350,
    width: '100%',
    transition: '.3s',

    '&:hover': {
      transition: '.3s',
      backgroundColor: '#3498db6b',
      cursor: 'pointer'
    }
  };
});
