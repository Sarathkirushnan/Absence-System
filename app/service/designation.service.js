const { designationReqFormet } = require('../dto/request-schema/designation');
const { addDesig } = require('../repository/designation.repo');

exports.saveDesignation = async (req, resCallBack) => {
	const paylode = {
		name: req.body.name,
	};
	const result = designationReqFormet(paylode);
	if (result.error != null) {
		return resCallBack(true, result.error);
	}
	return addDesig(paylode)
		.then(({ rows }) => {
			return resCallBack(false, rows);
		})
		.catch((error) => resCallBack(true, error));
};
