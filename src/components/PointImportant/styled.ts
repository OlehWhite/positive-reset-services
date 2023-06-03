import { Box, styled, Typography, Accordion as MUIAccordion } from '@mui/material';

export const Container = styled(Box)({
  background: 'transparent',
  margin: '50px auto 0',
});

export const BoxAccordion = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

export const Accordion = styled(MUIAccordion)(({ theme }) => {
  return {
    '&:before': {
      backgroundColor: 'transparent'
    },
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      '-5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)',
    marginBottom: '24px',
    width: '100%',
    maxWidth: 1300,
    transition: '.3s',

    '&:hover': {
      transition: '.3s',
      background: '#3498db33'
    }
  };
});

export const TypographyQuestion = styled(Typography)(() => {
  return {
    color: '#6a767e',
    fontWeight: 600,
    fontSize: 14
  };
});

export const TypographyText = styled(Typography)(() => {
  return {
    color: '#959595',
    fontSize: 14,
    lineHeight: '26px',
    fontWeight: 400
  };
});
