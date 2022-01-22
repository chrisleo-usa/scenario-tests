import { Flex, FlexProps, Text, Container } from '@chakra-ui/react'

interface FooterProps extends FlexProps {}

export const Footer = ({ ...rest }: FooterProps) => {
  return (
    <footer>
      <Flex p={4} bg="white" {...rest}>
        <Container
          maxW="container.lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text>Desenvolvido por Christopher L Alves</Text>
        </Container>
      </Flex>
    </footer>
  )
}
