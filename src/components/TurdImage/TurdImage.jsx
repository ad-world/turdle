import React from "react";
import brownPoop from "../../images/brownpoop.png";
import greenPoop from "../../images/greenpoop.png";
import purplePoop from "../../images/purplepoop.png";
import redPoop from "../../images/redpoop.png";
import whitePoop from "../../images/whitepoop.png"
import "./TurdImage.styles.css"

function TurdImage(props) {
    if(props.color == "green") {
        return (
            <img src={greenPoop} className="image2"></img>
        )
    } else if(props.color == "red") {
        return (
            <img src={redPoop} className="image2"></img>
        )
    } else if(props.color == "brown") {
        return (
            <img src={brownPoop} className="image2"></img>
        )
    } else if(props.color == "white") {
        return (
            <img src={whitePoop} className="image2"></img>
        )
    } else if(props.color == "purple") {
        return (
            <img src={purplePoop} className="image2"></img>
        )
    }
}

export default TurdImage;