import { styled } from '@mui/material';

export const Container = styled('main')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: 1300,
    margin: '50px auto',

    '@media (max-width: 770px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
  };
});