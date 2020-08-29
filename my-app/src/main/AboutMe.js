import React, { Component } from "react";
import { Container, Row, Col, Alert } from 'reactstrap';

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
      Hey!!
    </div>
  )
}