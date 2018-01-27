const express = require('express');
const router = express.Router();
const clients = require('../apis/clients_api');
const games = require('../apis/games_api');
const servers = require('../apis/servers_api');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/clients/:id', (req, res, next) => {
  let id = parseInt(req.params.id);

  clients.getClient(id, function (err, responseCode, body) {
    let client = JSON.parse(body);
    if (client.game != 0) {
      games.getGame(client.game, function (err, responseCode, gameBody) {
        client.game = JSON.parse(gameBody);
        return res.status(200).send(client);
      });
    } else {
      return res.status(responseCode).send(client);
    }
	});
});

router.put('/clients/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  let game = parseInt(req.query.game);
  let perf = parseInt(req.query.perf);

  servers.accuireServer(game, perf, function (err, responseCode, body) {
    let server = JSON.parse(body);
    clients.patchClient(id, server.id, game, function (err, responseCode, clientRes) {
      return res.status(200).send(JSON.parse(clientRes));
    });
	});
});

router.patch('/clients/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  
  clients.getClient(id, function (err, responseCode, body) {
    let client = JSON.parse(body);
    servers.releaseServer(client.server, function (err, responseCode, body) {
      res.status(200).send(JSON.parse(body));
    });

    clients.patchClient(id, 0, 0, function (err, responseCode, body) {
    });
  });
});

router.get('/games', (req, res, next) => {
  let page = parseInt(req.query.page);
  let size = parseInt(req.query.size);

  games.getAllGames(page, size, function (err, responseCode, body) {
		res.status(responseCode).send(JSON.parse(body));
	});
});

router.get('/games/:id', (req, res, next) => {
  let id = parseInt(req.params.id);

  games.getGame(id, function (err, responseCode, body) {
		res.status(responseCode).send(JSON.parse(body));
	});
});