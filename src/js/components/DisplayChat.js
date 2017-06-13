import React from "react";
import immutable from "immutable";

const DisplayChat = ({chats}) =>{
    const chatList = chats.map((chat, index) => {
        return (
            <p key = {index}>{chat.get("name")}</p>
        )
    });
    return <div>{chatList}</div>

}


export default DisplayChat;