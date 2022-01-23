import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'
import { useContext } from 'react'
import { DarkModeContext } from '../../_App'

interface PrimaryButtonProps extends ChakraButtonProps {
  text: string
}

export const PrimaryButton = ({ text, ...rest }: PrimaryButtonProps) => {
  const darkMode = useContext(DarkModeContext)

  return (
    <ChakraButton
      size="md"
      bg="orange.400"
      border="2px"
      borderColor="orange.400"
      color="white"
      variant="solid"
      _hover={{
        backgroundColor: 'white',
        border: '2px',
        borderColor: darkMode ? 'orangeNeon' : 'orange.200',
        color: darkMode ? 'orangeNeon' : 'black'
      }}
      _focus={{ border: 'none' }}
      {...rest}
    >
      {text}
    </ChakraButton>
  )
}
