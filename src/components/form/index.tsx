import React, { useState } from "react"

export const Form = () => {
  const [inputFields, setInputFields] = useState([
    {functionality: '', testScenario: '', description: ''}
  ])

  const handleAddField = () => {
    setInputFields([...inputFields, {functionality: '', testScenario: '', description: ''} ])
  }

  const handleRemoveField = (index: number) => {
    const fields = [...inputFields]
    fields.splice(index, 1)
    setInputFields(fields)
  }

  return (
    <form>
      {inputFields.map((blockFields, index) => (
        <React.Fragment key={index}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Funcionalidade: </label>
            <input type="text"/>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Cenário de teste: </label>
            <input type="text"/>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Descrição: </label>
            <textarea />
          </div>
          <button
            type="button"
            onClick={() => handleRemoveField(index)}
          >
            REMOVE
          </button>
        </React.Fragment>
      ))}
      <button
        type="button"
        onClick={handleAddField}
      >
        ADD
      </button>
    </form>
  )
}
