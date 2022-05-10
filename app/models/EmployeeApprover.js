'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class EmployeeApprover extends Model {
		static associate(models) {
			EmployeeApprover.belongsTo(models.Employee, {
				foreignKey: 'employeeId',
				as: 'employee',
			});
			EmployeeApprover.belongsTo(models.Employee, {
				foreignKey: 'approverId',
				as: 'approver',
			});
		}
	}
	EmployeeApprover.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			approverOrder: DataTypes.INTEGER,
			employeeId: DataTypes.INTEGER,
			approverId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'employeeApprover',
			tableName: 'employeeApprover',
		}
	);
	return EmployeeApprover;
};
