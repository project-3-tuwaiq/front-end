import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import dr from "../../styles/dr.module.css"
import Image from "next/image";
import axios from 'axios'
import { useState } from "react";




export default function index() {
  const [diagnose, setDiagnose] = useState("")
  const [treatment, setTreatmrnt] = useState("")
  const [notes, setNotes] = useState("")
  const [display, setDisplay] = useState("none")


function saveDr(){
let b = {
  diagnose: diagnose,
  treatment: treatment,
  notes: notes,
  display: display,
}

  axios({
    method: "POST",
    url: "http://localhost:5000/patient/updateDrByDate",
    data: JSON.stringify(b)
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) =>{
    console.log(error);
    setDisplay("block")
  })
}

    return (
            <Layout>
<Form className={dr.drForm}>
<img className={dr.drImage} src="https://cdn-icons.flaticon.com/png/512/5218/premium/5218179.png?token=exp=1640200868~hmac=83f25d0954412a62bdc08062be0cacdd" />
<Alert variant="danger" style={{ display: display }}>
Wrong please check!
</Alert>
<Badge pill bg="primary" className={dr.Badge}>
    Dr form
  </Badge>{' '}
<Col>
diagnose:
  <Form.Control className={dr.Col} type="text" placeholder="diagnose of patient" 
  onChange={(e) => setDiagnose(e.target.value)}
  />

Treatmrnt:
    <Form.Control className={dr.Col} type="text" placeholder="Treatment of patient" 
    onChange={(e) => setTreatmrnt(e.target.value)}
    />

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
    <Form.Label>Notes:</Form.Label>
    <Form.Control as="textarea" rows={3} 
    onChange={(e) => setNotes(e.target.value)}
    />
  </Form.Group>
  <Button className={dr.button}
  onClick={() =>{
    saveDr()
    window.location.href
  }}
  >
  Send
 </Button>
</Col>
</Form>
</Layout>
    )
}
