const { saveEmployeeApprover } = require('../service/employeeApprover.service');

exports.addEmployeeApprover = (req, res) => {
	saveEmployeeApprover(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};
