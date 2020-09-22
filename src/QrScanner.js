import React from 'react'
import { BrowserQRCodeReader } from '@zxing/library';

class QrScanner extends React.Component {
 
    constructor() {
        super()
        this.videoRef = React.createRef()
    }

    componentDidMount() {
        const {deviceId, onQrScanned} = this.props

        const codeReader = new BrowserQRCodeReader();
        codeReader
            .decodeOnceFromVideoDevice(deviceId, this.videoRef.current)
                .then(result => onQrScanned(result.text))
                .catch(err => console.error(err));        
    }

    render(props) {
        return <div className="qrScanner">
            <h1>Escanee el c&oacute;digo QR</h1>
            <video
                ref={this.videoRef}
                width="400"
                height="300" />
        </div>
    }
}  

export default QrScanner;