(self.webpackChunkbook=self.webpackChunkbook||[]).push([[212],{3687:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-5bd24bf0",path:"/guide/css/flex.html",title:"Flex布局",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/css/flex.md",git:{updatedTime:null,contributors:[]}}},2286:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>u});var e=a(6252);const p=(0,e.Wm)("h1",{id:"flex布局",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#flex布局","aria-hidden":"true"},"#"),(0,e.Uk)(" Flex布局")],-1),l={href:"http://static.vgee.cn/static/index.html",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Uk)("Flex 布局示例"),i=(0,e.Uk)(" 阮一峰的教程"),c={href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),r=(0,e.uE)('<p>网页布局（layout）是 CSS 的一个重点应用。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif" alt="image"></p><p>布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png" alt="image"></p><p>2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071003.jpg" alt="image"></p><p>Flex 布局将成为未来布局的首选方案。本文介绍它的语法，下一篇文章给出常见布局的 Flex 写法。网友 JailBreak 为本文的所有示例制作了 Demo，也可以参考。</p><p>一、Flex 布局是什么？</p><p>Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</p><p>任何一个容器都可以指定为 Flex 布局。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>行内元素也可以使用 Flex 布局。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Webkit 内核的浏览器，必须加上-webkit前缀。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">/* Safari */</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。</p><p>二、基本概念 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" alt="image"></p><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。</p><p>三、容器的属性</p><p>以下6个属性设置在容器上。</p><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul><p>3.1 flex-direction属性</p><p>flex-direction属性决定主轴的方向（即项目的排列方向）。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png" alt="image"></p><p>它可能有4个值。</p><ul><li>row（默认值）：主轴为水平方向，起点在左端。</li><li>row-reverse：主轴为水平方向，起点在右端。</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直方向，起点在下沿。</li></ul><p>3.2 flex-wrap属性</p><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。 <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png" alt="image"></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它可能取三个值。</p><p>（1）nowrap（默认）：不换行。 <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png" alt="image"></p><p>（2）wrap：换行，第一行在上方。 <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg" alt="image"> （3）wrap-reverse：换行，第一行在下方。 <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg" alt="image"></p><p>3.3 flex-flow</p><p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>3.4 justify-content属性</p><p>justify-content属性定义了项目在主轴上的对齐方式。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png" alt="image"></p><p>它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。</p><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center： 居中</li><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul><p>3.5 align-items属性</p><p>align-items属性定义项目在交叉轴上如何对齐。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt="image"></p><p>它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。</p><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center：交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul><p>3.6 align-content属性</p><p>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="image"></p><p>该属性可能取6个值。</p><ul><li>flex-start：与交叉轴的起点对齐。</li><li>flex-end：与交叉轴的终点对齐。</li><li>center：与交叉轴的中点对齐。</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li>stretch（默认值）：轴线占满整个交叉轴。</li></ul><p>四、项目的属性</p><p>以下6个属性设置在项目上。</p><ul><li>order</li><li>flex-grow</li><li>flex-shrink</li><li>flex-basis</li><li>flex</li><li>align-self</li></ul><p>4.1 order属性</p><p>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>\n  <span class="token property">order</span><span class="token punctuation">:</span> &lt;integer&gt;<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png" alt="image"></p><p>4.2 flex-grow属性</p><p>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>\n  <span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 0 */</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png" alt="image"></p><p>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><p>4.3 flex-shrink属性</p><p>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>\n  <span class="token property">flex-shrink</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 1 */</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg" alt="image"></p><p>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</p><p>负值对该属性无效。</p><p>4.4 flex-basis属性</p><p>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>\n  <span class="token property">flex-basis</span><span class="token punctuation">:</span> &lt;length&gt; | auto<span class="token punctuation">;</span> <span class="token comment">/* default auto */</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</p><p>4.5 flex属性</p><p>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt;<span class="token string">&#39;flex-grow&#39;</span>&gt; &lt;<span class="token string">&#39;flex-shrink&#39;</span>&gt;? || &lt;<span class="token string">&#39;flex-basis&#39;</span>&gt; ]\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</p><p>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</p><p>4.6 align-self属性</p><p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>\n  <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png" alt="image"></p><p>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</p>',88),u={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[(0,e.Wm)("a",l,[t,(0,e.Wm)(a)]),i,(0,e.Wm)("a",c,[o,(0,e.Wm)(a)])]),r],64)}}}}]);