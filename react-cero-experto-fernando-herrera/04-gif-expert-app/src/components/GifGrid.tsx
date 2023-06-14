import { useEffect, useState } from 'react'
import { GifItem } from './GifItem'
import { getGifts } from '../helpers/getGifs'

export const GifGrid = ({ category }: any) => {
  const [images, setImages] = useState([])
  const getImages = async () => {
    const newImages = await getGifts(category)
    setImages(newImages)
  }
  useEffect(() => {
    getImages()
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image: any) => (
          <GifItem key={image.id} {...image} />
          //<li key={id}>{title}</li>
        ))}
      </div>
    </>
  )
}
