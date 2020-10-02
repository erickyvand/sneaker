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
}

export default SneakerController;
