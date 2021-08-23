import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '../Home/Home'
import Clientes from '../Clientes/Clientes'
import Fornecedores from '../Fornecedores/Fornecedores'
import Pedidos from '../Pedidos/Pedidos'
import Produtos from '../Produtos/Produtos'
import Funcionarios from '../Funcionarios/Funcionarios'

export default function Header() {

    return (
        <Router>
            <header>
                <Link to="/" className="hInit">Home</Link>
                <nav>
                    <Link to="/clientes" className='hItem'>Clientes</Link>
                    <Link to="/fornecedores" className='hItem'>Fornecedores</Link>
                    <Link to="/pedidos" className='hItem'>Pedidos</Link>
                    <Link to="/produtos" className='hItem'>Produtos</Link>
                    <Link to="/funcionarios" className='hItem'>Funcionários</Link>
                </nav>
            </header>

            <Switch>
                <Route path="/clientes">
                    <Clientes />
                </Route>
                <Route path="/fornecedores">
                    <Fornecedores />
                </Route>
                <Route path="/pedidos">
                    <Pedidos />
                </Route>
                <Route path="/produtos">
                    <Produtos />
                </Route>
                <Route path="/funcionarios">
                    <Funcionarios />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )

}