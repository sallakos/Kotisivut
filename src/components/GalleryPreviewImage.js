import React from 'react'

const GalleryPreviewImage = ({ number, ext, position, alt, onClick }) => {

  return (
    <div className="col-6 col-md-2 col-gallery">
      <img onClick={() => onClick('visible', number, false)} className={`img-clickable ${position}`} src={`pictures/img${number}.${ext}`} alt={alt} id={`img${number}`} />
    </div>
  )
}

export default GalleryPreviewImage