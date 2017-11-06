// pages/game/game.js
Page({
  data: {
    markers: [{
      iconPath: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=538000026,4203397581&fm=58&bpow=1920&bpoh=1280",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 200,
      height: 200
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 1,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=538000026,4203397581&fm=58&bpow=1920&bpoh=1280',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})