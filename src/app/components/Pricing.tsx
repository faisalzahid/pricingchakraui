import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkmarkicon from "../icons/checkmarkicon";

export default function Pricing() {
  return (
    <Box
      maxW="950px"
      mx={"auto"}
      mt={"-70px"}
      bg={"white"}
      borderRadius="16px"
      overflow={"hidden"}
      shadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg={"#e0d7f1"} p="40px" textAlign={"center"}>
          <Text m="10px" fontSize={17} fontWeight={"bold"}>
            {" "}
            Premium Pro{" "}
          </Text>
          <Heading as={"h4"} m="10px">
            {" "}
            Rs 7,000{" "}
          </Heading>
          <Text> Billed Just Once</Text>
          <Text> No Annual Subscription</Text>
          <Button m="10px" bg={"#6B46C1"} color="white" w="300px">
            Get Started
          </Button>
        </Box>
        <Box pl={"70px"} pt="50px">
          <Text mb={"20px"}>
            {" "}
            Premium Pro Package Include Following Features{" "}
          </Text>

          <HStack mb="15px">
            <Icon as={checkmarkicon}> </Icon>
            <Text>International calling and messaging API </Text>
          </HStack>

          <HStack mb="15px">
            <Icon as={checkmarkicon}> </Icon>
            <Text>Additional phone numbers </Text>
          </HStack>

          <HStack mb="15px">
            <Icon as={checkmarkicon}> </Icon>
            <Text>Automated messages via Zapier </Text>
          </HStack>

          <HStack mb="15px">
            <Icon as={checkmarkicon}> </Icon>
            <Text>24/7 support and consulting </Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

//