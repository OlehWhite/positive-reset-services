import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import { Container } from './style';

export function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Container>
      <Box sx={{ width: '600px', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Container>
  );
}
