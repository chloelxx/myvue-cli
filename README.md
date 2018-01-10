#用来初始化文件
 npm run init
#本地开发用的命令
 npm run dev
#生产环境的打包
 npm run prod
#测试环境打包
 npm run test
config文件目录：
dev.env.js 是配置本地开发环境的后台服务器的联调地址
prod.env.js是配置生产环境的后台服务器的联调地址
test.env.js 是配置测试环境的后台服务器的联调地址
作用可以直接在你的ajax请求地址中使用process.env.API_ROOT就可获取你配置的url
