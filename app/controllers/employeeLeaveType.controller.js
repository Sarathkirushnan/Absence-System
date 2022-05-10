const {
	addEmployeeLeaveType,
	getEmployeeLeaveType,
	changeEmployeeLeaveType,
} = require('../service/employeeLeaveType.service');

exports.saveEmployeeLeaveType = (req, res) => {
	addEmployeeLeaveType(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};

exports.getAllEmployeeLeaveType = (req, res) => {
	getEmployeeLeaveType(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};

exports.updateEmployeeLeaveType = (req, res) => {
	changeEmployeeLeaveType(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};
