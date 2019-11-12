//app.js
var util = require("./utils/util.js")
App({
  onLaunch: function () {



    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            wx.showModal({
              title: '已有新版本',
              content: '检查到有新版本，但下载失败，请检查网络设置',
            })
          })
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前QQ版本过低，无法使用该功能，请升级到最新QQ版本后重试。'
      })
    }




    var openid = wx.getStorageSync("openid")
    if(openid == ""){
    qq.login({
      success(res) {
        if (res.code) {
          // console.log(res.code)
          wx.request({
          data: util.json2Form({
            code: res.code
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/user/qqlogin',
          method: "POST",
          success: (res) => {
            // console.log(res.data["openid"]);
            wx.setStorageSync("openid", res.data["openid"])
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
    }
    else{
      console.log("存在openid")
    }

 
  var ifbind = wx.getStorageSync("ifbind")
  if(ifbind == ""){
     wx.showToast({
    title: '绑定账号解锁更多功能！',
    icon: "none",
    duration: 4000
  })
    }else{
    }


    




  },
  globalData: {
  }
})