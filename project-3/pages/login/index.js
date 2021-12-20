import Layout from "../../component/MyLayout";
import {Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css' 
import login from "../../styles/Login.module.css"




export default function index() {
    return (
            <Layout>
            <Form className={login.myForm}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>ID</Form.Label>
    <Form.Control type="email" placeholder="Enter ID" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <button className={login.button}>
    Submit
  </button>
</Form>
</Layout>
    )
}
