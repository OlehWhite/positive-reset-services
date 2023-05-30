import { styled, Box } from '@mui/material';
import Slider from 'react-slick';

export const HeaderContainer = styled('header')(() => {
  return {
    height: '80vh',
    overflowX: 'hidden',
  };
});

export const Background = styled(Slider)(() => {
  return {
    width: '100%',
    position: 'absolute',
    zIndex: '-1'
  };
});

export const BackgroundTwo = styled(Slider)(() => {
  return {
    width: '100%',
    position: 'absolute',
    zIndex: '-1',
    marginTop: 300
  };
});

export const Img = styled('img')(() => {
  return {
    height: '80vh',
    objectFit: 'cover',
    objectPosition: 'center center',
    transition: 'opacity 0.5s ease-in-out'
  };
});

export const Buttons = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1800,
    width: '100%',
    margin: '0 auto',
    marginTop: 200
  };
});

export const LeftButton = styled('img')(() => {
  return {
    width: 48,
    cursor: 'pointer',

    '@media (max-width: 1023px)': {
      display: 'none'
    }
  };
});

export const RightButton = styled('img')(() => {
  return {
    width: 48,
    cursor: 'pointer',

    '@media (max-width: 1023px)': {
      display: 'none'
    }
  };
});

export const Title = styled('h2')(() => {
  return {
    fontSize: 28,
    fontWeight: 600,
    color: '#fff',

    '@media (max-width: 1023px)': {
      fontSize: 18
    }
  };
});

export const Text = styled('p')(() => {
  return {
    fontSize: 22,
    fontWeight: 400,
    color: '#fff',

    '@media (max-width: 1023px)': {
      fontSize: 16
    }
  };
});

export const WrapperInfo = styled(Box)(() => {
  return {
    marginLeft: 200,

    '@media (max-width: 1023px)': {
      margin: 20
    }
  };
});
