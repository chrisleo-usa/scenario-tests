import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'

interface ButtonProps extends ChakraButtonProps {
  text: string
}

export const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      size="md"
      bg="orange.400"
      color="white"
      variant="solid"
      _hover={{
        backgroundColor: 'white',
        border: '2px',
        borderColor: 'orange.200',
        color: 'black'
      }}
      _focus={{ border: 'none' }}
      {...rest}
    >
      {text}
    </ChakraButton>
  )
}
