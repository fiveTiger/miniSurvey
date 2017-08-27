//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    time: '12:01',
    multiArray: [[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], [0,1,2,3,4,5,6,7,8,9]],
    multiIndex: [7, 0],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo)
      that.setData({
        userInfo:userInfo
      })
    }),
    wx.login({
      success: function (res) {
        console.log("login:",res);
      }})
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },
  btn_commit: function(e){
    console.log("multiIndex", this.data.multiIndex)
    console.log("click", this.data.multiArray[0][this.data.multiIndex[0]], this.data.multiArray[1][this.data.multiIndex[1]])
    var cm = this.data.multiArray[0][this.data.multiIndex[0]]+0.1*this.data.multiArray[1][this.data.multiIndex[1]];
    this.setData({ motto:cm+" cm"})
    wx.request({
      url: 'http://www.baidu.com', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
})
