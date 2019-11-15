//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cardCur: 0,
      helloText: '你好',
      noticeText:"果壳儿是一款国科大校园生活小程序,欢迎使用和提建议！",

    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://www.neumark.top:8080/ucas0.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'http://www.neumark.top:8080/ucas1.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'http://www.neumark.top:8080/ucas2.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'http://www.neumark.top:8080/ucas3.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'http://www.neumark.top:8080/ucas4.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'http://www.neumark.top:8080/ucas5.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'http://www.neumark.top:8080/ucas6.jpg'
    }],
  },
    onLoad(){
    this.hello()
    },
    //问候
    hello() {
        let hour = new Date().getHours();
        let helloText = '';
        if (hour < 6) {
            helloText = "凌晨了，注意休息哦"
        } else if (hour < 9) {
            helloText = "早安"
        } else if (hour < 12) {
            helloText = "上午好"
        } else if (hour < 14) {
            helloText = "中午好"
        } else if (hour < 17) {
            helloText = "下午好"
        } else if (hour < 19) {
            helloText = "傍晚了"
        } else if (hour <= 22) {
            helloText = "晚上好"
        } else {
            helloText = "减少熬夜哦"
        }
        this.setData({
            helloText
        })
    },
})
