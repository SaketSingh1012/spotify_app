// MainComponent.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useToast } from "@chakra-ui/react";
import SongImageComponent from "../SongImage/SongImageComponent";
import songImage1 from "../../../assets/songImage1.jpg";
import songImage2 from "../../../assets/songImage2.jpg";

const MainComponent = ({ handleImageClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const toast = useToast();


  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleClick = () => {
    // Your logic for handling button click
    toast({
      title: "Button Clicked",
      status: "success",
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Stack direction="row" spacing={4} mt="120px">
      <SongImageComponent
        image={songImage1}
        handleImageClick={handleImageClick}
        text="Love Mashup"
        color="teal.500"
      />
      <SongImageComponent
        image={songImage2}
        handleImageClick={handleImageClick}
        text="Arijit Singh"
        color="purple.500"
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Header</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedImage && (
              <img src={selectedImage} alt="Selected Song" style={{ width: "100%", height: "100%" }} />
            )}
            <Button colorScheme="green" mt={4} borderRadius="20px" onClick={handleClick}>
              Sign Up
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

MainComponent.propTypes = {
  handleImageClick: PropTypes.func,
};

export default MainComponent;
