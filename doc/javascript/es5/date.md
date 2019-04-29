# Date

JS内置对象的坑：

1、new Date('2018-12-12')的值不等于new Date(2018,12,12)

```javascript
new Date('2018-12-12'); // Wed Dec 12 2018 08:00:00 GMT+0800 (中国标准时间)
(new Date('2018-12-12')).toLocaleDateString(); // 2018/12/12
new Date(2018,12,12); // Sat Jan 12 2019 00:00:00 GMT+0800 (中国标准时间)
(new Date(2018,12,12)).toLocaleDateString(); // 2019/1/12
```
2、不同浏览器对时间的解析不同

```javascript
// 在Chrome浏览器中：
new Date('2018-12-12'); // Wed Dec 12 2018 08:00:00 GMT+0800 (中国标准时间)
new Date('2018/12/12'); // Wed Dec 12 2018 00:00:00 GMT+0800 (中国标准时间)

// 在FireFox浏览器中：
new Date('2018-12-12'); // Date 2018-12-12T00:00:00.000Z
new Date('2018/12/12'); // Date 2018-12-11T16:00:00.000Z

// 在IE9、IE11浏览器中：
new Date('2018-12-12'); // Wed Dec 12 2018 08:00:00 GMT+0800 (中国标准时间)
new Date('2018/12/12'); // Wed Dec 12 2018 00:00:00 GMT+0800 (中国标准时间)

// 在IE7、IE8浏览器中：
new Date('2018-12-12'); // NaN
new Date('2018/12/12'); // Wed Dec 12 2018 00:00:00 GMT+0800 (中国标准时间)

// 在QQ浏览器中：
new Date('2018-12-12'); // Wed Dec 12 2018 08:00:00 GMT+0800 (中国标准时间)
new Date('2018/12/12'); // Wed Dec 12 2018 00:00:00 GMT+0800 (中国标准时间)
```
3、```new Date('2018/12/12')``` 的值等于 ```new Date(2018,12,12)```

