const {
	employeeLeaveTypeReqFormet,
} = require('../dto/request-schema/employeeLeaveType');
const { EmployeeLeaveType } = require('../models');

exports.addEmployeeLeaveType = async (req, resCallBack) => {
	const paylode = {
		id: req.body.id,
		allocatedDays: req.body.allocatedDays,
		remainingDays: req.body.allocatedDays,
		employeeId: req.body.employeeId,
		leaveTypeId: req.body.leaveTypeId,
	};
	const result = employeeLeaveTypeReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	try {
		const employeeLeaveType = await EmployeeLeaveType.create(paylode);
		return resCallBack(false, employeeLeaveType);
	} catch (error) {
		return resCallBack(true, error);
	}
};

exports.getEmployeeLeaveType = async (req, resCallBack) => {
	try {
		const employeeLeaveType = await EmployeeLeaveType.findAll({
			include: ['employee', 'leaveType'],
		});
		return resCallBack(false, employeeLeaveType);
	} catch (error) {
		return resCallBack(true, error);
	}
};

exports.changeEmployeeLeaveType = async (req, resCallBack) => {
	const paylode = {
		id: req.body.id,
		allocatedDays: req.body.allocatedDays,
		employeeId: req.body.employeeId,
		leaveTypeId: req.body.leaveTypeId,
	};
	const result = employeeLeaveTypeReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	try {
		const employeeLeaveType = await EmployeeLeaveType.update(paylode, {
			where: { id: paylode.id },
		});
		return resCallBack(false, employeeLeaveType);
	} catch (error) {
		return resCallBack(true, error);
	}
};
