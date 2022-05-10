'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class LeaveRequest extends Model {
		static associate(models) {
			LeaveRequest.belongsTo(models.EmployeeLeaveType, {
				foreignKey: 'employeeLeaveTypeId',
				as: 'employeeLeaveType',
			});
			LeaveRequest.belongsTo(models.Employee, {
				foreignKey: 'employeeId',
				as: 'employee',
			});
		}
	}
	LeaveRequest.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			reason: DataTypes.STRING,
			toDate: DataTypes.DATE,
			fromDate: DataTypes.DATE,
			leaveDays: DataTypes.INTEGER,
			employeeId: DataTypes.INTEGER,
			employeeLeaveTypeId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'leaveRequest',
			tableName: 'leaveRequest',
		}
	);
	return LeaveRequest;
};
