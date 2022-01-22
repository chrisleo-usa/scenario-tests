import {
  Box,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image
} from '@chakra-ui/react'

import { Button } from '../components/button'
import { Footer } from '../components/footer'
import { Form } from '../components/form'
import { Header } from '../components/header'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w="full">
      <Header />

      <Container maxW="container.lg" py={10}>
        <Box mb={8}>
          <Button text="Exemplo" onClick={onOpen} />
        </Box>
        <Form />
      </Container>
      <Footer />

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Exemplo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="/exemplo.png" mb={4} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Home
