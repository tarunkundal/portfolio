import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
            bgClip="text"
            bgGradient={[
              "linear(to-tr, teal.300, secondary)",
              "linear(to-t, primary, secondary)",
              "linear(to-b, teritory, highlight)",
            ]}
            _hover={{
              bgGradient: [
                "linear(to-l, teritory, highlight)",
                "linear(to-r,primary,secondary)",
              ],
            }}
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
          <Box _hover={{ color: "highlight" }}>
            <a href="https://www.instagram.com/chauhan271singh" target="blank">
              <FaInstagram fontSize={"2rem"} />
            </a>
          </Box>
          <Box _hover={{ color: "highlight" }}>
            <a href="https://www.github.com/tarunkundal" target="blank">
              <FaGithub fontSize={"2rem"} />
            </a>
          </Box>
          <Box _hover={{ color: "highlight" }}>
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
