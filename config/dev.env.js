'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.3.129:8080/"',
  WS_API: '"ws://call.astyun.com:8093/cc?appid=111111&appkey=222222&timestamp=1571052629352&sign=169d6bd69ee14e4c6cc9bbb424a6f145"',
})

// 测试服务器
// http://121.69.55.130:9070/"

// 本地：张
// http://192.168.3.39:8081/

// 外网地址
// http://111.193.200.204:9070/
