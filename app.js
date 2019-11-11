//app.js
var util = require("./utils/util.js")
App({
  onLaunch: function () {
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