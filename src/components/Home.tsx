import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  keyframes,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const typing = keyframes` 
width:"0"`;

const blinkCaret = keyframes` 
50% {
        
    }`;

const Home = () => {
  return (
    <Box
      bgImg={useColorModeValue(
        "url('https://img.freepik.com/free-vector/green-futuristic-microchip-background-information-digital-transformation_53876-119571.jpg?size=626&ext=jpg&ga=GA1.1.823988085.1685946705&semt=ais')",
        "url('https://img.freepik.com/free-vector/vector-fiery-green-hairs-background_1217-2741.jpg?size=626&ext=jpg&ga=GA1.1.823988085.1685946705&semt=ais')"
        // "url('https://img.freepik.com/premium-photo/green-smoke_44272-5209.jpg?size=626&ext=jpg')"
      )}
      w={"100vw"}
      h={"100vh"}
      position={"absolute"}
      bgSize={"cover"}
    >
      <Stack gap={10} my={"auto"} mt={{ base: "15%", md: "10%" }}>
        <Center>
          <Heading size={{ base: "2xl", md: "3xl" }}>
            Hi, I'm{" "}
            <Heading
              size={{ base: "2xl", md: "4xl" }}
              as={"span"}
              color={"highlight"}
              animation={` 2s ${typing}  steps(10, end), ${blinkCaret} 0.5s step-end infinite alternate`}
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
              <a
                href="https://www.instagram.com/chauhan271singh"
                target="blank"
              >
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
    </Box>
  );
};

export default Home;
