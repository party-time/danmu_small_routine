const app = getApp();
var navigateToObject = require('../../utils/navigate.js');
Page({
  data: {
    userList: [],
    gameList:[],
    filmList:[],
    show:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _userArray = [];
    for(var i=0; i<15; i++){
        var userObject  = {};
        userObject.id = i+1;
        userObject.name="";
        userObject.userImage = "http://wx.qlogo.cn/mmopen/ajNVdqHZLLAArc4YMJWuoFiaykHiaMHuOZyt4ZkbwVRBTSge6EF8AXPyxonwPyiaSqIOJqIWXl7ROv0MrNH1tFiagggnbrR9GiatNee8kpGLibsPw/0";

        _userArray.push(userObject);
    }
    this.setData({ userList: _userArray })
    var _gameArray=[];
    for(var i=0; i<2; i++){
        var gameObject = {};
        gameObject.id="";
        gameObject.name="";
        gameObject.gameImage ="http://testimages.party-time.cn/images/wechatResource/game.jpg";
        _gameArray.push(gameObject);
    }
    this.setData({ gameList: _gameArray })

    var _filmArray = [];
    for (var i = 0; i < 10; i++) {
      var filmObject = {};
      filmObject.id = "";
      filmObject.name = "";
      filmObject.gameImage = "http://testimages.party-time.cn/images/wechatResource/game.jpg";
      _filmArray.push(filmObject);
    }
    this.setData({ filmList: _filmArray })

    for (var dm = 0; dm < 200; dm++) {
      var t = setTimeout(() => {
        var id = Math.ceil(Math.random() * 15);
        this.setData({ show: id });
        setTimeout(() => {
          this.setData({ show: 0 });
        },2000);
      }, dm * 5000);
    }

    
    
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
  navigateTo: function (event) {
    var page = event.currentTarget.dataset.page;
    console.log(page);
    navigateToObject.navigateToPage(page)
  },
})