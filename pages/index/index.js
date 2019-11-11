//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cardCur: 0,
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
  }
})
