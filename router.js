const { endPoint } = require('./app/utils/endpoits');

module.exports = function (app) {
	app.use(endPoint.EMPLOYEE, require('./app/routes/employee.router'));
	app.use(endPoint.DESIGNATION, require('./app/routes/designation.router'));
	app.use(endPoint.LEAVE_TYPE, require('./app/routes/leaveType.router'));
	app.use(
		endPoint.EMPLOYEE_LEAVE_TYPE,
		require('./app/routes/employeeLeaveType.router')
	);
	app.use(
		endPoint.EMPLOYEE_APPROVER,
		require('./app/routes/employeeApprover.router')
	);
	app.use(endPoint.LEAVE_REQUEST, require('./app/routes/leaveRequest.router'));
};
