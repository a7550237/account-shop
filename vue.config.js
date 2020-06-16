const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
let proxyObj = {};
proxyObj['/ws'] = {
    ws: true,
    target: "ws://localhost:8081"
};
proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathRewrite: {
        '^/': ''
    }
}
module.exports = {
  devServer: {
    host: 'localhost',
    port: '8080',
    proxy: proxyObj
  },
  lintOnSave: false,
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('components',resolve('@/components'))
    .set('views',resolve('@/views'))
    .set('assets',resolve('@/assets'))
    .set('network',resolve('@/network'))
  }
}