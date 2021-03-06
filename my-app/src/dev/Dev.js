import React, { Component } from "react";
import Card from './Card';

import projects from '../data/projects';
import detailIntro from "../data/introduction-detailIntro";

export default class Dev extends Component {
  state = {
    data: projects
  }
  render() {
    const intro = (
      <div>
        When it comes to programming and developing applications, <br />
        This is what I do :

        <ul>
          <li>Identify the areas of improvement or the issues for the existing system</li>
          <li>Identify the stakeholders</li>
          <li>Ideate solutions</li>
          <li>Develop solutions into reality</li>
          <li>Gather feedback and re-iterate the development process to improve the application</li>
          <li>Reflect on what I did, what I learned, and what I could have done better</li>
        </ul>
      </div>
    )

    const parsedProjectsData = this.state.data.map((element, index) => {
      return (
        <div key={index}>
          {element.name}
        </div>

      )
    });

    return (
      <div className="wrapper">
        <Card title={"As a developer, I am ..."} data={detailIntro} withIcon={true} />
        {/* {intro} */}
        <Card title={"So what did I make?"} data={projects} />
      </div>
    )
  }
}
