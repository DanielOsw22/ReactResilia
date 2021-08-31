import React, { Component } from 'react';
import Fornecedores from './components/Fornecedores/Fornecedores.js';

class App extends Component {

    state={
        fornecedor: [],
    }

    async componentDidMount(){
        const response = await Fornecedores.get('');

        this.setState({fornecedor: response.data});
    }

    render() {

        const {fornecedor} = this.state;

      return (
          <div>
              <h1>Fornecedores</h1>
              {fornecedor.map(fornecedor => {
                  <li key={fornecedor.show.ID_fornecedor}>
                      <h2>
                          <strong>Nome: </strong>
                          {fornecedor.show.nome}
                          </h2>
                          <p>
                          {fornecedor.show.CNPJ}
                          {fornecedor.show.telefone}
                          </p>

                  </li>
              })}
          </div>
      );
    }
  }
  
  export default App;