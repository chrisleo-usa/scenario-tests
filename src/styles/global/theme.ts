import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    ice: '#F0F2F5',
    gray: {
      450: '#969CB3'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'ice'
      }
    }
  }
})

export default theme
