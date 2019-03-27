# HTML5 标签
## HTML5新增加的API
1. 用于即时2D绘图的Canvas标签
2. 定时媒体回放
3. 离线数据库存储
4. 文档编辑
5. 拖拽控制
6. 浏览历史管理
...
## HTML5中新增的标签
1. canvas
2. video,audio
3. artcle,footer,header,nav,section
4. calender,date,time,email,url,search
5. datalist(类似于select)

## HTML5中被移除的标签
1. u,font,center,strike

## HTML5的两大特点
1. 强化了Web网页的表现性能，增加了可描绘二维图形以及视频和音频的标签。
2. 添加了本地数据库等web应用的功能。

## video视频
video目前支持三种视频格式：Ogg,MPEG4,WebM

- Ogg = 带有Theora视频编码和Vorbis视频编码的Ogg文件
- MPEG4 = 带有H.264视频编码和Vorbis音频编码的MPEG4文件
- WebM = 带有VP8视频和Vorbis音频编码的WebM文件

```html
<video width="320" height="240" controls="controls">
    <source src="/i/movie.ogg" type="video/ogg">
    <source src="/i/movie.mp4" type="video/mp4">
Your brower does not stupport the video tag.
</video>
```
## video属性相关的
属性|值|描述
---|---|---
autoplay|autoplay|视频就绪后立即播放
controls|controls|显示控件，比如播放按钮
height|pixels像素值|视频播放器的高度
loop|loop|循环播放
preload|preload|视频在页面加载时进行加载并预备播放，如果使用autoplay，则此属性无效
src|url|播放视频是地址
width|pixels像素值|视频播放器的宽度

## audio音频
audio目前支持三种音频格式: Ogg Vorbis,MP3,Wav

```html
<audio src="/i/song.ogg" controls="controls">
    <source src="song.ogg" type="audio/ogg">
    <source src="song.mp3" type="audio/mpeg">
Your browser does not support the audio tag.
</audio>
```
## audio属性相关
属性|值|描述
---|---|---
autoplay|autoplay|音频就绪后立即播放
controls|controls|显示控件，比如播放按钮
loop|loop|循环播放
preload|preload|音频在页面加载时进行加载，并预备播放，如果使用“qutoplay”，则此属性无效
src|url|要播放的音频的URL

