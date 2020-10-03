import CartService from '../services/cart.service';
import DescriptionService from '../services/description.service';
import PaymentService from '../services/payment.service';
import ResponseService from '../services/response.service';
import SneakerService from '../services/sneaker.service';

class SneakerController {
	static async viewSneakers(req, res) {
		const sneakers = await SneakerService.findSneakers();
		ResponseService.setSuccess(200, 'List of latest sneakers', sneakers);
		return ResponseService.send(res);
	}

	static async viewSneaker(req, res) {
		const sneaker = await SneakerService.findSneaker({
			id: req.params.sneakerId,
		});
		ResponseService.setSuccess(200, 'Selected Sneaker', sneaker);
		return ResponseService.send(res);
	}

	static async addToCart(req, res) {
		const cart = await CartService.createCart({
			cartId: `${req.params.sneakerId}${req.params.size}`,
			sneakerId: req.params.sneakerId,
			size: req.params.size,
		});
		ResponseService.setSuccess(201, 'Sneaker added to cart', cart);
		return ResponseService.send(res);
	}

	static async viewAllCarts(req, res) {
		const carts = await CartService.findCarts();
		ResponseService.setSuccess(200, 'View All Carts', carts);
		return ResponseService.send(res);
	}

	static async viewCart(req, res) {
		const cart = await CartService.findCart({ id: req.params.cartId });
		ResponseService.setSuccess(200, 'Selected cart', cart);
		return ResponseService.send(res);
	}

	static async paySneaker(req, res) {
		const cart = await CartService.findCart({ id: req.params.cartId });
		const description = await DescriptionService.findDescription({
			sneakerId: cart.sneakerId,
		});

		await PaymentService.createPayment({
			cartId: req.params.cartId,
			amount: description.price,
			cardNumber: req.body.cardNumber,
		});
		await PaymentService.updatePayment(
			{ id: req.params.cartId },
			{ isPaid: true }
		);

		const payment = await PaymentService.findPayment({ id: req.params.cartId });
		ResponseService.setSuccess(
			201,
			'Your payment has been done sucssfully',
			payment
		);
		return ResponseService.send(res);
	}

	static async getspecificPayment(req, res) {
		const payment = await PaymentService.findPayment({ id: req.params.cartId });
		ResponseService.setSuccess(200, 'Payment for this cart', payment);
		return ResponseService.send(res);
	}

	static async viewSneakersDescriptions(req, res) {
		const descriptions = await DescriptionService.findDescriptions();
		ResponseService.setSuccess(200, 'All descriptions', descriptions);
		return ResponseService.send(res);
	}
}

export default SneakerController;
