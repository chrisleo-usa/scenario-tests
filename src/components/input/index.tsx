import {
  Flex,
  Text,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { useContext } from 'react'
import { DarkModeContext } from '../../_App'

interface InputProps extends ChakraInputProps {
  label?: string
}

export const Input = ({ label, ...rest }: InputProps) => {
  const darkMode = useContext(DarkModeContext)

  return (
    <Flex direction="column" gap={1}>
      <Text fontWeight="bold" color={darkMode ? 'white' : 'gray.450'}>
        {label}
      </Text>
      <ChakraInput
        color="black"
        bg={darkMode ? 'ice' : 'white'}
        border="none"
        focusBorderColor={darkMode ? 'white' : 'orange.200'}
        {...rest}
      />
    </Flex>
  )
}
