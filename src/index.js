import state from "./state/state";
import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  newPostData,
  updatePost,
  updateMessageState,
  newMessageObj,
  subscribe,
} from "./state/state";

export const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        newPostText={state.postsPage.newPostText}
        newPostData={newPostData}
        state={state}
        updatePost={updatePost}
        updateMessageState={updateMessageState}
        newMessageObj={newMessageObj}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
subscribe(rerender);

rerender(state);
