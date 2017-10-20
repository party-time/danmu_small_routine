const app = getApp();
var order = ['red', 'yellow', 'blue', 'green', 'red']
var _filmList = [{
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
  data: {  
    filmList: _filmList,
  },
})