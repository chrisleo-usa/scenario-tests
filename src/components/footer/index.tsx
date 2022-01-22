import { Flex, FlexProps, Text } from '@chakra-ui/react'

interface FooterProps extends FlexProps {}

export const Footer = ({ ...rest }: FooterProps) => {
  return (
    <footer>
      <Flex
        alignItems="center"
        justifyContent="center"
        p={4}
        bg="white"
        {...rest}
      >
        <Text>Desenvolvido por Christopher L Alves</Text>
      </Flex>
    </footer>
  )
}
