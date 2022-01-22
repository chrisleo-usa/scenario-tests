import {
  Box,
  Container,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image
} from '@chakra-ui/react'

import { PrimaryButton } from '../components/primary-button'
import { Footer } from '../components/footer'
import { FieldsList } from '../components/fields-list'
import { Header } from '../components/header'
import { ExampleModal } from '../components/example-modal'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w="full">
      <Header />

      <Container maxW="container.lg" py={10}>
        <Box mb={14}>
          <PrimaryButton
            size="md"
            bg="orange.400"
            color="white"
            variant="solid"
            text="Exemplo"
            onClick={onOpen}
          />
        </Box>
        <FieldsList />
      </Container>
      <Footer />

      <ExampleModal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalHeader>Exemplo</ModalHeader>
        <ModalCloseButton
          borderRadius="full"
          _hover={{
            backgroundColor: 'orange.300',
            color: 'white',
            transform: 'rotate(180deg)'
          }}
          _focus={{ border: 'none' }}
        />
        <ModalBody>
          <Image src="/exemplo.png" mb={4} />
        </ModalBody>
      </ExampleModal>
    </Box>
  )
}

export default Home
