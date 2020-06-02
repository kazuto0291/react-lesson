import React from 'react';
import Button from './components/Button/Button'
import CommentList from './components/CommentList/CommentList';
import Form from './components/From/Form';


function App() {
  const comments = [
    'テスト１',
    'テスト2',
    'テスト3',
    'テスト4'
  ]
  return (
    <div>
      <Form />
      <Button onClickHandler={() => {
        console.log('クリックした！');
      }} >
        コメントする
      </Button>
      <CommentList comments={comments} />
    </div>
  )
}










export default App