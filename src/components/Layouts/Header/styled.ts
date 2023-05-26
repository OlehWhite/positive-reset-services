import { styled, Box } from '@mui/material';
import Slider from 'react-slick';

export const Background = styled(Slider)(() => {
  return {
    width: '100%',
    position: 'absolute',
    zIndex: '-1'
  };
});

export const HeaderContainer = styled('header')(() => {
  return {
    height: '80vh'
  }
})

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
    cursor: 'pointer'
  };
});

export const RightButton = styled('img')(() => {
  return {
    width: 48,
    cursor: 'pointer'
  };
});
