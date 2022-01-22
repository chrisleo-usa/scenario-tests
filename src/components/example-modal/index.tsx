import { Modal, ModalOverlay, ModalContent, ModalProps } from '@chakra-ui/react'

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
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} {...rest}>
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </Modal>
  )
}
