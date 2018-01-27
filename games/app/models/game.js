module.exports = (sequelize, DataTypes) => {

  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
    perf: DataTypes.INTEGER,
  },
  { timestamps: false });

  Game.getInfo = function (id, callback) {
    this.findById(id, 
		{
			rejectOnEmpty: true
		}
		).then((game) => {
			callback(null, game);
		}).catch(function (err) {
			callback(err, null);
		});
  }
  
  Game.getAll = function(page, size, callback){
		this.findAndCountAll({
			order: [['name', 'ASC']],
			offset: page*size,
			limit: size
		}
		).then((games) => {
			callback(null, games);
		}).catch(function (err) {
			callback(err, null);
		});
	}

  return Game;
};

