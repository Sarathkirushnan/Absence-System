const Joi = require('joi');

exports.leaveRequestReqFormet = (paylode) => {
	const leaveRequest = Joi.object().keys({
		id: Joi.number(),
		toDate: Joi.date().required(),
		fromDate: Joi.date().required(),
		reason: Joi.string().required(),
		leaveDays: Joi.number().required(),
		employeeId: Joi.number().required(),
		employeeLeaveTypeId: Joi.number().required(),
	});
	return leaveRequest.validate(paylode);
};
