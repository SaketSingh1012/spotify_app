import SignIn from "./component/SignUp/SignIn";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "0px",
  },
});

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <SignIn />
    </ChakraProvider>
  );
}

export default App;
