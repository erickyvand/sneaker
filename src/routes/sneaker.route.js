import express from 'express';
import SneakerController from '../controllers/sneaker.controller';
import {
	checkCartExists,
	checkPaymentExists,
	checkSneakerIdandSizeExists,
	checkSneakerIdExists,
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
	checkSneakerIdExists,
	SneakerController.viewSneaker
);
router.post(
	'/:sneakerId/add/:size',
	validateUrlParam,
	checkSneakerIdandSizeExists,
	SneakerController.addToCart
);
router.get('/cart/view', SneakerController.viewAllCarts);
router.get(
	'/:cartId/cart',
	validateCartUrlParam,
	checkCartExists,
	SneakerController.viewCart
);

export default router;
