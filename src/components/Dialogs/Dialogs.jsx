import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import DialogMessage from "./DialogsMessage/DialogsMessage";

const Dialogs = (props) => {
  const { dialogsData, messageData } = props.state;

  const newDialogs = dialogsData.map((item, i) => {
    return <DialogItem name={item.name} id={item.id} key={i} />;
  });
  const newMessage = messageData.map((item, i) => {
    return <DialogMessage message={item.message} id={item.id} key={i} />;
  });

  let newElement = React.createRef();

  const addMessage = () => {
    props.store.newMessageObj();
    props.store.updateMessageState("");
  };
  const updateMessage = () => {
    let text = newElement.current.value;
    props.store.updateMessageState(text);

    console.log(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{newDialogs}</div>

      <div className={s.messages}>
        <div className={s.dialogWindow}>
          <h3>Dialog window</h3>
          <textarea
            onChange={updateMessage}
            ref={newElement}
            value={props.state.newMessage}
            cols="15"
            rows="3"
          ></textarea>
          <div className="btn">
            <button onClick={addMessage}>add</button>
            <button>delete</button>
          </div>
        </div>
        {newMessage}
      </div>
    </div>
  );
};
export default Dialogs;
