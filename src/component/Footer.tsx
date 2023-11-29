import { Flex, Text, VStack, Image } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const flicker = keyframes`
  0% { opacity: 0.9; }
  50% { opacity: 0.85; }
  100% { opacity: 0.9; }
`;

const zoomIn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const FooterWedding: React.FC = () => {
  return (
    <VStack
      w="100%"
      as="footer"
      color={'var(--text-primary)'}
      py={{ base: '3rem', md: '5rem' }}
      mb={'4rem'}
    >
      <Flex
        w="full"
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        align="center"
        maxW="6xl"
        mx="auto"
        px={{ base: 5, md: 10 }}
        textAlign={'center'}
      >
        <Text
          fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
          fontWeight="bold"
          mb={{ base: 5, md: 0 }}
        >
          Luis & Dora
        </Text>
        <Image
          loading="lazy"
          src={
            'https://res.cloudinary.com/dkcjwssqm/image/upload/v1701220462/np6tdlm9an4ohjusdzs8.png'
          }
          w={{ md: '60%' }}
          _hover={{
            animation: `${zoomIn} 1s ease forwards, ${flicker} 2s ease-in-out infinite`,
          }}
        />
      </Flex>
    </VStack>
  );
};

export default FooterWedding;
