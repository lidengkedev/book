# window

> open

```javascript
// url  新窗口请求地址
// name 新窗口名称
// params 新窗口样式
window.open(url, name, params);

window.open('http://www.imooc.com','_blank','width=300, height=200, menubar=no, toolbar=no, status=no, scrollbars=yes')
```
<table>
    <thead>
        <tr>
            <th>窗口参数</th>
            <th>参数类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>top</td>
            <td>Number</td>
            <td>窗口顶部距离，像素值</td>
        </tr>
        <tr>
            <td>left</td>
            <td>Number</td>
            <td>窗口左边距离，像素值</td>
        </tr>
        <tr>
            <td>width</td>
            <td>Number</td>
            <td>窗口宽度</td>
        </tr>
        <tr>
            <td>height</td>
            <td>Number</td>
            <td>窗口高度</td>
        </tr>
        <tr>
            <td>menubar</td>
            <td>yes,no</td>
            <td>窗口是否显示菜单</td>
        </tr>
        <tr>
            <td>toolbar</td>
            <td>yes,no</td>
            <td>窗口是否显示工具栏</td>
        </tr>
        <tr>
            <td>scrollbars</td>
            <td>yes,no</td>
            <td>窗口是否显示滚动条</td>
        </tr>
        <tr>
            <td>status</td>
            <td>yes,no</td>
            <td>窗口是否显示当前状态</td>
        </tr>
    </tbody>
</table>

```javascript
// 关闭当前窗口
window.close();

// <窗口对象>.close();关闭指定窗口

var mywin = window.open(url, name, params);
mywin.close();
```

> print 打印

- chrome中可以直接使用print() 调用打印窗口
- firefix中必须使用windiw.print()，但是效果和chrome调用print()后，执行ctrl+shift+P一样，如果使用print()，则返回undefined
- IE 中可以可以直接使用print(),返回undefined,但是效果和chrome调用print()后，执行ctrl+shift+P一样

```javascript
var tmp = window.open("about:blank", "", "fullscreen=1");

tmp.moveTo(0, 0);

tmp.resizeTo(screen.width + 20, screen.height);

tmp.focus();

tmp.location.href = 'http://www.che168.com/pinggu/eva_' + msgResult.message[0] + '.html';

var config_ = "left=0,top=0,width=" + (window.screen.Width) + ",height=" + (window.screen.Height);

window.open('http://www.che168.com/pinggu/eva_' + msgResult.message[0] + '.html', "winHanle", config_);

//模拟form提交打开新页面
var f = document.createElement("form");

f.setAttribute('action', 'http://www.che168.com/pinggu/eva_' + msgResult.message[0] + '.html');

f.target = '_blank';

document.body.appendChild(f);

f.submit();

```

```javascript
window.open('about:blank','','fullscreen=1,top=20,left=0,width='+ (screen.width-20) +',height='+ (screen.height-130))
```