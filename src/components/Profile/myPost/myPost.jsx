import React from "react";
import Post from "./Post/Post";
import s from "./myPost.module.css";
const MyPost = (props) => {
  const newelem = React.createRef();

  const addPost = () => {
    let text = newelem.current.value;
    props.newPostData(text);
    props.updatePost("");
    
  };
  const { postData } = props.postData;
  const newPost = postData.map((item) => (
    <Post like={item.like} message={item.message} />
  ));

  const updateState = () => {
    let text = newelem.current.value;
    props.updatePost(text);
    
    
  };

  return (
    <div className={s.myPost}>
      <div className="posts">posts</div>
      <div className={s.input}>
        <textarea
          onChange={updateState}
          ref={newelem}
          value={props.newPostText}
          name="item"
        />
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      {newPost}
    </div>
  );
};
export default MyPost;
