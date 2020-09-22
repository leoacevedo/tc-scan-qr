import React from 'react'

class Result extends React.Component {
 
    render(props) {
        const {back} = this.props
        return <div className="results">
            <h1>Verificado: Pago #29373832</h1>

            <table>
                <thead>
                    <tr className="row-title">
                        <td>C&oacute;digo</td>
                        <td>Descripci&oacute;n</td>
                        <td>Cant.</td>
                        <td>Precio</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row-odd">
                        <td>0001249</td>
                        <td className="td-description">Cerveza Stella Artois 975cc Ret</td>
                        <td>8</td>
                        <td>$1680</td>
                    </tr>
                    <tr className="row-even">
                        <td>0001688</td>
                        <td className="td-description">Papas Fritas Lays Cl&aacute;sicas 150Gr</td>
                        <td>14</td>
                        <td>$1400</td>
                    </tr>
                    <tr className="row-odd">
                        <td>0009248</td>
                        <td className="td-description">Rollos de cocina Elegante x 6u</td>
                        <td>1</td>
                        <td>$150</td>
                    </tr>
                    <tr className="row-even">
                        <td>0001688</td>
                        <td className="td-description"><span>Galletitas Frutigran Avena x 12u</span></td>
                        <td>5</td>
                        <td>$702</td>
                    </tr>
                    <tr className="row-total">
                        <td>TOTAL</td>
                        <td /><td />
                        <td>${1680+1400+150+702}</td>
                    </tr>
                </tbody>
            </table>
            <button className="bottomButton" onClick={back}>Volver atr&aacute;s</button>       
        </div>
    }
}  

export default Result;