// pages/liblecture/liblecture.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */

  data: {
    TabCur: 0,
    scrollLeft:0,
    list: [{"name":"未开始",index:0},
           {"name":"进行中",index:1},
           {"name":"已结束",index:2}],
    lecturelist: [],
    latitude: null,
    longitude: null
  },

  setList:function(){
    var that = this
    // console.log(this.data.list[this.data.TabCur].name)
    var openid = wx.getStorageSync("openid")
     wx.request({
          data: util.json2Form({
            openid: openid,
            status: this.data.list[this.data.TabCur].name
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/liblecture/getLectures',
          method: "POST",
          success: (res) => {
            // console.log(res.data)
            that.setData({
              lecturelist: res.data
            })
          }
     })
  },

  onLoad:function(){
    this.setList()
  },

  tabSelect(e) {
    // console.log(e.currentTarget.dataset)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    this.setList()
  },

  register:function(e){
    // console.log(e.currentTarget.dataset.liblectureid)
    var that = this
    var openid = wx.getStorageSync("openid")

  qq.getLocation({
    type: 'wgs84',
    success(res) {
      that.setData({
        latitude : res.latitude,
        longitude : res.longitude
      })
      // console.log(res.latitude)
      // console.log(res.longitude)
      //  wx.showToast({
      //           title: res.latitude + " " + res.longitude,
      //           icon: "none",
      //            duration: 2000
      // })
         wx.request({
          data: util.json2Form({
            openid: openid,
            liblectureid: e.currentTarget.dataset.liblectureid,
            latitude: res.latitude,
            longitude: res.longitude
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/liblecture/register',
          method: "POST",
          success: (res) => {
            // console.log(res.data)
          }
     })
      }
    })
  
   
  },


  showCardView: function(e){
    // console.log(e.currentTarget.dataset.index)
    wx.navigateTo({
      url: '/pages/liblectureinfo/liblectureinfo?liblecture=' + JSON.stringify(this.data.lecturelist[e.currentTarget.dataset.index])
    })
  },




















  /**
   * 生命周期函数--监听页面加载
   */
 

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