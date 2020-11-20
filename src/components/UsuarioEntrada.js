import React, { Component } from "react";
import "../styles.css";

class UsuarioEntrada extends Component {
  render() {
    return (
      <div>
        <input id="input-usuario" onChange={ (e) => this.props.onChangeUsuario(e.target.value) } 
        type="text"></input>      
      </div>
    );
  }
}

export default UsuarioEntrada;