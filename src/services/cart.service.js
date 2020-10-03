import models from '../database/models';

const { Cart, Sneaker } = models;

class CartService {
	static createCart(object) {
		return Cart.create(object);
	}

	static findCart(attribute) {
		return Cart.findOne({ where: attribute, include: { model: Sneaker } });
	}

	static findCarts() {
		return Cart.findAll({ include: { model: Sneaker } });
	}
}

export default CartService;
