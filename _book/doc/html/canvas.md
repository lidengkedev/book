# canvas画布
canvas元素用于在网页上绘制图形

HTML5的canvas元素使用javascript在网页上绘制图像，画布时一个矩形区域，可以控制其每一个像素。

canvas拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

```html
<canvas id="myCanvas" width="200" height="100">
Your browser does not support the canvas element.
</canvas>
```
> 绘制矩形

```javascript
// 获取canvas元素
var c = document.getElementById('myCanvas');
// 创建context对象
var cxt = c.getContext("2d");
// 设置填充颜色为红色
cxt.fillStyle = "#FF0000";
// 绘画一个矩形
cxt.dillRect(0,0,150,75);
```

> 绘制线段

```javascript
var c = document.getElementById('myCanvas');
var cxt = c.getContext("2d");
cxt.moveTo(10,10);
cxt.lineTo(150,50);
cxt.lineTo(10,50);
cxt.stroke();
```

> 绘制圆

```javascript
var c = document.getElementById("myCanvas");
var cxt = c.getContext("2d");
cxt.fillStyle = "#FFF0000";
cxt.beginPath();
cxt.arc(70,18,15,0,Math.PI*2,true);
cxt.closePath();
cxt.fill();
```

> 横向渐变色（矩形）

```javascript
var c = document.getElementById("myCanvas");
var cxt = c.getContext("2d");
var grd = cxt.createLinearGradient(0,0,175,50);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "00FF00");
cxt.fillStyle = grd;
cxt.fillRect();
```

> 添加图片

```javascript
var c = document.getElementById("myCanvas");
var cxt = c.getContext("2d");
var img = new Image();
img.src = "flower.png";
cxt.drawImage(img, 0, 0);
```
#### 常用方法和属性
    getContext('2d')
    moveTo(x,y)
    lineTo(x,y)
    beginPath()
    clip()
    fillText()
    fillStyle
    fill()
    lineWidth
    stroke()
    strokeStyle
    fillRect()
    font
    src()
    textAlign
    lineCap
    closePath
    strokeRect()
