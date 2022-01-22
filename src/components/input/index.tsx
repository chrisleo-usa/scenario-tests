import { Flex, Text, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  label?: string
}

export const Input = ({
  label,
  ...rest
}: InputProps) => {
  return (
    <Flex
      direction='column'
      gap={1}
    >
      <Text fontWeight='bold' color='gray.450'>{label}</Text>
      <ChakraInput 
        bg='white'
        focusBorderColor='orange.200'
        {...rest}
      />
    </Flex>
  )
}
