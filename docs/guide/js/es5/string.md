# String

indexOf 无法识别 NaN , undefined

```javascript
[NaN].indexOf() == -1; // true
[undefined].indexOf() == -1; // true
```