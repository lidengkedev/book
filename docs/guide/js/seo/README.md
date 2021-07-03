# SEO

## 前端优化

据一项研究表明：用户最满意的打开网页时间是2-5秒，如果等待超过10秒，99%的用户会关闭这个网页。

在TCP握手之前要进行DNS查询，也就是域名地址解析，DNS解析也是需要时间的，可以通过预解析的方式来预先获得域名所对应的IP。如：

```html
<link rel="dns-prefetch" href="http://example.com">
```

比较耗时的操作，
比如HTTP的请求，每一个link、img、script标签都会向服务器发送请求，
而每一个浏览器同时向同一台服务器发送请求的个数是有限制的，请求次数越多浏览器承受的压力就越大，自然效率就越低。

对于图片资源应该这么做：

- 对于简单的图片如三角形、矩形等能用css实现的就用样式实现。
- 把常用的图标打成iconfont来使用。
- 由于浏览器限制了向同一台服务器同时发送请求的次数，所以尽量把图片资源放在多台CDN上，这里不限制图片，js和css等静态资源同样适用。
- 对于小图片用base64编码后直接使用编码文本。
- 使用CSS Sprites技术来将图片资源合并成雪碧图，webpack有这样的插件，或者到github上下载一个。
- 多图片列表展示完全可以使用懒加载技术来控制图片的加载。
- 选择正确的图片格式：WebP、PNG、JPEG。

如果把样式表放在文档底部浏览器会重绘页面元素，阻塞内容逐步呈现，从而造成白屏。js文件的加载会阻塞DOM树的构建，也可能会导致白屏的出现。

当script标签上加上defer属性以后，表示该JS文件会并行下载，但是会放到HTML解析完成后顺序执行，而script标签加上async属性以后，表示加载和渲染后续文档元素的过程将和JS文件的加载与执行并行进行。所以：

- 样式表放在头部
- 脚本放在底部

事件的三个阶段：捕获阶段、目标阶段、冒泡阶段

在绑定事件的时候要多使用事件委托而不是直接使用事件绑定，这样会大大提高事件的效率。如：

```html
<ul id="ul">
	<li>111</li>
	<li>222</li>
	<li>333</li>
	<li>444</li>
</ul>
```

希望在点击每个li的时候可以输出该标签的内容，使用事件委托：

```javascript
document.getElementById('ul').onclick = function (event) {
	var event = event || window.event;
	var target = event.target || event.srcElement;
	if (target.nodeName.toLowerCase() == 'li') {
		alert(target.innerHTML);
	}
}
```

过高的触发率会导致响应速度跟不上触发频率，出现延迟，假死或者卡顿的显现，对于触发频率比较高的函数使用节流来限制，保证一定时间内核心代码只执行一次。

```javascript
// 节流，每隔一点时间执行一次

function throttle (fn, wait) {
	var timer = null;
	
	return function () {
		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(this, Array.prototype.slice.call(arguments, 0));
				timer = null;
			}, wait);
		}
	}
}
```

实现输入框输入文本自动联想匹配结果，用户每次在keypress的时候都要异步请求接口，造成资源浪费，最好是等用户输入完了再进行请求，可以写一个防抖函数：

```javascript
// 防抖，只执行最后一次

function debounce (fn, wait) {
	var timer = null;
	
	return function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, Array.prototype.slice.call(arguments, 0));
		}, wait);
	}
}
```

DOM操作的优化：

- 避免频繁的DOM操作，尽量将操作合并在一起一次性操作。
- 使用class来替代样式的变更
- 使用css动画来代替js动画
- 使用requestAnimationFrame 来替代setInterval操作动画

这么做的目的都是为了减少浏览器的重绘与回流，requestAnimationFrame 最大的优势是由系统来决定回调函数的执行时机，
具体一点讲，
如果屏幕刷新率是60Hz，那么回调函数就是16.7ms执行一次，如果刷新率是75Hz，那么这个时间间隔就会变成1000/75=13.3ms，
换句话说就是，requestAnimationFrame的步伐跟着系统的刷新步伐走，它能保证回调函数在屏幕每一次的刷新间隔中只执行一次，这样就不会引起丢丢频现象，也不会导致动画出现卡顿的问题。

css写法要遵循下面的原则：

- 正确使用css前缀，以解决浏览器的兼容性
- 对于可继承的属性尽量使用继承
- 避免css选择器嵌套过深，影响性能
- css reset的内容以及基本内容要单独提取出来方便所有页面公用

在构建的时候要遵循：

- js混淆
- 资源压缩，包括js、css、html和图片压缩
- 对于单页面应用要考虑公共代码的提取和分离，可以充分利用路由做到按需加载

利用浏览器的缓存站点资源的功能来优化网站，减少不必要的流量开支。

可以通过hash来命名资源文件，只有内容发生改动的文件hash才会改变，这样对于不变的文件浏览器就可以从本地缓存读取。

还可以借助http缓存，利用服务端来设置缓存策略，常见的缓存策略有**强制缓存**(Cache-Control、Expires)和**协商缓存**(Etag、Last-Modified),通过设置不同的header来达到控制浏览器缓存的目的。

要注意防止XXS和SRF攻击
