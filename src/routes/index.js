import express from 'express';
import SneakerRoute from './sneaker.route';

const app = express();

app.use('/sneakers', SneakerRoute);

export default app;
