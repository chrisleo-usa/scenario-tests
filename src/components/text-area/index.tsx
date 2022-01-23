import {
  Flex,
  Text,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps
} from '@chakra-ui/react'
import { useContext } from 'react'
import { DarkModeContext } from '../../_App'

interface TextAreaProps extends ChakraTextareaProps {
  label?: string
}

export const TextArea = ({ label, ...rest }: TextAreaProps) => {
  const darkMode = useContext(DarkModeContext)

  return (
    <Flex direction="column" gap={1}>
      <Text fontWeight="bold" color={darkMode ? 'white' : 'gray.450'}>
        {label}
      </Text>
      <ChakraTextarea
        color="black"
        bg={darkMode ? 'ice' : 'white'}
        border="none"
        focusBorderColor={darkMode ? 'white' : 'orange.200'}
        {...rest}
      />
    </Flex>
  )
}
