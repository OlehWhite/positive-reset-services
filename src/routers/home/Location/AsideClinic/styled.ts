import { Box, styled, Button as MUIButton} from '@mui/material';

export const Wrapper = styled('aside')(() => {
  return {
    padding: '0 40px'
  };
});

export const Block = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
});

export const Button = styled(MUIButton)(() => {
  return {
    fontSize: 22,
  };
});

export const Img = styled('img')(() => {
  return {
    width: '100%',
    maxWidth: 300,
    padding: '20px 40px 0 40px',

    '@media (max-width: 470px)': {
      maxWidth: 200
    },

    '@media (max-width: 370px)': {
      maxWidth: 150
    }
  };
});

export const Iframe = styled('iframe')(() => {
  return {
    width: 700,
    height: 450,
    border: 0,

    '@media (max-width: 796px)': {
      width: 500,
      height: 500
    },

    '@media (max-width: 620px)': {
      width: 400,
      height: 500
    },

    '@media (max-width: 470px)': {
      width: 350
    },

    '@media (max-width: 400px)': {
      width: 270
    }
  };
});
