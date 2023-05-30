import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    width: '600px',
    marginRight: 10,

    '@media (max-width: 768px)': {
      width: '300px',
    }
  };
});
