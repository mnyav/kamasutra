let rerender = () => {
  console.log("state");
};

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
    newMessage: "new mesagge",
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

export const newPostData = () => {
  let newPost = {
    like: 0,
    message: state.postsPage.newPostText,
  };
  state.postsPage.postData.push(newPost);
  state.postsPage.newPostText = "";

  rerender(state);
};
export const updatePost = (text) => {
  state.postsPage.newPostText = text;
  rerender(state);
};

export const newMessageObj = () => {
  let newM = {
    id: 100,
    message: state.dialogsPage.newMessage,
  };
  state.dialogsPage.messageData.push(newM);
  rerender(state);
};

export const updateMessageState = (text) => {
  state.dialogsPage.newMessage = text;
  rerender(state);
};
window.state = state;

export const subscribe = (observer) => {
  rerender = observer;
};

export default state;
