import ResponseService from '../services/response.service';
import SneakerService from '../services/sneaker.service';

export async function checkSneakerExists(req, res, next) {
	const sneaker = await SneakerService.findSneaker({
		id: req.params.sneakerId,
	});

	if (!sneaker) {
		ResponseService.setError(404, 'Sneaker not found');
		return ResponseService.send(res);
	}
	next();
}
