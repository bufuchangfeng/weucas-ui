// pages/lessoninfo/lessoninfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lesson: {},
    time:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(JSON.parse(options.lesson))
    this.setData({
      lesson: JSON.parse(options.lesson)
    })
    // console.log(options.lesson)
    var _time = []
    for(var i = 0; i < this.data.lesson['time'].length; i++){
      var _t = {}
      _t['time'] = this.data.lesson['time'][i]['上课时间']
      _t['week'] = this.data.lesson['time'][i]['上课周次']
      _t['place'] = this.data.lesson['time'][i]['上课地点']
      _time.push(_t)
    }

    this.setData({
      time: _time
    })
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

  }
})