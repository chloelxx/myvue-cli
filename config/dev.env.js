var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var testEnv = require('./test.env')
/**配置开发环境的联调后台服务器的地址**/
module.exports = merge(prodEnv,testEnv, {
    NODE_ENV: '"development"',
	  API_ROOT:'"//10.41.12.125:8081/partnerManager"'
})
