(self.webpackChunkbook=self.webpackChunkbook||[]).push([[583],{1140:(e,s,n)=>{"use strict";n.r(s),n.d(s,{data:()=>a});const a={key:"v-75d2fabe",path:"/guide/webpack/problem/",title:"问题汇总",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/webpack/problem/README.md",git:{updatedTime:null,contributors:[]}}},8885:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>t});const a=(0,n(6252).uE)('<h1 id="问题汇总" tabindex="-1"><a class="header-anchor" href="#问题汇总" aria-hidden="true">#</a> 问题汇总</h1><blockquote><p>webpack 在打包构建时<code>-webkit-box-orient: verical;</code>会被删除掉</p></blockquote><p>原因是<code>optimize-css-assets-webpack-plugin</code>这个插件的问题</p><p>解决方式:可以使用如下写法</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n    <span class="token comment">/*! autoprefixer: off */</span>\n    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>\n    <span class="token comment">/*! autoprefixer: on */</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',5),t={render:function(e,s){return a}}}}]);