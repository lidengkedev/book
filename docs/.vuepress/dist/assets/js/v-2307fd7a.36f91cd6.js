(self.webpackChunkbook=self.webpackChunkbook||[]).push([[606],{1161:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-2307fd7a",path:"/guide/vue/vue-ssr.html",title:"VUE SSR 服务端渲染",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"创建一个新项目",slug:"创建一个新项目",children:[]},{level:2,title:"安装依赖",slug:"安装依赖",children:[]},{level:2,title:"安装服务端插件",slug:"安装服务端插件",children:[]},{level:2,title:"开始部署",slug:"开始部署",children:[{level:3,title:"配置主函数",slug:"配置主函数",children:[]},{level:3,title:"配置入口文件",slug:"配置入口文件",children:[]},{level:3,title:"配置打包工具",slug:"配置打包工具",children:[]},{level:3,title:"配置启动脚本",slug:"配置启动脚本",children:[]},{level:3,title:"配置服务API",slug:"配置服务api",children:[]},{level:3,title:"启动项目",slug:"启动项目",children:[]}]}],filePathRelative:"guide/vue/vue-ssr.md",git:{updatedTime:null,contributors:[]}}},2524:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="vue-ssr-服务端渲染" tabindex="-1"><a class="header-anchor" href="#vue-ssr-服务端渲染" aria-hidden="true">#</a> VUE SSR 服务端渲染</h1><h2 id="创建一个新项目" tabindex="-1"><a class="header-anchor" href="#创建一个新项目" aria-hidden="true">#</a> 创建一个新项目</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue init webpack-simple vue-ssr-example\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vue-ssr-example\n\n<span class="token function">npm</span> <span class="token function">install</span>\n\n<span class="token comment"># 或</span>\n\n<span class="token function">yarn</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="安装服务端插件" tabindex="-1"><a class="header-anchor" href="#安装服务端插件" aria-hidden="true">#</a> 安装服务端插件</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> express vue-server-renderer\n\n<span class="token function">npm</span> <span class="token function">install</span> vue-ssr-webpack-plugin -D\n\n<span class="token comment"># 或</span>\n\n<span class="token function">yarn</span> <span class="token function">add</span> express vue-server-renderer\n\n<span class="token function">yarn</span> <span class="token function">add</span> vue-webpack-plugin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="开始部署" tabindex="-1"><a class="header-anchor" href="#开始部署" aria-hidden="true">#</a> 开始部署</h2><h3 id="配置主函数" tabindex="-1"><a class="header-anchor" href="#配置主函数" aria-hidden="true">#</a> 配置主函数</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src/main.server.js</span>\n\n<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n\n<span class="token comment">// Receives the context of the render call, returning a Promise resolution to the root Vue instance.</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token parameter">context</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>\n        <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="配置入口文件" tabindex="-1"><a class="header-anchor" href="#配置入口文件" aria-hidden="true">#</a> 配置入口文件</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- index.html --&gt;</span>\n<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>vue-ssr-example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!-- vue-ssr-outlet --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/dist/build.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="配置打包工具" tabindex="-1"><a class="header-anchor" href="#配置打包工具" aria-hidden="true">#</a> 配置打包工具</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Load the Vue SSR plugin. Don`t forget this. :P</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// The target should be set to &quot;node&quot; avoid packaging build-ins.</span>\n    target<span class="token operator">:</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// The entry should be our server entry file, not the default one.</span>\n    entry<span class="token operator">:</span> <span class="token string">&#39;./src/main.server.js&#39;</span><span class="token punctuation">,</span>\n    output<span class="token operator">:</span> <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        pubilcPath<span class="token operator">:</span> <span class="token string">&#39;/dist/&#39;</span><span class="token punctuation">,</span>\n        filename<span class="token operator">:</span> <span class="token string">&#39;build.js&#39;</span><span class="token punctuation">,</span>\n        <span class="token comment">// Outputs node-compatible modules instead of browser-compatible.</span>\n        libraryTarget<span class="token operator">:</span> <span class="token string">&#39;commonjs2&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    module<span class="token operator">:</span> <span class="token punctuation">{</span>\n        rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n            test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n            loader<span class="token operator">:</span> <span class="token string">&#39;vue-loader&#39;</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n                loaders<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n                loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>\n                exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|jpeg|gif|svg)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n                loader<span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>\n                options<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    name<span class="token operator">:</span> <span class="token string">&#39;[name].[ext]?[hash]&#39;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    resolve<span class="token operator">:</span> <span class="token punctuation">{</span>\n        alias<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string">&#39;vue$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm.js&#39;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// We can remove the devServer block.</span>\n    performance<span class="token operator">:</span> <span class="token punctuation">{</span>\n        hints<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// Aviods bundling external dependencies, so node can load them directly from node_modules</span>\n    externals<span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dependencies<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    devtool<span class="token operator">:</span> <span class="token string">&#39;source-map&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// No need to put these behind a production env variable.</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// Add the SSR plugin here.</span>\n        <span class="token keyword">new</span> <span class="token class-name">VueSSRPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token string">&#39;process.env&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&#39;&quot;production&quot;&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>UglifyJsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            sourceMap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            compress<span class="token operator">:</span> <span class="token punctuation">{</span>\n                warnings<span class="token operator">:</span> <span class="token boolean">false</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>LoaderOptionsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            minimize<span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h3 id="配置启动脚本" tabindex="-1"><a class="header-anchor" href="#配置启动脚本" aria-hidden="true">#</a> 配置启动脚本</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    ...\n    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        ...\n        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build:server &amp;&amp; npm run build:client&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;build:client&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack --proress --hide-modules&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;build:server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack --config webpack.server.config.js --pregress --hide-modules&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    ...\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="配置服务api" tabindex="-1"><a class="header-anchor" href="#配置服务api" aria-hidden="true">#</a> 配置服务API</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token hashbang comment">#!user/bin/env node</span>\n\n<span class="token comment">// server.js</span>\n\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> createBundleRenderer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vue-server-renderer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bundleRenderer <span class="token operator">=</span> <span class="token function">createBundleRenderer</span><span class="token punctuation">(</span>\n    <span class="token comment">// Load the SSR bundle width require.</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./dist/vue-ssr-bundle.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// Yes, I know, readFileSync is bad practice. It is just shorter to read here.</span>\n        template<span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n\n<span class="token comment">// Create the express app.</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Server static assets from ./dist on the /dist route.</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/dist&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Render all other routes width the bundleRenderer.</span>\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    bundleRenderer\n    <span class="token comment">// Renders directly to the response stream.</span>\n    <span class="token comment">// The argument is passed as &quot;context&quot; to main.server.js in the SSR bundle.</span>\n    <span class="token punctuation">.</span><span class="token function">renderToStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> req<span class="token punctuation">.</span>path <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Bind the app to this port.</span>\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Build client and server bundles</span>\n$ <span class="token function">npm</span> run build\n\n<span class="token comment"># Run the HTTP server</span>\n$ node ./server.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',20),e={render:function(n,s){return p}}}}]);