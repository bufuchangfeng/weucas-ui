// pages/score/score.js
var util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scores:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getScores()
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


  getScores:function(){

    var openid = wx.getStorageSync("openid")
    if(openid == ""){
       wx.showToast({
        title: '请先登录！',
        icon: "none",
        duration: 2000
      }) 
      return
    }

     var that = this
     wx.request({
          data: util.json2Form({
            openid: openid,
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/user//get_scores',
          method: "POST",
          success: (res) => {
            // console.log(res.data)
            that.setData({
              scores: res.data
            })
      }
    })
  }
})