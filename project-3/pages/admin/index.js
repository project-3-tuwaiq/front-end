import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import admin from "../../styles/Admin.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

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
        swal("employee  created");
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
                value={roleValue.title}
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
