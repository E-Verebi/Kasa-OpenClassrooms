import "./index.css"
import React, { useState } from "react"
import galleryvector from "../../assets/galleryvector.svg"
import defaultpicture from "../../assets/comingsoon.jpg"

const Gallery = ({ images }) => {
  //Le currentImageIndex correspond à l'index de l'image sur l'array d'images du logement correspondant passé en prop. Il est par défaut réglé sur 0 (première image affichée).
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  //previousImage permet d'obtenir newIndex, qui équivaut à l'index actuel - 1. Ensuite, setCurrentImageIndex se charge de changer le state et de faire de newIndex le currentImageIndex. En revanche, si newIndex < 0, cela signifie que l'utilisateur était sur la première image, et le currentImageIndex devient à ce moment là images.length - 1, qui correspond à la dernière image du tableau.
  const previousImage = () => {
    const newIndex = currentImageIndex - 1
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex)
  }
  //nextImage fonctionne comme previousImage, mais dans le sens inverse en ce qui concerne le défilement des images. Il permet également de renvoyer l'utilisateur sur la première image lorsque celui-ci était sur la dernière.
  const nextImage = () => {
    const newIndex = currentImageIndex + 1
    setCurrentImageIndex(newIndex > images.length - 1 ? 0 : newIndex)
  }
  //Si la prop images est un array vide (donc images.length === 0), le composant n'affiche pas la galerie mais une image par défaut.
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
        //Le backgroundImage correspond bien à l'image ayant pour index (dans l'array images) le currentImageIndex
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <img
        src={galleryvector}
        alt="précédent"
        //Le clic de l'utilisateur sur la flèche gauche déclenche la fonction previousImage
        onClick={previousImage}
        className="gallery__prev"
        //La flèche n'est pas affichée s'il n'y a qu'une image dans images (donc si images.length === 1)
        style={images.length === 1 ? { display: "none" } : null}
      />

      <img
        src={galleryvector}
        alt="suivant"
        //Le clic de l'utilisateur sur la flèche droite déclenche la fonction nextImage
        onClick={nextImage}
        className="gallery__next"
        //La flèche n'est pas affichée s'il n'y a qu'une image dans images (donc si images.length === 1)
        style={images.length === 1 ? { display: "none" } : null}
      />

      <p
        //Le compteur est constitué du currentImageIndex + 1 (il faut additionner 1 puisque les index commencent à 0), du "/", et d'images.length qui correspond au nombre d'éléments contenu dans l'array images.
        className="gallery__count"
      >{`${currentImageIndex + 1}/${images.length}`}</p>
    </div>
  )
}

export default Gallery
