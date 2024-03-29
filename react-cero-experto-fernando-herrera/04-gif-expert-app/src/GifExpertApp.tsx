import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return
    console.log(newCategory)
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/*titulo*/}
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory
        onNewCategory={(category: string) => onAddCategory(category)}
      />
      {/*Listado de Gif*/}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      {/*Gif Item*/}
    </>
  )
}
