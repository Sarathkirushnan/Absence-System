const Joi = require('joi');

exports.employeeLeaveTypeReqFormet = (paylode) => {
	const employeeLeaveType = Joi.object().keys({
		id: Joi.number(),
		allocatedDays: Joi.number().required(),
		remainingDays: Joi.number(),
		employeeId: Joi.number().required(),
		leaveTypeId: Joi.number().required(),
	});
	return employeeLeaveType.validate(paylode);
};
