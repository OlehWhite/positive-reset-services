import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import { Container, Wrapper } from './style';

export function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Container>
      <Wrapper>
        <LinearProgress variant="determinate" {...props} sx={{ height: 9 }} />
      </Wrapper>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="subtitle1" color="secondary.contrastText">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Container>
  );
}
