"use strict";(self.webpackChunk_jmc_nutui=self.webpackChunk_jmc_nutui||[]).push([[667],{48:(s,a,n)=>{n.r(a),n.d(a,{default:()=>l});const l={tile:"checkList勾选组件",docs:'<h1>checkList 勾选组件</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>通过伸展出的列表，勾选数据，并展示勾选项内容的表单组件</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<div class="copy-code-btn"></div>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { checkList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@jmc/nutui&#x27;</span>\n</code></pre>\n</div>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基础用法</h3>\n  <div class="demo-code-show" id="checkList__demo1_wrapper">\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo1.tsx</div><div class="code-tab-name " id="name1">utils.ts</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">CheckList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../index&#x27;</span>\n<span class="hljs-keyword">import</span> { options } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./utils&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> data = <span class="hljs-title function_">ref</span>()\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">CheckList</span>\n      <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{data.value}</span>\n      <span class="hljs-attr">data</span>=<span class="hljs-string">{options}</span>\n      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>\n    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckList</span>&gt;</span></span>\n  )\n}\n\n</code></pre>\n</div>\n<div class="code-item code-item1">\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> options = [\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx1&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx2&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx3&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx4&#x27;</span> },\n]\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncOptions</span> = (<span class="hljs-params"></span>) =&gt; {\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-title function_">resolve</span>([\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据1&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据2&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据3&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据4&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据5&#x27;</span> },\n      ])\n    }, <span class="hljs-number">2000</span>)\n  })\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n</div><div class="card"><h3 id="%E5%A4%9A%E9%80%89%E7%94%A8%E6%B3%95"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>多选用法</h3>\n  <div class="demo-code-show" id="checkList__demo2_wrapper">\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo2.tsx</div><div class="code-tab-name " id="name1">utils.ts</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>\n<span class="hljs-keyword">import</span> { options } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./utils&#x27;</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">CheckList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../index&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineComponent</span>({\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> data = <span class="hljs-title function_">ref</span>()\n\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">return</span> (\n        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">CheckList</span>\n          <span class="hljs-attr">flexStart</span>\n          <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;multiple&quot;</span>\n          <span class="hljs-attr">limit</span>=<span class="hljs-string">{2}</span>\n          <span class="hljs-attr">data</span>=<span class="hljs-string">{options}</span>\n          <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{data.value}</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择(最多选择2项)&quot;</span>\n          <span class="hljs-attr">showArrowLeft</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckList</span>&gt;</span></span>\n      )\n    }\n  },\n})\n\n</code></pre>\n</div>\n<div class="code-item code-item1">\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> options = [\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx1&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx2&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx3&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx4&#x27;</span> },\n]\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncOptions</span> = (<span class="hljs-params"></span>) =&gt; {\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-title function_">resolve</span>([\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据1&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据2&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据3&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据4&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据5&#x27;</span> },\n      ])\n    }, <span class="hljs-number">2000</span>)\n  })\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n</div><div class="card"><h3 id="%E5%BC%82%E6%AD%A5%E8%AF%B7%E6%B1%82"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>异步请求</h3>\n<p>传入异步请求直接远程获取数据</p>\n  <div class="demo-code-show" id="checkList__demo3_wrapper">\n  <div class="code-box">\n <div class="demo-code-tabs"><div class="code-tab-name code-tab-name-active" id="name0">demo3.tsx</div><div class="code-tab-name " id="name1">utils.ts</div>\n<div class="copy-code-btn"></div></div>\n<div class="code-item code-item0">\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> { defineComponent, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>\n<span class="hljs-keyword">import</span> { asyncOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./utils&#x27;</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">CheckList</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;../index&#x27;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineComponent</span>({\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> data = <span class="hljs-title function_">ref</span>(<span class="hljs-number">2</span>)\n\n    <span class="hljs-keyword">return</span> <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-keyword">return</span> (\n        <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">CheckList</span>\n          <span class="hljs-attr">searchData</span>=<span class="hljs-string">{asyncOptions</span> <span class="hljs-attr">as</span> <span class="hljs-attr">any</span>}\n          <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{[data.value]}</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请选择&quot;</span>\n          <span class="hljs-attr">showArrowLeft</span>\n        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckList</span>&gt;</span></span>\n      )\n    }\n  },\n})\n\n</code></pre>\n</div>\n<div class="code-item code-item1">\n<pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> options = [\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx1&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx2&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx3&#x27;</span> },\n  { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;xxx4&#x27;</span> },\n]\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncOptions</span> = (<span class="hljs-params"></span>) =&gt; {\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-title function_">resolve</span>([\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据1&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据2&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据3&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据4&#x27;</span> },\n        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;异步数据5&#x27;</span> },\n      ])\n    }, <span class="hljs-number">2000</span>)\n  })\n}\n\n</code></pre>\n</div>\n  </div>\n  </div>\n</div>',h3Ids:"介绍:::引入:::基础用法:::多选用法:::异步请求",codePath:[]}}}]);