module.exports = {
  // vux 相关配置,使用vux-ui
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  }
}
