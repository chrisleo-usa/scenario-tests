import { useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react'
import { BlockFields } from '../block-fields'

export const Form = () => {
  const [inputFields, setInputFields] = useState([
    { functionality: '', testScenario: '', description: '' }
  ])

  const handleAddField = () => {
    setInputFields([
      ...inputFields,
      { functionality: '', testScenario: '', description: '' }
    ])
  }

  const handleRemoveField = (index: number) => {
    const fields = [...inputFields]
    fields.splice(index, 1)
    setInputFields(fields)
  }

  return (
    <Flex direction="column" gap={6}>
      {inputFields.map((blockFields, index) => (
        <BlockFields
          key={index}
          onClickRemoveField={() => handleRemoveField(index)}
        />
      ))}
      <Box>
        <Button
          size="md"
          bg="orange.400"
          color="white"
          variant="solid"
          _focus={{ border: 'none' }}
          onClick={handleAddField}
        >
          Novo cenário
        </Button>
      </Box>
    </Flex>
  )
}
