import React from 'react';
import './App.css';
import Button from './Button/Button';
import Timer from './Timer/Timer';
import Counter from './Counter/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedId: false
    };
  }

  login() {
    this.setState({isLoggedId: true});
  }

  logout() {
    this.setState({isLoggedId: false});
  }

  render() {
    if (this.state.isLoggedId) {
      return (
        <div className="App">
          <PrivatePage />
          <button onClick={() => {this.logout()}}>ログアウト</button>
          <h1>カウンター</h1>
          <Counter  />
          <h1>タイマー</h1>
          <Timer seconds={30} />
          <Timer seconds={50} />
          <Button>ボタン１</Button>
          <Button>ボタン２</Button>
          <Button>ボタン３</Button>
        </div>
      );
    }

    return (
      <div className="App">
        <PublicPage />
        <button onClick={() => {this.login()}}>ログイン</button>
      </div>
    )
  }
}

export default App;

const PublicPage = () => {
  const style = {
    backgroundColor: '#ff0'
  };

  return (
    <div style={style}>
      <h2>非ログイン時ページ</h2>
    </div>
  );
}

const PrivatePage = () => {
  const style = {
    backgroundColor: "#0f0"
  };

  return (
    <div style={style}>
      <h2>ログイン時ページ</h2>
    </div>
  )
}