const app = getApp();
// pages/game/game.js

var danmuColor = '';
var doommList = [];
var i = 0;//用做唯一的wx:key
class Doomm {
  constructor(text, top, time, color) {
    this.text = text;
    this.top = top;
    this.time = time;
    this.color = color;
    this.display = true;
    let that = this;
    this.id = i++;
  }
}

Page({
  data: {
  
  },
  onLoad:function (options) {
    console.log(options.filmid);
    this.setData({
      filmid: options.filmid,
      film:{
        name:"213123123",
        people:50,
        danmu:200
      }
    })
    doommList = [];
    for (var dm = 0; dm < 200; dm++) {
      setTimeout(() => {
        doommList.push(new Doomm('我是弹幕', Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 5), danmuColorType()));
        this.setData({ doommData: doommList })
      }, dm * 1000);
    }
  }, onShow: function () {

    wx.getUserInfo({
      success: res => {

        // 可以将 res 发送给后台解码出 unionId
        app.globalData.userInfo = res.userInfo
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (app.userInfoReadyCallback) {
          app.userInfoReadyCallback(res)
        }
      }, fail: res => {
        console.log(res.userInfo);
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: false
        })
      }
    });
    
  }
})


function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}


//判断颜色类型
function danmuColorType() {
  if (danmuColor == '') {
    var getcolor = getRandomColor();
  } else {
    var getcolor = selectColor;
  }
  return getcolor;
}