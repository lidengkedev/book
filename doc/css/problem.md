# 问题汇总

> position:fixed 降级问题

例如,吸顶效果使用的```position: fixed;```属性,如果在其父元素上使用```transform```属性,则子元素的```position: fixed;```属性会降级为```position: absolute;```,因为是吸顶效果,所以```position: fixed; top: 0;```与```position: absolute; top: 0;```效果是一样的,不会影响显示效果.

但是如果非吸顶且父元素使用了```transform```属性,并且父元素内的元素是可滚动展示,这个时候就会出现问题,解决方式是```overflow-y: auto;```
