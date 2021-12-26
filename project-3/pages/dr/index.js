import Layout from "../../component/MyLayout";
import {
  Form,
  Row,
  Col,
  Badge,
  Button,
  Alert,
  Container,
  Card,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import dr from "../../styles/dr.module.css";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

export default function index() {
  /* --------------------------------- dr data -------------------------------- */
  const [diagnose, setDiagnose] = useState("");
  const [treatment, setTreatmrnt] = useState("");
  const [notes, setNotes] = useState("");
  const [display, setDisplay] = useState("none");

  /* ----------------------------- reciption data ----------------------------- */
  const [patiantId, setPatiantId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalId, setNationalId] = useState("");

  /* ------------------------------- nurce data ------------------------------- */
  const [tempeature, setTempeature] = useState("");
  const [weight, setWeight] = useState("");
  const [bp, setBp] = useState("");
  const [heartRate, setHeartRate] = useState("");
  // const [display, setDisplay] = useState("none");

  const [data, setData] = useState([]);

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/patient/Visits/Dr")
      .then((response) => response.json())
      .then((data) => setData(data.result))
      .catch((err) => console.log(err));
  }, [isChanged]);

  function saveDr() {
    let b = {
      diagnose: diagnose,
      treatment: treatment,
      notes: notes,
      display: display,
    };

    axios({
      method: "put",
      url: "http://localhost:5000/patient/updateDrByDate" + patiantId,
      data: JSON.stringify(b),
    })
      .then((response) => {
        console.log(response);
        setIsChanged(!isChanged);
      })
      .catch((error) => {
        console.log(error);
        setDisplay("block");
      });
  }

  function getPatintData(id, patientId) {
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

    fetch("http://localhost:5000/patient/Visits/Dr/" + patientId)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        setTempeature(data.result.tempeature);
        setWeight(data.result.weight);
        setBp(data.result.bp);
        setHeartRate(data.result.heartRate);
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
      <Container className={dr.Container}>
        <Row>
          <Col md={3}>
            {data &&
              data.map((elem) => {
                return (
                  <Card>
                    <Card.Body>
                      <Card.Title>{elem.date}</Card.Title>
                      <Card.Text>
                        {elem.patientId.firstName} {elem.patientId.lastName}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => {
                          getPatintData(
                            elem.patientId.nationalId,
                            elem.patientId._id
                          );
                        }}
                      >
                        Get This Patient
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
          </Col>
          {/* reciption info */}
          <Col md={9}>
            <Row>
              <Col>
                <Form.Control
                  className={dr.Col}
                  type="text"
                  disabled
                  value={name}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  className={dr.Col}
                  type="text"
                  disabled
                  value={age}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  className={dr.Col}
                  type="text"
                  disabled
                  value={gender}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  className={dr.Col}
                  type="text"
                  disabled
                  value={phoneNumber}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  className={dr.Col}
                  type="text"
                  disabled
                  value={nationalId}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Col>
            </Row>
            <hr />
            {/* nurse info */}
            <Col md={12}>
              <Row>
                <Col>
                  <Form.Control
                    className={dr.Col}
                    type="text"
                    disabled
                    value={tempeature}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className={dr.Col}
                    type="text"
                    disabled
                    value={weight}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className={dr.Col}
                    type="text"
                    disabled
                    value={bp}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className={dr.Col}
                    type="text"
                    disabled
                    value={heartRate}
                  />
                </Col>
              </Row>
              <Form className={dr.drForm}>
                <img
                  className={dr.drImage}
                  src="https://cdn-icons.flaticon.com/png/512/5218/premium/5218179.png?token=exp=1640200868~hmac=83f25d0954412a62bdc08062be0cacdd"
                />
                <Alert variant="danger" style={{ display: display }}>
                  Wrong please check!
                </Alert>
                <Badge pill bg="primary" className={dr.Badge}>
                  Dr form
                </Badge>{" "}
                <Col>
                  diagnose:
                  <Form.Control
                    className={dr.Col}
                    type="text"
                    placeholder="diagnose of patient"
                    onChange={(e) => setDiagnose(e.target.value)}
                  />
                  Treatmrnt:
                  <Form.Control
                    className={dr.Col}
                    type="text"
                    placeholder="Treatment of patient"
                    onChange={(e) => setTreatmrnt(e.target.value)}
                  />
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    className={dr.button}
                    onClick={() => {
                      saveDr();
                      window.location.href;
                    }}
                  >
                    Send
                  </Button>
                </Col>
              </Form>
            </Col>
          </Col>
          C
        </Row>
      </Container>
    </Layout>
  );
}
