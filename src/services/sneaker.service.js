import models from '../database/models';

const { Sneaker, Description } = models;

class SneakerService {
	static findSneakers() {
		return Sneaker.findAll({
			order: [['releaseDate', 'DESC']],
			limit: 10,
		});
	}

	static findSneaker(attribute) {
		return Sneaker.findOne({
			where: attribute,
			include: {
				model: Description,
			},
		});
	}
}

export default SneakerService;
