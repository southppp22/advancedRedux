import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //call an action creator
    //and save the comment;
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button>submit Comment</button>
      </div>
    </form>
  );
};

export default CommentBox;