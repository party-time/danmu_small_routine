// pages/game/game.js
Page({
  data: {
    hidden: false
  },
  start: function (event) {
    /*wx.playBackgroundAudio({
      dataUrl: 'http://sc1.111ttt.com/2017/1/05/09/298092042172.mp3',
      success: function (res) {

      }, fail: function (res) {

      }, complete: function (res) {

      }
    })*/
  },

  pause: function (event) {
    wx.pauseBackgroundAudio();
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