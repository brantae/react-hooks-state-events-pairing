import React from "react";
import Comment from "./Comment.js"

function CommentsContainer({ comments }) {

    return (
        <div className="comment-section">
            
            <h2>{comments.length} Comments</h2>
           {comments.map(comment => 
                <Comment key={comment.id} comment={comment} />)} 

            
        </div>
    )

}

export default CommentsContainer