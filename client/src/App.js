import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//importar axios
import axios from 'axios';

class App extends Component {
  //construtor
  constructor(props) {
    super(props)

    //chamada http postagens
    axios
      .get('/postagens')
      .then(resultado => {
        console.log(resultado)
      })

    //chamada http comentarios
    axios
      .get('/comentarios/teste')
      .then(resultado => {
        console.log(resultado)
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
