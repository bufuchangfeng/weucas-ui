// pages/librarylogin/librarylogin.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: '',
    stuid: ''
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
  stuidinput: function (event) {
    this.setData({ stuid: event.detail })
  },

  passwordinput: function (event) {
    this.setData({ password: event.detail })
  },

  login: function () {
    var openid = wx.getStorageSync("openid")
    if (openid == "" || this.data.stuid == "" || this.data.password == "") {
      wx.showToast({
        title: '信息不完整！',
        icon: "none",
        duration: 2000
      })
      return
    }
    var msg
    wx.request({
      data: util.json2Form({
        openid: openid,
        username: this.data.stuid,
        password: this.data.password
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/library-user/login',
      method: "POST",
      success: (res) => {
        if (res.data == "success") {
          msg = "登录成功！"

        } else if (res.data == "error") {
          msg = "登陆失败！"
        } else {
          msg = "未知错误！"
        }
        wx.showToast({
          title: msg,
          icon: "none",
          duration: 2000
        })
        if (msg == "登录成功！") {
          wx.setStorageSync("ifbindlibrary", "yes")
          wx.navigateBack({
            
          })
          
        }
      }
    })
  }
})