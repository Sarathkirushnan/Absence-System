const {
	saveEmployeeLeaveType,
	getAllEmployeeLeaveType,
	updateEmployeeLeaveType,
} = require('../controllers/employeeLeaveType.controller');

const router = express.Router();

router.post('/', saveEmployeeLeaveType);
router.get('/', getAllEmployeeLeaveType);
router.put('/', updateEmployeeLeaveType);

module.exports = router;
