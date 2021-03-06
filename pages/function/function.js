// pages/function/function.js

var util = require("../../utils/util.js")


Page({

  /**
   * 页面的初始数据
   */

  data: {
    functions:[
        {
            color:"bg-red",
            name:"校车时间表",
            type:"schoolbus",
            url:"http://www.neumark.top:8080/ucas9.jpg"
        },
        {
            name:"校历",
            color:"bg-blue",
            type:"calendar",
            url:"http://www.neumark.top:8080/ucas8.jpg"
        },
        {
            name:"图书馆",
            color:"bg-orange",
            type:"library",
            url:"http://www.neumark.top:8080/ucas7.jpg"
        },
        {
            name:"成绩查询",
            color:"bg-green",
            type:"score",
            url:"http://www.neumark.top:8080/ucas10.jpg"
        }
    ]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("这是百宝箱页面！")
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
  //
  // navigateToSchoolBus: function(){
  //   wx.navigateTo({
  //     url: '/pages/schoolbus/schoolbus'
  //   })
  // },
  // navigateToCalendar: function(){
  //   wx.navigateTo({
  //     url: '/pages/calendar/calendar'
  //   })
  // },
  // navigateToLibrary: function(){
  //   wx.navigateTo({
  //     url: '/pages/library/library'
  //   })
  // },
  // navigateToScore:function(){
  //   wx.navigateTo({
  //     url: '/pages/score/score'
  //   })
  // },

    /**
     * 跳转
     * @param e
     * @constructor
     */
    Router(e){
      console.log(e.currentTarget.dataset.type);
      let type = e.currentTarget.dataset.type;
      if(type === 99){
          wx.showToast({
              title:"敬请期待！"
          });
          return
      }
      if(type === 'library'){
        if(wx.getStorageSync('ifbindlibrary') !== 'yes'){
          wx.showToast({
            title:"未登录"
          });
          wx.navigateTo({
             url:`/pages/librarylogin/librarylogin`
          })
          return
        }
      }
      wx.navigateTo({
          url:`/pages/${type}/${type}`
      })
    }
})