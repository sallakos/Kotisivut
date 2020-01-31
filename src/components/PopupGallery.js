import React from 'react'
import Image from './GalleryImage'

const PopupGallery = ({ language, pictures, visibility, onCloseClick, activeImage }) => {

  const images = pictures.map((picture, index) =>
    <Image key={index + 1}
      number={index + 1}
      ext={picture.ext}
      limit={picture.limit}
      alt={picture.alt}
      description={picture.description[language]}
      isActive={activeImage === index + 1 ? true : false} />)

  return (
    <section id='gallery-popup' className={visibility}>
      <button onClick={() => onCloseClick('invisible', activeImage, true)} className='close-popup' type='button'>&times;</button>
      <div id='gallerycarousel' className='carousel slide my-carousel' data-interval='0'>
        <div className='carousel-inner'>
          {images}
        </div>
        <a className='carousel-control-prev' href='#gallerycarousel' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='sr-only'>Edellinen</span>
        </a>
        <a className='carousel-control-next' href='#gallerycarousel' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='sr-only'>Seuraava</span>
        </a>
      </div>
    </section>
  )

}

export default PopupGallery