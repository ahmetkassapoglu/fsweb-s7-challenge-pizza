import React from "react"
import "./Success.css"
function Succes() {
    return (
        <div id="main">
        <div className="container">
            <div className="header">
                <h1> Teknolojik Yemekler</h1>
            </div>
            <div className="order-succes">
                <p>lezzetin yolda</p>
                <h1>SİPARİŞ ALINDI</h1>
            </div>
            <hr></hr>
            <h3 id="pizza-name">Position Absolute Acı Pizza</h3>     
            <div className="succes-details">
          
                <div id="succes-contain">
                    <p> Boyut : <b>L</b></p>
                    <p> Hamur : <b>Süpper İnce</b></p>
                    <p>Ek Malzemeler: <b>Pepperoni, Sosis, Mısır, Ananas, Jalapeno</b></p>
                </div>
            </div>
           < div className='order-output'>
                       <div className='head output'> <h3>Sipariş Toplamı</h3></div>
                        <div className='extras output-element'><p> Seçimler</p> <p>25.00₺ </p> </div>
                   <div className='sum output-element'> <p> Toplam </p> <p>110.50</p> </div>
        </div>
        </div>
        <div className="footer">
            <br></br>
            <br></br>
                </div>
        </div>
    )
}
export default Succes