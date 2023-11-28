import PropTypes from 'prop-types';
import { Flex, Box, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";

const Page = ({ isModalOpen, handleCloseModal, selectedImage, handleClick }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Start listening with a free Spotify account.</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Box flex="1">
              {selectedImage && (
                <Image src={selectedImage} alt="Selected Song" w="100%" h="100%" />
              )}
            </Box>
            <Box flex="1" p={4}>
              <Text fontWeight="bold" color="blue.500">
                Sign up now to enjoy unlimited music!
              </Text>
              {selectedImage && (
                <Button colorScheme="green" mt={4} borderRadius="20px" onClick={handleClick}>
                  Sign Up
                </Button>
              )}
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

Page.propTypes = {
  isModalOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  selectedImage: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Page;
