import React from 'react';
import './App.css';
import CameraChooser from './CameraChooser';
import QrScanner from './QrScanner';

import * as ZXing from '@zxing/library'
import { BrowserQRCodeReader } from '@zxing/library';

const STATE_ERROR = -1;
const STATE_CHOOSING_CAMERA = 0;
const STATE_SCANNING = 1;
const STATE_SHOWING_RESULT = 2;

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      state: STATE_CHOOSING_CAMERA,
      error: null,
      devices: [],
      selectedDevice: null
    }
    this.qrReader = new ZXing.BrowserQRCodeReader()
    this.onDeviceChosen = this.onDeviceChosen.bind(this)
  }

  componentDidMount() {
    this.qrReader.listVideoInputDevices()
      .catch((e) => {
        console.error(e)
        this.setState({
          state: STATE_ERROR,
          error: e, 
          devices: []
        })
      })
      .then((devices) => {
        console.log("getting devices")
        this.setState({
          devices, 
          error: null
        })
      })
  }

  onDeviceChosen(device) {
    this.setState({
      state: STATE_SCANNING,
      selectedDevice: device
    })
  }
  
  render() {
    const state = this.state
    switch(state.state) {
      case STATE_CHOOSING_CAMERA:
        switch(state.devices.length) {
          case 0: 
            return <span>Waiting for camera devices...</span>
          case 1: return <QrScanner 
            
          />
          default: 
            return <CameraChooser 
              devices={state.devices}
              onDeviceChosen={this.onDeviceChosen }
            />
        }
      default:
        return <QrScanner />
    }
  }
}

export default App;
