import React, { Component } from "react";

import { ReactComponent as IconDetail } from "../icons/icon-detail.svg";
import { ReactComponent as IconResp } from "../icons/responsibility.svg";
import { ReactComponent as IconUser } from "../icons/user.svg";
import { ReactComponent as IconCurious } from "../icons/curious.svg";

export default class Card extends Component {
  state = {
    data: this.props.data,
    icon: this.props.withIcon
  }

  parsedDetailedAbout = this.state.data.map((ele, index) => {
    return (
      <DetailedCards ele={ele} key={index} icon={this.state.icon ? true : false} />
    )
  })

  render() {
    return (
      <div>
        <p className="title-2">{this.props.title}</p>
        <div className="card-container">
          {this.parsedDetailedAbout}
        </div>
      </div >
    )
  }
}

function DetailedCards(props) {
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
  const date = () => {
    let date;
    if (props.ele.date) date = props.ele.date;
    return date;
  }
  return (
    <div className="card">
      <div>{renderImage()}</div>
      <div className={props.icon ? "card-title icon" : "card-title"}>{props.ele.name}</div>
      <div>{date()}</div>
      <div className="card-descr">{props.ele.descr}</div>
    </div>
  )
}