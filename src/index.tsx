import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  // O MirageJS possui um 'banco de dados' interno, pra usarmos ele 
  // passamos a propriedade 'models':
  models: {
    // Para criar a primeira tabela, passamos o nome da entidade que queremos salvar:
    transaction: Model,
  },

  routes() {
    // Prefixo para a chamada das rotas subsequentes (exemplo: meusite.com/api)
    // Todas as rotas com '/api' serão redirecionadas para o MirageJS
    this.namespace = 'api';

    // Ao realizar uma chamada do tipo GET, será devolvido o objeto abaixo
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    /*
      Abaixo criamos uma rota do tipo 'post' para recebermos 
      os dados do nosso formuário de transação:
    */
    this.post('transactions', (schema, request) => {
      // Convertendo os dados para JSON:
      const data = JSON.parse(request.requestBody);

      // Para salvar no banco de dados, passamos na função 'create' o nosso model e os dados:
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
