module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        productName: 'Color Monitor',
        mac: {
          icon: './src/assets/logo.png'
        },
        win: {
          icon: './src/assets/logo.png'
        },
        electronDownload: {
          mirror: 'https://npm.taobao.org/mirrors/electron/'
        }
      }
    }
  }
}
