const {
	employeeApproverReqFormet,
} = require('../dto/request-schema/employeeApprover');
const { EmployeeApprover } = require('../models');

exports.saveEmployeeApprover = async (req, resCallBack) => {
	const paylode = {
		approverOrder: req.body.approverOrder,
		employeeId: req.body.employeeId,
		approverId: req.body.approverId,
	};
	const result = employeeApproverReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	try {
		const employeeApprover = await EmployeeApprover.create(paylode);
		return resCallBack(false, employeeApprover);
	} catch (error) {
		return resCallBack(true, error);
	}
};
