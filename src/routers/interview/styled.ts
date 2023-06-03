import { Box, styled } from '@mui/material';
import IMGHeader from '../../assets/icons/Interview.jpg';

export const Main = styled(Box)(() => {
  return {
    width: '100%'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 1300,
    margin: '0 auto',
    marginTop: 70
  };
});

export const Block = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 60,

    '@media (max-width: 1090px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const BlockOne = styled(Box)(() => {
  return {
    marginTop: 40
  };
});

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
    margin: 0,
    fontSize: 26
  };
});

export const Img = styled('img')(() => {
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

export const WrapperBlock = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: 630
  };
});

export const Ul = styled('ul')(() => {
  return {
    margin: '0 auto 50px',
    maxWidth: 880,
    backgroundColor: '#f5f5f5',
    padding: '25px 50px',
  };
});

export const Li = styled('li')(() => {
  return {
    color: ' #959595',
    lineHeight: '26px',
    fontSize: 14,
    paddingBottom: 20
  };
});
