import React from 'react';
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className='createPostPage'>
      <h1>記事を投降する</h1>
      <div className="inputPost">
        <div>タイトル</div>
        <input type="text" placeholder='タイトルを入力' />
      </div>
      <div className="inputPost">
      <div>投稿</div>
        <textarea placeholder='投降用の内容を記入' />
      </div>
      <button className='postButton'>投稿する</button>
    </div>
  )
}

export default CreatePost