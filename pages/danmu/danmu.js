
var _danmuList = [
    "高举中国特色社会主义伟大旗帜，以邓小平理论",
    "听党指挥能打胜仗作风优良",
    "在全世界面前树立起可供人们用来衡量党的运动水平的里程碑",
    "回首９０多年的奋斗历程，党章穿越时空，见证中国共产党的辉煌历程"
]

var _filmList = [
  { name: "十九大",
    danmuList: _danmuList
  },
  {
    name: "十九大",
    danmuList: _danmuList
  },
  {
    name: "十九大",
    danmuList: _danmuList
  },
  {
    name: "十九大",
    danmuList: _danmuList
  },
  {
    name: "十九大",
    danmuList: _danmuList
  },
  {
    name: "十九大",
    danmuList: _danmuList
  },
  {
    name: "十九大",
    danmuList: _danmuList
  }
]

Page({
  data: {
    selected: true,
    filmList: _filmList,
    groups: [
      [
        {
          title: '狼图腾1',
          cover: '../../img/mineBG.png'
        },
        {
          title: '狼图腾2',
          cover: '../../img/mineBG.png'
        },
      ],
      [
        {
          title: '狼图腾3',
          cover: '../../img/mineBG.png'
        },

      ],
      [
        {
          title: '狼图腾4',
          cover: '../../img/mineBG.png'
        },

      ]
    ]
  },
  onLoad:function (options) {
    console.log(options.filmid);
    this.setData({
      filmid: options.filmid
    })
  },
  selected: function (event) {
    var type = event.currentTarget.dataset.type;
    if (type=="one"){
      this.setData({ selected: true})
    }else{
      this.setData({ selected: false})
    }
    
  }
})