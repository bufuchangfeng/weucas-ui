// pages/curriculum/curriculum.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: []
  },
  
  showCardView: function(e){
    console.log(e.currentTarget.dataset.index)
    wx.navigateTo({
      url: "/pages/lessoninfo/lessoninfo?lesson=" + JSON.stringify(this.data.wlist[e.currentTarget.dataset.index])
    })
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
    
    var that = this
  
    var ifbind = wx.getStorageSync("ifbind")
    if(ifbind == ""){
       wx.showToast({
        title: '请先登录！',
        icon: "none",
        duration: 2000
      })
      this.setData({
        wlist: null
      })
    }
    else{
      
      var openid = wx.getStorageSync("openid")
       wx.request({
          data: util.json2Form({
            openid: openid
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/lesson/get',
          method: "POST",
          success: (res) => {
            console.log(res.data)
            that.setData({
              wlist: res.data
            })
          }
       })
    }
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

  }
})