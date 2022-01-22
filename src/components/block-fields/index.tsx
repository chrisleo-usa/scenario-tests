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

interface BlockFieldsProps extends FlexProps {
  onClickRemoveField: () => void
}

export const BlockFields = ({
  onClickRemoveField,
  ...rest
}: BlockFieldsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex gap={8} {...rest}>
      <Flex
        flexGrow="1"
        direction="column"
        gap={4}
        p={4}
        border="2px"
        borderColor="orange.200"
        borderRadius={4}
      >
        <Input label="Funcionalidades: " />
        <Input label="Cenário de teste: " />
        <TextArea label="Descrição" />
      </Flex>
      <IconButton
        aria-label="Remove block field"
        bg="white"
        _hover={{ backgroundColor: 'orange.300' }}
        _focus={{ border: 'none' }}
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
            <PrimaryButton
              size="md"
              bg="orange.400"
              color="white"
              variant="solid"
              text="Continuar"
              onClick={onClickRemoveField}
            />
            <DangerButton text="Cancelar" onClick={onClose} />
          </Flex>
        </ModalBody>
      </ExampleModal>
    </Flex>
  )
}
