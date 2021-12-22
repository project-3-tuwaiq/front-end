import Layout from "../../component/MyLayout";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

import login from "../../styles/Login.module.css";

export default function index() {
  return (
    <div className={login.allbody}>
      <Layout>
        <Form className={login.myForm}>
          <img
            className={login.img}
            src="https://www.darenc.com/home/showpublishedimage/11072/637514131778170000"
          />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <br />
            <Form.Label>ID</Form.Label>
            <Form.Control type="email" placeholder="Enter ID" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <button className={login.button}>Log In</button>
        </Form>
      </Layout>
    </div>
  );
}
