// /**
//  * 定时任务
//  * 排查请求失败的git文件 重新请求
//  */
// // const logModel = require('../app/models/log')
// const runGithub = require('../lib/run-github')
// const schedule = require('node-schedule')
//
// const fn = async () => {
//   // 定时任务 50秒一次
//   schedule.scheduleJob('50 * * * * *', async () => {
//     console.log('scanning-error-doc定时任务启动')
//     const res = await logModel.find({
//       type: 'github-request-path-error'
//     })
//
//     // 没有数据不执行
//     if (res.length === 0) {
//       return
//     }
//
//     const list = res.map(data => data.data)
//
//     runGithub({
//       list,
//       successCallback(path) {
//         logModel.deleteOne({
//           type: 'github-request-path-error',
//           data: path
//         }, (data) => {})
//       }
//     })
//   })
// }
//
// module.exports = fn
