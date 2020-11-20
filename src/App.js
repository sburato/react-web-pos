import React, { Component } from "react";
import Titulo from "./components/Titulo";
import UsuarioSaida from "./components/UsuarioSaida";
import UsuarioEntrada from "./components/UsuarioEntrada";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { usuario: "Silvano Antonio de Carvalho Burato" };
  }

  onChangeUsuario = (novoUsuario) => {
    this.setState({
      usuario: novoUsuario
    });
  }

  render() {
    return (
      <section>
        <center>
          <Titulo />
          <UsuarioEntrada usuario={ this.state.usuario } onChangeUsuario={ this.onChangeUsuario }  />                 
          <UsuarioSaida usuario={ this.state.usuario.toUpperCase() }/>
        </center>
      </section>      
    ); 
  };
}

export default App;
