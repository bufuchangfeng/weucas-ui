// pages/advice/advice.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advice: ""
  },

  submitAdvice:function(){
    var that = this
    if(this.data.advice == "")
    {
       wx.showToast({
        title: '建议不能为空！',
        icon: "none",
        duration: 2000
      })
      return
    }
    else{
       wx.request({
          data: util.json2Form({
            content: this.data.advice
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/advice/add',
          method: "POST",
          success: (res) => {
            if(res.data == 1){
               wx.showToast({
                title: '建议提交成功！',
                icon: "none",
                 duration: 2000
              })
              that.setData({
                advice: ""
              })
            }
            else{
              wx.showToast({
                title: '未知错误！',
                icon: "none",
                 duration: 2000
              })
            }
          }
       })
    }
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

  adviceInput: function(event){
    this.setData({advice: event.detail.value})
  }
})