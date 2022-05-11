'use strict';
const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class ApprovalStatus extends Model {
		static associate(models) {
			ApprovalStatus.belongsTo(models.EmployeeApprover, {
				foreignKey: 'employeeApproverId',
				as: 'employeeApprover',
			});
			ApprovalStatus.belongsTo(models.LeaveRequest, {
				foreignKey: 'leaveRequestId',
				as: 'leaveRequest',
			});
		}
	}
	ApprovalStatus.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			comment: DataTypes.STRING,
			status: {
				type: Sequelize.ENUM('NEW', 'PENDING', 'ACCEPT', 'REJECT'),
				defaultValue: 'NEW',
			},
			date: DataTypes.DATE,
			leaveRequestId: DataTypes.INTEGER,
			employeeApproverId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'approvalStatus',
			tableName: 'approvalStatus',
		}
	);
	return ApprovalStatus;
};
