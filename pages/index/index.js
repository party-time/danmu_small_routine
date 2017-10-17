const app = getApp();

var _titleList = [
    {
        name:"文章",
        coverImgUrl: "../../image/article.gif"
    },{
        name:"电影",
        coverImgUrl: "../../image/film.gif"
    },{
        name:"弹幕",
        coverImgUrl: "../../image/danmu.png"
    }, {
      name: "游戏",
      coverImgUrl: "../../image/game.gif"
    }/*,{
        name:"我",
        coverImgUrl: "../../image/my.gif"
    }*/
]
var _songsList=[{
    dataUrl:'http://stream.qqmusic.tc.qq.com/137192078.mp3',
    name: '告白气球',
    mid: "003OUlho2HcRHC",
    singer:'周杰伦',
    coverImgUrl: '../../image/dxx.png'
},{
    dataUrl:'http://stream.qqmusic.tc.qq.com/138549169.mp3',
    name: '你还要我怎样',
    mid: "000E62Tc3bMiJB",
    singer:'薛之谦',
    coverImgUrl: '../../image/zzx.jpg'
},{
    dataUrl:'http://stream.qqmusic.tc.qq.com/137903929.mp3',
    name: '微微一笑很倾城',
    mid: "002NbtFA3fuJhD",
    singer:'杨洋',
    coverImgUrl: '../../image/xxtq.png'
},{
    dataUrl:'http://stream.qqmusic.tc.qq.com/132636799.mp3',
    name: '演员',
    mid: "001Qu4I30eVFYb",
    singer:'薛之谦',
    coverImgUrl: '../../image/frjyd.png'
}, {
  dataUrl: 'http://stream.qqmusic.tc.qq.com/132636799.mp3',
  name: '演员',
  mid: "001Qu4I30eVFYb",
  singer: '薛之谦',
  coverImgUrl: '../../image/dxx.png'
}, {
  dataUrl: 'http://stream.qqmusic.tc.qq.com/137903929.mp3',
  name: '微微一笑很倾城',
  mid: "002NbtFA3fuJhD",
  singer: '杨洋',
  coverImgUrl: '../../image/dxx.png'
}, {
  dataUrl: 'http://stream.qqmusic.tc.qq.com/132636799.mp3',
  name: '演员',
  mid: "001Qu4I30eVFYb",
  singer: '薛之谦',
  coverImgUrl: '../../image/dxx.png'
}, {
  dataUrl: 'http://stream.qqmusic.tc.qq.com/132636799.mp3',
  name: '演员',
  mid: "001Qu4I30eVFYb",
  singer: '薛之谦',
  coverImgUrl: '../../image/dxx.png'
}]
var _gameList=[{
    dataUrl:'http://stream.qqmusic.tc.qq.com/137192078.mp3',
    name: '告白气球',
    mid: "003OUlho2HcRHC",
    singer:'周杰伦',
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000003RMaRI1iFoYd.jpg'
},{
    dataUrl:'http://stream.qqmusic.tc.qq.com/138549169.mp3',
    name: '你还要我怎样',
    mid: "000E62Tc3bMiJB",
    singer:'薛之谦',
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000000aWdOx24i3dG.jpg'
  }, {
    dataUrl: 'http://stream.qqmusic.tc.qq.com/138549169.mp3',
    name: '你还要我怎样',
    mid: "000E62Tc3bMiJB",
    singer: '薛之谦',
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R90x90M000000aWdOx24i3dG.jpg'
  }]
Page({
    data:{
        content:"222",
        imageObjectList:[],
        personalObject:{url:"http://wx.qlogo.cn/mmopen/u5mfvia7QCw5YnD2pMIHeu7OxudpiaWJaNADcj489qBf3e9IWMiaQrNx2iaB3cdaUyaoakSNQI5jbVkibvE7TgyNCE0uQ2PtsJXDc/0"},
        show:13,
        filmObject:{
            name: '看过的电影'
        }, 
        gameObject: {
          name: '游戏'
        },
        songsList:_songsList,
        titleList:_titleList,
		gameList:_gameList
    },
    onLoad: function () {
        var numberArray = [];
        var imageArray=[
            "http://wx.qlogo.cn/mmopen/LOq6oSrvk2Bib4BfoicnnLjm4EcKefiaxtcJssUnv4H0JH2kmlWrHmMnhOQ9GrRFNAJAYXItjgib3KzBDPuWq9nCtibmNbibDyeK5P/0",
            "http://wx.qlogo.cn/mmopen/LOq6oSrvk2AfBtib7f3VQ2zn3uNTLCUx26As4FXWubwoHmKpLk0nAibEcg2a0jCPKljdqZXYp9UpM40qBic27ib3qm83AsbJ6H4g/0",
            "http://wx.qlogo.cn/mmopen/ajNVdqHZLLAArc4YMJWuoFiaykHiaMHuOZyt4ZkbwVRBTSge6EF8AXPyxonwPyiaSqIOJqIWXl7ROv0MrNH1tFiagggnbrR9GiatNee8kpGLibsPw/0",
            "http://wx.qlogo.cn/mmopen/u5mfvia7QCw6DzYADebTwauDO8evs3u0ef5ztbRBZSYrNqKn7MYD5GSQpeI50XoXflia72oULkNqBVLCtoribWIbnlGiaKgp0ha0/0",
            "http://wx.qlogo.cn/mmopen/Q3auHgzwzM7CwktWD8KgMqNxCExNuR4gLSKD0BWoxJHPWnC65Xia3Vp82fxeFAn6kiaelRMibPjJic3gMr1h1ke1WL8vCqwsKgObue6CelTbXh8/0",
            "http://wx.qlogo.cn/mmopen/ajNVdqHZLLB5l8sH6uAvwJKtucicTgxLd9icYN0pqFP5mMc9y5lmZ1tcZIT7ohDpyibV8Gk9WLuZNpaxpEhLfxDdA/0",
            "http://wx.qlogo.cn/mmopen/M53QQicZibJFS0icEaicBbVAv0t2whsjic7T1iclSTVtlbVw158nQOJ1NV2AickUecau1Xn4nVhQIUSbZt7wIgsGzs6DuQRsYmWN10z/0",
            "http://wx.qlogo.cn/mmopen/M53QQicZibJFS0icEaicBbVAv39GibKRovdRVl8mZicicu3gBs7MjaXAytLHV8pt1mYEw1aj6F5xS4FhZQlaeL86hFzN9f6RY79dPze/0",
            "http://wx.qlogo.cn/mmopen/k8mFfEmdQe1vop01LZYrSJvIC382lbzUxMSv3OuLwdacVH3oOJmwFiaJI1TDvo0HwiaFPqwIIibPCRs8fLjjzHNMw/0",
            "http://wx.qlogo.cn/mmopen/M53QQicZibJFS0icEaicBbVAv8712x3EH9hYFicmZrPvO3ALsSFggwEJicGBjkpXibwWerTzpAFOf2bg8icKiatrFibW2uZlFiaxa6VG2Bu/0",
            "http://wx.qlogo.cn/mmopen/LOq6oSrvk2AfBtib7f3VQ2347DqWV7TSQI19qY29dfAhsosg6ibL2aqxufhemdn09L2gXHA72qDdqyjmMhZGGJxagbcWvZeR7N/0",
            "http://wx.qlogo.cn/mmopen/ajNVdqHZLLAb8Jq2ITgrt8F7tgPAedNuhC4yJTWFq9w9qIlCXcq4ISmXb74bfxgOqt47iaQibRSOOia5lRNLKGGCA/0",
            "http://wx.qlogo.cn/mmopen/u5mfvia7QCw5YnD2pMIHeu0sZ2tsrQgTjobNQbiauXK9icoCx5Yx4ayc3xaiaOk5e9xA3d09tvPkL2LWgqcZSj4ZUlzicDK4nWMMj/0",
            "http://wx.qlogo.cn/mmopen/ajNVdqHZLLB84lN9959zDkibp9DvOCCPoSWflgGR0gr0YFKEmN08nMnliaDkic5ZG8EdJtzPMTqBolH0SjtyTpAxw/0",
            "http://wx.qlogo.cn/mmopen/u5mfvia7QCw5YnD2pMIHeu7OxudpiaWJaNADcj489qBf3e9IWMiaQrNx2iaB3cdaUyaoakSNQI5jbVkibvE7TgyNCE0uQ2PtsJXDc/0"
        ];
        for(var i=0; i<15; i++){
            var object = {};
            object.url = imageArray[i];
            numberArray.push(object);
        }
        this.setData({
            imageObjectList: numberArray
        })
    }

});