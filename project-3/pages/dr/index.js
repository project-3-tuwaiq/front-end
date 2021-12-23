import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import dr from "../../styles/dr.module.css"
import Image from "next/image";


export default function index() {
    return (
            <Layout>
<Form className={dr.drForm}>
<img className={dr.drImage} src="https://cdn-icons.flaticon.com/png/512/5218/premium/5218179.png?token=exp=1640200868~hmac=83f25d0954412a62bdc08062be0cacdd" />
<Badge pill bg="primary" className={dr.Badge}>
    Dr form
  </Badge>{' '}
<Col>
diagnose:
  <Form.Control className={dr.Col} type="text" placeholder="diagnose of patient"  />

  Treatment:
    <Form.Control className={dr.Col} type="text" placeholder="Treatment of patient"  />

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
    <Form.Label>Notes:</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <button className={dr.button}> Send </button>
</Col>
</Form>
</Layout>
    )
}
