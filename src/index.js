import state from "./state/state";
import React from "react";
import store from "./state/state";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
      state={store.getState()}
        store={store}
        // newPostData={store.newPostData.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
store.subscribe(rerender); 
// !!!!!!!!

rerender(state);
