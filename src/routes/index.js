import express from 'express';
import sneakerRoute from './sneaker.route';
import descriptionRoute from './description.route';
import paymentRoute from './payment.route';

const app = express();

app.use('/api/sneakers', sneakerRoute);
app.use('/api/descriptions', descriptionRoute);
app.use('/api/payments', paymentRoute);

export default app;
