import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from '../PaginaInicial/';
import PaginaFrontEnd from '../PaginaFrontEnd/';
import PaginaBackEnd from '../PaginaBackEnd/';

const Rotas = () => (
    <BrowserRouter> {/* BrouserRouter sincroniza a aplicação com a url. */}
        <Switch> {/* Faz a escolha como um switch comum*/}
            <Route exact path='/' component={ PaginaInicial } />
            {/* Route associa a URL ao Componente ** EXACT ** diz que o caminho precisa ser exatamente como está no path. */}
            <Route path='/front-end' component={ PaginaFrontEnd } />
            <Route path='/back-end' component={ PaginaBackEnd } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;