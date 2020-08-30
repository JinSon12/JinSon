import React from "react";
import { Container, Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./main.css";

export default function AboutMe() {

  const picture = (
    <div>
      <Col>
        <Row>
          <div >
            <img src="../profile.png" alt="profile" />
          </div>
        </Row>
      </Col>
    </div>
  )

  const contact = (
    <div>
      jinson@uw.edu
    </div>
  )

  const links = (
    <div className="d-flex flex-column align-items-center">
      <Link className="link" to="/">Home</Link>
      <ul>
        <li><a className="link" href="https://github.com/JinSon12" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a className="link" href="https://www.linkedin.com/in/jin-son-104042182" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>
    </div>
  )

  return (
    <div className="aboutme d-flex flex-column align-items-center">
      {picture}
      Jin Son
      {contact}
      {links}
      <p className="small-text">
        Made with ❤️ by Jin, 2020
      </p>
    </div>
  )
}