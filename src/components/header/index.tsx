import { Container, Flex, FlexProps, Heading, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { DarkModeContext } from '../../_App'

interface HeaderProps extends FlexProps {}

export const Header = ({ ...rest }: HeaderProps) => {
  const darkMode = useContext(DarkModeContext)

  return (
    <header>
      <Flex
        p={6}
        bg={darkMode ? 'dark.500' : 'white'}
        borderBottom="2px"
        borderBottomColor={darkMode ? 'orangeNeon' : 'orange.200'}
        {...rest}
      >
        <Container maxW="container.lg" display="flex" alignItems="center">
          <Image boxSize="50px" src="/pslogo.png" />
          <Heading
            as="h2"
            size="lg"
            mx="auto"
            color={darkMode ? 'white' : 'black'}
          >
            Cenários de Testes - Team Sydney
          </Heading>
        </Container>
      </Flex>
    </header>
  )
}
