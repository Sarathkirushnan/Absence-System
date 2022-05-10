const { EMPLOYEE, DESIGNATION, LEAVE_TYPE } = require('./app/utils/endpoits');

module.exports = function (app) {
	app.use(EMPLOYEE, require('./app/routes/employee.router'));
	app.use(DESIGNATION, require('./app/routes/designation.router'));
	app.use(LEAVE_TYPE, require('./app/routes/leaveType.router'));
};
