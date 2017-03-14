const express = require('express');
const app = express();
const path = require('path');
const { user, port } = require('../config/users');
const chalk = require('chalk');

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.get('*', (req, res, next) => {
	if(req.path.split('/')[1] === 'static') return next();
	res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(port, function () {
  console.log('Welcome', chalk.cyan(user) + '!! Example app listening on port', chalk.magenta(port) + '!!');
});
