import React from 'react';
import './App.css';
import Button from './Button/Button';
// import Timer from './Timer/Timer';
import Counter from './Counter/Counter';

const API_URL = 'https://opentdb.com/api.php?amount=10';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedId: false,
      loading: false,
      data: null
      
    };
  }

  componentDidMount() {
    this.requestData();
  }

  async requestData() {
    this.setState({
      loading: true
    });

    let firstQuizData;
    try {
      const response = await window.fetch(API_URL);
      const data = await response.json();
      console.log(data);
      firstQuizData = data.response[0];
    } catch (error) {
      firstQuizData = null;
    }
    this.setState({
      loading: false,
      data: firstQuizData
    })
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
          { this.renderData()}
          { this.renderRequestButton()}
          <h1>カウンター</h1>
          <Counter  />
          <h1>タイマー</h1>
          {/* <Timer seconds={30} /> */}
          {/* <Timer seconds={50} /> */}
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

  renderData() {
    if (this.state.loading) {
      return <p>データ取得中...</p>;
    }
    if (!this.state.loading && !this.state.data) {
      return <p>データなし</p>
    }
    
    return <p>{ JSON.stringify( this.state.data)} </p>
  }

  renderRequestButton() {
    if (this.state.loading) {
      return <button disabled> データ取得中...</button>
    }
    
    return <button onClick={ () => { this.requestData() }}>データを取得する</button>
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