import React, { Suspense } from 'react';
import { Text, VStack, Divider, Image, BoxProps } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import TypingAnimation from './Typing';
import SkeletonC from './Skeleton';

interface TextComponentProps extends BoxProps {
  text: string;
}

const TextComponent: React.FC<TextComponentProps> = ({ text, ...props }) => (
  <Text
    textAlign="center"
    fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
    fontWeight="bold"
    color="var(--text-primary)"
    {...props}
  >
    {text}
  </Text>
);

const flickerAnimation = keyframes`
  from, to { opacity: 0.9; }
  50% { opacity: 0.85; }
`;

const zoomInAnimation = keyframes`
  from, to { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const useAnimationStyles = () => {
  return {
    flicker: `${flickerAnimation} 2s ease-in-out infinite`,
    zoomIn: `${zoomInAnimation} 1s ease forwards`,
    hover: {
      '&:hover': {
        animation: `${zoomInAnimation} 1s ease forwards, ${flickerAnimation} 2s ease-in-out infinite`,
      },
    },
  };
};

const WeddingInvitation: React.FC = () => {
  const { hover } = useAnimationStyles();

  return (
    <VStack
      w="full"
      h={{ base: '30rem', md: '40rem', lg: '60rem' }}
      alignItems={{ base: 'flex-end', md: 'center' }}
      justifyContent={{ base: 'center', md: 'center' }}
      color="brown"
      mb={{ base: '8rem', md: '12rem' }}
      position="relative"
      spacing={4}
    >
      <Suspense fallback={<SkeletonC />}>
        <Image
          src="/vertical-ramo.png"
          position="absolute"
          h={{ base: '46rem', md: '60rem', lg: '80rem' }}
          w={{ base: 'full', md: '30%', lg: '50%' }}
          left={{ base: '-6.2rem', md: '2rem', lg: '-6rem' }}
          top={{ base: '-8rem', lg: '-10rem' }}
          alt="Floral decoration"
          sx={hover}
        />
      </Suspense>

      <Image
        src="/ring.png"
        display={{ base: 'none', md: 'block' }}
        h={{ md: '30rem', lg: '20rem' }}
        w={{ md: '25%', lg: '15%' }}
        position="absolute"
        top="16rem"
        right={{ md: '5rem', lg: '10rem' }}
        alt="Wedding ring"
        sx={hover}
      />

      <VStack
        w={{ base: '70%', md: 'full' }}
        alignItems={{ base: 'center', md: 'center' }}
        spacing={4}
      >
        <TextComponent
          text="02.01.2024"
          pl={{ base: '1em', md: '4rem', lg: '0' }}
        />
        <TextComponent text="Luis" />
        <TextComponent text="&" />
        <TextComponent text="Dora" />

        <Divider
          w={{ md: '28rem', lg: '36rem' }}
          display={{ base: 'none', md: 'block' }}
          borderColor="black"
        />

        <TypingAnimation />
      </VStack>
    </VStack>
  );
};

export default WeddingInvitation;
