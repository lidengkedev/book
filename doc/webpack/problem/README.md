# 问题汇总

> webpack 在打包构建时```-webkit-box-orient: verical;```会被删除掉

原因是```optimize-css-assets-webpack-plugin```这个插件的问题

解决方式:可以使用如下写法
```css
div {
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /*! autoprefixer: on */
}
```

