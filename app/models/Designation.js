'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Designation extends Model {}
	Designation.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'designation',
			tableName: 'designation',
		}
	);
	return Designation;
};
