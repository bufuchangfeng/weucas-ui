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
    lecturelist:[]
  },
  tabSelect(e) {
    // console.log(e.currentTarget.dataset)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
    console.log(this.data.list[this.data.TabCur].name)
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