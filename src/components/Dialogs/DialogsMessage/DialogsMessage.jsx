import React from "react";
import s from "./../Dialogs.module.css";

const DialogMessage = (props) => {
  const { message } = props;
  return (
    <div className={s.message}>
      {message}
    </div>
  );
};

export default DialogMessage;
