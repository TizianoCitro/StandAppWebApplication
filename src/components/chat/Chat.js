import React, {useEffect, useState} from "react";
import queryString from "query-string";
import io from "socket.io-client";

import ChatInfoBar from "./info-bar/ChatInfoBar";
import Input from "./input/Input";

import "./Chat.css";
import Messages from "./messages/Messages";

const ENDPOINT = "localhost:5000";
let socket;

const Chat = ({location}) => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");

    // Messages in there are like: { user, content }
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const {username, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setUsername(username);
        setRoom(room);

        socket.emit("join", {username, room}, error => {
            if (error)
                alert(error);
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on("message", message => {
            if (!message)
                console.log("Message do not received properly");

            const {user, content} = message;

            console.log(`Message received by ${user}: ${content}`);

            // Since you cannot mutate state, it adds all the messages
            // that were already in the array (...messages) and to them
            // adds the new message.
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = event => {
        event.preventDefault();

        if (message)
            socket.emit("sendMessage", message, () => setMessage(""));
    }

    return (
        <div className="chatOuterContainer">
            <div className="chatInnerContainer">
                <ChatInfoBar room={room}/>

                <Messages messages={messages} username={username}/>

                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;