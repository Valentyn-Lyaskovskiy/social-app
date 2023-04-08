import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        updatePost={props.updatePost}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
