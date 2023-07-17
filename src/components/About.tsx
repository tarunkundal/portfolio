import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Profile from "../assets/tarun.jpg";
import Icon from "../assets/icon.8ecb3043.svg";

export const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  50% {
    opacity: .7;
  }
  40%{
    opacity:.4
  }
  100% {
    opacity: 0;
  }
	`;

const About = () => {
  return (
    <Stack
      bgImage={useColorModeValue(
        "url('https://img.freepik.com/free-vector/watercolor-emerald-background_23-2150270303.jpg?w=1800&t=st=1689221539~exp=1689222139~hmac=4616fc0609df6f63192c4f5b47f61b122aa40c52bea8274a3f1f43aadb7793f2')",
        ""
      )}
    >
      <Box position={"absolute"} zIndex={-1} w={"100%"}>
        <video autoPlay loop muted width={"100%"}>
          <source
            src="https://v4.cdnpk.net/videvo_files/video/free/video0485/large_watermarked/_import_61b4426beee026.13798649_FPpreview.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <Heading
        bgGradient={"linear(to-tr,primary,secondary,highlight,teritory)"}
        bgClip={"text"}
        m={"5%"}
      >
        About Me
      </Heading>
      <Stack
        mx={{ base: "5%", md: "15%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={{ base: 12, md: 4 }}
      >
        <Image
          src={Profile}
          alt="image"
          boxSize={{ base: "35%", md: "30%" }}
          rounded={"full"}
          opacity={0.8}
          animation={`3s ${pulseRing}  cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s `}
        />
        <Stack
          textAlign={"center"}
          justifyContent={"space-around"}
          gap={{ base: 6, md: 12 }}
        >
          <Heading>
            Hello I'm,{" "}
            <Text as={"span"} color={"highlight"}>
              Tarun Chauhan
            </Text>
          </Heading>
          <Text fontSize={{ md: "22px" }}>
            I'm a Full Stack developer hailing from India living in Gurugram. I
            Love Working With Modern Technologies, Building And Designing
            Awesome Projects. I Prefer Minimalistic & Clean Designs With Strong
            User Experience. I specialize in MERN stack, and comfortable in
            working in any related roles. Perosnally, I'm highly motivated and
            have a keen interest in development.
          </Text>
        </Stack>
      </Stack>

      <Stack
        bgImage={
          "url('https://img.freepik.com/premium-photo/green-tropical-leaf-dark-background_392895-104334.jpg?size=626&ext=jpg')"
        }
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
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
          p={2}
          // bg={
          //   "url('https://v4.cdnpk.net/videvo_files/video/free/video0485/large_watermarked/_import_61b4426beee026.13798649_FPpreview.mp4')"
          // }
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
            <Text textAlign={"left"}>
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
            <Text textAlign={"left"}>
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
            <Text textAlign={"left"}>
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
