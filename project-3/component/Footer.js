import { Row, Col, Navbar, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Footer.module.css"
import Image  from "next/image";
import logo from '../public/images/PNG/Drawkit-Vector-Illustration-Medical-18.png'
export default function Footer() {
  return (
    <div className={styles.footer}>
<Navbar>
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Image src={logo} width="100px"height="100px"/>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
         <a  href="#login">Copy Right 2021</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}
