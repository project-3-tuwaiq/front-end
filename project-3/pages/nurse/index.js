import React, { useState, useEffect } from "react";
import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge, Alert, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Nurce from "../../styles/nurce.module.css";
import { Button, Card, Container } from "react-bootstrap";
import axios from "axios";

export default function index() {
  // const [visit, setVisit] = useState("")

  // Patiant Data
  const [patiantId, setPatiantId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalId, setNationalId] = useState("");
  // Patiant Data

  // nurce data
  const [tempeature, setTempeature] = useState("");
  const [weight, setWeight] = useState("");
  const [bp, setBp] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [display, setDisplay] = useState("none");

  const [data, setData] = useState([]);

  const [isChanged, setIsChanged] = useState(false);

  const [patientData, setPatientData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/patient/Visits")
      .then((response) => response.json())
      .then((data) => {
        setData(data.result);
      })
      .catch((err) => console.log(err));
  }, [isChanged]);

  function saveNurse() {
    let d = {
      tempeature: tempeature,
      weight: weight,
      bp: bp,
      heartRate: heartRate,
    };
    console.log(d);

    axios({
      method: "put",
      url: "http://localhost:5000/patient/addNursingDeptDetails/" + patiantId,
      data: d,
    })
      .then((response) => {
        console.log(response);
        setIsChanged(!isChanged);
        // setMessage("block")
      })
      .catch((error) => {
        console.log(error);
        setDisplay("block");
      });
  }

  function getPatintData(id) {
    fetch("http://localhost:5000/patient/searchPatient/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPatiantId(data.patient._id);
        setName(data.patient.firstName + " " + data.patient.lastName);
        setAge(data.patient.age);
        setGender(data.patient.gender);
        setPhoneNumber(data.patient.phoneNumber);
        setNationalId(data.patient.nationalId);
      })
      .catch((err) => console.log(err));
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
      <Container className={Nurce.Container}>
        <Row>
          <Col md={3}>
            {" "}
            {data &&
              data.map((elem) => {
                return (
                  <Card>
                    <Card.Body>
                      <Card.Title> {elem.date} </Card.Title>{" "}
                      <Card.Text>
                        {" "}
                        {elem.patientId.firstName} {elem.patientId.lastName}{" "}
                      </Card.Text>{" "}
                      <Button
                        variant="primary"
                        onClick={() => {
                          getPatintData(elem.patientId.nationalId);
                        }}
                      >
                        Get This Patient{" "}
                      </Button>{" "}
                    </Card.Body>{" "}
                  </Card>
                );
              })}{" "}
          </Col>
          <Col md={9}>
            <Row>
              <Col>
                <Form.Control
                  className={Nurce.Col}
                  type="text"
                  disabled
                  value={name}
                />{" "}
              </Col>{" "}
              <Col>
                <Form.Control
                  className={Nurce.Col}
                  type="text"
                  disabled
                  value={age}
                />{" "}
              </Col>{" "}
              <Col>
                <Form.Control
                  className={Nurce.Col}
                  type="text"
                  disabled
                  value={gender}
                />{" "}
              </Col>{" "}
            </Row>{" "}
            <Row>
              <Col>
                <Form.Control
                  className={Nurce.Col}
                  type="text"
                  disabled
                  value={phoneNumber}
                />{" "}
              </Col>{" "}
              <Col>
                <Form.Control
                  className={Nurce.Col}
                  type="text"
                  disabled
                  value={nationalId}
                />{" "}
              </Col>{" "}
            </Row>{" "}
            <hr />
            <Form className={Nurce.nurceForm}>
              <img
                className={Nurce.nurceImage}
                src="https://cdn-icons-png.flaticon.com/512/2996/2996424.png"
              />
              <Alert
                variant="danger"
                style={{
                  display: display,
                }}
              >
                Wrong please check!
              </Alert>{" "}
              <Badge pill bg="primary" className={Nurce.Badge}>
                Nurse form{" "}
              </Badge>{" "}
              <Col>
                tempeature:
                <Form.Control
                  className={Nurce.Col}
                  type="text"
                  placeholder="tempeature of patient"
                  onChange={(e) => setTempeature(e.target.value)}
                />
                weight:
                <Form.Control
                  className={Nurce.Col}
                  type="text"
                  placeholder="weight of patient"
                  onChange={(e) => setWeight(e.target.value)}
                />
                blood pressure:
                <Form.Control
                  className={Nurce.Col}
                  type="text"
                  placeholder="blood pressure of patient"
                  onChange={(e) => setBp(e.target.value)}
                />
                heart rate:
                <Form.Control
                  type="text"
                  placeholder="heart rate of patient"
                  onChange={(e) => setHeartRate(e.target.value)}
                />{" "}
                <Button
                  className={Nurce.button}
                  onClick={() => {
                    saveNurse();
                    //window.location.href = "/dr";
                  }}
                >
                  Send{" "}
                </Button>{" "}
              </Col>{" "}
            </Form>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </Layout>
  );
}
