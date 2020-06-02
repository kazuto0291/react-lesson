import React from 'react';
import './CommentList.css';

const CommentList = (props) => {
  const {comments} = props;   //オブジェクトの展開//propsの中にあるcommentsを抜き出す。
  const commentList = comments.map((comment, index) => {
    return (
    <li key={index} className="Comment">{comment}</li>
    );
  });

  return (
    <div>
      <ul>{commentList}</ul>
    </div>
  )
}

export default CommentList;