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
