import { Grid, Box } from '@chakra-ui/react';
import '../styles.css';

const Heartbeat = () => {
  return (
    <Grid
      w="100%"
      h={{ base: '100vh' }}
      bgColor={'var(--background)'}
      position="relative"
      placeContent="center"
    >
      <Box className="heartbeat"></Box>
    </Grid>
  );
};

export default Heartbeat;
