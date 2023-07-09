import React from "react";

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";

const RepoCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg={useColorModeValue("primary", "secondary")}
        boxShadow={useColorModeValue(
          "6px 6px 0 yellow",
          "6px 6px 0 greenyellow"
        )}
        _hover={{
          boxShadow: useColorModeValue(
            "7px 7px 0 greenyellow",
            "7px 7px 0 yellow"
          ),
        }}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black">
          <Img
            src={"https://avatars.githubusercontent.com/u/116143264?v=4"}
            roundedTop={"sm"}
            objectFit="cover"
            h="full"
            w="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4}>
          <Box
            bg="black"
            display={"inline-block"}
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text fontSize={"xs"} fontWeight="medium">
              React
            </Text>
          </Box>
          <Heading
            color={useColorModeValue("secondary", "highlight")}
            fontSize={"2xl"}
            noOfLines={1}
          >
            React v18.0
          </Heading>
          <Text color={useColorModeValue("blackAlpha.600", "white")}>
            In this post, we will give an overview of what is new in React 18,
            and what it means for the future.
          </Text>
        </Box>
        <HStack borderTop={"1px"} color={"darkolivegreen"}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            <Text fontSize={"md"} fontWeight={"semibold"}>
              Github
            </Text>
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
    </Center>
  );
};

export default RepoCard;
