import { createContext } from 'react'
import { ChakraProvider, extendTheme, useBoolean } from '@chakra-ui/react'

import Home from './pages/home'

import './styles/global/style.css'

export const DarkModeContext = createContext(false)

function App() {
  const [darkMode, setDarkMode] = useBoolean()

  const theme = extendTheme({
    colors: {
      ice: '#F0F2F5',
      gray: {
        450: '#969CB3'
      },
      orangeNeon: '#F27C4B',
      redNeon: '#EB3223',
      dark: {
        500: '#202024',
        800: '#121214'
      }
    },
    styles: {
      global: {
        body: {
          bg: darkMode ? 'dark.800' : 'ice'
        }
      }
    }
  })

  return (
    <DarkModeContext.Provider value={darkMode}>
      <ChakraProvider theme={theme}>
        <Home darkMode={darkMode} setDarkMode={setDarkMode.toggle} />
      </ChakraProvider>
    </DarkModeContext.Provider>
  )
}

export default App
