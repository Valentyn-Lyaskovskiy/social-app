import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../Redux/profile-reducer.js";

const MyPosts = (props) => {
  const postElements = props.posts.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  const newPostEl = React.createRef();

  function addPost() {
    props.dispatch(addPostActionCreator());
  }

  function postChange() {
    let text = newPostEl.current.value;
    let action = updatePostActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.posts}>
      <div className={s.posts__wrapper}>
        <div>{postElements}</div>
        <textarea
          className='textarea'
          placeholder='Enter your post'
          onChange={postChange}
          ref={newPostEl}
          value={props.newPostText}
        />
        <button onClick={addPost} className={s.posts__btn}>
          Add a Post
        </button>
      </div>
    </div>
  );
};

export default MyPosts;
