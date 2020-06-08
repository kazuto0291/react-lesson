import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Router/Home'
import About from './components/Router/About'
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
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">about</Link></li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/about/:id" exact component={About} />
        </Router>
        <Form onSubmit={this.addComment} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}


export default App