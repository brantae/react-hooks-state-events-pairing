import videoData from "../data/video.js";
import React, { useState } from "react";
import Video from "./Video.js"
import InfoSection from "./InfoSection.js";
import LikeButton from "./LikeButton.js";
import CommentsContainer from "./CommentsContainer";

function App() {

  const [showComments, setShowComments] = useState(true)

  function removeComments() {
    setShowComments(!showComments)
  }

  return (
    <div className="App">
      <Video url={videoData.embedUrl} title={videoData.title} />

      <InfoSection header={videoData.title} views={videoData.views} date={videoData.createdAt} />

      <LikeButton upvotes={videoData.upvotes} downvotes={videoData.downvotes} />

      <button onClick={removeComments}>{showComments ? "Hide" : "Show"} Comments</button>
      <hr></hr>
      {/* && = 'if-then' in this context */}
      { showComments && <CommentsContainer comments={videoData.comments} /> }

    </div>
  );
}

export default App;
