import { Box, styled } from '@mui/material';

export const Video = styled(Box)(() => {
  return {};
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

export const Container = styled(Box)(() => {
  return {
    height: '470px'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: 1303,
    margin: '115px auto 155px'
  };
});

export const PlayLogo = styled('img')(() => {
  return {
    position: 'relative',
    bottom: 150,
    right: 355,
    pointerEvents: 'none'
  };
});

export const WrapperVideo = styled(Box)(() => {
  return {
    width: 670,
    cursor: 'pointer',

    '&:hover': {
      background: 'white'
    }
  };
});

export const BoxVideo = styled(Box)(() => {
  return {
    position: 'absolute'
  };
});
