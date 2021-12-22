import {Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css' 
import { NavLink } from 'react-bootstrap';
import myHeader from "../styles/Header.module.css"

export default function Header() {
  return (
    <div className={myHeader.header}> 
        <Nav justify variant="tabs" defaultActiveKey="/home" >
        <Nav.Item >
    <Nav.Link className={myHeader.header} href="/about">About  </Nav.Link>
  </Nav.Item>

  <Nav.Item >
    <Nav.Link className={myHeader.hvrPush} href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg> </Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link className={myHeader.hvrPush} href="/login">Login </Nav.Link>
  </Nav.Item>
 
</Nav>

    </div>
  )
}