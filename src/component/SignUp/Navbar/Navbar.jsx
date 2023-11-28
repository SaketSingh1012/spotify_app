import PropTypes from 'prop-types';
import { Flex, Image, Box, Button } from "@chakra-ui/react";
import spotifyLogo from "../../../assets/spotify.webp";
import Homepage from "../../Home/Homepage";

const Navbar = ({ value, handleClick }) => {
  return (
    <Flex justify="space-between" w="100%" p={4} position="fixed" top={4} right={4}>
      <Box mt="-40px" ml="10px">
        <Image src={spotifyLogo} alt="Spotify Logo" boxSize="100px" objectFit="contain" />
      </Box>
      <Box>
        {value ? (
          <Homepage />
        ) : (
          <Button colorScheme="green" size="lg" borderRadius="20px" onClick={handleClick}>
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
