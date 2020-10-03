import models from '../database/models';

const { Description } = models;

class DescriptionService {
	static findDescriptions() {
		return Description.findAll();
	}

	static findDescription(attributes) {
		return Description.findOne({ where: attributes });
	}
}

export default DescriptionService;
