'use strict';
const { Model } = require('sequelize');
const { Employee } = require('.');

module.exports = (sequelize, DataTypes) => {
	class EmployeeLeaveType extends Model {
		static associate(models) {
			EmployeeLeaveType.belongsTo(models.Employee, {
				foreignKey: 'employeeId',
				as: 'employee',
			});
			EmployeeLeaveType.belongsTo(models.LeaveType, {
				foreignKey: 'leaveTypeId',
				as: 'leaveType',
			});
		}
	}
	EmployeeLeaveType.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			allocatedDays: DataTypes.INTEGER,
			remainingDays: DataTypes.INTEGER,
			employeeId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'employee',
					key: 'id',
				},
			},
			leaveTypeId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'leaveType',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'employeeLeaveType',
			tableName: 'employeeLeaveType',
		}
	);
	return EmployeeLeaveType;
};
