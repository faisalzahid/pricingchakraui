"use client";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function header() {
  return (
    <Box
      bg={"#6B46C1"}
      textAlign={{ base: "left", md: "left", lg: "center" }}
      textColor={"white"}
      pt={"80px"}
      pb={"100px"}
    >
      <Heading> Faisal's Pricing UI with Chakra </Heading>
      <Text mt={"20px"}>
        Plan's that provide you Best Services at affordable Rate's{" "}
      </Text>
    </Box>
  );
}
