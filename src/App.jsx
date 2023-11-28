import SignIn from './component/SignUp/SignIn'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
    <ChakraProvider>
    <SignIn />
    </ChakraProvider>
      
    </>
  )
}

export default App
