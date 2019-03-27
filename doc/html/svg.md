# svg

SVG 意为可缩放矢量图形（Scalable Vector Graphics）

SVG 使用 XML 格式定义图像

SVG 是使用 XML 来描述二维图形和绘图程序的语言

## 什么是svg

- SVG 指可伸缩矢量图形 (Scalable Vector Graphics)
- SVG 用来定义用于网络的基于矢量的图形
- SVG 使用 XML 格式定义图形
- SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失
- SVG 是万维网联盟的标准
- SVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

## svg的优势

- SVG 可被非常多的工具读取和修改（比如记事本）
- SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
- SVG 是可伸缩的
- SVG 图像可在任何的分辨率下被高质量地打印
- SVG 可在图像质量不下降的情况下被放大
- SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
- SVG 可以与 Java 技术一起运行
- SVG 是开放的标准
- SVG 文件是纯粹的 XML

```xml
<?xml version="1.0" standalone="no"?>

<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <circle 
        cx="100" 
        cy="50" 
        r="40" 
        stroke="black"
        stroke-width="2" 
        fill="red"/>
</svg>
<!--
第一行包含了 XML 声明。请注意 standalone 属性！
该属性规定此 SVG 文件是否是“独立的”，或含有对外部文件的引用。

standalone="no" 意味着 SVG 文档会引用一个外部文件 - 在这里，是 DTD 文件。

第二和第三行引用了这个外部的 SVG DTD。
该 DTD 位于 “http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd”。
该 DTD 位于 W3C，含有所有允许的 SVG 元素。

SVG 代码以 <svg> 元素开始，包括开启标签 <svg> 和关闭标签 </svg> 
。这是根元素。
width 和 height 属性可设置此 SVG 文档的宽度和高度。
version 属性可定义所使用的 SVG 版本，xmlns 属性可定义 SVG 命名空间。

SVG 的 <circle> 用来创建一个圆。
cx 和 cy 属性定义圆中心的 x 和 y 坐标。
如果忽略这两个属性，那么圆点会被设置为 (0, 0)。
r 属性定义圆的半径。

stroke 和 stroke-width 属性控制如何显示形状的轮廓。
我们把圆的轮廓设置为 2px 宽，黑边框。

fill 属性设置形状内的颜色。
我们把填充颜色设置为红色。

关闭标签的作用是关闭 SVG 元素和文档本身。

注释：所有的开启标签必须有关闭标签！
-->
```
    SVG 文件可通过以标签嵌入 HTML 文档：
    <embed>
    <object>
    或者 
    <iframe>

```html
<embed 
    src="rect.svg" 
    width="300" 
    height="100" 
    type="image/svg+xml"
    pluginspage="http://www.adobe.com/svg/viewer/install/" />
<!-- pluginspage 属性指向下载插件的 URL -->
```
```html
<object 
    data="rect.svg" 
    width="300" 
    height="100" 
    type="image/svg+xml"
    codebase="http://www.adobe.com/svg/viewer/install/" />
<!-- codebase 属性指向下载插件的 URL -->
```
```html
<iframe src="rect.svg" width="300" height="100"></iframe>
```
## svg的形状

- 矩形 <rect>
- 圆形 <circle>
- 椭圆 <ellipse>
- 线 <line>
- 折线 <polyline>
- 多边形 <polygon>
- 路径 <path>

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <rect 
        width="300" 
        height="100"
        style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/>
</svg>
<!--
- rect 元素的 width 和 height 属性可定义矩形的高度和宽度
- style 属性用来定义 CSS 属性
- CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
- CSS 的 stroke-width 属性定义矩形边框的宽度
- CSS 的 stroke 属性定义矩形边框的颜色
-->
```
> 矩形

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <rect 
        x="20" 
        y="20" 
        width="250" 
        height="250"
        style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9"/>
</svg>
<!--
- x 属性定义矩形的左侧位置（例如，x="0" 定义矩形到浏览器窗口左侧的距离是 0px）
- y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
- CSS 的 fill-opacity 属性定义填充颜色透明度（合法的范围是：0 - 1）
- CSS 的 stroke-opacity 属性定义笔触颜色的透明度（合法的范围是：0 - 1）
- CSS 的 opacity 属性定义整个元素的透明值（合法的范围是：0 - 1）
-->
```
> 圆角

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <rect 
        x="20" 
        y="20" 
        rx="20" 
        ry="20" 
        width="250"
        height="100" 
        style="fill:red;stroke:black;stroke-width:5;opacity:0.5"/>
</svg>
<!--
- rx 和 ry 属性可使矩形产生圆角。
-->
```
> 圆

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <circle 
        cx="100" 
        cy="50" 
        r="40" 
        stroke="black"
        stroke-width="2" 
        fill="red"/>
</svg>
<!--
- cx 和 cy 属性定义圆点的 x 和 y 坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0)

- r 属性定义圆的半径。
-->
```
> 椭圆

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
<ellipse 
    cx="300" 
    cy="150" 
    rx="200" 
    ry="80"
    style="fill:rgb(200,100,50);stroke:rgb(0,0,100);stroke-width:2"/>
</svg>
<!--
- cx 属性定义圆点的 x 坐标
- cy 属性定义圆点的 y 坐标
- rx 属性定义水平半径
- ry 属性定义垂直半径
-->
```
```xml
<!-- 三个累叠而上的椭圆 -->
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <ellipse 
        cx="240" 
        cy="100" 
        rx="220" 
        ry="30"
        style="fill:purple"/>
    <ellipse 
        cx="220" 
        cy="70" 
        rx="190" 
        ry="20"
        style="fill:lime"/>
    <ellipse 
        cx="210" 
        cy="45" 
        rx="170" 
        ry="15"
        style="fill:yellow"/>
</svg>
```
> 线条

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">

<line 
    x1="0" 
    y1="0" 
    x2="300" 
    y2="300"
    style="stroke:rgb(99,99,99);stroke-width:2"/>

</svg>
<!--
- x1 属性在 x 轴定义线条的开始
- y1 属性在 y 轴定义线条的开始
- x2 属性在 x 轴定义线条的结束
- y2 属性在 y 轴定义线条的结束
-->
```
> <polygon> 标签用来创建含有不少于三个边的图形

```xml
<!-- <polygon> 标签用来创建含有不少于三个边的图形 -->
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">

<polygon 
    points="220,100 300,210 170,250"
    style="fill:#cccccc;stroke:#000000;stroke-width:1"/>

</svg>
<!--
points 属性定义多边形每个角的 x 和 y 坐标
-->
```
```xml
<!-- 四边形 -->

<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">

<polygon 
    points="220,100 300,210 170,250 123,234" 
    style="fill:#cccccc;stroke:#000000;stroke-width:1"/>
</svg>
```
> <polyline> 标签用来创建仅包含直线的形状

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg 
    width="100%" 
    height="100%" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg">
    <polyline 
        points="0,0 0,20 20,20 20,40 40,40 40,60" 
        style="fill:white;stroke:red;stroke-width:2"/>
</svg>
```
> <path> 标签用来定义路径

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg">
    <path 
        d="M250 150 L150 350 L350 350 Z" />
</svg>
<!--
M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Belzier curve
T = smooth quadratic Belzier curveto
A = elliptical Arc
Z = closepath

以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。
-->
```
```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg 
    width="100%" 
    height="100%" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg">
    <path 
        d="M153 334
        C153 334 151 334 151 334
        C151 339 153 344 156 344
        C164 344 171 339 171 334
        C171 322 164 314 156 314
        C142 314 131 322 131 334
        C131 350 142 364 156 364
        C175 364 191 350 191 334
        C191 311 175 294 156 294
        C131 294 111 311 111 334
        C111 361 131 384 156 384
        C186 384 211 361 211 334
        C211 300 186 274 156 274"
        style="fill:white;stroke:red;stroke-width:2"/>
</svg>
```
> SVG 滤镜用来向形状和文本添加特殊的效果

```
feBlend
feColorMatrix
feComponentTransfer
feComposite
feConvolveMatrix
feDiffuseLighting
feDisplacementMap
feFlood
feGaussianBlur
feImage
feMerge
feMorphology
feOffset
feSpecularLighting
feTile
feTurbulence
feDistantLight
fePointLight
feSpotLight
```
> SVG 高斯模糊

必须在 <defs> 标签中定义 SVG 滤镜

<filter> 标签用来定义 SVG 滤镜。<filter> 标签使用必需的 id 属性来定义向图形应用哪个滤镜？

<filter> 标签必须嵌套在 <defs> 标签内。<defs> 标签是 definitions 的缩写，它允许对诸如滤镜等特殊元素进行定义。

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg">
    <defs>
        <filter 
            id="Gaussian_Blur">
            <feGaussianBlur 
                in="SourceGraphic" 
                stdDeviation="3" />
        </filter>
    </defs>
    <ellipse 
        cx="200" 
        cy="150" 
        rx="70" 
        ry="40" 
        style="fill:#ff0000;stroke:#000000;stroke-width:2;filter:url(#Gaussian_Blur)"/>
</svg>
<!--
- <filter> 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
- filter:url 属性用来把元素链接到滤镜。当链接滤镜 id 时，必须使用 # 字符
滤镜效果是通过 <feGaussianBlur> 标签进行定义的。fe 后缀可用于所有的滤镜
- <feGaussianBlur> 标签的 stdDeviation 属性可定义模糊的程度
- in="SourceGraphic" 这个部分定义了由整个图像创建效果
-->
```
> SVG 线性渐变

SVG 渐变必须在 <defs> 标签中进行定义

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient 
            id="orange_red" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="0%">
            <stop 
                offset="0%" 
                style="stop-color:rgb(255,255,0); stop-opacity:1"/>
            <stop 
                offset="100%" 
                style="stop-color:rgb(255,0,0); stop-opacity:1"/>
        </linearGradient>
    </defs>
    <ellipse 
        cx="200" 
        cy="190" 
        rx="85" 
        ry="55" 
        style="fill:url(#orange_red)"/>
</svg>
<!--
- <linearGradient> 标签的 id 属性可为渐变定义一个唯一的名称
- fill:url(#orange_red) 属性把 ellipse 元素链接到此渐变
- <linearGradient> 标签的 x1、x2、y1、y2 属性可定义渐变的开始和结束位置
- 渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个 <stop> 标签来规定。offset 属性用来定义渐变的开始和结束位置。
-->
```
> SVG 放射性渐变

SVG 渐变必须在 <defs> 标签中进行定义

<radialGradient> 用来定义放射性渐变。

<radialGradient> 标签必须嵌套在 <defs> 中。<defs> 标签是 definitions 的缩写，它允许对诸如渐变等特殊元素进行定义

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg 
    width="100%" 
    height="100%" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient 
            id="grey_blue" 
            cx="50%" 
            cy="50%" 
            r="50%" 
            fx="50%" 
            fy="50%">
            <stop 
                offset="0%" 
                style="stop-color:rgb(200,200,200); stop-opacity:0"/>
            <stop 
                offset="100%" 
                style="stop-color:rgb(0,0,255); stop-opacity:1"/>
        </radialGradient>
    </defs>
    <ellipse 
        cx="230" 
        cy="200" 
        rx="110" 
        ry="100" 
        style="fill:url(#grey_blue)"/>
</svg>
<!--
- <radialGradient> 标签的 id 属性可为渐变定义一个唯一的名称，fill:url(#grey_blue) 属性把 ellipse 元素链接到此渐变，cx、cy 和 r 属性定义外圈，而 fx 和 fy 定义内圈 渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个 <stop> 标签来规定。offset 属性用来定义渐变的开始和结束位置。
-->
```
### 参考文献
[SVG 图像入门教程http://www.ruanyifeng.com/blog/2018/08/svg.html](http://www.ruanyifeng.com/blog/2018/08/svg.html)
