import { Flex, Text, Textarea as ChakraTextarea, TextareaProps as ChakraTextareaProps } from "@chakra-ui/react"

interface TextAreaProps extends ChakraTextareaProps {
  label?: string
}

export const TextArea = ({ label, ...rest }: TextAreaProps) => {
  return (
    <Flex
      direction='column'
      gap={1}
    >
      <Text fontWeight='bold' color='gray.450' >{label}</Text>
      <ChakraTextarea 
        bg='white'
        focusBorderColor='orange.200'
        {...rest}
      />
    </Flex>
  )
}