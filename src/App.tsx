import { ChakraProvider } from '@chakra-ui/react'

import Home from './pages/home'
import theme from './styles/global/theme'

import './styles/global/style.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  )
}

export default App
