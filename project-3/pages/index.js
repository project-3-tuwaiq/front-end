import Layout from "../component/MyLayout";
import styles from "../styles/Home.module.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import img from '../public/images/PNG/Drawkit-Vector-Illustration-Medical-01.png'
import Image  from "next/image";

export default function Home() {
  return (
    <Layout>
      
      <div className={styles.backgroundImage}>
      <Carousel fade>
  <Carousel.Item>
    <Image
      className="d-block w-70px"
      src={img}
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
      </div>
  
     
    </Layout>
  );
}
