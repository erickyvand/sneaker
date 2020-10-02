import express from 'express';
import SneakerController from '../controllers/sneaker.controller';
import {
	checkCartExists,
	checkPaymentExists,
	checkSneakerExists,
} from '../middlewares/sneaker.middleware';
import {
	validateCartUrlParam,
	validatePaymentBody,
	validateUrlParam,
} from '../validations/sneaker.validation';

const router = express.Router();

router.get('/', SneakerController.viewSneakers);
router.get(
	'/:sneakerId',
	validateUrlParam,
	checkSneakerExists,
	SneakerController.viewSneaker
);
router.post(
	'/:sneakerId/add/:size',
	validateUrlParam,
	checkSneakerExists,
	SneakerController.addToCart
);
router.get(
	'/:cartId/cart',
	validateCartUrlParam,
	checkCartExists,
	SneakerController.viewCart
);
router.post(
	'/:cartId/pay',
	validateCartUrlParam,
	checkCartExists,
	validatePaymentBody,
	checkPaymentExists,
	SneakerController.paySneaker
);

export default router;
