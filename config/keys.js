
// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    console.log('production ran ', process.env.NODE_ENV)
   module.exports = require('./prod');
} else {
  console.log('development ran ', process.env.NODE_ENV)
   module.exports = require('./dev');
}
