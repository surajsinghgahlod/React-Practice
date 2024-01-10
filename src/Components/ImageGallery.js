import React, { useState } from 'react'

const Image = [
    'https://c0.klipartz.com/pngpicture/539/971/gratis-png-javascript-y-jquery-lenguaje-de-programacion-de-desarrollo-de-sitio-web-front-end-web-interactivo-c-icono-de-javascript-thumbnail.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGFbf9UJdfijv2A4-59pHQ9QUF9yrGbakBw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSosp53icDUw7ZmGiBtwIbfvqhJLSseFBoHfI38XbBDBQMaxDFKXeuM4A4VrZ0-Z6oLSI&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGLTAMizF33haXRiX66UMCHD08mCDi120Hq0Vd13prjPVf78q4O5cRXIyzIRlOPAXWtk&usqp=CAU',
    'https://www.inovex.de/wp-content/uploads/2016/11/react-angular-1500x876.png',

]
const ImageGallery = () => {
    const [showImg, setShowImg] = useState()

    const imgClickHandler = (Image) =>{
        setShowImg(Image)
    }

  return (
    <div>
      <div className="img-row">
        {Image.map((Image, index) => {
            return <>
                <div>
                    <p key={index}><img src={Image} alt="Img not found" onClick={()=> {imgClickHandler(Image)}} /></p>
                </div>
            </>
        })}
      </div>
        <div className="img-show">
            <img src={showImg} alt="Selected img not found" />
        </div>
    </div>
  )
}

export default ImageGallery
