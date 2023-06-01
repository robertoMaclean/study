import { FormEvent, useState} from "react"

export const AddCategory = ( { onNewCategory } ) => {

  const [ inputValue, setInputValue ] = useState('')

  const onInputChange = ( event: any ) => {
    setInputValue( event.target.value ) 
  }

  const onSubmit = ( event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if( inputValue.trim().length <= 1 ) return
    //setCategories( categories => [ inputValue, ...categories ] )
    setInputValue('')
    onNewCategory( inputValue.trim() )
  }

  return (
    
    <form onSubmit={ (event) => onSubmit( event ) }>
      <input
        type = "text"
        placeholder = "Buscar gifs"
        value = { inputValue }
        onChange = { onInputChange }
      /> 
    </form>
  )
}