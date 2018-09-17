import React, { Component } from 'react'

export default class Resultado extends Component {

    mostrarResultado=()=>{
        return (
            <div className="bg-success py-4">
              <div className="resumen text-light text-center">
                  <h2 className="mb-4">resumen</h2>
              </div>
            </div>
          )
    }
  render() {
    return(
        <React.Fragment>
            {this.mostrarResultado}
        </React.Fragment>
    )
  }
}
