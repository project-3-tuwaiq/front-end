import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge, Check, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import reciption from "../../styles/reception.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function index() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [search, setSearch] = useState("");

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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function saveVistit() {
    fetch("http://localhost:5000/patient/addVisit/" + nationalId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onSearch() {
    axios
      .get(`http://localhost:5000/patient/searchPatient/${search}`)
      .then((response) => {
        console.log(response.data);
        const firstName = response.data.patient.firstName;
        const lastName = response.data.patient.lastName;
        const age = response.data.patient.age;
        const nationalId = response.data.patient.nationalId;
        const phoneNumber = response.data.patient.phoneNumber;
        const gender = response.data.patient.gender;
        setFirstName(firstName);
        setLastName(lastName);
        setAge(age);
        setNationalId(nationalId);
        setPhoneNumber(phoneNumber);
        setGender(gender);
        swal(
          `patient is found: first Name : ${firstName} ,Last Name : ${lastName}`
        );
      })
      .catch((error) => {
        console.log("error here:", error);
      });
  }

  return (
    <Layout>
      <Nav.Item>
        <Nav.Link
          onClick={() => {
            localStorage.removeItem("token");
          }}
          href="/login"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-box-arrow-in-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
            />
          </svg>{" "}
          Log out{" "}
        </Nav.Link>
      </Nav.Item>
      <Form className={reciption.receptionForm}>
        <img
          className={reciption.receptionImage}
          src="https://cdn-icons-png.flaticon.com/512/1273/1273818.png"
        />
        <Badge pill bg="primary">
          reciption form{" "}
        </Badge>{" "}
        <Form className={reciption.search}>
          <Form.Control
            type="search"
            placeholder="Search For "
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            className={reciption.button}
            onClick={() => {
              onSearch();
            }}
          >
            Search
          </Button>
        </Form>
        <br />
        <Col>
          National ID:
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
          First Name:
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          Last Name:
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          age:
          <Form.Control
            type="text"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          gender:{" "}
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Male"
                value="male"
                onChange={(e) => setGender(e.target.value)}
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />{" "}
              <Form.Check
                inline
                label="Female"
                value="female"
                onChange={(e) => setGender(e.target.value)}
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
            value={phoneNumber}
          />{" "}
          <Button
            className={reciption.button}
            onClick={() => {
              savePatient();
              // window.location.href="/nurse"
            }}
          >
            Add Patient{" "}
          </Button>{" "}
          <Button
            className={reciption.button}
            onClick={() => {
              saveVistit();
              window.location.href = "/nurse";
            }}
          >
            Add Visit{" "}
          </Button>{" "}
        </Col>{" "}
      </Form>{" "}
    </Layout>
  );
}
