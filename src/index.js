import express from 'express';
import cors from 'cors';
import ResponseService from './services/response.service';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
	ResponseService.setSuccess(200, 'Welcome to Sneaker City.');
	ResponseService.send(res);
});

app.use('/', (req, res) => {
	ResponseService.setError(
		404,
		'Route not found. Please provide the correct route.'
	);
	ResponseService.send(res);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

export default app;
