import React from "react";

function InfoSection( { header, views, date }) {
    return (
        <div>
            <h2>{header}</h2>
            <h3>{views} Views | Uploaded {date}</h3>
        </div>
    )

}

export default InfoSection