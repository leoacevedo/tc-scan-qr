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
                        <td className="td-description">Limpiador Poett L. Evolution</td>
                        <td>3</td>
                        <td>$405</td>
                    </tr>
                    <tr className="row-even">
                        <td>0001688</td>
                        <td className="td-description">Lays Cl&aacute;sicas 150Gr</td>
                        <td>3</td>
                        <td>$516</td>
                    </tr>
                    <tr className="row-odd">
                        <td>0009248</td>
                        <td className="td-description">Toalla 500g 50x90cm</td>
                        <td>2</td>
                        <td>$858</td>
                    </tr>
                    <tr className="row-even">
                        <td>0001688</td>
                        <td className="td-description"><span>Tableta Choc. amargo 60% &Aacute;guila</span></td>
                        <td>4</td>
                        <td>$904</td>
                    </tr>

                    <tr className="row-odd">
                        <td>0001249</td>
                        <td className="td-description">Gaseosa Coca-Cola 2.5L</td>
                        <td>1</td>
                        <td>$367</td>
                    </tr>
                    <tr className="row-even">
                        <td>0001688</td>
                        <td className="td-description">Aceite Girasol Natura 1.5L</td>
                        <td>4</td>
                        <td>$1172</td>
                    </tr>
                    <tr className="row-odd">
                        <td>0009248</td>
                        <td className="td-description">Caf&eacute; inst. La Virginia capuchino 210g</td>
                        <td>6</td>
                        <td>$1470</td>
                    </tr>
                    <tr className="row-even">
                        <td>0001688</td>
                        <td className="td-description"><span>Ang&eacute;lica Zapata Cab. Sauvignon</span></td>
                        <td>1</td>
                        <td>$589</td>
                    </tr>
                    <tr className="row-odd">
                        <td>0009248</td>
                        <td className="td-description">Aperitivo Gancia 950ml</td>
                        <td>1</td>
                        <td>$353</td>
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