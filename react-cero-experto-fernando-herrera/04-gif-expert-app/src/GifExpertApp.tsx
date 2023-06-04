import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ])
  
  const onAddCategory = ( newCategory: string ) => {
    
    if( categories.includes(newCategory) ) return
    console.log( newCategory )
    setCategories([ newCategory, ...categories ])
  }
  
  const getKey = (category: string) => {
    return category.trim().toLowerCase()
  }
  return (
    <>
      {/*titulo*/}
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory onNewCategory={ ( category: string ) => onAddCategory( category ) }/> 
      {/*Listado de Gif*/}
      <ol>
        {
          categories.map( ( category ) => (
            <GifGrid 
            key={ category }
            category={ category } 
            />
          ))
        }
      </ol>
        {/*Gif Item*/}
    </>
  )
}
