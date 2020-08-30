import React, { Component } from "react";

export default function AboutMe() {
  const contents = (
    <div>
      A little bit more about myself,
      I am currently studying Informatics at the University of Washington in Seattle.
      Always curious about what is surrounding me, I love learning new technologies, and utilizing them while working together with others to create amazing things.
      Whatever I build, I try to make things that could bring goodness and benefits to the users that are using my applications and programs.
      <br />
      Aside from building applications, I take pictures, I do UI/UX design and teach.
    </div>
  )

  const detailedAbout = (
    <div>
      Responsible : I never stop until the requirements are fully met, and the people invovled in the development process are satisfied with the result.
      Detail-Oriented : To ensure the quality of the projects, I focus a lot on details and fix minor bugs and errors
      Curious : I love to think about better ways to improve on projects, and myself.
    </div>
  )

  return (
    <div>
      <div className="emphasis">
        Hi, my name is Jin, <br />
        and I love building things that bring goodness to others.
      </div>
      {contents}
      {detailedAbout}
    </div>
  )
}