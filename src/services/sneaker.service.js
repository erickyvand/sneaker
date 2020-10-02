import models from '../database/models';

const { Sneaker } = models;

class SneakerService {
	static findSneakers() {
		return Sneaker.findAll({
			order: [['releaseDate', 'DESC']],
			limit: 10,
		});
	}
}

export default SneakerService;
