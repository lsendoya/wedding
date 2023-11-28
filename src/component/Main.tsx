import React, { Suspense } from 'react';

import { Box, VStack } from '@chakra-ui/react';

import WeddingCountdown from './CountDown';
import FooterWedding from './Footer';
import WeddingGallery from './Gallery';
import WeddingSchedule from './Schedule';
import SkeletonC from './Skeleton';
import WelcomeMessage from './WelcomeMessage';
import AudioPlayer from './Song';

const LazyComponent = React.lazy(() => import('./Invitacion'));

const Main = () => {
  return (
    <Box pos={'relative'}>
      <WelcomeMessage />
      <AudioPlayer />
      <VStack
        bgColor={'var(--background)'}
        w="100%"
        justify={'center'}
        alignItems={'center'}
        pt={{ base: '2rem' }}
      >
        <Suspense fallback={<SkeletonC />}>
          <LazyComponent />
        </Suspense>
        <WeddingCountdown />
        <WeddingSchedule />
        <WeddingGallery />
        <FooterWedding />
      </VStack>
    </Box>
  );
};

export default Main;
