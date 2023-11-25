import { Flex,  VStack, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

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

const ToastWedding: React.FC = () => {
  return (
    <VStack w="100%" as="footer"  color="#3f650f"  py={"1rem"} >
      <Flex
        w="full"
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        maxW="6xl"
        mx="auto"
        px={{ base: 5, md: 10 }}
        textAlign={"center"}
      >
       
       
        <Image src={"/brindi.png"} w={{md:"50%"}} _hover={{
          animation: `${zoomIn} 1s ease forwards, ${flicker} 2s ease-in-out infinite`,
        }}/>
        
      </Flex>
    </VStack>
  );
};

export default ToastWedding;
