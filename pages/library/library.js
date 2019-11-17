// pages/library/library.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist: [{
        book_name:"001",
        book_year:"2019-12-11",
        book_time:"2019-12-20",
        book_author:"test"
    },
        {
            book_name:"001",
            book_year:"2019-12-11",
            book_time:"2019-12-20",
            book_author:"test"
        }]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  getBooks: function(){
      var ifbindlib = wx.getStorageSync("ifbindlibrary")
    if(ifbindlib == ""){
      return
    }
    var openid = wx.getStorageSync("openid")
    if(openid == ""){
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
          url: 'https://www.neumark.top/library-user/query_borrowed_books',
          method: "POST",
          success: (res) => {
            console.log(res.data)
            that.setData({
              booklist: res.data
            })
      }
    })
  },

  onLoad: function (options) {
    // this.getBooks()
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
   // this.getBooks()
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
    var ifbind = wx.getStorageSync("ifbindlibrary")
    if(ifbind == ""){
      wx.navigateTo({
      url: '/pages/librarylogin/librarylogin',
    })
    }
    else{
      wx.showToast({
        title: '已经绑定！',
        icon: "none",
        duration: 2000
      })
    }
  },

   quit:function(){
     var that = this
     var ifbind = wx.getStorageSync("ifbindlibrary")
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
          url: 'https://www.neumark.top/library-user/logout',
          method: "POST",
          success: (res) => {
            console.log(res.data)
            if(res.data == 1){
                wx.removeStorage({
                key: 'ifbindlibrary',
      success: function(res) {
         wx.showToast({
              title: "解绑成功！",
              icon: "none",
              duration: 2000
            })
            that.setData({
              booklist: []
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