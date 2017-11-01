

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
  }
})