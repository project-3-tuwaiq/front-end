import Layout from "../../component/MyLayout";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import login from "../../styles/Login.module.css";
import axios from "axios";

export default function index() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  
  function login() {
    axios
      .post("http://localhost:5000/user", {
        nationalId: nationalId,
        password: password
      })
      .then((response) => {
        console.log(response);
        // setMessage("block");
      })
      .catch((error) => {
        console.log(error);
        // setDisplay("block")
      });
  }

  return (
    <Layout>
      <div className={login.allbody}>
        <div className={login.myForm}>
          <img
            className={login.img}
            src="https://www.darenc.com/home/showpublishedimage/11072/637514131778170000"
          />
          <Form.Group className="mb-3" controlId="formPlaintext">
            <br />
            <Form.Label> ID </Form.Label>{" "}
            <Form.Control type="ID" placeholder="Enter ID" onChange={(e) => setNationalId(e.target.value)} />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Password </Form.Label>{" "}
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>{" "}
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>{" "}
          <button className={login.button} onClick={() => login()}>
            {" "}
            Log In{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </Layout>
  );
}
