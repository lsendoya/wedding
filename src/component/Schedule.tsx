import {
  Text,
  Flex,
  VStack,
  Button,
  Link,
  Image,
  Container,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";
import { keyframes } from "@emotion/react";

const flicker = keyframes`
  0% { opacity: 0.9; }
  50% { opacity: 0.85; }
  100% { opacity: 0.9; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const zoomIn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

interface IAppointment {
  title?: string;
  time?: string;
  location?: string;
  address?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CalendarButton: React.FC<{ link: string; buttonText: string }> = ({
  link,
  buttonText,
}) => (
  <Link href={link} isExternal>
    <Button
      title="Agendar"
      colorScheme="#4e810a"
      bgColor={"#65aa06"}
      color={"#f7ffe5"}
      w={"100%"}
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
}) => {
  return (
    <VStack
      w={{ base: "90%", md: "22rem" }}
      spacing={4}
      m={4}
      p={5}
      bgColor={"#edfec9"}
      borderRadius="lg"
      textAlign="center"
      boxShadow="md"
      _hover={{
        animation: `${fadeIn} 1s ease forwards, ${flicker} 2s ease-in-out infinite`,
      }}
    >
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text>Día</Text>
      <Text fontWeight="semibold">Martes 02 de Enero - {time}hrs</Text>
      <Text>LUGAR</Text>
      <Text fontWeight="semibold">{location}</Text>
      {buttonText && buttonLink && (
        <CalendarButton link={buttonLink} buttonText={buttonText} />
      )}
      <Text>DIRECCIÓN</Text>
      <Text w={"80%"} fontWeight="semibold">
        {address}
      </Text>
      <Link href="#" isExternal>
        ¿Cómo llegar? <ExternalLinkIcon mx="2px" />
      </Link>
    </VStack>
  );
};

const WeddingSchedule = () => {
  return (
    <Container centerContent>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        pos="relative"
        color="#3f650f"
        id="schedule"
      >
        <Image
          src="/vela.png"
          pos={{ md: "absolute" }}
          display={{ base: "none", md: "block" }}
          left={["-14rem", "-7rem", "-7rem", "-14rem"]}
          h={{ base: "10rem", md: "100%" }}
          _hover={{
            animation: `${zoomIn} 0.5s ease-in-out infinite`,
          }}
        />
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
        <Image
          pos={{ md: "absolute" }}
          display={{ base: "none", md: "block" }}
          src="/wine.png"
          right={["-16rem", "-8rem", "-8rem", "-16rem"]}
          top={["-10rem", "-5rem", "-5rem", "-10rem"]}
          h={{ base: "10rem", md: "100%" }}
          w={{ base: "40%", md: "auto" }}
          _hover={{
            animation: `${zoomIn} 0.5s ease-in-out infinite`,
          }}
        />
      </Flex>
    </Container>
  );
};

const infoChurch = {
  title: "Ceremonia",
  time: "13",
  location: "Parroquia El Señor de la Misericordia",
  address: "cll 44a # 48a-28 Barrio Arcoiris - El Santuario- Antioquia",
};

const infoParty = {
  title: "Recepción",
  time: "15",
  location: "Bendito Campestre",
  address: "Vereda pantanillo finca 16 - El Santuario- Antioquia",
};

export default WeddingSchedule;
