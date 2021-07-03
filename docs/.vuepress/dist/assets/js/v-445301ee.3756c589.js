(self.webpackChunkbook=self.webpackChunkbook||[]).push([[346],{9522:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-445301ee",path:"/guide/html/canvas.html",title:"canvas画布",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/html/canvas.md",git:{updatedTime:null,contributors:[]}}},2940:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="canvas画布" tabindex="-1"><a class="header-anchor" href="#canvas画布" aria-hidden="true">#</a> canvas画布</h1><p>canvas元素用于在网页上绘制图形</p><p>HTML5的canvas元素使用javascript在网页上绘制图像，画布时一个矩形区域，可以控制其每一个像素。</p><p>canvas拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myCanvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\nYour browser does not support the canvas element.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>绘制矩形</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 获取canvas元素</span>\n<span class="token keyword">var</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myCanvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 创建context对象</span>\n<span class="token keyword">var</span> cxt <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 设置填充颜色为红色</span>\ncxt<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#FF0000&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// 绘画一个矩形</span>\ncxt<span class="token punctuation">.</span><span class="token function">dillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">150</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>绘制线段</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myCanvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> cxt <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>绘制圆</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myCanvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> cxt <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;#FFF0000&quot;</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>横向渐变色（矩形）</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myCanvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> cxt <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> grd <span class="token operator">=</span> cxt<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">175</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ngrd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;#FF0000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ngrd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;00FF00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> grd<span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>添加图片</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myCanvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> cxt <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nimg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;flower.png&quot;</span><span class="token punctuation">;</span>\ncxt<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="常用方法和属性" tabindex="-1"><a class="header-anchor" href="#常用方法和属性" aria-hidden="true">#</a> 常用方法和属性</h4><pre><code>getContext(&#39;2d&#39;)\nmoveTo(x,y)\nlineTo(x,y)\nbeginPath()\nclip()\nfillText()\nfillStyle\nfill()\nlineWidth\nstroke()\nstrokeStyle\nfillRect()\nfont\nsrc()\ntextAlign\nlineCap\nclosePath\nstrokeRect()\n</code></pre>',17),p={render:function(n,s){return t}}}}]);