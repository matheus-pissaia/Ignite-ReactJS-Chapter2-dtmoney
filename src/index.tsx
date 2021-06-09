import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    // Prefixo para a chamada das rotas subsequentes (exemplo: meusite.com/api)
    // Todas as rotas com '/api' serão redirecionadas para o MirageJS
    this.namespace = 'api';

    // Ao realizar uma chamada do tipo GET, será devolvido o objeto abaixo
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transação 1',
          category: 'Food',
          type: 'deposit',
          amount: 400,
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
