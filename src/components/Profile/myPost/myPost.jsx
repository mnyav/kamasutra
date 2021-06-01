import React from "react";
import Post from "./Post/Post";
import s from "./myPost.module.css";
const MyPost = () => {
  const postData = [
    { like: "like:12", message: "hello world" },
    { like: "like:1221", message: "drinck" },
    { like: "like:13", message: "fack you" },
    { like: "like:9991", message: "my name is bobi" },
  ];

  const newPost = postData.map((item) => (
    <Post like={item.like} message={item.message} />
  ));
  return (
    <div className={s.myPost}>
      <div className="posts">posts</div>
      <div className={s.input}>
        <textarea name="item"></textarea>
        <div>
          <button>Add</button>
          <button>Clear</button>
        </div>
      </div>
      {newPost}
    </div>
  );
};
export default MyPost;
