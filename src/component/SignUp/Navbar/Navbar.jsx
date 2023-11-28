import PropTypes from "prop-types";
import { Flex, Image, Box, Button } from "@chakra-ui/react";
import spotifyLogo from "../../../assets/spotify.webp";
import Homepage from "../../Home/Homepage";

const Navbar = ({ value, handleClick }) => {
  const navbarStyle = {
    background: "linear-gradient(to right, rgb(0,0,0), rgb(5,10,15))",
    width: "100%",
    height: "80px",
    position: "fixed",
    top: 0,
    left: 0,
  };

  const signUpButtonStyle = {
    bgColor: "white",
    size: "lg",
    borderRadius: "20px",
    _hover: {
      bgColor: "lightgray",
    },
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      w="100%"
      p={4}
      style={navbarStyle}
    >
      <Box>
        <Image
          ml="10px"
          src={spotifyLogo}
          alt="Spotify Logo"
          boxSize="100px"
          objectFit="contain"
        />
      </Box>
      <Box>
        {value ? (
          <Homepage />
        ) : (
          <Button {...signUpButtonStyle} onClick={handleClick}>
            Sign Up
          </Button>
        )}
      </Box>
    </Flex>
  );
};

Navbar.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Navbar;
