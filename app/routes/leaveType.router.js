const {
	addLeaveType,
	allLeaveTypes,
	updateLeaveType,
} = require('../controllers/leaveType.controller');

const router = express.Router();

router.post('/', addLeaveType);
router.get('/', allLeaveTypes);
router.put('/', updateLeaveType);

module.exports = router;
