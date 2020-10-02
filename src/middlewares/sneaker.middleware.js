import CartService from '../services/cart.service';
import ResponseService from '../services/response.service';
import SneakerService from '../services/sneaker.service';

export async function checkSneakerExists(req, res, next) {
	const cart = await CartService.findCart({
		cartId: `${req.params.sneakerId}${req.params.size}`,
	});

	const sneaker = await SneakerService.findSneaker({
		id: req.params.sneakerId,
	});

	const sneakerSize = sneaker.Descriptions.find(
		s => s.size === parseInt(req.params.size)
	);

	if (!sneaker) {
		ResponseService.setError(404, 'Sneaker not found');
		return ResponseService.send(res);
	}

	if (!sneakerSize) {
		ResponseService.setError(404, 'Sneaker size not found');
		return ResponseService.send(res);
	}

	if (cart) {
		ResponseService.setError(409, 'Cart already created');
		return ResponseService.send(res);
	}
	next();
}
