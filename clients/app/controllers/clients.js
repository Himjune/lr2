const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/clients', router);
};

router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);

  db.Client.getInfo(id, function(err, client) {
    if (!err) {
      return res.status(200).send(client);
    } else {
      return res.status(200).send({result: err});
    }
  });
});

router.patch('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  let server = parseInt(req.query.server);
  let game = parseInt(req.query.game);

  db.Client.setInfo(id, game, server, function(err, result) {
    if (!err) {
      return res.status(200).send({result: result[0]});
    } else {
      return res.status(200).send({result: err});
    }
  });
});
