import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import PROFILE from "../assets/tarun.jpg";
import { NavLink } from "react-router-dom";

const Links = ["Home", "About", "Resume", "Portfolio", "Contact"];

const NavLinks = ({ children }: { children: ReactNode }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("teritory", "highlight"),
    }}
  >
    <NavLink
      to={`${children}`}
      style={{ textDecoration: "none" }}
      activeStyle={{ color: "greenyellow", fontWeight: "bold" }}
    >
      {children}
    </NavLink>
  </Box>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box px={4} borderBottom={"2px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Button
            size={"md"}
            onClick={isOpen ? onClose : onOpen}
            display={{ md: "none" }}
            bg={"secondary"}
          >
            {isOpen ? (
              <ImCross color="red" />
            ) : (
              <GiHamburgerMenu color="greenyellow" />
            )}
          </Button>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLinks key={link}>{link}</NavLinks>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              onClick={toggleColorMode}
              size={"sm"}
              p={0}
              mx={4}
              bg={"secondary"}
            >
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                transition="transform .2s"
                _hover={{
                  transform: "scale(1.3)",
                }}
              >
                <Avatar size={"md"} src={PROFILE} />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLinks key={link}>{link}</NavLinks>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
