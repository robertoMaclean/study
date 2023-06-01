import { useState } from "react"
import {AddCategory} from "./components/AddCategory"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ])
  
  const onAddCategory = ( newCategory: string ) => {
    //categories.push( newCategory )
    console.log( newCategory )
    setCategories([newCategory, ...categories ])
  }

  return (
    <>
      {/*titulo*/}
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory onNewCategory={ ( event: any ) => onAddCategory( event ) }/> 
      {/*Listado de Gif*/}
      <ol>
        {
          categories.map( category => {
            return <li key= { category }>{ category }</li>
          })
        }
      </ol>
        {/*Gif Item*/}
    </>
  )
}
