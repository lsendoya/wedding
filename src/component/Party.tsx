import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Button,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaMusic, FaBlackTie, FaList } from 'react-icons/fa';

interface InfoCardProps {
  icon: IconType;
  title: string;
  text: string;
  buttonText: string;
  widht?: string;
}

const PartyWending = () => {
  return (
    <HStack w="100%" justify={'center'} id="party">
      <Box bg="white" p={6} w="80%">
        <VStack spacing={'1rem'}>
          <Heading as="h1" size="xl" textAlign="center" color={'#4e810a'}>
            Recepción
          </Heading>
          <Text fontSize="lg" my="1rem" color={'#3f650f'}>
            Hagamos juntos una agradable recepción. Aquí algunos detalles a
            tener en cuenta.
          </Text>
        </VStack>

        <Flex wrap={'wrap'} justify={'center'} alignItems={'center'} gap={8}>
          {' '}
          <InfoCard
            icon={FaMusic}
            title="MÚSICA"
            text="¿Cuál es la canción que no debe faltar en la playlist de la fiesta?"
            buttonText="Sugerir Canción"
            widht="90%"
          />
          <InfoCard
            icon={FaBlackTie}
            title="DRESS CODE"
            text="Una orientación para tu vestuario"
            buttonText="Ver Más"
            widht="70%"
          />
          <InfoCard
            icon={FaList}
            title="TIPS Y NOTAS"
            text="Información adicional para tener en cuenta"
            buttonText="+ Info"
            widht="70%"
          />
        </Flex>
      </Box>
    </HStack>
  );
};

const InfoCard = ({ icon, title, text, buttonText, widht }: InfoCardProps) => {
  const IconComponent = icon;
  return (
    <VStack
      bg={useColorModeValue('peachpuff', 'darkgray')}
      p={5}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      w={{ base: '16rem' }}
      my={4}
      bgColor={'#edfec9'}
    >
      <IconComponent size="3em" color="#3f650f" />
      <Text fontSize="xl" fontWeight="semibold" color={'#4e810a'}>
        {title}
      </Text>
      <Text
        w={widht}
        h={'4rem'}
        textAlign={'center'}
        fontSize={'small'}
        my={4}
        color={'#3f650f'}
      >
        {text}
      </Text>
      <Button
        colorScheme="teal"
        bgColor={'#3f650f'}
        variant="solid"
        w="70%"
        fontSize={'medium'}
      >
        {buttonText}
      </Button>
    </VStack>
  );
};

export default PartyWending;
