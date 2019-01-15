Page({
  data: {
    items: [
      {
        name: 'C++',
        value: 'c++',
        checked: true,
      },
      {
        name: 'iOS',
        value: 'ios',
      },
      {
        name: 'JAVA',
        value: 'java',
      },
      {
        name: 'VUE',
        value: 'vue',
      },
    ]
  },
  onSubmit(e) {
    my.alert({
      title: `${e.detail.value.libs.join(', ')}`, 
    });
  },
  onReset() {

  },
});