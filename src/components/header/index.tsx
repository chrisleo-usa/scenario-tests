import { Flex, Heading, Image } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex p={6} bg="white" borderBottom="2px" borderBottomColor="orange.200">
      <Image boxSize="50px" src="/pslogo.png" />
      <Heading as="h2" size="lg" mx="auto">
        Cenário de Testes - Team Sydney
      </Heading>
    </Flex>
  )
}
