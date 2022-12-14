import "./index.css"
import React, { useState } from "react"
import galleryvector from "../../assets/galleryvector.svg"
import defaultpicture from "../../assets/comingsoon.jpg"

const Gallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const previousImage = () => {
    const newIndex = currentImageIndex - 1
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex)
  }

  const nextImage = () => {
    const newIndex = currentImageIndex + 1
    setCurrentImageIndex(newIndex > images.length - 1 ? 0 : newIndex)
  }
  if (images.length === 0) {
    return (
      <img
        src={defaultpicture}
        alt="defaultPic"
        style={{ display: "block", width: "50%", margin: "auto" }}
      />
    )
  }
  return (
    <div
      className="gallery"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <img
        src={galleryvector}
        alt="précédent"
        onClick={previousImage}
        className="gallery__prev"
        style={images.length === 1 ? { display: "none" } : null}
      />

      <img
        src={galleryvector}
        alt="suivant"
        onClick={nextImage}
        className="gallery__next"
        style={images.length === 1 ? { display: "none" } : null}
      />
      <p className="gallery__count">{`${currentImageIndex + 1}/${
        images.length
      }`}</p>
    </div>
  )
}

export default Gallery
