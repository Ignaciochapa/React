import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselDeImagenes = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="/Images/buzocarousel.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Buzo Black</h3>
          <p>Un buzo que va con vos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="/Images/background-campera.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Campera Slim</h3>
          <p>Elegancia y confort</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="/Images/campera3carousel.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Campera Cuero Ecológico</h3>
          <p>
            Abrigo esencial en tu placard
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselDeImagenes