import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',

    '& .css-17rmgsd-MuiLinearProgress-bar1': {
      background: '#3498db'
    },
    '& .css-3dcd8y-MuiLinearProgress-root': {
      background: 'white',
      height: 9
    },
    '& .css-1i17uqx-MuiTypography-root': {
      color: 'white',
      fontSize: 16
    }
  };
});
