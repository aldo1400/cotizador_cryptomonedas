import React, { Component } from 'react'
import OptionSelect from './OptionSelect';

export default class Formulario extends Component {

    monedaRef=React.createRef();
    criptoRef=React.createRef();

    cotizarMoneda=(e)=>{
        e.preventDefault();
        // crear el objeto--
const cotizacion={
    moneda:this.monedaRef.current.value,
    crypto:this.criptoRef.current.value
}

this.props.obtenerValoresCrypto(cotizacion)
        // enviar por props
    }
  render() {
    return (
      <form onSubmit={this.cotizarMoneda}>
          <div className="form-group">
            <label>Moneda:</label>
            <select ref={this.monedaRef} className="form-control">
                <option value="" disabled defaultValue>Elige tu moneda </option>
                <option value="USD">Dolar estadounidense </option>
                <option value="MXN">Peso Mexicano</option>
                <option value="GBP">Libras</option>
                <option value="EUR">Euros</option>
            </select>
          </div>
          <div className="form-group">
            <label>Criptomoneda1</label>
            <select ref={this.criptoRef} className="form-control">
                {Object.keys(this.props.monedas).map(key=>(
                   <OptionSelect
                   key={key}
                    moneda={this.props.monedas[key]}
                   /> 
                ))}
            </select>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Cotizar"/>
          </div>
        </form>
    )
  }
}
