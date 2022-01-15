// home.js
const app = getApp()

Page({
  data: {
    motto: '早晨! SHK 師傅師姐',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    getuserID:''
  },

  onLoad() {
    // if (wx.canIUse('hideHomeButton')) {
    //     wx.hideHomeButton()
    //   }
    var that = this;
    wx.getStorage({
      key: 'ID',
      success: function(res) {
        console.log(res.data)        
        that.setData({
          getuserID:res.data
        })
      }
    })
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindScanTap() {
    wx.scanCode({
        success (res) {
          console.log(res)
        }
      })

    // wx.getStorage({
    //     key:'ID',
    //     success: function(res){
    //         console.log(res.data)
    //         testid: this.data.
    //     }
    // })
    
  },

})

