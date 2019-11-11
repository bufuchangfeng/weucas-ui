// pages/me/me.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  navigateToLogin: function(){
    var ifbind = wx.getStorageSync("ifbind")
    if(ifbind == ""){
      wx.navigateTo({
      url: '/pages/login/login',
    })
    }
    else{
      wx.showToast({
        title: '已经登录！',
        icon: "none",
        duration: 2000
      })
    }
    
  },
  navigateToAdvice: function () {
    wx.navigateTo({
      url: '/pages/advice/advice',
    })
  },
  quit:function(){
     var ifbind = wx.getStorageSync("ifbind")
    if(ifbind == ""){
      wx.showToast({
        title: '未登录！',
        icon: "none",
        duration: 2000
      })
    }
    else{
      var openid = wx.getStorageSync("openid")
      if(openid == ""){
        return
      }
     wx.request({
          data: util.json2Form({
            openid: openid
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/user/quit',
          method: "POST",
          success: (res) => {
            console.log(res.data)
            if(res.data == 1){
                wx.removeStorage({
                key: 'ifbind',
      success: function(res) {
         wx.showToast({
              title: "退出成功！",
              icon: "none",
              duration: 2000
            })
            },
            })    
          }
            else if(0 == res.data){
               wx.showToast({
              title: "未登录！",
              icon: "none",
              duration: 2000
            })
            }
          }
     })
    }
  }
  
})