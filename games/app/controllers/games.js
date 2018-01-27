const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/games', router);
};

router.get('/', (req, res, next) => {
  let page = parseInt(req.query.page);
  let size = parseInt(req.query.size);

  console.log('ata');

  db.Game.getAll(page, size, function(err, games) {
    if (!err) {
      return res.status(200).send(games);
    } else {
      return res.status(200).send({result: err});
    }
  })
});

router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  console.log('sata');

  db.Game.getInfo(id, function(err, game) {
    if (!err) {
      return res.status(200).send(game);
    } else {
      return res.status(200).send({result: err});
    }
  });
});
