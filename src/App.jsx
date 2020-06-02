import React from 'react';
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
      <Form onSubmit={(body) => {
        console.log('body', body)
      }} />
      <CommentList comments={comments} />
    </div>
  )
}










export default App