import { Grid } from "@chakra-ui/react";
import WeddingCountdown from "./CountDown";
import FooterWedding from "./Footer";
import WeddingGallery from "./Gallery";
import WeddingInvitation from "./Invitacion";
import PartyWending from "./Party";
import WeddingSchedule from "./Schedule";
import ToastWedding from "./ToastWedding";

const Main = () => {
  return (
    <Grid
      bgColor={"#F7FFE5"}
      w="100%"
      color="#262626"
      templateColumns={{ base: "repeat(1, 1fr)" }}
      gap={{ base: 4, md: 6, lg: 8 }}
      p={{ base: 4, md: 6, lg: 8 }}
    >
      <WeddingInvitation />
      <WeddingCountdown />
      <WeddingSchedule />
      <WeddingGallery />
      <ToastWedding />
      <PartyWending />
      <FooterWedding />
    </Grid>
  )
};

export default Main;
