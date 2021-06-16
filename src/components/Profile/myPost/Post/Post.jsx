import React from "react";
import profiStyles from "./Post.module.css";
const Post = ({ message, like }) => {
  const { item, postItem } = profiStyles;
  return (
    <div className={item}>
      <div className={postItem}>
        <img
          src="https://i.pinimg.com/736x/1a/78/85/1a78856fa322fba98dbec391d450e8af.jpg"
          width="50px"
          height="50px"
          alt="logo"
        />
        <div>{message}</div>
        <div>
          <span>like: {like}</span>
        </div>
      </div>
    </div>
  );
};
export default Post;
