import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Profile from "../assets/tarun.jpg";
import Icon from "../assets/icon.8ecb3043.svg";

const About = () => {
  return (
    <Stack m={"5%"}>
      <Heading
        bgGradient={"linear(to-tr,primary,secondary,highlight,teritory)"}
        bgClip={"text"}
      >
        About Me
      </Heading>
      <Stack
        mx={{ base: "5%", md: "15%" }}
        my={"5%"}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={{ base: 12, md: 4 }}
      >
        <Image
          src={Profile}
          alt="image"
          boxSize={{ base: "30%", md: "25%" }}
          borderRadius={"3xl"}
        />
        <Stack
          textAlign={"center"}
          justifyContent={"space-around"}
          gap={{ base: 6, md: 12 }}
        >
          <Heading>
            I am,{" "}
            <Text as={"span"} color={"highlight"}>
              Tarun Chauhan
            </Text>
          </Heading>
          <Text>
            I'm a Full Stack developer hailing from India living in Gurugram. I
            Love Working With Modern Technologies, Building And Designing
            Awesome Projects. I Prefer Minimalistic & Clean Designs With Strong
            User Experience. I specialize in MERN stack, and comfortable in
            working in any related roles. Perosnally, I'm highly motivated and
            have a keen interest in development.
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Heading
          textAlign={"center"}
          color={useColorModeValue("teritory", "secondary")}
          m={5}
        >
          Services
        </Heading>
        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <Stack
            w={{ base: "100%", md: "30%" }}
            gap={6}
            textAlign={"center"}
            alignItems={"center"}
            _hover={{
              borderTop: "4px",
              cursor: "pointer",
            }}
          >
            <Image src={Icon} alt="img" boxSize={"50%"} />
            <Heading color={"highlight"}>Full Stack Developer</Heading>
            <Text>
              As a full stack developer, I specialize in MERN stack, and build
              modern & scalable websites from scratch. To see my work on MERN
              stack please visit the Portfolios section.
            </Text>
          </Stack>
          <Stack
            w={{ base: "100%", md: "30%" }}
            gap={6}
            textAlign={"center"}
            alignItems={"center"}
            _hover={{
              borderTop: "4px",
              cursor: "pointer",
            }}
          >
            <Image src={Icon} alt="img" boxSize={"50%"} />
            <Heading color={"highlight"}>Frontend Developer</Heading>
            <Text>
              As a frontend developer, I specialize in React JS frontend
              framework. Which is one of the most used and preferred
              technologies for frontend development. To see my work on React JS
              please visit the Portfolios section.
            </Text>
          </Stack>
          <Stack
            w={{ base: "100%", md: "30%" }}
            gap={6}
            textAlign={"center"}
            alignItems={"center"}
            _hover={{
              borderTop: "4px",
              cursor: "pointer",
            }}
          >
            <Image src={Icon} alt="img" boxSize={"50%"} />
            <Heading color={"highlight"}>Backend Developer</Heading>
            <Text>
              As a backend developer, I specialize in Node Js run time, Express
              Js framework & MongoDB database, to build REST APIs for seemless
              support to the frontend technologies. To see my work on backend
              technologies please visit the Portfolios section.
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default About;
