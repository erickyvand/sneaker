'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Sneaker extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Sneaker.hasMany(models.Description, {
				foreignKey: 'sneakerId',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
			Sneaker.hasMany(models.Cart, {
				foreignKey: 'sneakerId',
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			});
		}
	}
	Sneaker.init(
		{
			brandName: DataTypes.STRING,
			model: DataTypes.STRING,
			picture: DataTypes.STRING,
			releaseDate: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Sneaker',
		}
	);
	return Sneaker;
};
