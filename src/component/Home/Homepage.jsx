import { Image, useToast } from "@chakra-ui/react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import { useDisclosure, Flex } from "@chakra-ui/react";
import userLogo from "../../assets/user.png";

const Homepage = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = () => {
    localStorage.clear();
    toast({
      title: "Log Out Successful",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 2000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <Image
        src={userLogo}
        alt="User Image"
        boxSize="40px"
        objectFit="cover"
        onClick={onOpen}
        cursor="pointer"
        position="fixed"
        top={6}
        right={6}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={null}
      >
        <DrawerOverlay />
        <DrawerContent
          height="100%"
          background="linear-gradient(to right, rgb(100,200,100), rgb(50,150,50))"
        >
          <Flex height="90%">
            <DrawerCloseButton />
            <DrawerHeader>Profile</DrawerHeader>
          </Flex>

          <DrawerFooter>
            <Flex height="10%" justifyContent="flex-start" alignItems="flex-end">
              <Button variant="outline" mr={10} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={logout}>
                Log Out
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Homepage;
