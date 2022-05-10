const {
	saveLeaveType,
	getAllLeaveType,
	updateLeaveType,
} = require('../service/leaveType.service');

exports.addLeaveType = (req, res) => {
	saveLeaveType(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};
exports.allLeaveTypes = (req, res) => {
	getAllLeaveType(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};

exports.updateLeaveType = (req, res) => {
	updateLeaveType(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};
