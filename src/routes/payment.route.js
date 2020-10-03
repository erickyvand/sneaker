import express from 'express';
import SneakerController from '../controllers/sneaker.controller';
import { checkCartExists, checkPaymentExists } from '../middlewares/sneaker.middleware';
import { validateCartUrlParam, validatePaymentBody } from '../validations/sneaker.validation';

const router = express.Router();

router.post(
	'/:cartId',
	validateCartUrlParam,
	checkCartExists,
	validatePaymentBody,
	checkPaymentExists,
	SneakerController.paySneaker
);
router.get(
	'/:cartId/payment',
	validateCartUrlParam,
	checkCartExists,
	SneakerController.getspecificPayment
);

export default router;
