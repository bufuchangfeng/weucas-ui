// pages/curriculum/curriculum.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [],
    months: [],
    term_start_month:8,            // this need change
    term_start_day:26,               // this need change
    current_week:null,
    ifleapyear:null,
    daysofmonth: [31, -1, 31, 30, 31, 30, 31,31,30,31,30,31],
    wlistbkp: []
  },
  
  toLastWeek:function(){
    var _cw = this.data.current_week
    _cw -= 1
    if(_cw < 1){
      return
    }
    this.setData({
      current_week: _cw
    })
    this.updateCurriculum(_cw)
  },

  toNextWeek:function(){
      var _cw = this.data.current_week
    _cw += 1
    if(_cw > 20){
      return
    }
    this.setData({
      current_week: _cw
    })
    this.updateCurriculum(_cw)
  },

  timeInit:function(){    
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
     
    var year =date.getFullYear();

    // console.log(year)

    var dayoffebruary 

    if(year%4==0&&year%100!=0||year%400==0){
        console.log("今年是闰年")
        this.setData({
          ifleapyear: true
        })
        dayoffebruary = 29
    }
    else{
       this.setData({
         ifleapyear: false
       })
        console.log("今年不是闰年")
        dayoffebruary = 28
    }

    // 设置二月天数
    var _daysofmonth = this.data.daysofmonth
    _daysofmonth[1] = dayoffebruary

    this.setData({
      daysofmonth: _daysofmonth
    })

    // console.log(this.data.daysofmonth)
    //计算 current week

    // 获取当前月份
    var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // console.log(month, day)

    // 计算学期第一天到今天的天数
    var days = 0
    for(var a = this.data.term_start_month + 1; a < month; a++)
    {
      days += _daysofmonth[a - 1];
    }
    days += day + _daysofmonth[this.data.term_start_month-1] - this.data.term_start_day + 1

    this.setData({
      current_week: Math.ceil(days/7)
    })
    // console.log(Math.ceil(days/7))
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
  onShow: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onLoad: function () {
    
    this.timeInit()

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
            that.setData({
              wlistbkp: res.data
            })
            // console.log(res.data)
            var _wlist = []

            for(var j = 0; j < res.data.length; j++) {
              for(var k = 0; k < res.data[j]['time'].length; k++){
                // console.log(res.data[j]['time'][k]['上课周次'].split('、'))
                if(-1 != res.data[j]['time'][k]['上课周次'].split('、').indexOf(this.data.current_week + '')){
                  _wlist.push(res.data[j])
                  break;
                }
              }
            } 

            that.setData({
              wlist: _wlist
            })
          }
       })
    }
  },

  updateCurriculum: function(current_week){
    var _wlist = []
    for(var j = 0; j < this.data.wlistbkp.length; j++) {
              for(var k = 0; k < this.data.wlistbkp[j]['time'].length; k++){
                if(-1 != this.data.wlistbkp[j]['time'][k]['上课周次'].split('、').indexOf(current_week + '')){
                  _wlist.push(this.data.wlistbkp[j])
                  break;
                }
              }
            } 
        this.setData({
              wlist: _wlist
        })
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