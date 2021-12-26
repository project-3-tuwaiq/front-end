import Layout from "../component/MyLayout";
import { Carousel, Row, Col, Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import img from "../public/images/PNG/Drawkit-Vector-Illustration-Medical-01.png";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from 'axios'
import {useState} from 'react'

export default function Home() {
  return (
    <Layout>
      <div className={styles.backgroundImage}>
        <CardGroup className={styles.CardGroup}>
          <Card className={styles.rowOfCard}>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title className={styles.title}> Hospital</Card.Title>
              <Card.Text>
                In the hospital, we strive to provide the finest medical
                services, looking forward to the highest medical and medical
                levels and attracting distinguished medical competencies with
                the latest medical devices, providing their medical services.
                All this, we put our eyes on the university and what our
                leadership aspires to.
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card className={styles.rowOfCard}>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title className={styles.title}>Doctors</Card.Title>
              <Card.Text>
                Doctors diagnose the condition, and prescribe medicines and
                other treatment that need to be taken to get back to normal
                health. Specialist doctors are experts in treating diseases of a
                particular part of the body. Doctors work in clinics and
                hospitals. They conduct various tests to diagnose the ailment
                afflicting a person. Doctors may prescribe medicines that need
                to be consumed orally or administered through injections.
                {" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          <Card className={styles.rowOfCard}>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title className={styles.title}>Nurses</Card.Title>
              <Card.Text>
                Nurses provide a supportive role to the doctors in treatment of
                patients in the hospital or at the patients’ home. Although
                nurses are a part of the medical profession they go through a
                course in Nursing which is different from the doctor’s training.
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </CardGroup>
      </div>
      
    </Layout>
  );
}
