import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'

interface DangerButtonProps extends ChakraButtonProps {
  text: string
}

export const DangerButton = ({ text, ...rest }: DangerButtonProps) => {
  return (
    <ChakraButton
      size="md"
      bg="white"
      color="red.300"
      border="2px"
      borderColor="red.300"
      variant="outline"
      _hover={{
        backgroundColor: 'red.300',
        color: 'white',
        border: '2px',
        borderColor: 'red.300'
      }}
      _focus={{ border: 'none' }}
      {...rest}
    >
      {text}
    </ChakraButton>
  )
}
