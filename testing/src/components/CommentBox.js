import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "actions";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

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
