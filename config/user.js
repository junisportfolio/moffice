var user = process.argv.filter(arg => arg.indexOf('/mocobee/office') > 0).map(arg => arg.split('/')[2])[0];

module.exports = user;