const { leaveRequestReqFormet } = require('../dto/request-schema/leaveRequest');
const {
	LeaveRequest,
	ApprovalStatus,
	EmployeeLeaveType,
	EmployeeApprover,
} = require('../models');
exports.saveLeaveRequest = async (req, resCallBack) => {
	const paylode = {
		toDate: req.body.toDate,
		fromDate: req.body.fromDate,
		reason: req.body.reason,
		leaveDays: req.body.leaveDays,
		employeeId: req.body.employeeId,
		employeeLeaveTypeId: req.body.employeeLeaveTypeId,
	};
	const result = leaveRequestReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	try {
		const leaveRequest = await LeaveRequest.create(paylode);
		const aproverStatusList = [];
		for (const employeeApprover of await EmployeeApprover.findAll({
			where: {
				employeeId: leaveRequest.employeeId,
			},
		})) {
			aproverStatusList.push({
				status: 'NEW',
				leaveRequestId: leaveRequest.id,
				employeeApproverId: employeeApprover.id,
			});
		}
		const approverStatus = await ApprovalStatus.bulkCreate(aproverStatusList);
		return resCallBack(false, leaveRequest);
	} catch (error) {
		return resCallBack(true, error);
	}
};
