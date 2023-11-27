import React, { useState, useEffect, useCallback } from "react";
import { Grid, Text, Flex, VStack } from "@chakra-ui/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  const timeComponents = Object.entries(timeLeft).map(([unit, value]) => (
    <VStack
      alignItems={"center"}
      justify={"center"}
      key={unit}
      w={{ base: "4rem", md: "5rem", lg: "6rem" }}
      h={{ base: "auto", md: "5rem", lg: "6rem" }}
      
    >
      <Text fontSize={{ base: "xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
        {value}
      </Text>
      <Text fontSize={{ base: "xs", md: "md", lg: "lg" }} px="0.5rem">
        {unit.toUpperCase()}
      </Text>
    </VStack>
  ));

  return (
    <VStack w="100%" justify="center" align="center">
      <VStack
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
          color={"var(--text-countDown)"}
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
      color={"var(--text-primary)"}
      w={{ base: "100%" }}
      h={{ base: "20rem", md: "40rem", lg: "40rem" }}
      p={{ base: "2rem", md: "12rem" }}
      rounded="lg"
      textAlign="center"
      pos="relative"
      placeContent={"center"}
      mb={"4rem"}
      id="countdown"
      bgImage={"rectangle-count-down.png"}
      bgPos={"center"}
      bgSize={"cover"}
    >
      <Countdown targetDate={weddingDate} />
    </Grid>
  );
};

export default WeddingCountdown;
