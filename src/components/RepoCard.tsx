import React from "react";

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { repoIntf } from "../data/Repo";

const RepoCard = (props: repoIntf) => {
  const [liked, setLiked] = useState(false);

  return (
    <Box
      w="400px"
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg={useColorModeValue("teritory", "secondary")}
      boxShadow={useColorModeValue("6px 6px 0 yellow", "6px 6px 0 greenyellow")}
      transition={"all 2s"}
      _hover={{
        boxShadow: useColorModeValue(
          "7px 7px 0 greenyellow",
          "7px 7px 0 yellow"
        ),
      }}
    >
      <Box h={"200px"}>
        <Img
          src={props.image}
          roundedTop={"md"}
          objectFit="cover"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </Box>
      <Box p={4}>
        {props.language?.map((lang: string) => {
          return (
            <Box
              bg="black"
              display={"inline-block"}
              px={2}
              py={1}
              color="white"
              mb={2}
            >
              <Text fontSize={"xs"} fontWeight="medium">
                {lang}
              </Text>
            </Box>
          );
        })}
        <Heading
          color={useColorModeValue("yellow", "highlight")}
          fontSize={"2xl"}
          noOfLines={1}
        >
          {props.title}
        </Heading>
        <Text color={"white"}>{props.descripition}</Text>
      </Box>
      <HStack borderTop={"1px"} color={"darkolivegreen"}>
        <Flex
          p={4}
          alignItems="center"
          justifyContent={"space-between"}
          roundedBottom={"sm"}
          cursor={"pointer"}
          w="full"
          color={"highlight"}
        >
          <a href={props.link1}>
            <Text fontSize={"md"} fontWeight={"semibold"}>
              Github
            </Text>
          </a>
          <BsArrowUpRight fontSize={"18px"} />
        </Flex>
        <Flex
          p={4}
          alignItems="center"
          justifyContent={"space-between"}
          roundedBottom={"sm"}
          borderLeft={"1px"}
          cursor="pointer"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <BsHeartFill fill="red" fontSize={"24px"} />
          ) : (
            <BsHeart fontSize={"24px"} />
          )}
        </Flex>
      </HStack>
    </Box>
    // </Center>
  );
};

export default RepoCard;
