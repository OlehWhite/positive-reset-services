import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: 1300,
    margin: '35px auto',

    '@media (max-width: 770px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
  };
});
