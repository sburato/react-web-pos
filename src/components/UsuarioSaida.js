import React, { Component } from "react";
import "../styles.css";

class UsuarioSaida extends Component {
  render() {
    return (
      <div>
        <p id="p-titulo"> { this.props.usuario.toUpperCase() } </p>
        <p id="p-subtitulo">Um texto qualquer</p>
      </div>
    );
  }
}

export default UsuarioSaida;