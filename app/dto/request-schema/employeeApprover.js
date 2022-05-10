const Joi = require('joi');

exports.employeeApproverReqFormet = (paylode) => {
	const employeeApprover = Joi.object().keys({
		id: Joi.number(),
		approverOrder: Joi.number().required(),
		employeeId: Joi.number().required(),
		approverId: Joi.number().required(),
	});
	return employeeApprover.validate(paylode);
};
