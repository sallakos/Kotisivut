import React from 'react'
import Image from './GalleryPreviewImage'

const Gallery = ({ title, pictures }) => {

  const images = pictures.map((picture, index) => <Image key={index + 1} number={index + 1} ext={picture.ext} position={picture.position || ''} alt={picture.alt} />)

  return (
    <section id="gallery" className="min-vh-100 container-fluid">
      <div className="section-content">
        <h2>{title}.</h2>
        <div className="row no-gutters justify-content-center">
          {images}
        </div>
      </div>
    </section>
  )
}

export default Gallery