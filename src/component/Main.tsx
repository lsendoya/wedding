import React, { Suspense } from 'react';

import { Box, VStack } from '@chakra-ui/react';

import FooterWedding from './Footer';
import WeddingSchedule from './Schedule';
import SkeletonC from './Skeleton';
import WelcomeMessage from './WelcomeMessage';
import AudioPlayer from './Song';
import WeddingInvitation from './Invitacion';

const LazyComponent = React.lazy(() => import('./CountDown'));
const LazyGallery = React.lazy(() => import('./Gallery'));

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
        <WeddingInvitation />
        <Suspense fallback={<SkeletonC />}>
          <LazyComponent />
        </Suspense>
        <WeddingSchedule />
        <Suspense fallback={<SkeletonC />}>
          <LazyGallery />
        </Suspense>
        <FooterWedding />
      </VStack>
    </Box>
  );
};

export default Main;
