var express = require('express');
var apiRouterV2 = express.Router();

const knex = require('knex')(require('../knexfile').development);

apiRouterV2.get('/produtos', function (req, res, next) {
  knex('produtos').select('*').then(produtos => {
    res.status(200).json(produtos);
  })
    .catch(err => {
      res.status(500).json({ message: `Erro ao buscar produtos ${err.message}` });
    });
});

apiRouterV2.get('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt = Number.parseInt(id);
    let idx = produtos.findIndex(p => p.id === idInt);
    if (idx > -1) {
      res.json(produtos[idx]);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

apiRouterV2.post('/produtos', function (req, res, next) {
  let produto = req.body;
  let newId = Math.max(...produtos.map(p => p.id)) + 1;
  produto.id = newId;
  produtos.push(produto);
  res.status(201).json({ message: 'Produto criado com sucesso', data: { id: newId } });
})

apiRouterV2.delete('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt = Number.parseInt(id);
    let idx = produtos.findIndex(p => p.id === idInt);
    if (idx > -1) {
      produtos.splice(idx, 1);
      res.status(200).json({ message: 'Produto removido com sucesso' });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
})

apiRouterV2.put('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  let produto = req.body;
  if (id) {
    idInt = Number.parseInt(id);
    let idx = produtos.findIndex(p => p.id === idInt);
    if (idx > -1) {
      produtos[idx].descricao = produto.descricao;
      produtos[idx].marca = produto.marca;
      produtos[idx].preco = produto.preco;
      res.status(200).json({ message: 'Produto atualizado com sucesso', data: produtos[idx] });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
})

module.exports = apiRouterV2;
