module.exports = (sequelize, DataTypes) => {

  const Client = sequelize.define('Client', {
    nickname: DataTypes.STRING,
    server: DataTypes.INTEGER,
    game: DataTypes.INTEGER,
  },
  { timestamps: false });

  Client.getInfo = function (id, callback) {
    this.findById(id, 
		{
			rejectOnEmpty: true
		}
		).then((client) => {
			callback(null, client);
		}).catch(function (err) {
			callback(err, null);
		});
  }

  Client.setInfo = function (id, game, server, callback) {
    this.update(
      {'game': game, 'server': server},
      {'where': [{id: id}]}
    ).then((result) => {
        callback(null, result);
    }).catch(function (err) {
			callback(err, null);
		});
  }

  return Client;
};
