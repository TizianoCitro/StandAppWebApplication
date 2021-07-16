import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./message/Message";

import "./Messages.css";

const Messages = ({messages, username}) => (
    <ScrollToBottom className="messages">
        {messages.map((message, messageIndex) =>
            <div key={messageIndex}>
                <Message message={message} username={username}/>
            </div>)}
    </ScrollToBottom>
);

export default Messages;