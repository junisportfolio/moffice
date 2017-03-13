'use strict';

// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;
var user = require('./user');

var isEnvLive = process.argv.filter(arg => arg.indexOf("--live") == 0).length === 1;
var __API__ = isEnvLive ? "'https://privateapi.mocobee.com:30000'" : "'http://privateapi." + user + "-mocobee.com:30000'";
var __IMG__ = isEnvLive ? "'http://image.mocobee.com'" : "'http://image." + user + "-mocobee.com'";

console.log("@@@@@process.argv?", process.argv);
console.log("@@@@@isEnvLive?", isEnvLive);
console.log("@@@@@__API__?", __API__);
console.log("@@@@@__IMG__?", __IMG__);

function getClientEnvironment(publicUrl) {
  var raw = Object
    .keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = process.env[key];
      return env;
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': process.env.NODE_ENV || 'development',
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      'PUBLIC_URL': publicUrl,
      __API__,
      __IMG__
    });
  // Stringify all values so we can feed into Webpack DefinePlugin
  var stringified = {
    'process.env': Object
      .keys(raw)
      .reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {})
  };

  return { raw, stringified };
}

module.exports = getClientEnvironment;
