import { Box, styled } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    marginTop: '50px'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    width: '100%',
    maxWidth: 1300,
    margin: '0 auto',

    '@media (max-width: 1250px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const WrapperVideo = styled(Box)(() => {
  return {
    cursor: 'pointer',

    '&:hover': {
      background: 'white'
    },

    '@media (max-width: 1250px)': {
      marginBottom: 40
    }
  };
});

export const VideoLogo = styled('img')(() => {
  return {
    width: '100%',
    maxWidth: 635,
    border: '4px solid white',
    boxShadow: '1px 1px 4px 0px silver',
    transition: '.3s',

    '&:hover': {
      transition: '.3s',
      boxShadow: '0px 0px 20px 10px silver'
    }
  };
});
