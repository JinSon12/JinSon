import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// import { profile } from "./profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      <a className="link" href="mailto:jinson@uw.edu">jinson@uw.edu</a>
    </div>
  )

  const links = (
    <div className="d-flex flex-column align-items-center justify-content-between mt-5">
      <Link className="inner-link underline" to="/">Home</Link>
      {/* <ul className="collapsible-content">
        <li>
          About
        </li>
        <li>
          View Work
        </li>
      </ul> */}
      <Link className="inner-link underline" to="/Programming">Programming</Link>
      <a className="inner-link underline" href="https://jinson355.myportfolio.com/home" target="_blank" rel="noopener noreferrer">Design</a>
      <ul className="mt-5">
        <li><a className="link" href="https://github.com/JinSon12" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a className="link" href="https://www.linkedin.com/in/jin-son-104042182" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a className="link" href="mailto:jinson@uw.edu"><FontAwesomeIcon icon={faEnvelope} className="icon-size-sm" /></a></li>
      </ul>
    </div>
  )

  return (
    <div className="aboutme d-flex flex-column align-items-center">
      {picture}
      <div className="title-3">Jin Son</div>
      {contact}
      {links}
      <p className="small-text">
        Made with ❤️ by Jin, 2020
      </p>
      <p className="small-text-2 px-2">The ownership of the icons, graphics used goes to the respective owners; < br />
        for more check <Link className="link" to="/Credits">CREDITS</Link></p>
    </div>
  )
}