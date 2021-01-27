// component/pop.js
Component({
  properties: {
    //这里定义了innerText属性，属性值可以在组件使用时指定
    //标题
    title: {
      type: String,
      value: "弹窗标题"
    },
    //内容
    content: {
      type: String,
      value: "弹窗内容"
    }
  },
  data: {
    //这里是一些组件内部数据
    isShow: false
  },
  methods: {
    //这里是一个自定义方法
    // 隐藏弹窗
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹窗
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //内部私有方法建议以下划线开头
    //triggerEvent用于触发事件
    _cancelEvent() {
      //触发取消回调
      this.triggerEvent('cancelEvent');
    }
  }
})