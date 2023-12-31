import { useEffect, useState } from "react";
import { auth, provider } from "../../Config";
import { signInWithPopup } from "firebase/auth";
import { Flex, useToast } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import MainContent from "./Banner/MainContent";
import Page from "./CartBanner/Page";

const SignIn = () => {
  const [value, setValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const toast = useToast();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        toast({
          title: "Sign In Successful",
          status: "success",
          isClosable: true,
          position: "top",
        });
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.message);
        toast({
          title: "Error",
          description: "An error occurred during sign-in. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const handleImageClick = (image) => {
    setModalOpen(true);
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <Navbar value={value} handleClick={handleClick} />

      <Flex direction="column" align="center" p={4} >
        <Flex
          direction="column"
          align="center"
          p={4}
          style={{
            background:
              "linear-gradient(to right, rgb(2,4,6), rgb(10,12,14))",
            width: "100%",
            height:"100vh"
          }}
        >
          {!value && <MainContent handleImageClick={handleImageClick} />}
          {!value && (
            <Page
              isModalOpen={isModalOpen}
              handleCloseModal={handleCloseModal}
              selectedImage={selectedImage}
              handleClick={handleClick}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
