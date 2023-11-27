import {
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = () => {
  const { onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modal;
