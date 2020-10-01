import React from 'react';
import { BrowserQRCodeReader } from '@zxing/library';

import './App.css';
import CameraChooser from './CameraChooser';
import QrScanner from './QrScanner';
import Result from './Result';

const STATE_ERROR = -1;
const STATE_WAITING_FOR_CAMERAS = -2;
const STATE_CHOOSING_CAMERA = 0;
const STATE_SCANNING = 1;
const STATE_SHOWING_RESULT = 2;

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      // state: STATE_SHOWING_RESULT,
      state: STATE_WAITING_FOR_CAMERAS,
      error: null,
      devices: [],
      selectedDevice: null
    }
    this.qrReader = new BrowserQRCodeReader()
    this.onDeviceChosen = this.onDeviceChosen.bind(this)
    this.showResults = this.showResults.bind(this)
    this.showScanningScreen = this.showScanningScreen.bind(this)
  }

  componentDidMount () {
    navigator.mediaDevices.getUserMedia({
      video: true
    })
      .catch((e) => {
        console.error(e)
        this.setState({
          state: STATE_ERROR,
          error: e, 
          devices: []
        })
      })
      .then(stream => {
        return stream.getVideoTracks() 
      })
      .then(tracks => {
        const singleTrack = tracks.length == 1
        const newState = singleTrack ? STATE_SCANNING : STATE_CHOOSING_CAMERA
        const newDeviceId = singleTrack ? tracks[0] : this.state.deviceId
        console.log(tracks)
        this.setState({
          state: newState,
          devices: tracks, 
          deviceId: newDeviceId,
          error: null,
        })
      })
  }

  onDeviceChosen(device) {
    this.setState({
      state: STATE_SCANNING,
      selectedDevice: device
    })
  }
  
  showScanningScreen() {
    this.onDeviceChosen(this.state.selectedDevice)
  }

  showResults(decoded) {
    console.log(decoded)
    this.setState({
      state: STATE_SHOWING_RESULT
    })
  }

  render() {
    const state = this.state
    switch(state.state) {
      case STATE_WAITING_FOR_CAMERAS:
        return <span className="waitingForCameras">Waiting for camera devices...</span>
        case STATE_CHOOSING_CAMERA:
          return <CameraChooser 
          devices={state.devices}
          onDeviceChosen={this.onDeviceChosen }
        />
      case STATE_SCANNING:
        return <QrScanner
          deviceId={state.selectedDevice}
          onQrScanned={this.showResults}
        />
      case STATE_SHOWING_RESULT:
        return <Result back={this.showScanningScreen}/>
    }
  }
}

export default App;
