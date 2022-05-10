const Joi = require('joi');

exports.leaveTypeReqFormet = (paylode) => {
	const leaveType = Joi.object().keys({
		id: Joi.number(),
		type: Joi.string().required(),
		noticePeriod: Joi.number().required(),
		description: Joi.string().required(),
	});
	return leaveType.validate(paylode);
};
