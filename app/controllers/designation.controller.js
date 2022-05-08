const { saveDesignation } = require('../service/designation.service');

exports.saveDesignation = (req, res) => {
	saveDesignation(req, (error, result) => {
		if (error) {
			res.status(400).json(util.errorRes(result));
		} else {
			res.status(200).json(util.sucessRes(result));
		}
	});
};
