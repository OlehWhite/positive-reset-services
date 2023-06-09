import { Box, styled } from '@mui/material';
import IMGHeader from '../../assets/icons/Integration-Background.jpg';

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

export const Container = styled('main')(() => {
  return {
    width: '100%',
    maxWidth: 1300,
    margin: '0 auto 35px'
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

export const Text = styled('p')(() => {
  return {
    fontSize: 16,
    lineHeight: '26px',
    color: '#959595'
  };
});

export const Info = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: 650,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
});

export const Img = styled('img')(() => {
  return {
    width: '100%',
    maxWidth: 625
  };
});

export const ImgLow = styled('img')(() => {
  return {
    maxWidth: 85,
    borderRadius: '50px'
  };
});

export const Post = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 35,

    '@media (max-width: 1070px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

export const Ul = styled('ul')(() => {
  return {
    padding: '0 20px 0',
    marginLeft: 10
  };
});

export const Li = styled('li')(() => {
  return {
    padding: '6px 0',
    color: '#959595'
  };
});

export const Block = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
});

export const TitleLow = styled('h2')(() => {
  return {
    fontSize: 16,
    color: ' #373737'
  };
});

export const TextLow = styled('p')(() => {
  return {
    fontSize: 14,
    lineHeight: '26px',
    color: '#959595;',
    width: '100%',
    maxWidth: 545
  };
});

export const WrapperBlock = styled(Box)(() => {
  return {};
});
