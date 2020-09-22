import React from 'react';

class CameraChooser extends React.Component {
    constructor(devices) {
      super()
      this.videoRef = React.createRef()
      this.selectRef = React.createRef()
      this.selectedDevice = null;
      this.updateSelectedDevice = this.updateSelectedDevice.bind(this)
    }
  
    updateSelectedDevice() {
      const video = this.videoRef.current
      const dropDown = this.selectRef.current

      const deviceId = dropDown.selectedOptions[0].value
      this.selectedDevice = deviceId

      navigator.mediaDevices.getUserMedia({ 
        video: {
          width: 400,
          height: 300,  
        }, 
        deviceId: { 
          exact: deviceId 
        },
      }).then(stream => {
        video.srcObject = stream;
        video.play();
      });
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
      const { devices, onDeviceSelected } = this.props
      return <div className="cameraChooser">
        <h1>Elija la c&aacute;mara que va a usar</h1>
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
  
        <button onClick={() => this.onDeviceSelected(onDeviceSelected)}>Seleccionar</button>
      </div>
    }
  }
  

export default CameraChooser