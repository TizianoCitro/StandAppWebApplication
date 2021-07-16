import React, {useState} from "react";
import {Link} from "react-router-dom";

import "./Join.css";

const Join = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join a chat</h1>
                <div>
                    <input
                        className="joinInput"
                        placeholder="Insert your username..."
                        type="text"
                        onChange={event => setUsername(event.target.value)}/>
                </div>
                <div>
                    <input
                        className="joinInput mt-20"
                        placeholder="Insert the chat room you want to join..."
                        type="text"
                        onChange={event => setRoom(event.target.value)}/>
                </div>
                <Link onClick={event => (!username || !room) ? event.preventDefault() : null} to={`/chat?username=${username}&room=${room}`}>
                    <button className="button mt-20" type="submit">Join</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;