import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'reactstrap';

// import AboutMe from "./AboutMe.js";
// import Introduction from "../dev/Introduction.js/index.js";


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
      <div className="wrapper">
        {/* <div>{choices}</div> */}
        <div>
          <Introduction />
        </div>
      </div>
    )
  }
}

function Introduction() {
  const contents = (
    <p className="slide-left">
      A little bit more about myself,
      I am currently studying Informatics at the University of Washington in Seattle. <br /><br />
      Always curious about what is surrounding me, I love learning new technologies, and utilizing them while working together with others to create amazing things.
      Whatever I build, I try to make things that could bring goodness and benefits to the users that are using my applications and programs.
        <br /> <br />
      Aside from building applications, I take pictures, I do UI/UX design and teach.
      </p>
  )
  return (
    <div className="home">
      <div className="title-1 slide-right">
        Hi, my name is Jin, <br />
        and I love building things <br />
        that bring goodness to others.
      </div>
      {contents}
    </div>
  )
}