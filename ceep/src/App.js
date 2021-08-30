import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import "./assets/index.css";
import "./assets/App.css";
class App extends Component{


  constructor(){
    super();
    this.notas = [];
  }
  criarNota(titulo,texto){
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
  }
  render(){
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas = {this.notas}/>
      </section>
    );
  }
  }

export default App;
