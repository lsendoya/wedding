import {
  Text,
  Flex,
  VStack,
  Button,
  Box,
  Link,
  Container,
} from '@chakra-ui/react';

import { keyframes } from '@emotion/react';
import MapModal from './ModalMaps';

const flicker = keyframes`
  0% { opacity: 0.9; }
  50% { opacity: 0.85; }
  100% { opacity: 0.9; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

interface IAppointment {
  title?: string;
  time?: string;
  location?: string;
  address?: string;
  buttonText?: string;
  buttonLink?: string;
  urlImg?: string;
  lat: number;
  lng: number;
  zoom: number;
}

const CalendarButton: React.FC<{ link: string; buttonText: string }> = ({
  link,
  buttonText,
}) => (
  <Link href={link} isExternal>
    <Button
      title="Agendar"
      bg={'var(--button-default)'}
      color={'var(--text-button)'}
      w={'100%'}
    >
      {buttonText}
    </Button>
  </Link>
);

const AppointmentComponent: React.FC<IAppointment> = ({
  address,
  location,
  time,
  title,
  buttonText,
  buttonLink,
  urlImg,
  lat,
  lng,
  zoom,
}) => {
  return (
    <VStack
      w={{ base: '90%', md: '22rem' }}
      spacing={4}
      m={4}
      p={5}
      bgColor={'var(--background)'}
      borderRadius="lg"
      textAlign="center"
      boxShadow="md"
      _hover={{
        animation: `${fadeIn} 1s ease forwards, ${flicker} 2s ease-in-out infinite`,
      }}
      bgImage={urlImg}
      bgPos={'center'}
      bgBlendMode={'color-burn'}
    >
      <Text fontSize="xl" fontWeight="bold" color={'var(--text-primary)'}>
        {title}
      </Text>
      <Text color={'var(--text-tertiary)'}>Día</Text>
      <Text fontWeight="semibold" color={'var(--text-secondary)'}>
        Martes 02 de Enero - {time}hrs
      </Text>
      <Text color={'var(--text-tertiary)'}>Lugar</Text>
      <Text fontWeight="semibold" color={'var(--text-secondary)'}>
        {location}
      </Text>
      {buttonText && buttonLink && (
        <CalendarButton link={buttonLink} buttonText={buttonText} />
      )}
      <Text color={'var(--text-tertiary)'}>Dirección</Text>
      <Text w={'80%'} fontWeight="semibold" color={'var(--text-primary)'}>
        {address}
      </Text>
      <Box>
        <MapModal lat={lat} lng={lng} zoom={zoom} />
      </Box>
    </VStack>
  );
};

const WeddingSchedule = () => {
  return (
    <Container centerContent>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        pos="relative"
        id="schedule"
        fontFamily={'sans-serif'}
      >
        <AppointmentComponent
          {...infoChurch}
          buttonText="Agendar"
          buttonLink="https://www.addevent.com/event/qM19420001+google"
        />
        <AppointmentComponent
          {...infoParty}
          buttonText="Agendar"
          buttonLink="https://www.addevent.com/event/Xn19420021+google"
        />
      </Flex>
    </Container>
  );
};

const infoChurch = {
  title: 'Ceremonia',
  time: '13',
  location: 'Parroquia El Señor de la Misericordia',
  address: 'cll 44a # 48a-28 Barrio Arcoiris - El Santuario- Antioquia',
  urlImg: 'corner-left.png',
  lat: 6.134643389350223,
  lng: -75.26719449604973,
  zoom: 19,
};

const infoParty = {
  title: 'Recepción',
  time: '14',
  location: 'Bendito Campestre',
  address: 'Vereda pantanillo finca 16 - El Santuario- Antioquia',
  urlImg: 'corner-rigth.png',
  lat: 6.146872172871273,
  lng: -75.2879014,
  zoom: 15,
};

export default WeddingSchedule;
