import { styled, Box } from '@mui/material';
import Input from '../Input';

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 480,
    width: '100%'
  };
});

export const InputWrapper = styled(Box)(() => {
  return {
    display: 'grid',
    width: '100%',
    marginTop: 20
  };
});

export const StyledInput = styled(Input)(() => {
  return {
    borderRadius: 0,
    height: 26,
    fontSize: 16,
    border: `1px solid #eae9e9`,
    backgroundColor: '#f7f7f7',
    color: '#626262'
  };
});

export const Title = styled('h2')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 700,
    color: '#3498db',
    margin: 0
  };
});

export const TextField = styled('textarea')(() => {
  return {
    maxWidth: 600,
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
    maxWidth: 476,
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

export const Text = styled('span')(() => {
  return {
    marginLeft: 6
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
    marginTop: 20
  }
})
