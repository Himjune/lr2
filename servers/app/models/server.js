const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {

  const Server = sequelize.define('Server', {
    name: DataTypes.STRING,
    perf: DataTypes.INTEGER,
    game: DataTypes.INTEGER,
  },
  { timestamps: false });

  Server.aqqureServ = function (perf, game, callback) {
    this.findOne(
      {
        where: {perf: {$gte: perf}, game: 0},
        order: [['perf', 'ASC']],
        rejectOnEmpty: true
      }
    ).then((serv) => {
      this.update(
        {'game': game},
        {'where': [{id: serv.id}]}
      ).then((result) => {
        serv.game = game;
        callback(null, serv);
      });
		}).catch(function (err) {
			callback(err, null);
		});
  }

  Server.releaseServ = function (id, callback) {
    this.update(
      {'game': 0},
      {'where': [{id: id}]}
    ).then((result) => {
        callback(null, result);
    }).catch(function (err) {
			callback(err, null);
		});
  }

  return Server;
};

