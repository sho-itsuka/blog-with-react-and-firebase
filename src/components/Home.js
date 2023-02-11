import React from 'react'

const Home = () => {
  return (
    <div className='hopePage'>
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
      </div>
      <div className="postTextContainer">
        <h3>自己紹介</h3>
        2023年7月からWebエンジニアになりました。<br />
        今はReactを学習中です。<br />
        これからフロントエンジニアとしてスキルを高めて頑張っていきたいと思っています。<br />
        よろしくお願いします。
      </div>
      <div className="nameAndDeleteButton">
        <h3>@shota</h3>
        <button>削除</button>
      </div>
    </div>
  )
};

export default Home