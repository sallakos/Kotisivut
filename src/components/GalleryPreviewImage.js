import React from 'react'

const GalleryPreviewImage = ({ number, ext, position, alt }) => (
  
  <div className="col-6 col-md-2 col-gallery">
    <img className={`img-clickable ${position}`} src={`pictures/img${number}.${ext}`} alt={alt} id={`img${number}`} />
  </div>
)

export default GalleryPreviewImage