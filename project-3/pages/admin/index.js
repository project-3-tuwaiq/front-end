import Layout from "../../component/MyLayout";
import { Form, Row, Col, Badge,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import admin from "../../styles/Admin.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'
export default function index() {
  const[nationalId,setNationalId]=useState("")
  const [firstName , setFirstName ]=useState("")
  const [lastName,setLastName]=useState("")
  const [age ,setAge]=useState("")
  const [jobDescription ,setJobDescription]= useState("")
  const [ passWord ,setPassWord]=useState("")
  function saveUser(){
    let data={
      nationalId:nationalId,
      firstName:firstName,
      lastName:lastName,
      age:age,
      jobDescription:jobDescription,//not sure
      
      passWord:passWord
    }
    axios({
      method:"post",
      url:"http://localhost:5000/user/save",
      data: JSON.stringify(data)
    })
    .then((response)=>{
      console.log(response);
      setMessage("block")
    })
    .catch((error)=>{
      console.log(error);
      setDisplay("block")
    })
  }
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
          <Form.Control type="text" placeholder="Enter First Name" 
          onChange={(e)=>setNationalId(e.target.value)}
          />
          <br />
          First Name:
          <Form.Control type="text" placeholder="Enter First Name" 
          onChange={(e)=>setFirstName(e.target.value)}
          />
          <br />
          Last Name:
          <Form.Control type="text" placeholder="Enter Last Name"
          onChange={(e)=>setLastName(e.target.value)}
          />
          <br />
          age:
          <Form.Control type="text" placeholder="Enter Age"
          onChange={(e)=>setAge(e.target.value)}
          />
          <br />
          Job Description:
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Doctor"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                onChange={(e)=>setJobDescription(e.target.value)}
               />
              <Form.Check
                inline
                label="Nurse"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                onChange={(e)=>setJobDescription(e.target.value)}
              />
              <Form.Check
                inline
                label="Receptionist"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                onChange={(e)=>setJobDescription(e.target.value)}
              />
              <Form.Check
                inline
                label="Other"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                onChange={(e)=>setJobDescription(e.target.value)}
              />
              <br/>
              
              Description:
              <Form.Control type="text" placeholder="Enter Description" />
            </div>
          ))}
          <br />
          PassWord:
          <Form.Control type="text" placeholder="Enter Password" 
          onChange={(e)=>setPassWord(e.target.value)}
          />
          <Button className={admin.button}
           onClick={()=>{
            saveUser()
            window.location.href="/admin"
          }}
          
          > Save </Button>
        </Col>
      </Form>
    </Layout>
  );
}
