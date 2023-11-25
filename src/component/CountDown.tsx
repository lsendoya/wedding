import React, { useState, useEffect, useCallback } from "react";
import { Grid, Text, Flex, VStack, Image } from "@chakra-ui/react";

interface TimeLeft {
  días: number;
  hs: number;
  min: number;
  seg: number;
}

type TimeLeftObject = {
  [key in keyof TimeLeft]?: number;
};

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeftObject => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeftObject = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeftObject>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDate, calculateTimeLeft]);

  const timeComponents: React.ReactNode = Object.keys(timeLeft).map(
    (interval) => {
      if (!timeLeft[interval]) {
        return null;
      }
      return (
        <VStack
          key={interval}
          w={{ base: "3rem", md: "5rem", lg: "6rem" }}
          h={{ base: "auto", md: "5rem", lg: "6rem" }}
          color="#3f650f"
        >
          <Text
            fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
          >
            {timeLeft[interval]}
          </Text>
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>
            {interval.toUpperCase()}
          </Text>
        </VStack>
      );
    }
  );

  return (
    <VStack w="100%" justify="center" align="center" pos="relative">
      <VStack
        position="relative"
        borderRadius="full"
        p="4"
        w={{ base: "full" }}
        h={{ base: "9rem" }}
        textAlign="center"
        gap={0}
        align={"center"}
        justifyContent={"center"}
      >
        <Text
          fontSize={{ base: "sm", md: "xl", lg: "2xl" }}
          fontWeight="bold"
          color="#3f650f"
        >
          Falta
        </Text>
        <Flex justify="center" align="center">
          {timeComponents}
        </Flex>
      </VStack>
    </VStack>
  );
};

const WeddingCountdown: React.FC = () => {
  const weddingDate = "2024-01-02T13:00:00";

  return (
    <Grid
      h={{ base: "20rem", md: "30rem", lg: "30rem" }}
      color="gold"
      p={8}
      rounded="lg"
      textAlign="center"
      pos="relative"
      placeContent={"center"}
      mb={"4rem"}
      id="countdown"
    >
      <Image
        position="absolute"
        h={{base:"14rem", md: "20rem", lg: "30rem" }}
        w={{base:"full", md: "20%", lg: "auto" }}
        src="/rectangle-count-down.png"
        bottom={{ base: "2.8rem", md: "12rem", lg: "-2rem" }}
        left={{ base: "-0.2rem", md: "40%", lg: "18%" }}
        
      />
      <Countdown targetDate={weddingDate} />
    </Grid>
  );
};

export default WeddingCountdown;
