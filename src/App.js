import React from 'react';
import logo from './qrcode-1.jpg';
import './App.css';

import * as ZXing from '@zxing/library'
import { BrowserQRCodeReader } from '@zxing/library';

class App extends React.Component {
  
  constructor() {
    super()
    this.scanQR = this.scanQR.bind(this)
    this.imgRef = React.createRef()
  }

  scanQR() {
    const img = this.imgRef.current
    const qrReader = new BrowserQRCodeReader()
    qrReader.decodeFromImage(img)
      .then((result) => console.log(result))
      .catch((e) => console.error(e))
  }

  render() {
    console.log(ZXing)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" ref={this.imgRef}/>
          <button  onClick={this.scanQR}>Scan</button>
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
}

export default App;
