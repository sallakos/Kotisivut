import React from 'react'
import Image from './GalleryPreviewImage'

const Gallery = ({ title, pictures, onImageClick }) => {

  const images = pictures.map((picture, index) => <Image key={index + 1} number={index + 1} ext={picture.ext} position={picture.position || ''} alt={picture.alt} onClick={onImageClick} />)
  
  return (
    <>
      <h2>{title}.</h2>
      <div id='gallery-container' className='row no-gutters justify-content-center'>
        {images}
      </div>
    </>
  )
}

export default Gallery