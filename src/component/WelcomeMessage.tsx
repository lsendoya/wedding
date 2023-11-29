import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import { usePlayerSing } from '../store/player';

interface WelcomeMessageProps {}
interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      fontSize={{ base: '0.9rem', md: 'lg' }}
      w="50%"
      _hover={{
        bg: 'var(--button-hover)',
      }}
      onClick={onClick}
      bg={'var(--button-default)'}
      color={'var(--text-button)'}
      px={{ base: '0.4rem', md: '2rem' }}
      display={'block'}
    >
      {text}
    </Button>
  );
};

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
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent
        fontFamily={'serif'}
        textAlign="center"
        p={{ base: 3, md: 4, lg: 5 }}
      >
        <ModalHeader color={'var(--text-primary)'}>
          Estan cordialmente invitados a nuestro Matrimonio
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text
            color={'var(--text-secondary)'}
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            px={'1rem'}
            fontWeight="bold"
          >
            Nos complace contar con tu compañía.
          </Text>
        </ModalBody>

        <HStack gap={'1rem'} justifyContent={'center'} w={'100%'}>
          <ButtonComponent
            text="Ingresar con musica"
            onClick={handlePlusSing}
          />
          <ButtonComponent
            text="Ingresar sin musica"
            onClick={handleWhitoutSing}
          />
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeMessage;
