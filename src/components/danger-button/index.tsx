import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'
import { useContext } from 'react'
import { DarkModeContext } from '../../_App'

interface DangerButtonProps extends ChakraButtonProps {
  text: string
}

export const DangerButton = ({ text, ...rest }: DangerButtonProps) => {
  const darkMode = useContext(DarkModeContext)

  return (
    <ChakraButton
      size="md"
      bg="white"
      color={darkMode ? 'redNeon' : 'red.300'}
      border="2px"
      borderColor={darkMode ? 'redNeon' : 'red.300'}
      variant="outline"
      _hover={{
        backgroundColor: darkMode ? 'redNeon' : 'red.300',
        color: 'white',
        border: '2px',
        borderColor: darkMode ? 'redNeon' : 'red.300'
      }}
      _focus={{ border: 'none' }}
      {...rest}
    >
      {text}
    </ChakraButton>
  )
}
