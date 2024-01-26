import React from "react";

function SendMail({info}) {
    return(
        <div className="page">
            <h4>Send Mail Message</h4>
            <p>Name: {info.name}</p>
            <p>Email: {info.email}</p>
        </div>
    )
}

export default SendMail