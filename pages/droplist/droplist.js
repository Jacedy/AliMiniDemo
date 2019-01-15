Page({
  data: {
    array: ['居民户口簿', '身份证', '临时身份证', '军官证'],
    index: -1,
  },
  pickerTap(e) {
    this.setData({
      index: e.detail.value,
    })
  },
  onSubmit(e) {
    my.alert({
      content: `${JSON.stringify(e.detail.value)}`,
    });
  },
  onReset() {
    this.setData({
      index: -1,
    })
  },
});
