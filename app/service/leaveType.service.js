const { leaveTypeReqFormet } = require('../dto/request-schema/leaveType');
const { LeaveType } = require('../models');

exports.saveLeaveType = async (req, resCallBack) => {
	const paylode = {
		type: req.body.type,
		noticePeriod: req.body.noticePeriod,
		description: req.body.description,
	};
	const result = leaveTypeReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	try {
		const leaveType = await LeaveType.create(paylode);
		return resCallBack(false, leaveType);
	} catch (error) {
		return resCallBack(true, error);
	}
};

exports.getAllLeaveType = async (req, resCallBack) => {
	try {
		const leaveTypes = await LeaveType.findAll();
		return resCallBack(false, leaveTypes);
	} catch (error) {
		return resCallBack(true, error);
	}
};

exports.updateLeaveType = async (req, resCallBack) => {
	const paylode = {
		id: req.body.id,
		type: req.body.type,
		noticePeriod: req.body.noticePeriod,
		description: req.body.description,
	};
	const result = leaveTypeReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	try {
		const leaveType = await LeaveType.update(paylode, {
			where: { id: paylode.id },
		});
		return resCallBack(false, leaveType);
	} catch (error) {
		return resCallBack(true, error);
	}
};
