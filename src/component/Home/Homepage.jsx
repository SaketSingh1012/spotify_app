// Homepage.jsx

import { Image, useToast } from '@chakra-ui/react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import userLogo from '../../assets/user.png';

const Homepage = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = () => {
    localStorage.clear();
    toast({
      title: 'Log Out Successful',
      status: 'success',
      isClosable: true,
      position: 'top',
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
        top={4}
        right={4}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={null}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Profile</DrawerHeader>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={logout}>
              Log Out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Homepage;
