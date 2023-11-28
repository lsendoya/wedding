import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const SkeletonC = () => {
  return (
    <Box
      padding="6"
      boxShadow="lg"
      bg="white"
      w="full"
      h={{ base: '30rem', md: '40rem', lg: '60rem' }}
    >
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default SkeletonC;
