import React from "react";
import profiStyles from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  let { descr } = profiStyles;
  return (
    <div>
      <div>
        <img
          src="https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9"
          alt="new"
          width="100%"
        ></img>
      </div>
      <div className={descr}>ava+description</div>
    </div>
  );
};
export default ProfileInfo;
