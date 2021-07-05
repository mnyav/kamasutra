import React from "react";
import Post from "./Post/Post";
import s from "./myPost.module.css";
const MyPost = (props) => {
  console.log(props.newPostData);
  const newelem = React.createRef();
  const addPost = () => {
    // debugger;
    props.store.newPostData();
  };
  const { postData } = props.state;
  const newPost = postData.map((item) => (
    <Post like={item.like} message={item.message} />
  ));

  const updateState = () => {
    let text = newelem.current.value;
    props.store.updatePost(text);
  };

  return (
    <div className={s.myPost}>
      <div className="posts">posts</div>
      <div className={s.input}>
        <textarea
          onChange={updateState}
          ref={newelem}
          value={props.state.newPostText}
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
