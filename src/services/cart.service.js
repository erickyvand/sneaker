import models from '../database/models';

const { Cart } = models;

class CartService {
	static createCart(object) {
		return Cart.create(object);
	}

	static findCart(attribute) {
		return Cart.findOne({ where: attribute });
	}
}

export default CartService;
