import { styled } from '@mui/material';

export const Link = styled('a')(() => {
  return {
    fontSize: 14,
    cursor: 'pointer',
    fontWeight: 600,
    transition: '.3s',

    '&:hover': {
      color: '#3498db'
    }
  };
});
