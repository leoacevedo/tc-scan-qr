(this["webpackJsonpcashier-webapp"]=this["webpackJsonpcashier-webapp"]||[]).push([[0],{100:function(e,t,n){e.exports=n(187)},105:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(99),l=n.n(r),i=(n(105),n(18)),o=n(19),s=n(22),u=n(21),d=n(20),v=n(34),m=(n(186),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this)).videoRef=c.a.createRef(),a.selectRef=c.a.createRef(),a.selectedDevice=null,a.stream=null,a.updateSelectedDevice=a.updateSelectedDevice.bind(Object(s.a)(a)),a}return Object(o.a)(n,[{key:"updateSelectedDevice",value:function(){var e=this,t=this.videoRef.current,n=this.selectRef.current.selectedOptions[0].value;if(this.selectedDevice=n,this.stream)for(var a in this.stream.getVideoTracks)a.stop();t.pause(),t.srcObject=null,setTimeout((function(){navigator.mediaDevices.getUserMedia({video:{width:400,height:300},deviceId:{exact:n},facingMode:"environment"}).then((function(n){e.stream=n,t.srcObject=n,t.play()}))}),1e4)}},{key:"onDeviceSelected",value:function(e){this.selectedDevice&&e(this.selectedDevice)}},{key:"componentDidMount",value:function(){this.updateSelectedDevice()}},{key:"render",value:function(){var e=this,t=this.props,n=t.devices,a=t.onDeviceChosen;return c.a.createElement("div",{className:"cameraChooser"},c.a.createElement("h1",null,"Elija la c\xe1mara que va a usar"),c.a.createElement("select",{ref:this.selectRef,onChange:this.updateSelectedDevice},n.map((function(e){return c.a.createElement("option",{value:e.deviceId},e.label)}))),c.a.createElement("video",{ref:this.videoRef,width:"400",height:"300"}),c.a.createElement("button",{onClick:function(){return e.onDeviceSelected(a)}},"Seleccionar"))}}]),n}(c.a.Component)),h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).videoRef=c.a.createRef(),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.deviceId,n=e.onQrScanned;(new v.BrowserQRCodeReader).decodeOnceFromVideoDevice(t,this.videoRef.current).then((function(e){return n(e.text)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(e){return c.a.createElement("div",{className:"qrScanner"},c.a.createElement("h1",null,"Escanee el c\xf3digo QR"),c.a.createElement("video",{ref:this.videoRef,width:"400",height:"300"}))}}]),n}(c.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(e){var t=this.props.back;return c.a.createElement("div",{className:"results"},c.a.createElement("h1",null,"Verificado: Pago #29373836372"),c.a.createElement("table",null,c.a.createElement("tr",{className:"row-title"},c.a.createElement("td",null,"C\xf3digo"),c.a.createElement("td",null,"Descripci\xf3n"),c.a.createElement("td",null,"Cant."),c.a.createElement("td",null,"Precio")),c.a.createElement("tr",{className:"row-odd"},c.a.createElement("td",null,"0001249"),c.a.createElement("td",null,"Cerveza Stella Artois 975cc Ret"),c.a.createElement("td",null,"8"),c.a.createElement("td",null,"$1680")),c.a.createElement("tr",{className:"row-even"},c.a.createElement("td",null,"0001688"),c.a.createElement("td",null,"Papas Fritas Lays Cl\xe1sicas 150Gr"),c.a.createElement("td",null,"14"),c.a.createElement("td",null,"$1400")),c.a.createElement("tr",{className:"row-odd"},c.a.createElement("td",null,"0009248"),c.a.createElement("td",null,"Rollos de cocina Elegante x 6u"),c.a.createElement("td",null,"1"),c.a.createElement("td",null,"$150")),c.a.createElement("tr",{className:"row-even"},c.a.createElement("td",null,"0001688"),c.a.createElement("td",null,"Galletitas Frutigran Avena x 12u"),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"$702")),c.a.createElement("tr",{className:"row-total"},c.a.createElement("td",null,"TOTAL"),c.a.createElement("td",null),c.a.createElement("td",null),c.a.createElement("td",null,"$",3932))),c.a.createElement("button",{className:"bottomButton",onClick:t},"Volver atr\xe1s"))}}]),n}(c.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={state:-2,error:null,devices:[],selectedDevice:null},e.qrReader=new v.BrowserQRCodeReader,e.onDeviceChosen=e.onDeviceChosen.bind(Object(s.a)(e)),e.showResults=e.showResults.bind(Object(s.a)(e)),e.showScanningScreen=e.showScanningScreen.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.qrReader.listVideoInputDevices().catch((function(t){console.error(t),e.setState({state:-1,error:t,devices:[]})})).then((function(t){var n=1==t.length?1:0;console.log("getting devices"),e.setState({state:n,devices:t,error:null})}))}},{key:"onDeviceChosen",value:function(e){this.setState({state:1,selectedDevice:e})}},{key:"showScanningScreen",value:function(){this.onDeviceChosen(this.state.selectedDevice)}},{key:"showResults",value:function(e){console.log(e),this.setState({state:2})}},{key:"render",value:function(){var e=this.state;switch(e.state){case-2:return c.a.createElement("span",{className:"waitingForCameras"},"Waiting for camera devices...");case 0:return c.a.createElement(m,{devices:e.devices,onDeviceChosen:this.onDeviceChosen});case 1:return c.a.createElement(h,{deviceId:e.selectedDevice,onQrScanned:this.showResults});case 2:return c.a.createElement(f,{back:this.showScanningScreen})}}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement("div",{className:"App"},c.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.3b5ee7e7.chunk.js.map