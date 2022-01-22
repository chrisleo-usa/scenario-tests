import { IconButton, Flex, Icon, FlexProps } from "@chakra-ui/react"
import { FiTrash } from 'react-icons/fi'
import { Input } from "../input"
import { TextArea } from "../text-area"

interface BlockFieldsProps extends FlexProps {
  onClickRemoveField: () => void
}

export const BlockFields = ({ onClickRemoveField, ...rest }: BlockFieldsProps) => {
  return (
    <Flex
      gap={8}
      {...rest}
    >
      <Flex
        flexGrow='1'
        direction='column'
        gap={4}
        p={4}
        border='2px'
        borderColor='orange.200'
        borderRadius={4}
      >
        <Input label='Funcionalidades: '/>
        <Input label='Cenário de teste: '/>
        <TextArea label='Descrição'/>
      </Flex>
      <IconButton 
        aria-label='Remove block field'
        bg='white'
        _hover={{ backgroundColor: 'orange.200'}}
        _focus={{ border: 'none' }}
        onClick={onClickRemoveField}
      >
        <Icon as={FiTrash} fontSize={20}/>
      </IconButton>

    </Flex>
  )
}