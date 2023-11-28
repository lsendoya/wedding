// import { Grid, Text, Button } from '@chakra-ui/react';

// interface WelcomeMessageProps {
//   onEnter: () => void;
// }

// const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ onEnter }) => {
//   return (
//     <Grid
//       textAlign="center"
//       p={{ base: 3, md: 4, lg: 5 }}
//       placeContent="center"
//       w="100%"
//       h="100vh"
//       gap={{ base: 2, md: 4, lg: 6 }}
//       bgColor={'var(--background)'}
//       color={'var(--text-primary)'}
//     >
//       <Text
//         fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
//         px={'1rem'}
//         fontWeight="bold"
//       >
//         Bienvenidos a la invitación de Luis y Dora.
//       </Text>
//       <Text
//         fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
//         fontWeight="bold"
//         mb={4}
//         px={'1rem'}
//       >
//         Nos complace contar con su compañía
//       </Text>

//       <Button
//         _hover={{
//           bg: 'var(--button-default)',
//         }}
//         onClick={onEnter}
//         size={{ base: 'md', md: 'lg' }}
//         bg={'var(--button-default)'}
//         color={'var(--text-button)'}
//       >
//         Ingresar
//       </Button>
//     </Grid>
//   );
// };

// export default WelcomeMessage;

import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { usePlayerSing } from '../store/player';

interface WelcomeMessageProps {}

const WelcomeMessage: React.FC<WelcomeMessageProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const setPlaying = usePlayerSing((state) => state.setPlaying);
  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handlePlusSing = () => {
    setPlaying(true);
    onClose();
  };
  const handleWhitoutSing = () => {
    setPlaying(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.900" />
      <ModalContent
        fontFamily={'serif'}
        textAlign="center"
        p={{ base: 3, md: 4, lg: 5 }}
      >
        <ModalHeader color={'var(--text-primary)'}>
          Bienvenidos a la invitación de Luis y Dora
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text
            color={'var(--text-secondary)'}
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            px={'1rem'}
            fontWeight="bold"
          >
            Nos complace contar con su compañía
          </Text>
        </ModalBody>

        <ModalFooter
          display={'flex'}
          gap={'1rem'}
          justifyContent={'center'}
          w={'100%'}
        >
          <Button
            _hover={{
              bg: 'var(--button-hover)',
            }}
            onClick={handlePlusSing}
            size={{ base: 'sm', md: 'lg' }}
            bg={'var(--button-default)'}
            color={'var(--text-button)'}
            fontSize={{ base: 'xs', md: 'lg' }}
            px={{ base: '1rem', md: '2rem' }}
          >
            Ingresar con musica
          </Button>
          <Button
            _hover={{
              bg: 'var(--button-hover)',
            }}
            onClick={handleWhitoutSing}
            size={{ base: 'sm', md: 'lg' }}
            bg={'var(--button-default)'}
            color={'var(--text-button)'}
            px={{ base: '1rem', md: '2rem' }}
            fontSize={{ base: 'xs', md: 'lg' }}
          >
            Ingresar sin musica
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeMessage;
