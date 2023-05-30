import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    backgroundColor: '#f7f7f7',
    padding: '50px 0'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 1300,
    width: '100%',
    margin: '0 auto'
  };
});

export const Block = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 845px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const Title = styled(Box)(() => {
  return {
    textAlign: 'center',
    color: '#3498db',
    fontSize: 27,
    fontWeight: 600,
    paddingBottom: 40
  };
});

export const WrapperImg = styled(Box)(() => {
  return {
    padding: '24px 20px'
  };
});

export const Img = styled('img')(() => {
  return {
    width: 236
  };
});
