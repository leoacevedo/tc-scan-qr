(this["webpackJsonpcashier-webapp"]=this["webpackJsonpcashier-webapp"]||[]).push([[0],{100:function(e,t,a){e.exports=a(187)},105:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(99),l=a.n(r),i=(a(105),a(18)),s=a(19),o=a(22),u=a(21),d=a(20),m=a(34),v=(a(186),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).videoRef=c.a.createRef(),n.selectRef=c.a.createRef(),n.selectedDevice=null,n.stream=null,n.updateSelectedDevice=n.updateSelectedDevice.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"updateSelectedDevice",value:function(){var e=this,t=this.videoRef.current,a=this.selectRef.current.selectedOptions[0].value;if(this.selectedDevice=a,this.stream)for(var n in this.stream.getVideoTracks)n.stop();t.pause(),t.srcObject=null,setTimeout((function(){navigator.mediaDevices.getUserMedia({video:{width:360,height:270},deviceId:{exact:a}}).then((function(a){e.stream=a,t.srcObject=a,t.play()}))}),1e3)}},{key:"onDeviceSelected",value:function(e){this.selectedDevice&&e(this.selectedDevice)}},{key:"componentDidMount",value:function(){this.updateSelectedDevice()}},{key:"render",value:function(){var e=this,t=this.props,a=t.devices,n=t.onDeviceChosen;return c.a.createElement("div",{className:"cameraChooser"},c.a.createElement("h1",null,"Elija la c\xe1mara"),c.a.createElement("select",{ref:this.selectRef,onChange:this.updateSelectedDevice},a.map((function(e){return c.a.createElement("option",{value:e.deviceId},e.label)}))),c.a.createElement("video",{ref:this.videoRef,width:"400",height:"300"}),c.a.createElement("button",{onClick:function(){return e.onDeviceSelected(n)}},"Seleccionar"))}}]),a}(c.a.Component)),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).videoRef=c.a.createRef(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.deviceId,a=e.onQrScanned;(new m.BrowserQRCodeReader).decodeOnceFromVideoDevice(t,this.videoRef.current).then((function(e){return a(e.text)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(e){return c.a.createElement("div",{className:"qrScanner"},c.a.createElement("h1",null,"Escanee el c\xf3digo"),c.a.createElement("video",{ref:this.videoRef}))}}]),a}(c.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(e){var t=this.props.back;return c.a.createElement("div",{className:"results"},c.a.createElement("h1",null,"Verificado: Pago #29373832"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",{className:"row-title"},c.a.createElement("td",null,"C\xf3digo"),c.a.createElement("td",null,"Descripci\xf3n"),c.a.createElement("td",null,"Cant."),c.a.createElement("td",null,"Precio"))),c.a.createElement("tbody",null,c.a.createElement("tr",{className:"row-odd"},c.a.createElement("td",null,"0001249"),c.a.createElement("td",{className:"td-description"},"Cerveza Stella Artois 975cc Ret"),c.a.createElement("td",null,"8"),c.a.createElement("td",null,"$1680")),c.a.createElement("tr",{className:"row-even"},c.a.createElement("td",null,"0001688"),c.a.createElement("td",{className:"td-description"},"Papas Fritas Lays Cl\xe1sicas 150Gr"),c.a.createElement("td",null,"14"),c.a.createElement("td",null,"$1400")),c.a.createElement("tr",{className:"row-odd"},c.a.createElement("td",null,"0009248"),c.a.createElement("td",{className:"td-description"},"Rollos de cocina Elegante x 6u"),c.a.createElement("td",null,"1"),c.a.createElement("td",null,"$150")),c.a.createElement("tr",{className:"row-even"},c.a.createElement("td",null,"0001688"),c.a.createElement("td",{className:"td-description"},c.a.createElement("span",null,"Galletitas Frutigran Avena x 12u")),c.a.createElement("td",null,"5"),c.a.createElement("td",null,"$702")),c.a.createElement("tr",{className:"row-total"},c.a.createElement("td",null,"TOTAL"),c.a.createElement("td",null),c.a.createElement("td",null),c.a.createElement("td",null,"$",3932)))),c.a.createElement("button",{className:"bottomButton",onClick:t},"Volver atr\xe1s"))}}]),a}(c.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={state:-2,error:null,devices:[],selectedDevice:null},e.qrReader=new m.BrowserQRCodeReader,e.onDeviceChosen=e.onDeviceChosen.bind(Object(o.a)(e)),e.showResults=e.showResults.bind(Object(o.a)(e)),e.showScanningScreen=e.showScanningScreen.bind(Object(o.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0}).catch((function(t){console.error(t),e.setState({state:-1,error:t,devices:[]})})).then((function(e){return e.getVideoTracks()})).then((function(t){var a=1==t.length?1:0;console.log(t),e.setState({state:a,devices:t,error:null})}))}},{key:"onDeviceChosen",value:function(e){this.setState({state:1,selectedDevice:e})}},{key:"showScanningScreen",value:function(){this.onDeviceChosen(this.state.selectedDevice)}},{key:"showResults",value:function(e){console.log(e),this.setState({state:2})}},{key:"render",value:function(){var e=this.state;switch(e.state){case-2:return c.a.createElement("span",{className:"waitingForCameras"},"Waiting for camera devices...");case 0:return c.a.createElement(v,{devices:e.devices,onDeviceChosen:this.onDeviceChosen});case 1:return c.a.createElement(h,{deviceId:e.selectedDevice,onQrScanned:this.showResults});case 2:return c.a.createElement(E,{back:this.showScanningScreen})}}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement("div",{className:"App"},c.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.2685c483.chunk.js.map