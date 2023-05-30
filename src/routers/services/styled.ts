import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const MUIButton = styled(Button)(() => {
  return {
    padding: 0,
    color: '#fff',
    marginRight: 20,
    fontSize: 14,
    fontWeight: 700,

    '&:hover': {
      color: '#3498db',
      backgroundColor: 'none'
    }
  };
});
