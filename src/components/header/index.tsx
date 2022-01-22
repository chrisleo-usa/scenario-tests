import { Flex, FlexProps, Heading, Image } from '@chakra-ui/react'

interface HeaderProps extends FlexProps {}

export const Header = ({ ...rest }: HeaderProps) => {
  return (
    <header>
      <Flex
        p={6}
        bg="white"
        borderBottom="2px"
        borderBottomColor="orange.200"
        alignItems="center"
        {...rest}
      >
        <Image boxSize="50px" src="/pslogo.png" />
        <Heading as="h2" size="lg" mx="auto">
          Cenário de Testes - Team Sydney
        </Heading>
      </Flex>
    </header>
  )
}
