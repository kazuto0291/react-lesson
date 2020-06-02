import React from 'react';
import CommentList from './components/CommentList/CommentList';
import Form from './components/From/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ['初期コメント']
    }
    this.addComment =this.addComment.bind(this);
  }

  addComment(comment) {
    this.setState({
      comments:[...this.state.comments, comment]
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addComment} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}


export default App