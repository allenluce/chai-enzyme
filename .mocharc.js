'use strict'

module.exports = {
  'full-trace': true,
  reporter: 'dot',
  slow: 1000,
  timeout: 1500,
  reporter: 'spec',
  require: ['@babel/register', 'test/support/helper']
}
