import { Grid, Text, Button } from "@chakra-ui/react";

interface WelcomeMessageProps {
  onEnter: () => void;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ onEnter }) => {
  return (
    <Grid
      textAlign="center"
      p={{ base: 3, md: 4, lg: 5 }}
      placeContent="center"
      w="100%"
      h="100vh"
      gap={{base: 2, md: 4, lg: 6}}
      bgColor={"#f7ffe5"}
      color={"var(--text-primary)"}
    >
      <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} px={"1rem"} fontWeight="bold" >
        Bienvenidos a la invitación de Luis y Dora.
      </Text>
      <Text
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        fontWeight="bold"
        mb={4}
        px={"1rem"}
      >
        Nos complace contar con su compañía
      </Text>

      <Button _hover={{
        bg: "var(--button-default)"
      }} onClick={onEnter} size={{ base: "md", md: "lg" }} bg={"var(--button-default)"} color={"var(--text-button)"}>
        Ingresar
      </Button>
    </Grid>
  );
};

export default WelcomeMessage;
