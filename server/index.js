const express = require('express');
const app = express();
const path = require('path');
const user = require('../config/user');
const getUserPort = function() {
	if(user == 'yjcho') return 5001;
	if(user == 'ihpark') return 5002;

	return 5000;
}

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.get('*', (req, res, next) => {
	if(req.path.split('/')[1] === 'static') return next();
	res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(getUserPort(), function () {
  console.log('Welcome', user + '!! Example app listening on port', getUserPort() + '!!');
});
