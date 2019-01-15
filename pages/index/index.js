Page({
  data: {
    items: [
      {
        title: '表单下拉框',
        arrow: true,
        path: '/pages/droplist/droplist',
      },
      {
        title: '列表',
        arrow: true,
        path: '/pages/list/index/index'
      },
      {
        title: '复选框',
        arrow: true,
        path: '/pages/checkbox/checkbox',
      },
    ],
    src: '//img.a.clouddream.cn/cldfactory/iasset/79a57b90-f8c0-4259-a88e-5dbbc685698e/f6bed80d-2758-4298-a362-c40abf51e4fb.jpg'
  },
  onItemClick(ev) {
    my.alert({
      content: `${ev.index}`,
    });
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
