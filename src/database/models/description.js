'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Description extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Description.belongsTo(models.Sneaker, {
				foreignKey: 'sneakerId',
				targetKey: 'id',
			});
		}
	}
	Description.init(
		{
			sneakerId: DataTypes.INTEGER,
			size: DataTypes.INTEGER,
			price: DataTypes.DOUBLE,
			quantity: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Description',
		}
	);
	return Description;
};
