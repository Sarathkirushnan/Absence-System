const {
	addEmployeeApprover,
} = require('../controllers/employeeApprover.controller');

const router = express.Router();

router.post('/', addEmployeeApprover);
// router.get('/', allLeaveTypes);
// router.put('/', updateLeaveType);

module.exports = router;
