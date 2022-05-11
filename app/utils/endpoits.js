const BASE_URL = '/api/v1/';
const EMPLOYEE = BASE_URL + 'employee';
const DESIGNATION = BASE_URL + 'designation';
const LEAVE_TYPE = BASE_URL + 'leave-type';
const EMPLOYEE_LEAVE_TYPE = BASE_URL + 'employee-leave-type';
const EMPLOYEE_APPROVER = BASE_URL + 'employee-approver';
const LEAVE_REQUEST = BASE_URL + 'employee-request';

const endPoint = {
	BASE_URL,
	EMPLOYEE,
	DESIGNATION,
	LEAVE_TYPE,
	EMPLOYEE_LEAVE_TYPE,
	EMPLOYEE_APPROVER,
	LEAVE_REQUEST,
};
module.exports = {
	endPoint,
};
