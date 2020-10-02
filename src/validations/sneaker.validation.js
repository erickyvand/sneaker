import Joi from 'joi';
import ResponseService from '../services/response.service';

export const validateUrlParam = (req, res, next) => {
	const schema = Joi.object({
		sneakerId: Joi.string()
			.regex(/^[0-9]{1,}$/)
			.messages({
				'string.pattern.base': 'Id must be a number',
			}),
		size: Joi.string()
			.regex(/^[0-9]{1,}$/)
			.messages({
				'string.pattern.base': 'Id must be a number',
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.params);

	if (error) {
		const errors = error.details.map(err => err.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};

export const validateCartUrlParam = (req, res, next) => {
	const schema = Joi.object({
		cartId: Joi.string()
			.regex(/^[0-9]{1,}$/)
			.messages({
				'string.pattern.base': 'Id must be a number',
			}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.params);

	if (error) {
		const errors = error.details.map(err => err.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};

export const validatePaymentBody = (req, res, next) => {
	const schema = Joi.object({
		cardNumber: Joi.number().integer().max(99999999).required().messages({
			'any.required': 'Card Number is required',
			'number.base': 'Card Number must be a number',
			'number.max': 'Card Number length must be 8',
		}),
	}).options({ abortEarly: false });

	const { error } = schema.validate(req.body);

	if (error) {
		const errors = error.details.map(err => err.message);
		ResponseService.setError(400, errors);
		return ResponseService.send(res);
	}
	next();
};
