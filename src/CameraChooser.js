import React from 'react';

class CameraChooser extends React.Component {
    constructor(devices) {
      super()
      this.videoRef = React.createRef()
      this.selectRef = React.createRef()
      this.selectedDevice = null;
      this.stream = null;
      this.updateSelectedDevice = this.updateSelectedDevice.bind(this)
    }
  
    updateSelectedDevice() {
      const video = this.videoRef.current
      const dropDown = this.selectRef.current

      const deviceId = dropDown.selectedOptions[0].value
      this.selectedDevice = deviceId

      if (this.stream) {
        for(let stream in this.stream.getVideoTracks) {
            stream.stop()
        };
      }
      video.pause()
      video.srcObject = null

      setTimeout(() => {
        navigator.mediaDevices.getUserMedia({ 
            video: {
                width: 360,
                height: 270,  
            }, 
            deviceId: { 
              exact: deviceId 
            },
        }).then(stream => {
            this.stream = stream
            video.srcObject = stream;
            video.play();
        });
      }, 1000)
    }
  
    onDeviceSelected(callback) {
        if (this.selectedDevice) {
            callback(this.selectedDevice)
        }
    }

    componentDidMount() {
        this.updateSelectedDevice()        
    }

    render() {
      const { devices, onDeviceChosen } = this.props
      return <div className="cameraChooser">
        <h1>Elija la c&aacute;mara</h1>
        <select ref={this.selectRef} onChange={this.updateSelectedDevice }>
          { 
            devices.map(device => {
              const result = <option value={device.deviceId}>{device.label}</option>  
              return result
            })
          }
        </select>
  
        <video
          ref={this.videoRef}
          width="400"
          height="300">
        </video>
  
        <button onClick={() => this.onDeviceSelected(onDeviceChosen)}>Seleccionar</button>
      </div>
    }
  }
  

export default CameraChooser