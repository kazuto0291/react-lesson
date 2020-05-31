import React from 'react';
import './App.css';
import Button from './Button/Button';
import Timer from './Timer/Timer';

function App() {
  return (
    <div className="App">
      <h1>タイマー</h1>
      <Timer seconds={30} />
      <Timer seconds={50} />
      <p>こんにちは世界！</p>
      <Button>ボタン１</Button>
      <Button>ボタン２</Button>
      <Button>ボタン３</Button>
    </div>
  );
}

export default App;
