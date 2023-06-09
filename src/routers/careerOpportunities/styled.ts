import { Box, styled, Button as MUIButton } from '@mui/material';
import IMGHeader from 'assets/icons/couple-with-problems02а.jpg';

export const WrapperHeader = styled(Box)(() => {
  return {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 300,
    backgroundImage: `url(${IMGHeader})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
});

export const Title = styled('h2')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    color: '#3498db',
    fontSize: 26,
    marginTop: 30
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: 1300,
    margin: '0 auto'
  };
});

export const WrapperBlock = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: 630
  };
});

export const Text = styled('p')(() => {
  return {
    fontSize: 16,
    lineHeight: '26px',
    color: '#959595'
  };
});

export const Block = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 0',

    '@media (max-width: 1090px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const Img = styled('img')(() => {
  return {
    width: '100%',
    maxWidth: 630
  };
});

export const Button = styled(MUIButton)(() => {
  return {
    width: 200,
    height: 50,
    backgroundColor: '#3498db',
    color: '#fff',
    borderRadius: 0,
    transition: '.3s',

    '&:hover': {
      backgroundColor: '#68a5de'
    }
  };
});

export const Iframe = styled('iframe')({
  width: '100%',
  maxWidth: 1300,
  height: 580,
  border: 0
});

export const InputWrapper = styled(Box)(() => {
  return {
    display: 'grid',
    width: '100%',
    marginTop: 20
  };
});

export const TextField = styled('textarea')(() => {
  return {
    maxWidth: 1300,
    width: '100%',
    padding: '10px 10px 120px 10px',
    fontSize: 16,
    boxSizing: 'border-box',
    fontFamily: 'Open sans',
    resize: 'none',
    overflow: 'hidden',
    border: `1px solid #eae9e9`,
    backgroundColor: '#f7f7f7',
    color: '#626262'
  };
});

export const StyledForm = styled('form')(() => {
  return {
    maxWidth: 1300,
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    margin: '0 auto'
  };
});

export const ButtonSubmit = styled('button')(() => {
  return {
    width: '30%',
    height: 50,
    backgroundColor: '#3498db',
    color: '#fff',
    fontWeight: 600,
    fontSize: 16,
    border: 0,
    cursor: 'pointer',
    transition: ' .3s',
    marginTop: 24,

    '&:hover': {
      backgroundColor: '#2fa1ee'
    },

    '&:disabled': {
      backgroundColor: 'silver',
      cursor: 'default'
    }
  };
});

export const WrapperImg = styled('div')(() => {
  return {
    position: 'absolute'
  };
});

export const Error = styled('div')(({ theme }) => {
  return {
    color: theme.palette.error.main,
    fontSize: 14,
    marginTop: 6
  };
});

export const Label = styled('h2')(() => {
  return {
    fontSize: 14,
    color: '#959595',
    margin: '0 0 6px 0',
    fontWeight: 400
  };
});

export const Success = styled(Title)(() => {
  return {
    marginTop: 35
  };
});
