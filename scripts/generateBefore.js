hexo.on("generateBefore", function () {
  var rootConfig = hexo.config;

  if (hexo.locals.get) {
    // 获取 source/_data 目录下的文件
    var data = hexo.locals.get("data");

    // 如果存在 primitive.yml 文件，就用它覆盖原来的配置文件
    if (data && data.primitive) {
      hexo.theme.config = data.primitive;
    }
  }

  hexo.theme.config.rootConfig = rootConfig;
});
