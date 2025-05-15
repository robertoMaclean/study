import { FormEvent, useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }: any) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return
    //setCategories( categories => [ inputValue, ...categories ] )
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
