import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Nurce from "../../styles/nurce.module.css"
import Image from "next/image";


export default function index() {
    return (
            <Layout>
<Form className={Nurce.nurceForm}>
<img className={Nurce.nurceImage} src="https://cdn-icons-png.flaticon.com/512/2996/2996424.png" />
<Badge pill bg="primary" className={Nurce.Badge}>
    Nurce form
  </Badge>{' '}
<Col>
  tempeature:
  <Form.Control className={Nurce.Col} type="text" placeholder="tempeature of patient"  />

    weight:
    <Form.Control className={Nurce.Col} type="text" placeholder="weight of patient"  />

    blood pressure:
    <Form.Control className={Nurce.Col} type="text" placeholder="blood pressure of patient"  />

    heart rate:
    <Form.Control  type="text" placeholder="heart rate of patient"  />
    <button className={Nurce.button}> Send </button>
    </Col>
</Form>
            </Layout>
    )
}
