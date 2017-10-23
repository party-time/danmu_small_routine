// pages/game/game.js
const app = getApp();
var _articleList = [{
  name: '告白气球',
  coverImgUrl: '../../image/dxx.png',
  people: 30,
  danmu: 50
}, {
  name: '你还要我怎样',
  coverImgUrl: '../../image/frjyd.png',
  people: 30,
  danmu: 50
}, {
  name: '微微一笑很倾城',
  coverImgUrl: '../../image/xxtq.png',
  people: 30,
  danmu: 50
}, {
  name: '演员',
  coverImgUrl: '../../image/zzx.jpg',
  people: 30,
  danmu: 50
}, {
  name: '你还要我怎样',
  coverImgUrl: '../../image/frjyd.png',
  people: 30,
  danmu: 50
}, {
  name: '微微一笑很倾城',
  coverImgUrl: '../../image/xxtq.png',
  people: 30,
  danmu: 50
}, {
  name: '演员',
  coverImgUrl: '../../image/zzx.jpg',
  people: 30,
  danmu: 50
}]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: _articleList,
  }, upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
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