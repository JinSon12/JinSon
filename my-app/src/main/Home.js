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
    <div className="section-container">
      <div className="section first-sec">
        <div className="title-1 slide-right">
          Hi, my name is Jin, <br />
          and I <span className="underline-highlight">love building things</span> <br />
          that others <span className="underline-highlight">can benefit from</span>.
        </div>
        <p className="slide-left">
          A little bit more about myself,
          I am currently studying Informatics at the University of Washington in Seattle. <br /><br />
          Always curious about what is surrounding me, I love learning new technologies, and utilizing them while working together with others to create amazing things.
          Whatever I build, I try to make things that could bring goodness and benefits to the users that are using my applications and programs.
        <br /> <br />
          Aside from building applications, I take pictures, I do UI/UX design and teach.
      </p>
      </div>

      <div className="section">
        <div className="d-flex">
          <div>
          <p className="emphasis">I am a non-traditional developer in a way</p>
          <p>
            Before becoming interested in programming, my main area of focus was biology. Before that, it was psychology and before that it was English.
            Besides being a student at Univeristy of Washington studying Informatics, I used to be an English to Korean translator/interpreter, English Teacher, and a Manager at a clinic.
            You could go to my LinkedIn to see what I did for those positions!
  
            Because I consider myself a late starter, I try to put 120% of my effort into programming, schoolwork and projects,
            because they allow me to connect with others, share ideas, learn, and practice my skills more. They are all invaluable to me.
        </p>
        </div>
        
        <div>
          <p className="emphasis">
            Why I continue building stuff?
          </p>
          <p>
            Because it's fun. There are actually two more reasons.
            One of the best moments while I am developing stuffs is the moment when I find a solution to a stuck problem after struggling for a while.
            I just love that ah-ha moment!
            Another reason why I continue doing what I do is the joy that I get from developing.
            I believe that the point of developing these ideas and solutions is to empower people, and bring benefits to them.
            I haven't create a program that millions of users use every day yet, but whenever I see the end result, massive satisfaction hits me!
            On team-based environment, the feeling of accomplishment and the great vibe resulting from excellent team work and collaboration is what drives me as well.
        </p>
        </div>
        </div>
      </div>
    </div >
  )

  return (
    <div className="home">

      {contents}
    </div>
  )
}