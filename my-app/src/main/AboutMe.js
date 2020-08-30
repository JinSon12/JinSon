import React from "react";
import { Container, Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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

  return (
    <div className="aboutme d-flex flex-column align-items-center">
      {picture}
      Jin Son
      {contact}
      <Link to="/">Home</Link>
      <ul>
        <li><a href="https://github.com/JinSon12" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://github.com/JinSon12" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
      </ul>
      <FontAwesomeIcon icon={faGithub} />
    </div>
  )
}