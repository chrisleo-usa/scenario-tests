import {
  IconButton,
  Flex,
  Icon,
  FlexProps,
  useDisclosure,
  ModalBody,
  Text
} from '@chakra-ui/react'
import { FiTrash } from 'react-icons/fi'
import { PrimaryButton } from '../primary-button'
import { ExampleModal } from '../example-modal'
import { Input } from '../input'
import { TextArea } from '../text-area'
import { DangerButton } from '../danger-button'
import { useContext } from 'react'
import { DarkModeContext } from '../../_App'

interface BlockFieldsProps extends FlexProps {
  onClickRemoveField: () => void
}

export const BlockFields = ({
  onClickRemoveField,
  ...rest
}: BlockFieldsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const darkMode = useContext(DarkModeContext)

  return (
    <Flex gap={8} {...rest}>
      <Flex
        flexGrow="1"
        direction="column"
        gap={4}
        p={4}
        border="2px"
        borderColor={darkMode ? 'orangeNeon' : 'orange.200'}
        borderRadius={4}
      >
        <Input label="Funcionalidades: " />
        <Input label="Cenário de teste: " />
        <TextArea label="Descrição" />
      </Flex>
      <IconButton
        aria-label="Remove block field"
        bg="white"
        color={darkMode ? 'redNeon' : 'black'}
        border="2px"
        borderColor={darkMode ? 'redNeon' : 'white'}
        _hover={{
          backgroundColor: darkMode ? 'redNeon' : 'red.300',
          borderColor: darkMode ? 'redNeon' : 'red.300',
          color: 'white'
        }}
        _focus={{
          backgroundColor: darkMode ? 'redNeon' : 'red.300',
          borderColor: darkMode ? 'redNeon' : 'red.300',
          color: 'white'
        }}
        onClick={onOpen}
      >
        <Icon as={FiTrash} fontSize={20} />
      </IconButton>

      <ExampleModal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalBody>
          <Text textAlign="center" fontSize="lg" mt={4} mb={8}>
            Deseja continuar com a remoção do cenário de teste?
          </Text>

          <Flex justifyContent="space-between" mb={4}>
            <PrimaryButton text="Continuar" onClick={onClickRemoveField} />
            <DangerButton text="Cancelar" onClick={onClose} />
          </Flex>
        </ModalBody>
      </ExampleModal>
    </Flex>
  )
}
