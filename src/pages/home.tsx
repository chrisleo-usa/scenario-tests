import { Box, Container } from '@chakra-ui/react'

import { Form } from '../components/form'
import { Header } from '../components/header'

const Home = () => {
  return (
    <Box w="full" h="100vh" bg="ice">
      <Header />
      <Container maxW="container.lg" pt={10}>
        <Form />
      </Container>
    </Box>
  )
}

export default Home
