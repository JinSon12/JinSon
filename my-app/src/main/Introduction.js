import React, { Component } from "react";

import detailIntro from "../data/introduction-detailIntro";

import { ReactComponent as IconDetail } from "../icons/icon-detail.svg";
import { ReactComponent as IconResp } from "../icons/responsibility.svg";
import { ReactComponent as IconUser } from "../icons/user.svg";
import { ReactComponent as IconCurious } from "../icons/curious.svg";

export default function AboutMe() {
  const contents = (
    <p>
      A little bit more about myself,
      I am currently studying Informatics at the University of Washington in Seattle.
      Always curious about what is surrounding me, I love learning new technologies, and utilizing them while working together with others to create amazing things.
      Whatever I build, I try to make things that could bring goodness and benefits to the users that are using my applications and programs.
      <br />
      Aside from building applications, I take pictures, I do UI/UX design and teach.
    </p>
  )

  const parsedDetailedAbout = detailIntro.map((ele, index) => {
    return (
      <DetailedIntroCards ele={ele} key={index} />
    )
  })

  return (
    <div>
      <div className="title-1 slide-right">
        Hi, my name is Jin, <br />
        and I love building things <br />
        that bring goodness to others.
      </div>
      {contents}
      <p className="title-2">I am as a developer...</p>
      <div className="card-container">
        {parsedDetailedAbout}
      </div>
    </div>
  )
}

function DetailedIntroCards(props) {
  const renderImage = () => {
    if (props.ele.name === "Detail-Oriented")
      return <div className="icon-background blue"><IconDetail fill="white" className="icon-size" /></div>
    if (props.ele.name === "Responsible")
      return <div className="icon-background yellow"><IconResp fill="white" className="icon-size" /></div>
    if (props.ele.name === "Curious")
      return <div className="icon-background lightblue"><IconCurious fill="white" className="icon-size" /></div>
    if (props.ele.name === "User-Centered")
      return <div className="icon-background pink"><IconUser fill="white" className="icon-size" /></div>

  }
  return (
    <div className="card">
      <div>{renderImage()}</div>
      <div className="card-title">{props.ele.name}</div>
      <div className="card-descr">{props.ele.descr}</div>
    </div>
  )
}