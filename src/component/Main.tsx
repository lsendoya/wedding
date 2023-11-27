import { Grid } from "@chakra-ui/react";
import WeddingCountdown from "./CountDown";
import FooterWedding from "./Footer";
import WeddingGallery from "./Gallery";
import WeddingInvitation from "./Invitacion";

import WeddingSchedule from "./Schedule";


const Main = () => {
  return (
    <Grid
      bgColor={"var(--background)"}
      w="100%"
      
      templateColumns={{ base: "repeat(1, 1fr)" }}
      gap={{ base: 4, md: 6, lg: 8 }}
      p={{ base: 4, md: 6, lg: 8 }}
    >
      <WeddingInvitation />
      <WeddingCountdown />
      <WeddingSchedule />
      <WeddingGallery />
      {/* <ToastWedding /> */}
      {/* <PartyWending /> */}
      <FooterWedding />
    </Grid>
  )
};

export default Main;
