'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class LeaveType extends Model {}
	LeaveType.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			type: DataTypes.STRING,
			noticePeriod: DataTypes.INTEGER,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'leaveType',
			tableName: 'leaveType',
		}
	);
	return LeaveType;
};
