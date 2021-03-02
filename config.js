module.exports = {
  server: {
    /**
     * 可选接口加密字符串
     * 进用于access.js规则
     */
    apiSecret: 'xxxxx',
    qiniuConfig: {
      // 七牛云自定义域名（你的自定义域名，用于返回七牛云上传后的绝对路径）
      website: '//static.webascii.cn/',
      ak: '七牛AccessKey', // 七牛AccessKey
      sk: '七牛SecretKey', // 七牛SecretKey
      scope: 'webascii', // 七牛存储空间名称
      /**
       * 机房  Zone对象
       * 华东  qiniu.zone.Zone_z0
       * 华北  qiniu.zone.Zone_z1
       * 华南  qiniu.zone.Zone_z2
       * 北美  qiniu.zone.Zone_na0
       */
      zone: 'Zone_z1', // 七牛空间（默认Zone_z1）
      pathCDN: 'webascii/files/', // 上传到CDN的路径
    },
    // 跨域配置信息
    cors: {
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], // 设置获取其他自定义字段
      allowMethods: ['GET', 'POST', 'DELETE'], // 设置所允许的HTTP请求方法
      allowHeaders: [
        'Content-Type',
        'Authorization',
        'Accept'
      ], // 设置服务器支持的所有头信息字段
      origin: [
        'https://www.webascii.cn',
        'http://localhost:8080'
      ],
      credentials: true,  // 是否带cookie
      maxAge: '1728000'
    },
    // 文件上传默认关键字
    uploadKey: 'files',
    // 启动服务端口号
    port: 1314,
  },
  mongoService: {
    // session配置
    sissionOption: {
      keys: ['xxxxxxxxxx'],
      config: {
        key: 'SESSIONID', /**  cookie的key。 (默认是 koa:sess) */
        maxAge: 2592000000, /**  session 过期时间，以毫秒ms为单位计算 。*/
        autoCommit: true, /** 自动提交到响应头。(默认是 true) */
        overwrite: true, /** 是否允许重写 。(默认是 true) */
        httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
        signed: true, /** 是否签名。(默认是 true) */
        rolling: false, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
        renew: false, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
      }
    },
    mongo: {
      url: 'mongodb://IP:PORT/dbname',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: 'root',
        pass: '密码',
        authSource: 'admin',
      }
    }
  }
}