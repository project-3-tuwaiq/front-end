import React, {useState} from "react";
import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Nurce from "../../styles/nurce.module.css"
import { Button } from "react-bootstrap";
import axios from 'axios'


export default function index(){
// const [visit, setVisit] = useState("")





  const [tempeature, setTempeature] = useState("")
  const [weight, setWeight] = useState("")
  const [bp, setBp] = useState("")
  const [heartRate, setHeartRate] = useState("")
  const [display, setDisplay] = useState("none")
  // console.log(tempeature);
  function saveNurse(){
    let d = {
      tempeature: tempeature,
      weight: weight,
      bp: bp,
      heartRate: heartRate,
      display: display,
    };
    
    axios({
      method: "post",
      url: "http://localhost:5000/patient/addNursingDeptDetails",
      data: JSON.stringify(d),
    })
    .then((response) => {
      console.log(response);
      // setMessage("block")
    })
    .catch((error) => {
      console.log(error);
      setDisplay("block")
    });
  }
return (
            <Layout>
<Form className={Nurce.nurceForm}>
<img className={Nurce.nurceImage} src="https://cdn-icons-png.flaticon.com/512/2996/2996424.png" />

<Alert variant="danger" style={{ display: display }}>
Wrong please check!
</Alert>

<Badge pill bg="primary" className={Nurce.Badge}>
    Nurse form
  </Badge>{' '}
<Col>
  tempeature:
  <Form.Control className={Nurce.Col} type="text" placeholder="tempeature of patient"
  onChange={(e) => setTempeature(e.target.value)}
  />

    weight:
    <Form.Control className={Nurce.Col} type="text" placeholder="weight of patient"
    onChange={(e) => setWeight(e.target.value)}
    />

    blood pressure:
    <Form.Control className={Nurce.Col} type="text" placeholder="blood pressure of patient"
    onChange={(e) => setBp(e.target.value)}
    />

    heart rate:
    <Form.Control  type="text" placeholder="heart rate of patient" 
    onChange={(e)=> setHeartRate(e.target.value)}
    />
    <Button className={Nurce.button}
    onClick={() => {
      saveNurse();
      window.location.href = "/dr"
    }}
    > 
    Send 
    </Button>
    </Col>
  </Form>
            </Layout>
    )
}