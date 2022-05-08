'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Employee extends Model {}
	Employee.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			dateOfBirth: DataTypes.DATEONLY,
			contactNo: DataTypes.STRING,
			address: DataTypes.STRING,
			email: DataTypes.STRING,
			nic: DataTypes.STRING,
			joinDate: DataTypes.DATEONLY,
			religon: DataTypes.STRING,
			gender: DataTypes.STRING,
			deactivateStatus: DataTypes.BOOLEAN,
			deactivateReason: DataTypes.STRING,
			approverStatus: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'employee',
			tableName: 'employee',
		}
	);
	return Employee;
};
