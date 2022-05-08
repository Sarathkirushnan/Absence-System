global.express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

const myRouter = require('./router');

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

myRouter(app);

const server = http.Server(app);

server.listen(PORT, () => {
	console.log(`Start server on http://localhost/:${PORT}`);
});
