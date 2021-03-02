const Router = require('koa-router') // koa 路由中间件
const router = Router()
let controller = require('../controllers/upload')
const ai = require('../../lib/abnormal-interception')
const config = require('../../config')
router.post('/files', global.custom.upload.single(config.server.uploadKey), ai(controller.files))

module.exports = router
