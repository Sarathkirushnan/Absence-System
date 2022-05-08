const { saveDesignation } = require('../controllers/designation.controller');

const router = express.Router();

router.post('/', saveDesignation);

module.exports = router;
