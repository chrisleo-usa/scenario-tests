import { Container, Flex, FlexProps, Heading, Image } from '@chakra-ui/react'

interface HeaderProps extends FlexProps {}

export const Header = ({ ...rest }: HeaderProps) => {
  return (
    <header>
      <Flex
        p={6}
        bg="white"
        borderBottom="2px"
        borderBottomColor="orange.200"
        {...rest}
      >
        <Container maxW="container.lg" display="flex" alignItems="center">
          <Image boxSize="50px" src="/pslogo.png" />
          <Heading as="h2" size="lg" mx="auto">
            Cenários de Testes - Team Sydney
          </Heading>
        </Container>
      </Flex>
    </header>
  )
}
