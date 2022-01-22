import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'

interface PrimaryButtonProps extends ChakraButtonProps {
  text: string
}

export const PrimaryButton = ({ text, ...rest }: PrimaryButtonProps) => {
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
