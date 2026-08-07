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
    knex('produtos').select('*').where({ id: idInt }).then(produtos => {
      if (!produtos.length) {
        res.status(404).json({ message: 'Produto não encontrado' });
        return;
      }
      let produto = produtos[0];
      res.status(200).json(produto);

    })
      .catch(err => {
        res.status(500).json({ message: `Erro ao buscar produto ${err.message}` });
      });
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

apiRouterV2.post('/produtos', function (req, res, next) {
  let produto = req.body;
  knex('produtos').insert(produto, ['id']).then(produtos => {
    if (!produtos.length) {
      res.status(400).json({ message: 'Erro ao criar produto' });
      return;
    } else {
      let id = produtos[0].id;
      res.status(201).json({ message: 'Produto criado com sucesso', data: { id: id } });
    }
  })
    .catch(err => {
      res.status(500).json({ message: `Erro ao criar produto ${err.message}` });
    });
})

apiRouterV2.delete('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt = Number.parseInt(id);
    knex('produtos').where({ id: idInt }).del().then(result => {
      if (result === 0) {
        res.status(404).json({ message: 'Produto não encontrado' });
      } else {
        res.status(200).json({ message: 'Produto removido com sucesso' });
      }
    })
      .catch(err => {
        res.status(500).json({ message: `Erro ao remover produto ${err.message}` });
      });
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
})

apiRouterV2.put('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  let produto = req.body;
  if (id) {
    idInt = Number.parseInt(id);
    knex('produtos').where({ id: idInt }).update(produto).then(result => {
      if (result === 0) {
        res.status(404).json({ message: 'Produto não encontrado' });
      } else {
        res.status(200).json({ message: 'Produto atualizado com sucesso', data: { ...produto, id: idInt } });
      }
    })
      .catch(err => {
        res.status(500).json({ message: `Erro ao atualizar produto ${err.message}` });
      });
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
})

module.exports = apiRouterV2;
