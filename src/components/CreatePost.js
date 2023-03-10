import React, { useEffect, useState } from 'react';
import { useNavigate }                from 'react-router-dom';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db }           from '../firebase';

import "./CreatePost.css";

const CreatePost = ({isAuth}) => {
  const [title,    setTitle]    = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"),{
      title:    title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id:       auth.currentUser.uid
      }
    })
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>記事を投降する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder='タイトルを入力'
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder='投降用の内容を記入'
            onChange={(e) => {
              setPostText(e.target.value)
            }}
          />
        </div>
        <button className='postButton'
          onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost