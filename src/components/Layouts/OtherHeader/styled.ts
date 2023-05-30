import { styled } from '@mui/material';

export const HeaderContainer = styled('header')(() => {
  return {
    overflowX: 'hidden'
  };
});

export const Img = styled('img')(() => {
  return {
    objectFit: 'cover',
    objectPosition: 'center center',
    transition: 'opacity 0.5s ease-in-out'
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
