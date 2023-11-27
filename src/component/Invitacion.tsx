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
        h={{ base: "46rem", md: "60rem", lg: "80rem" }}
        w={{ base: "100%", md: "30%", lg: "50%" }}
        left={{ base: "-5rem", md: "2rem", lg: "-6rem" }}
        top={{ base: "-8rem", md: "-8rem" }}
        _hover={{
          animation: `${zoomIn} 1s ease forwards, ${flicker} 2s ease-in-out infinite`,
        }}
      />
      <Image
        src="/ring.png"
        position="absolute"
        display={{ base: "none", md: "block" }}
        h={{ base: "10rem", md: "30rem", lg: "20rem" }}
        w={{ base: "auto", md: "25%", lg: "15%" }}
        right={{ base: "2rem", md: "5rem", lg: "10rem" }}
        _hover={{
          animation: `${zoomIn} 1s ease forwards, ${flicker} 2s ease-in-out infinite`,
        }}
      />

      <VStack w={{ base: "100%" }} color="#3f650f" justifyContent={{base:"end", md:"center"}}>
        <Text
          w={{ base: "100%" }}
          textAlign={{ base: "end", md:"center" }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="light"
          pr={{ base: "8%", md: "4rem", lg: "6rem" }}
        >
          02.01.2024
        </Text>
        <Text
          w={{ base: "100%" }}
          textAlign={{ base: "end", md:"center" }}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          fontFamily="cursive"
          pr={{ base: "14%", md: "4rem", lg: "6rem" }}
        >
          Luis
        </Text>
        <Text
          w={{ base: "100%" }}
          textAlign={{ base: "end", md:"center" }}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          fontFamily="cursive"
          pr={{ base: "22%", md: "4rem", lg: "6rem" }}
        >
          &
        </Text>
        <Text
          w={{ base: "100%" }}
          textAlign={{ base: "end", md:"center" }}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          fontFamily="cursive"
          pr={{ base: "14%", md: "4rem", lg: "6rem" }}
        >
          Dora
        </Text>
      </VStack>
      <Divider
        w={{ md: "28rem", lg: "36rem" }}
        display={{ base: "none", md: "block" }}
        borderColor="black"
      />
      <TypingAnimation />
    </VStack>
  );
}

export default WeddingInvitation;
