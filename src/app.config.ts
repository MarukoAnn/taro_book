export default {
  pages: [
    'pages/shelf/shelf',
    'pages/index/index',
    'pages/about/about',
    'pages/sort/sort',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#a9b7b7',
    selectedColor: '#11cd6e',
    borderStyle: 'black',
    list: [
      {
        text: "书架",
        pagePath: "pages/shelf/shelf",
        iconPath: "./assets/icon/ic_shelf.png",
        selectedIconPath: "./assets/icon/ic_selshelf.png"
      },
      {
        text: '书城',
        pagePath: "pages/index/index",
        iconPath: "./assets/icon/ic_city.png",
        selectedIconPath: "./assets/icon/ic_selcity.png"
      },
      {
        text: '分类',
        pagePath: "pages/sort/sort",
        iconPath: "./assets/icon/ic_sort.png",
        selectedIconPath: "./assets/icon/ic_selsort.png"
      },
      {
        text: '我的',
        pagePath: "pages/about/about",
        iconPath: "./assets/icon/ic_user.png",
        selectedIconPath: "./assets/icon/ic_seluser.png"
      }
    ]
  }
}
