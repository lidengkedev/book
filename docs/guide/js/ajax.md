# Ajax

Ajax(Asynchronous JavaScript and XML),是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

## 原生请求

把用户的信息提交到服务器，并把服务器的响应输出

**XMLHttpRequest对象是Ajax技术的核心所在**

1. 生成请求对象，XMLHTTPReQuest，通过该对象和服务器交互
    
```javascript
var xhr = null;
if (window.XMLHttpReQuest) {
    //非IE
    xhr = new XMLHttpReQuest();
}else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}
```
2. 使用open，设置请求方式以及请求的地址，参数名必须和服务器保持一致
```javascript
var url = 'http://192.168.1.118:3000/?user='+username+'&pwd='+pwdValue;
//参数1：请求方式 GET POST
//参数2：请求资源的地址
//参数3：是否异步请求，true,false
xhr.open('get',url,true);
```
3. 设置请求过程的监控
    
```javascript
xhr.onreadystatechange = function () {
    //xhr.readyState == 0   初始化中
    //xhr.readyState == 1   调用open
    //xhr.readyState == 2   调用send发送请求
    //xhr.readyState == 3   正在接收数据
    //xhr.readyState == 4   服务器响应完毕
    if (xhr.readyState == 4) {
        //服务器返回的状态码判断
        if (xhr.readyState == 200) {
            //输出服务器响应的信息
            console.log(xhr.responseText);
        }
    }
}
```
4. 发送请求
    
```javascript
xhr.send();
```
### 原生Ajax方法

```javascript
var javascriptAjax = (function () {
	/**
	 * 判断参数是否为空
	 * @param {Object} data
	 */
	var isObject = function (data) {
		return typeof data === 'object' ? (JSON.stringify(data) === '{}' ? false : true) : false;
	}
	/**
	 * 配置参数
	 * 参数对象转换为字符串拼接
	 * @param {Object} obj
	 */
	var setParamsConfig = function (obj) {
		var dataStr = '';
		if (isObject(obj)) {
			for (key in obj) {
				dataStr += key + '=' + obj[key] + '&'
			}
		}
		return dataStr;
	}
	//1.生成请求对象，XMLHTTPReQuest，通过该对象和服务器交互
	var createXHR = function () {
		var xhr = null;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();	//非IE
		} else {
			xhr = new ActiveXObject();
		}
		return xhr;
	}
	//2.使用open，设置请求方式以及请求的地址，参数名必须和服务器保持一致
	var setRequestMethod = function (params) {
		var xhr = createXHR();
		var type = params.type ? params.type : 'get';
		var url = params.url ? params.url : '';
		var async = params.async ? params.async : true;
		switch (type){
			case 'get':
				url += '?'+ setParamsConfig(params.data);
				break;
			case 'post':
				break;
			default:
				break;
		}
		xhr.open(type, url, async);
		return xhr;
	}
	//3.设置请求过程的监控
	var listenRequestProcess = function (params) {
		var xhr = setRequestMethod(params);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					params.success(JSON.parse(xhr.response))
				}
			}
		}
		return xhr;
	}
	//4.发送请求
	var sendAjax = function (params) {
		var xhr = listenRequestProcess(params);
		if (isObject(params.data)) {
			xhr.setRequestHeader("Content-type","application/x-www-form-urlenconded");
			xhr.send(setParamsConfig(params.data));
		} else {
			xhr.send();
		}
	}
	
	return sendAjax;
	
})()

```
调用方式
```javascript
javascriptAjax({
	type:'get',
	url: 'data/ajax.json',
	async: true,
	data: {
		username: 'zhangsan'
	},
	success: function (res) {
		console.log(res);
	}
});
```
## Jsonp请求

> jsonp请求需要后台配合吗？

答案是肯定的。jsonp请求后端必须做配置，否则同样无法获取到数据。

> jsonp的缺点

- 需要后台代码做处理，改动后台代码
- 只能使用get请求方式处理jsonp请求
- 发送的不是XMLHttpRequest请求

### jsonp前台需要做的处理

> 使用jQuery库

```javascript
$.ajax({
	url: 'http://localhost:8080/test/get',
	dataType: 'jsonp',
	success: function (res) {
		console.log(res);
	}
})
```

> 使用原生方式

```javascript
var jsonpCallback = (function () {

	//通过DOM操作在body中追加script标签，使用script标签src属性的特性进行做跨域请求
	//src的特性： 不存在跨域问题，src连接可以无限制的跨域，不受浏览器同源策略限制
	
	var createScript = function () {
	
		var scriptTag = document.createElement('script');
		
		//添加一个回调函数(必须的),与后台返回请求数据做处理
		
		scriptTag.src = 'http://localhost:8080/test/get/?callback=headle'; 
		scriptTag.type = 'text/javascript';
		
		document.body.appendChild(scriptTag);
	}
	
	return createScript;
})();

var headle = function (json) {
	return json;
}

jsonpCallback();

var response = headle();    //获取跨域请求返回的数据
```
### http常见的状态码


101: 切换协议，服务器根据客户端请求切换协议

**200: 请求成功。一般用于GET和POST请求**

**301: 永久重定向**

**302: 临时重定向**

303: 与301类似。使用GET和POST请求查看

**304: 请求资源未修改，使用缓存**

307: 与302类似。使用GET请求重定向

**404: 客户端请求失败**

408: 请求超时

**500: 内部服务器错误，无法完成请求**

505: 服务器不支持请求的HTTP协议的版本，无法完成处理

### HTTP请求头信息

```javascript
Accept: 客户端支持的数据类型
Accept-Charset: 客户端采用的编码
Accept-Encoding: 客户端支持的数据压缩格式
Accept-Language: 客户端的语言环境
Cookie: 客户端的cookie
Host: 请求的服务器地址
Contention: 客户端与服务端连接类型
If-Modified-Since: 上一次请求资源的缓存时间，与Last-Modified对应
If-None-Match: 客户端缓存数据的唯一标识，与Etag对应
Referer: 发起请求的源地址
```
### HTTP的响应头信息

```javascript
content-encoding: 响应数据的压缩格式
content-length: 响应数据的长度
content-language: 语言环境
content-type: 响应数据的类型
Date: 消息发送的时间
Age: 经过的时间
Etag: 被请求变量的实体值，用于判断请求资源是否发生变化
Expires: 缓存的过期时间
Last-Modified: 在服务器端最后被修改的时间
server: 服务器的型号
Pragma: 是否缓存(http1.0提出)
Cache-Control：是否缓存(http1.1提出)
```
#### 与缓存相关的字段
1. 强缓存 expire 和 cache-control
2. 对比缓存 Last-Mondified 和 If-Modified-Since Etag 和 If-None-Match

### Ajax的优缺点：

> 1. 优点：

- 页面无刷新，在页面内与服务器通信，减少用户等待时间，增强了用户体验。
- 使用异步方式与服务器通信，响应速度更快。
- 可以把一些原本服务器的工作转接到客户端，利用客户端闲置的能力来处理，减轻了服务器和宽带的负担，节约空间和宽带租用成本。
- 基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。

> 2. 缺点：

- 无法进行操作的后腿，既不支持浏览器的页面后退。
- 对搜索引擎的支持比较弱。
- 可能会影响程序中的异常处理机制。
- 安全问题，对一些网站攻击，如scrf、xxs、sql注入等不能很好的防御。