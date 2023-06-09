import { Box, styled } from '@mui/material';

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
    },
    '@media (max-width: 661px)': {
      width: 440,
      maxWidth: '100%'
    }
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: 1303,
    margin: '35px auto 35px',

    '@media (max-width: 1335px)': {
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
    }
  };
});

export const Iframe = styled("iframe")({
  width: '100%',
  height: '100%'
})