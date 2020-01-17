import React from 'react'

const GalleryPreviewImage = ({ number, ext, position, alt }) => {

  
// // Avataan galleria isompana, jos klikataan pikkukuvaa. Estetään sivun skrollaaminen.
// $(".img-clickable").click(function() {
//   $(".item" + $(this).attr("id").substring(3)).addClass("active");
//   // $(this).addClass("moved");
//   // window.setTimeout(function() {
//   $("#gallery-popup").toggleClass("visible");
//   $("#gallery-popup").toggleClass("invisible");
//   $("body").toggleClass("no-scroll");
//   // }, 200);
// });


  const openPopupGallery = () => {
    console.log('Got clicked')
  }

  return (
    <div className="col-6 col-md-2 col-gallery">
      <img onClick={openPopupGallery} className={`img-clickable ${position}`} src={`pictures/img${number}.${ext}`} alt={alt} id={`img${number}`} />
    </div>
  )
}

export default GalleryPreviewImage