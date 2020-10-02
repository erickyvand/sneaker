import express from 'express';
import SneakerController from '../controllers/sneaker.controller';
import { checkSneakerExists } from '../middlewares/sneaker.middleware';
import { validateUrlParam } from '../validations/sneaker.validation';

const router = express.Router();

router.get('/', SneakerController.viewSneakers);
router.get(
	'/:sneakerId',
	validateUrlParam,
	checkSneakerExists,
	SneakerController.viewSneaker
);

export default router;
