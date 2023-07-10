import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  keyframes,
} from "@chakra-ui/react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const typing = keyframes` 
0% {
    transform: scale(0.33);
    width:0
  }
  40%,
  50% {
    opacity: .7;
  }
  100% {
    opacity: 0.1;
  }`;

const blinkCaret = keyframes` 
50% {
        borderColor: red;
    }`;

const Home = () => {
  return (
    <Stack gap={10} my={"auto"} mt={{ base: "15%", md: "10%" }}>
      <Center>
        <Heading size={{ base: "2xl", md: "3xl" }}>
          Hi, I'm{" "}
          <Heading
            size={{ base: "2xl", md: "4xl" }}
            as={"span"}
            color={"highlight"}
            whiteSpace={"nowrap"}
            // animation={` 2s ${typing}  steps(10, end), ${blinkCaret} 0.5s step-end infinite alternate`}
          >
            Tarun Chauhan
          </Heading>
        </Heading>
      </Center>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        mx={"10%"}
      >
        I'm a full-stack developer, specializing in MERN stack. I've completed
        several projects to skill up my knowledge in web-development. Please
        visit the about section to know more.
      </Text>

      <Center mt={{ base: "18", md: "55" }}>
        <Flex w={"25%"} justifyContent={"space-around"}>
          <Box
            transition="transform .2s"
            _hover={{
              color: "highlight",
              transform: "scale(1.3)",
            }}
          >
            <a href="https://www.instagram.com/chauhan271singh" target="blank">
              <FaInstagram fontSize={"2rem"} />
            </a>
          </Box>
          <Box
            transition="transform .2s"
            _hover={{
              color: "highlight",
              transform: "scale(1.3)",
            }}
          >
            <a href="https://www.github.com/tarunkundal" target="blank">
              <FaGithub fontSize={"2rem"} />
            </a>
          </Box>
          <Box
            transition="transform .2s"
            _hover={{
              color: "highlight",
              transform: "scale(1.3)",
            }}
          >
            <a href="https://www.linkedin.com" target="blank">
              <FaLinkedin fontSize={"2rem"} />
            </a>
          </Box>
        </Flex>
      </Center>
    </Stack>
  );
};

export default Home;
