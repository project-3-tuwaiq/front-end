import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge, Check, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import reciption from "../../styles/reception.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function index() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  function savePatient() {
    axios
      .post("http://localhost:5000/patient/create-patient", {
        firstName: firstName,
        lastName: lastName,
        nationalId: nationalId,
        gender: gender,
        age: age,
        phoneNumber: phoneNumber,
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
      <Form className={reciption.receptionForm}>
        <img
          className={reciption.receptionImage}
          src="https://cdn-icons-png.flaticon.com/512/1273/1273818.png"
        />
        <Badge pill bg="primary">
          reciption form{" "}
        </Badge>{" "}
        <Col>
          National ID:
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setNationalId(e.target.value)}
          />
          First Name:
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          Last Name:
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          age:
          <Form.Control
            type="text"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
          gender:{" "}
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Male"
                onChange={(e) => setGender("male")}
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />{" "}
              <Form.Check
                inline
                label="Female"
                onChange={(e) => setGender("female")}
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />{" "}
            </div>
          ))}
          phoneNumber:
          <Form.Control
            type="text"
            placeholder="Enter Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />{" "}
          <Button
            className={reciption.button}
            onClick={() => {
              savePatient();
              //window.location.href="/nurse"
            }}
          >
            Send{" "}
          </Button>{" "}
        </Col>{" "}
      </Form>{" "}
    </Layout>
  );
}
