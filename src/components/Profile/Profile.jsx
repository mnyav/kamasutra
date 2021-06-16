import React from "react";
import MyPost from "./myPost/myPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost
        newPostText={props.newPostText}
        updatePost={props.updatePost}
        newPostData={props.newPostData}
        postData={props.postData}
      />
    </div>
  );
};
export default Profile;
