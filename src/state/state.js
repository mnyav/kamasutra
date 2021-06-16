import { rerender } from "../rerender";

const state = {
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Tesak B.S" },
      { id: 2, name: "Sava Y.A" },
      { id: 3, name: "kravets V.I" },
      { id: 4, name: "Tarasenko N.A" },
      { id: 5, name: "Antonenko D.L" },
    ],
    messageData: [
      { id: 1, message: "hello my name is bob" },
      { id: 2, message: "fack you" },
      { id: 3, message: "am  fine" },
      { id: 4, message: "drinck alcogol" },
      { id: 5, message: "wery bead" },
    ],
  },
  postsPage: {
    postData: [
      { like: "12", message: "hello world" },
      { like: "1221", message: "drinck" },
      { like: "13", message: "fack you" },
      { like: "9991", message: "my name is bobi" },
    ],
    newPostText: "tesak",
  },
};
console.log(state.postsPage.newPostText);
export const newPostData = (post) => {
  let newPost = {
    like: 0,
    message: post,
  };
  state.postsPage.postData.push(newPost);
  rerender(state);
};
export const updatePost = (text) => {
  state.postsPage.newPostText = text;
  rerender(state);
};

export default state;
