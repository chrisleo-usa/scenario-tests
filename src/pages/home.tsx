import {
  Box,
  Flex,
  Container,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Switch,
  Icon
} from '@chakra-ui/react'

import { PrimaryButton } from '../components/primary-button'
import { Footer } from '../components/footer'
import { FieldsList } from '../components/fields-list'
import { Header } from '../components/header'
import { ExampleModal } from '../components/example-modal'
import { BsEmojiSunglassesFill, BsMoonStarsFill } from 'react-icons/bs'

interface HomeProps {
  setDarkMode: () => void
  darkMode: boolean
}

const Home = ({ setDarkMode, darkMode }: HomeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w="full">
      <Header />

      <Container maxW="container.lg" py={10}>
        <Flex mb={14} justifyContent="space-between">
          <PrimaryButton text="Exemplo" onClick={onOpen} />

          <Flex gap={2} alignItems="center">
            <Icon
              as={BsEmojiSunglassesFill}
              fontSize={24}
              color={darkMode ? 'black' : 'orange.300'}
            />
            <Switch
              as="button"
              size="lg"
              colorScheme="orange"
              onChange={setDarkMode}
              _focus={{ border: 'red' }}
            />
            <Icon
              as={BsMoonStarsFill}
              fontSize={24}
              color={darkMode ? 'ice' : 'black'}
            />
          </Flex>
        </Flex>
        <FieldsList />
      </Container>

      <ExampleModal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalHeader>Exemplo</ModalHeader>
        <ModalCloseButton
          borderRadius="full"
          _hover={{
            backgroundColor: darkMode ? 'orangeNeon' : 'orange.300',
            color: 'white',
            transform: 'rotate(180deg)'
          }}
          _focus={{ border: 'none' }}
        />
        <ModalBody>
          <Image src="/exemplo.png" mb={4} />
        </ModalBody>
      </ExampleModal>

      <Footer />
    </Box>
  )
}

export default Home
