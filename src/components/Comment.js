import React, { useState } from "react";


function Comment({ comment }) {

    return (
    <div>
        <h3>{comment.user}</h3>
            {comment.comment}
    </div>
    )
}

export default Comment