import express from 'express';
import SneakerController from '../controllers/sneaker.controller';

const router = express.Router();

router.get('/', SneakerController.viewSneakers);

export default router;
