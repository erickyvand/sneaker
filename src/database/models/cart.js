'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Cart extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Cart.belongsTo(models.Sneaker, {
				foreignKey: 'sneakerId',
				targetKey: 'id',
			});
		}
	}
	Cart.init(
		{
			cartId: DataTypes.INTEGER,
			sneakerId: DataTypes.INTEGER,
			size: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Cart',
		}
	);
	return Cart;
};
