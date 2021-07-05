import React from "react";
import MyPost from "./myPost/myPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost
        // newPostData={props.newPostData}
      
        state={props.state}
        store={props.store}
      />
    </div>
  );
};
export default Profile;
