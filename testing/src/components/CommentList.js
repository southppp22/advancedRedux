import React from "react";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comments = useSelector((state) => state.comments);

  const renderComments = comments.map((comment) => (
    <li key={comment}>{comment}</li>
  ));

  return (
    <div>
      <ul>{renderComments}</ul>
    </div>
  );
};

export default CommentList;
