import React, { useState } from "react";

function LikeButton({ upvotes, downvotes }) {
    const [like, setLike] = useState(upvotes)
    const [dislike, setDislike] = useState(downvotes)

    function handleUpVote() {
         setLike(like + 1)

    }

    function handleDownVote() {
         setDislike(dislike + 1)
    }

    return (
        <p className="vote-section">
            <button className="upvote" onClick={handleUpVote}>{like}👍</button>
            <button className="downvote" onClick={handleDownVote}>{dislike}👎</button>
        </p>
    )

}

export default LikeButton