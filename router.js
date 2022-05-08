const { DESIGNATION } = require('./app/utils/endpoits');

module.exports = function (app) {
	app.use(DESIGNATION, require('./app/routes/designation.router'));
};
