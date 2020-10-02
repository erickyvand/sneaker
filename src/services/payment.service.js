import models from '../database/models';

const { Payment } = models;

class PaymentService {
	static createPayment(object) {
		return Payment.create(object);
	}

	static findPayment(attributes) {
		return Payment.findOne({ where: attributes });
	}
}

export default PaymentService;
