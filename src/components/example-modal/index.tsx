import { Modal, ModalOverlay, ModalContent, ModalProps } from '@chakra-ui/react'
import { useContext } from 'react'
import { DarkModeContext } from '../../_App'

interface ExampleModalProps extends ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ExampleModal = ({
  isOpen,
  onClose,
  size,
  children,
  ...rest
}: ExampleModalProps) => {
  const darkMode = useContext(DarkModeContext)

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} {...rest}>
      <ModalOverlay />
      <ModalContent
        bg={darkMode ? 'dark.500' : 'white'}
        color={darkMode ? 'white' : 'black'}
      >
        {children}
      </ModalContent>
    </Modal>
  )
}
