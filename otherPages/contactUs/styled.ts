import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    maxWidth: 1300,
    margin: '35px auto',
    boxSizing: "border-box",

    "@media (max-width: 992px)": {
      padding: "0 16px",
    },

    '@media (max-width: 770px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
  };
});
