# JavaScript知识点汇总

## JS 的数据类型

基本类型：

- Undefined
- Null
- Boolean
- Number
- String
- Symbol (ES6新增)

引用类型：

- Object
- Array
- Function

### 基本类型和引用类型的区别

基本类型和引用类型存储内存的位置不同，基本类型直接存储在栈中，而引用类型存储在堆中，同时在栈中存储了指针，而这个指针指向正式堆中实体的起始位置。

```javascript
// 基本类型

var a = 10
var b = a
b = 20

console.log(a) // 10
console.log(b) // 20


// a，b都是值类型，两者分别赋值，相互之间没有任何影响
```
```javascript
// 引用类型

var a = { x: 10, y: 20 }
var b = a
b.x = 100
b.y = 200

console.log(a) // { x: 100, y: 200 }
console.log(b) // { x: 100, y: 200 }

// a,b都是引用类型，
// 在执行b=a之后，修改b的属性值，a的属性值也跟着变化
// 因为a和b都是引用类型，指向了同一个内存地址，
// 即两者引用的是同一个值，
// 因此修改b属性时，a的值也随之改变了。
```

### 数据类型判断

> typeof

typeof返回一个表示数据类型的字符串，返回结果包括：
```javascript
"number"
"string"
"boolean"
"symbol"
"object"
"undefined"
"function"
```
7种数据类型，但是不能判断 ``` null ```、```array```

```javascript
typeof Symbol()         // symbol
typeof ''               // string
typeof 1                // number
typeof true             // boolean
typeof undefined        // undefined
typeof new Function()   // function
typeof null             // object
typeof []               // object
typeof new Date()       // object
typeof new RegExp()     // object
```
> instanceof

instanceof 是用来判断A是否是B的实例，表达式为：``` A instanceof B ```,如果A是B的实例则返回``` true ```,否则返回``` false ```

instanceof 运算符用来测试一个对象在器原型链中是否存在一个构造函数的``` prototype ```属性，但是它不能检测``` null ```和``` undefined ```

```javascript
[] instanceof Array             // true
{} instanceof Object            // true
new Date() instanceof Date      // true
new RegExp() instanceof RegExp  // true
null instanceof Null            // 报错
undefined instanceof undefined  // 报错
```
> 严格运算符 ===

只能用于判断 null 和 undefined ,因为这两种类型的值都是唯一的

> constructor

constructor 作用和 instanceof 非常相似，但是constructor 检测 Object 与 instanceof 不一样，还可以处理基本数据类型的检测

不过函数的 contructor 是不稳定的，这个主要体现在把类的原型进行重写，在重写的过程中很有可能出现把之前的 contructor 给覆盖了， 这样检测出来的结果就是不准确的。

> Object.prototype.toString.call()

Object.prototype.toString.call()最准确最常用的方式。

```javascript
Object.prototype.toString.call('')              // [object String]
Object.prototype.toString.call(1)               // [object Number]
Object.prototype.toString.call(true)            // [object Boolean]
Object.prototype.toString.call(undefined)       // [object Undefined]
Object.prototype.toString.call(null)            // [Object Null]
Object.prototype.toString.call(new Function())  // [object Function]
Object.prototype.toString.call(new Date())      // [object Date]
Object.prototype.toString.call([])              // [object Array]
Object.prototype.toString.call(new RegExp())    // [object RegExp]
Object.prototype.toString.call(new Error())     // [object Error]
```
### 浅拷贝和深拷贝

浅拷贝只复制某一个对象的指针，而不是复制对象本身，新旧对象还是共享同一块内存。

浅拷贝的实现方式：

- Object.assign(): 需要注意的是目标对象只有一层的时候是深拷贝
- Array.prototype.concat()
- Array.prototype.slice()

深拷贝就是在拷贝数据的时候，将数据的所有引用结构都拷贝一份。

简单的来说就是：在内存中存在两个数据结构完全相同又互相独立的数据，将引用类型进行复制，而不是只复制其引用关系。

深拷贝的实现方式：

- 热门的函数库lodash,也有提供_.cloneDeep用来做深拷贝
- jquery 提供一个 $.extend 可以用来做深拷贝
- JSON.parse(JSON.stringify())
- 手写递归方法

递归实现深拷贝的原理：

要拷贝一个数据，我们肯定要去便利它的属性，如果这个对象的属性仍然是对象，继续使用这个方法，如此往复。

```javascript
// 定义检测数据类型的功能函数

function checkedType (target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}

// 实现深度克隆 --- 对象/数组

function clone (target) {
    // 判断拷贝的数据类型
    // 初始化变量 result 成为最终克隆的数据
    let result,
        targetType = checkedType(target);
    if (targetType === 'Object') {
        result = {}
    } else if (targetType === 'Array') {
        result = []
    } else {
        return target
    }
    
    // 遍历目标函数
    for (let i in target) {
        // 获取遍历数据结构的每一项值
        let value = target[i];
        // 判断目标结构中的每一项值是否存在对象/数组
        if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {
            // 对象/数组里嵌套了对象/数组
            // 继续遍历获取到value值
            result[i] = clone(value)
        } else {
            // 获取到value值最基本的数据类型或者是函数
            result[i] = value
        }
    }
    return result
}
```
## 作用域和闭包

### 执行上下文和执行栈
### 作用域与作用域链
### 闭包
### this全面解析
## 异步
### 同步 vs 异步
### 异步和单线程
### 前端异步的场景
### Event Loop
## 原型链与继承
### 原型与原型链
### 继承
## DOM操作与BOM操作
### DOM操作
### DOM事件模型和事件流

> 事件冒泡

### 事件代理(事件委托)
### BOM操作
BOM (浏览器对象模型)是浏览器本身的一些信息的设置和获取，例如获取浏览器的宽度、高度，设置让浏览跳转到哪个地址。

- window.screen 对象：包含有关用户屏幕的信息
- window.loaction 对象：用于获得当前页面的地址(URL), 并把浏览器重定向到新页面
- window.history 对象：浏览器历史的前进后退等
- window.navigator 对象：常常用来获取浏览器信息、是否移动端访问等等

```javascript
// 获取屏幕的宽度和高度
console.log(screen.width)
console.log(screen.height)

// 获取网站、协议、path、参数、hash等

// 例如当前网址是 https://www.baidu.com/s?ie=utf-8&f=8
console.log(location.href)      // https://www.baidu.com/s?ie=utf-8&f=8#some
console.log(location.protocol)  // https:
console.log(location.pathname)  // /s
console.log(location.search)    // ?ie=utf-8&f=8
console.log(location.hash)      // #some

// 浏览器的前进、后退功能

history.back()
history.forward()

// 获取浏览器特性 (即俗称的UA) 然后识别客户端，例如判断是不是Chrome浏览器

var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```
### Ajax 与跨域
Ajax是一种异步请求数据的一种技术手段，对于改善用户的体验和程序的性能很有帮助。
### 存储
## 模块化
几种常见模块化规范的简介：

- CommonJS 规范主要用于服务端编程，加载模块是同步的，这个并不适合在浏览器环境，因为同步意味着阻塞加载，浏览器资源是异步加载的，因此有了AMD CMD解决方案。
- AMD 规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。不过，AMD规范开发成本高，代码阅读和书写比较困难，模块定义方式的语义不顺畅。
- CMD规范与AMD规范很相似。都是用于浏览器编程，依赖就近，延迟执行，可以很容易在node.js中运行。不过依赖SPM打包，模块的加载逻辑偏重ES6在语言标准的层面上，实现了模块功能，而且实现的相当简单，完全可以取代CommonJS和AMD规范，成为了浏览器和服务器通用的模块解决方案。
