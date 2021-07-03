# px/em/rem区别

## px 
### 物理像素点

px是你屏幕设备物理上能显示的最小的一个点，这个点不是固定宽度的，不同设备上的长宽比例有可能会不同

```css
div {
    font-size: 16px;
    width: 50px;
    height: 50px;
    background-color: #f8f8f8;
}
```

```html
<div>物理像素点文本大小</div>
```
### px 的兼容性

兼容所有浏览器

## em 
### 相对于父元素的font-size大小的相对单位：

所有现代浏览器下默认字体尺寸是16px，这时1em = 16px,然后你人为把body里面定义font-size: 12px;(把浏览器默认16px改小)，此时1em = 12px;
如果0.8em实际上就等于12px*0.8，

**em的用处是你要整个网页字体统一变大变小，你只要改body里面的font-size的值就行了。**

另外：

**em会继承父元素的字体大小**
```css
.parent {
    font-size: 10px;
    background-color: #f8f8f8;
}
.parent-2 {
    font-size: 1em; /* font-size: 10px */
    width: 1em;     /* width: 10px */
    height: 1em;    /* height: 10px */
    background-color: #777;
}
.child {
    font-size: 5em; /* font-size: 50px */
    width: 5em;     /* width: 50px */
    height: 5em;    /* height: 50px */
    background-color: #52ccba;
}
```

```html
<div class="parent">
    <div class="parent-2">
        父元素文本大小1em
        <div class="child">子元素文本大小5em</div>
    </div>
</div>
```
### em 的兼容性

IE | Edge | Firefox | Chrome | Safari | Opera | iOS Safari | Opera Mini | Android Browser | Blackberry Browser | Opera Mobile | Chrome for Android | Firefox for Android | IE Mobile | UC Browser for Android | Samsung Internet | QQ Browser | Baidu Browser
---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---
IE9及以下版本不支持|12以下版本不支持|4以下版本不支持|5以下版本不支持|5版本以下不支持|10以下版本不支持|3.2版本以下不支持|都不支持|3版本以下不支持|10以下版本不支持|12以下版本不支持|71以下版本不支持|64以下版本不支持|10及以下版本不支持|11.8以下版本不支持|4以下版本不支持|1.2及以下版本不支持|7.12及以下版本不支持

## rem 
### 相对于HTML文档的font-size大小的相对单位

rem是相对于html元素的font-size大小的相对单位，所以在使用rem 的时候，只需要设置html元素的font-size大小即可，而且html的font-size是rem 的基准。

```css
html {
    font-size: 10px;
}
.rem-1 {
    width: 1rem;        /* width: 10px */
    height: 1rem;       /* height: 10px */
    font-size: 1rem;    /* font-size: 10px */
    background-color: #f8f8f8;
}
.rem-2 {
    width: 5rem;        /* width: 50px */
    height: 5rem;       /* height: 50px */
    font-size: 5rem;    /* font-size: 50px */
    background-color: #52ccba;
}
```
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="uft-8">
        <title>rem</title>
    </head>
    <body>
        <div class="rem-1">文本大小为1rem</div>
        <div class="rem-2">文本大小为5rem</div>
    </body>
</html>
```
### rem 的兼容性

IE | Edge | Firefox | Chrome | Safari | Opera | iOS Safari | Opera Mini | Android Browser | Blackberry Browser | Opera Mobile | Chrome for Android | Firefox for Android | IE Mobile | UC Browser for Android | Samsung Internet | QQ Browser | Baidu Browser
---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---
IE11以下版本不支持|12以下版本不支持|3.6以下版本不支持|4以下版本不支持|5版本以下不支持|12.1以下版本不支持|6版本以下不支持|都支持|2.1版本以下不支持|7及以下版本不支持|12以下版本不支持|71以下版本不支持|64以下版本不支持|10以下版本不支持|11.8以下版本不支持|4以下版本不支持|1.2及以下版本不支持|7.12及以下版本不支持