import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

interface MapModalProps {
  lat: number;
  lng: number;
  zoom: number;
}

const containerStyle = {
  width: '22rem',
  height: '24rem',
};

const MapModal: React.FC<MapModalProps> = ({ lat, lng, zoom }) => {
  const center = { lat, lng };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_API_MAP,
  });

  if (loadError) {
    return <Text>Error al cargar el mapa</Text>;
  }

  return (
    <>
      <Button
        textDecoration="underline"
        variant="link"
        color={'var(--text-countDown)'}
        onClick={onOpen}
      >
        ¿Cómo llegar?
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent fontFamily={'sans-serif'}>
          <ModalHeader>Ubicación</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={'flex'} justifyContent={'center'}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <Spinner />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MapModal;
