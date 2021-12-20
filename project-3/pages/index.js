import Layout from "../component/MyLayout";
import { Carousel, Row, Col, Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import img from '../public/images/PNG/Drawkit-Vector-Illustration-Medical-01.png'
import Image  from "next/image";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <Layout>
      
      <div className={styles.backgroundImage}>
      <CardGroup>
  <Card className={styles.rowOfCard}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      In the hospital, we strive to provide the finest medical services, looking forward to the highest 
      medical and medical levels and attracting distinguished medical competencies with the latest medical 
      devices, providing their medical services. All this, we put our eyes on the university and what our
       leadership aspires to.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card className={styles.rowOfCard}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    </Card.Footer>
  </Card>
  <Card className={styles.rowOfCard}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    </Card.Footer>
  </Card>
</CardGroup>
      
      </div>
  
     
    </Layout>
  );
}
