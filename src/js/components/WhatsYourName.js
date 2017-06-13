import React from "react";

const WhatsYourName = ({updateName}) => {
    return <div>
        <h1>What's Your Name</h1>
        <input type="text" onChange={updateName}/>
    </div>;
};

export default WhatsYourName;
