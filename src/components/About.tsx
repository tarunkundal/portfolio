import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Profile from "../assets/tarun.jpg";

const About = () => {
  return (
    <Stack>
      <Heading textAlign={"center"} color={"highlight"}>
        About Me
      </Heading>
      <Stack
        mx={"15%"}
        my={"5%"}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-around"}
      >
        <Image src={Profile} alt="image" boxSize={"25%"} borderRadius={"3xl"} />
        <Stack>
          <Heading>
            I am,{" "}
            <Text as={"span"} color={useColorModeValue("primary", "teritory")}>
              Tarun Chauhan
            </Text>
          </Heading>
          <Text>
            I Love Working With Modern Technologies, Building And Designing
            Awesome Projects. I Prefer Minimalistic & Clean Designs With Strong
            User Experience.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
