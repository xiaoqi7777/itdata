module.exports = {
  title: "NorthUnicorn",
  base: "/",
  themeConfig: {
    editLinkText: "编辑此页",
    lastUpdated: "上次更新",
    nav: [{
      text: "css",
      link: "/css/"
    },
    {
      text: "js",
      link: "/js/"
    },
    {
      text: "other",
      link: "/other/"
    }],
    sidebar: {
      "/css/": [{
        title: "css",
        collapsable: false,
        children: [
          "css",
        ]
      }
    ],
      "/js/": [{
        title: 'js',
        collapsable: false,
        children: [
          "js",
        ]
      }],
      "/other/":[{
        title: 'other',
        collapsable: false,
        children: [
          "other",
        ]
      }]
    }
  }
}