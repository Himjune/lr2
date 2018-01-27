const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/servers', router);
};

router.get('/', (req, res, next) => {
  let perf = parseInt(req.query.perf);
  let game = parseInt(req.query.game);

  db.Server.aqqureServ(perf, game, function(err, serv) {
    if (!err) {
      return res.status(200).send(serv);
    } else {
      return res.status(200).send({result: err});
    }
  })
  
});

router.patch('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  
  db.Server.releaseServ(id, function(err, serv) {
    if (!err) {
      return res.status(200).send({result: serv[0]});
    } else {
      return res.status(200).send({result: err});
    }
  })
});