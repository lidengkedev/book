# babel

[在线ES6转ES5](https://babeljs.io/repl)
[在线Babel转译](https://es6console.com/)
## es6 转 es5

> const

```javascript
// es6
const a = 12;
{
	const a = 23;
  {
  	const a = 'string';
    {
    	const a = {};
    }
  }
}

// babel 转 es5
var a = 12;
{
  var _a = 23;
  {
    var _a2 = 'string';
    {
      var _a3 = {};
    }
  }
}
```

> let

```javascript
// es6
let a = 23;
{
  	let a = 12;
  {
  	let a = 23;
    {
    	let a = 34;
    }
  }
}

// babel 转换 es5
var a = 23;
{
  var _a = 12;
  {
    var _a2 = 23;
    {
      var _a3 = 34;
    }
  }
}
```

> 箭头函数

```javascript
// es6
() => {
	this.name = 'string'
}

// babel 转 es5
var _this = void 0;

(function () {
  _this.name = 'string';
});
```

```javascript
// es6
{
	() => {
    	this.name = "child2";
      () => {
      	this.name = "child3";
      }
    }
    function fn () {
    	() => {
        	this.name = "parent"
        }
    }
}

// babel 转 es5
var _this = void 0;

{
  var fn = function fn() {
    var _this2 = this;

    (function () {
      _this2.name = "parent";
    });
  };

  (function () {
    _this.name = "child2";

    (function () {
      _this.name = "child3";
    });
  });
}

// es6
() => {
    this.name = "child2";
  () => {
    this.name = "child3";
  }
}
function fn () {
    () => {
        this.name = "parent";
      () => {
        this.name = "child";
        }
    }
}

// babel 转 es5
var _this = void 0;

(function () {
  _this.name = "child2";

  (function () {
    _this.name = "child3";
  });
});

function fn() {
  var _this2 = this;

  (function () {
    _this2.name = "parent";

    (function () {
      _this2.name = "child";
    });
  });
}
```

> 符号转换

```javascript
// es6
const text = "这是一句话";
const text2 = `这是另一句话${text}`;
`<div>${text2}</div>`

// babel 转 es5
var text = "这是一句话";
var text2 = "\u8FD9\u662F\u53E6\u4E00\u53E5\u8BDD".concat(text);
"<div>".concat(text2, "</div>");
```

> 解构赋值

```javascript
// es6
const [a,b,c] = [1,2,3];
const arr = [1,2,3,4];
const new_arr = [...arr, 5,6,7,8]

// babel 转 es5
var a = 1,
    b = 2,
    c = 3;
var arr = [1, 2, 3, 4];
var new_arr = [].concat(arr, [5, 6, 7, 8]);
```