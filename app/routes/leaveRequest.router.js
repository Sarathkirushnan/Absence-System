const { addLeaveRequest } = require('../controllers/leaveRequest.controller');

const router = express.Router();

router.post('/', addLeaveRequest);
// router.get('/', allLeaveTypes);
// router.put('/', updateLeaveType);

module.exports = router;
