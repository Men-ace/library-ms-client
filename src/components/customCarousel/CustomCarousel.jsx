import Carousel from "react-bootstrap/Carousel";
import a from "@assets/img/a.jpg";
import b from "@assets/img/b.jpg";
import c from "@assets/img/c.jpg";

export const CustomCarousel = () => {
  return (
    <Carousel className="mt-4">
      <Carousel.Item>
        <img src={a} alt="First slide" className="d-block w-100" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Explor our extensive collection</h3>
          <hr />
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
            vitae elit libero, a pharetra augue mollis interdum
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={b} alt="Second slide" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Second slide label</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={c} alt="Third slide" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Third slide label</h3>
          <hr />
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
