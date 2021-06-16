import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { newPostData, updatePost } from "./state/state";

export const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
      newPostText={state.postsPage.newPostText}
        newPostData={newPostData}
        state={state}
        updatePost={updatePost}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
