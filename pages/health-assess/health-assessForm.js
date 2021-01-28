// pages/health-assess/health-assessForm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // demo
    
    sex: [
      { name: '1', value: '男性' },
      { name: '0', value: '女性', checked: 'true' }
    ],
    bornTime: "",
    marriage: [
      { name: '1', value: '已婚（含同居）' },
      { name: '0', value: '未婚', checked: 'true' }
    ],
    postList: [
      { name: '1', value: '领导干部' },
      { name: '0', value: '刑警', checked: 'true' }
    ],

    // demo end
  },
  //性别选择
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  //出生日期
  bindDateChange: function (e) {
    console.log('picker发生change事件，携带value值为：', e.detail.value);
    // this.data.bornTime = e.detail.value;
    this.setData({
      bornTime: e.detail.value
    })
  },
  //婚姻状况
  marriageChange: function(e) {
    console.log('input发生change事件，携带value值为：', e.detail.value);
  },
  //工作岗位
  postChange: function(e) {
    console.log('工作岗位发生change事件，携带value值为：', e.detail.value);
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