import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

const Message = ({message: {user, content}, username}) => {
    let isSentByCurrentUser = false;

    const trimmedUsername = username.trim();

    if (user === trimmedUsername) {
        console.log("It's the same user taht has sent the message");

        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedUsername}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(content)}</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ReactEmoji.emojify(content)}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>
                </div>
            )
    );
}

export default Message;