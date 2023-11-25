import { Text, VStack, Divider, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import TypingAnimation from "./Typing";

const flicker = keyframes`
  0% { opacity: 0.9; }
  50% { opacity: 0.85; }
  100% { opacity: 0.9; }
`;

const zoomIn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;
function WeddingInvitation() {
  return (
    <VStack
      w="100%"
      h={{ base: "30rem", md: "40rem", lg: "60rem" }}
      spacing={4}
      align="center"
      justify="center"
      color="brown"
      p={8}
      marginY={8}
      pos="relative"
      id="invitation"
    >
      <Image
        src="/vertical-ramo.png"
        position="absolute"
        h={{ base: "45rem", md: "60rem", lg: "80rem" }}
        w={{ base: "80%", md: "30%", lg: "50%" }}
        left={{ base: "-5rem", md: "2rem", lg: "-6rem" }}
        top={{ base: "-8rem", md: "-8rem" }}
        _hover={{
          animation: `${zoomIn} 1s ease forwards, ${flicker} 2s ease-in-out infinite`,
        }}
      />
      <Image
        src="/ring.png"
        position="absolute"
        h={{ base: "10rem", md: "30rem", lg: "20rem" }}
        w={{ base: "auto", md: "25%", lg: "15%" }}
        right={{ base: "2rem", md: "5rem", lg: "10rem" }}
        _hover={{
          animation: `${zoomIn} 1s ease forwards, ${flicker} 2s ease-in-out infinite`,
        }}
      />

      <VStack color="#3f650f" justifyContent={"center"}>
        <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight="light">
          02.01.2024
        </Text>
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          fontFamily="cursive"
        >
          Luis
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          fontFamily="cursive"
        >
          &
        </Text>
        <Text
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          fontFamily="cursive"
        >
          Dora
        </Text>
      </VStack>
      <Divider
        w={{ md: "28rem", lg: "36rem" }}
        display={{base:"none", md:"block"}}
        borderColor="black"
      />
      <TypingAnimation/>
    </VStack>
  );
}

export default WeddingInvitation;
