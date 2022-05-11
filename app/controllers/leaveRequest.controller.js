const { saveLeaveRequest } = require('../service/leaveRequest.service');

exports.addLeaveRequest = (req, res) => {
	saveLeaveRequest(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};
