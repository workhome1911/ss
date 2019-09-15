import React from 'react';
import 'style/index.less';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button type='danger'>Default</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
