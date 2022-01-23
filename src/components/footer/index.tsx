import { Flex, FlexProps, Text, Container } from '@chakra-ui/react'
import { useContext } from 'react'
import { DarkModeContext } from '../../_App'

interface FooterProps extends FlexProps {}

export const Footer = ({ ...rest }: FooterProps) => {
  const darkMode = useContext(DarkModeContext)

  return (
    <footer>
      <Flex
        p={4}
        bg={darkMode ? 'dark.500' : 'white'}
        color={darkMode ? 'white' : 'black'}
        {...rest}
      >
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
