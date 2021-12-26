import Layout from "../../component/MyLayout";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "../../styles/Login.module.css";
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
      .then((res) => {
        console.log(res);
        if (res.data !== undefined) {
         
          localStorage.setItem("token", JSON.stringify(res.data.token));
         // sessionStorage.setItem("isAdmin", res.data.isAdmin);
         // sessionStorage.setItem("userId", res.data.userId);
         // window.location.href = "/SecureCode";
       }

        // setMessage("block");
      })
      .catch((error) => {
        console.log(error);
        // setDisplay("block")
      });
      const token = JSON.parse(localStorage.getItem("token"));
      fetch("http://localhost:5000/user/userAuth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
        const role = data.token.role
        if(role==="admin"){
          window.location.href = "/admin";
       }else if (role==="Receptionist"){
         window.location.href = "/reciption";
       }
       else if (role==="nurse"){
         window.location.href = "/nurse";
       }
       else if (role==="doctor"){
         window.location.href = "/dr";
       }
       console.log(data.token.role);
      })

        .catch((err) => console.log(err));

  }

  return (
    <Layout>
      <div className={styles.allbody}>
        <div className={styles.myForm}>
          <img
            className={styles.img}
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
          <button className={styles.button} onClick={() => login()}>
            {" "}
            Log In{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </Layout>
  );
}
