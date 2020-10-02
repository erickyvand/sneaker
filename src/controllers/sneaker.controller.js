import ResponseService from '../services/response.service';
import SneakerService from '../services/sneaker.service';

class SneakerController {
	static async viewSneakers(req, res) {
		const sneakers = await SneakerService.findSneakers();
		ResponseService.setSuccess(200, 'List of latest sneakers', sneakers);
		return ResponseService.send(res);
	}
}

export default SneakerController;
