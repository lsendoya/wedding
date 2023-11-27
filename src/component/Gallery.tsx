import { Heading, Text, Flex, Icon, Center, VStack } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa"; // Este es para el ícono de la cámara
import MyGallery from "./SlideImages";

const WeddingGallery = () => {
  return (
    <VStack backgroundColor="cream" my={"6rem"} p={10} w={"100%"} id="gallery" >
      <Flex direction="column" align="center" justify="center" mb={6}>
        <Heading as="h2" size="xl" mb={2} color={"var(--text-secondary)"}>
          Retratos de Nuestro Amor
        </Heading>
        <Text mb={4} fontSize="lg" textAlign="center" color={"var(--text-tertiary)"}>
          Un minuto, un segundo, un instante que queda para la eternidad
        </Text>
        <Center>
          <Icon as={FaCamera} w={10} h={10} color="black" />
        </Center>
      </Flex>

      <Flex  direction={{ base: "column", md: "row" }} gap={4}>
        <MyGallery />
      </Flex>
    </VStack>
  );
};

export default WeddingGallery;
