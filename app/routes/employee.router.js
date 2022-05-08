const { saveEmpoyee } = require('../controllers/employee.controller');

const router = express.Router();

router.post('/', saveEmpoyee);

module.exports = router;
