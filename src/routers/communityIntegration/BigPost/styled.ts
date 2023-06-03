import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    marginTop: 50,

    '@media (max-width: 889px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex'
  };
});

export const Logo = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: 650,
    display: 'flex',
    justifyContent: 'center'
  };
});

export const Img = styled('img')(() => {
  return {
    width: '100%',
    maxWidth: 360
  };
});

export const WrapperContent = styled(Box)(() => {
  return {
    marginLeft: 20
  };
});
