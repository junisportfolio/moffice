var user = "";
var env = "";

process.argv.filter(arg => arg.indexOf('/mocobee/office') > 0).map((arg => arg.split('/').map((split, i) => {
  if(i === 2) {
    user = split;
  }

  if(i === 5) {
    env = split;
  }
})));

var isEnvLive = process.argv.filter(arg => arg.indexOf("--live") == 0).length === 1;
var api = isEnvLive ? "https://privateapi.mocobee.com:30000" : "http://privateapi." + user + "-mocobee.com:30000";
var img = isEnvLive ? "http://image.mocobee.com" : "http://image." + user + "-mocobee.com";
var port = function() {
  var incrementToken = 0;

  if(user === "yjcho") incrementToken = 1;
  if(user === "ihpark") incrementToken = 2;
  if(user === "jcchoi") incrementToken = 3;
  if(user === "swpark") incrementToken = 4;
  if(user === "smchun") incrementToken = 5;

  if(env === "server") {
    return 5000 + incrementToken;
  } else if(env === "scripts") {
    return 4000 + incrementToken;
  } else {
    return 3000 + incrementToken;
  }
};

var users = {
  user: user,
  port: port(),
  api: api,
  img: img
};

module.exports = users;