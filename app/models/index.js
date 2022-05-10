const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Designation = require('./Designation')(sequelize, Sequelize);
db.Employee = require('./Employee')(sequelize, Sequelize);
db.LeaveType = require('./LeaveType')(sequelize, Sequelize);
db.EmployeeLeaveType = require('./EmployeeLeaveType')(sequelize, Sequelize);
db.ApprovalStatus = require('./ApprovalStatus')(sequelize, Sequelize);
db.EmployeeApprover = require('./EmployeeApprover')(sequelize, Sequelize);
db.LeaveRequest = require('./LeaveRequest')(sequelize, Sequelize);

db.Designation.associate(db);
db.Employee.associate(db);
db.EmployeeLeaveType.associate(db);
db.ApprovalStatus.associate(db);
db.EmployeeApprover.associate(db);
db.LeaveRequest.associate(db);

module.exports = db;
