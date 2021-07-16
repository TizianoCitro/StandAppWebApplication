import React from "react";

import "./ChatInfoBar.css";

import onlineIcon from "../../../media/icons/onlineIcon.png"
import closeIcon from "../../../media/icons/closeIcon.png"

const ChatInfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="Online" />
            <h3>{room}</h3>
        </div>

        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="Close" /></a>
        </div>
    </div>
)

export default ChatInfoBar;