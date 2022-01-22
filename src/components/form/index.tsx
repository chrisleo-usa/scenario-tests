import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { BlockFields } from '../block-fields'
import { Button } from '../button'

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
        <Button text="Novo cenário" onClick={handleAddField} />
      </Box>
    </Flex>
  )
}
