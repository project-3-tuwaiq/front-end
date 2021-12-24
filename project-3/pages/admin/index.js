import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import admin from "../../styles/Admin.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
export default function index() {
  const [nationalId, setNationalId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const [roles, setRoles] = useState([]);

  function saveUser() {
    let data = {
      nationalId: nationalId,
      firstName: firstName,
      lastName: lastName,
      age: age,
      role: role, //not sure

      password: password,
    };
    axios({
      method: "post",
      url: "http://localhost:5000/user/save",
      data: data,
    })
      .then((response) => {
        console.log(response);
        // setMessage("block")
        window.location.href = "/admin";
      })

      .catch((error) => {
        console.log(error);
        // setDisplay("block")
      });
  }
  useEffect(async () => {
    axios
      .get("http://localhost:5000/roles")
      .then((res) => {
        setRoles(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(role);
  return (
    <Layout>
      <Form className={admin.adminForm}>
        <img
          className={admin.adminImage}
          src="https://cdn-icons-png.flaticon.com/512/2345/2345601.png"
        />
        <Badge pill bg="primary">
          admin form
        </Badge>{" "}
        <Col>
          National ID:
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setNationalId(e.target.value)}
          />
          <br />
          First Name:
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          Last Name:
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          age:
          <Form.Control
            type="text"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          Job Description:
          {roles.map((roleValue) => (
            <div key={roleValue._id} className="mb-3">
              <Form.Check
                inline
                label={roleValue.title}
                name="role"
                type="radio"
                id={roleValue._id}
                value={roleValue._id}
                onChange={(e) => setRole(e.target.value)}
              />

              <br />
            </div>
          ))}
          <br />
          Password:
          <Form.Control
            type="text"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={admin.button}
            onClick={() => {
              saveUser();
            }}
          >
            {" "}
            Save{" "}
          </Button>
        </Col>
      </Form>
    </Layout>
  );
}



    
