import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'reactstrap';

import AboutMe from "./AboutMe.js";
import Introduction from "./Introduction.js";


export default class Home extends Component {
  render() {
    const choices = (
      <Container>
        <Row>
          Hey, I am Jin
        </Row>
        <Row>
          <Col>
            <Link to="/Programming">
              Programming
            </Link>
          </Col>
          <Col>
            <a href="https://jinson355.myportfolio.com/home"
              rel="noopener noreferrer">
              Design
            </a>
          </Col>
          <Col>
            Photography
          </Col>
        </Row>
      </Container>
    )

    return (
      <Col className="wrapper">
        <div>{choices}</div>
        <div>
          <Introduction />
        </div>
      </Col>
    )
  }
}