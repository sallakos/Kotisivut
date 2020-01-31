import React from 'react'

const GalleryImage = ({ number, ext, limit, alt, description, isActive }) => {

  return (
    <div className={`carousel-item item${number} ${isActive ? 'active' : ''}`}>
        <div className='img-block'>
          <img className={`gallery-img`} src={`pictures/img${number}.${ext}`} alt={alt} />
          <div className='my-carousel-caption'>
            <h5>{description}</h5>
          </div>
        </div>
    </div>
  )

}

export default GalleryImage