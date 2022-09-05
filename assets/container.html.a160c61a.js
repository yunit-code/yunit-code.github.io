import{_ as e,r as i,o as c,c as l,a as s,b as t,w as p,F as u,e as o,d as n}from"./app.516177a5.js";const r={},d=o(`<h1 id="\u5BB9\u5668\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u7EC4\u4EF6" aria-hidden="true">#</a> \u5BB9\u5668\u7EC4\u4EF6</h1><h2 id="\u4EC0\u4E48\u662F\u5BB9\u5668\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5BB9\u5668\u7EC4\u4EF6" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5BB9\u5668\u7EC4\u4EF6\uFF1F</h2><p>\u5728\u4F20\u7EDF\u7684\u5F00\u53D1\u65B9\u5F0F\u4E2D\uFF0C\u4E00\u4E2A\u7F51\u9875\u662F\u7531HTML\u7684DOM\u6811\u7ED3\u6784\u7EC4\u6210\u7684\uFF0CDOM\u4E4B\u95F4\u662F\u652F\u6301\u65E0\u9650\u5C42\u7EA7\u5D4C\u5957\u7684\u3002\u6240\u4EE5\u5728\u7EC4\u4EF6\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u5B9E\u73B0\u7EC4\u4EF6\u6811\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\uFF0C\u56E0\u6B64\u5BB9\u5668\u7C7B\u578B\u7684\u7EC4\u4EF6\u4E5F\u662F\u4E0D\u53EF\u7F3A\u5931\u7684\u3002\u5728IDM\u4E2D\uFF0C\u5BB9\u5668\u7EC4\u4EF6\u4E5F\u662F\u7B49\u540C\u4E8E\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u53EA\u4E0D\u8FC7\u5B83\u80FD\u8BA9\u5176\u4ED6\u7EC4\u4EF6\u653E\u5165\u5BB9\u5668\u7EC4\u4EF6\u5B9A\u4E49\u597D\u7684\u5BB9\u5668\u5185\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4F20\u7EDF\u7684DOM\u6811\u7ED3\u6784\u7684HTML\u5F00\u53D1\u3002</p><h2 id="html\u7ED3\u6784\u4E0E\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#html\u7ED3\u6784\u4E0E\u5C5E\u6027" aria-hidden="true">#</a> HTML\u7ED3\u6784\u4E0E\u5C5E\u6027</h2><p>\u5BB9\u5668\u4E3B\u8981\u8FD8\u662F\u7531\u4F20\u7EDF\u7684DOM\u6807\u7B7E\u7EC4\u6210\uFF0C\u53EA\u9700\u8981\u5305\u542B\u56FA\u5B9A\u7684\u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u5177\u4F53\u5982\u4E0B\u4E24\u79CD\u793A\u4F8B\uFF1A</p><h3 id="\u666E\u901A\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u5BB9\u5668" aria-hidden="true">#</a> \u666E\u901A\u5BB9\u5668</h3><p>\u666E\u901A\u5BB9\u5668\u4EE3\u8868\u53EA\u6709\u5BB9\u5668\uFF0C\u5BB9\u5668\u5185\u6CA1\u6709\u5176\u4ED6\u4EFB\u4F55\u5143\u7D20\uFF0C\u4EE5\u4E0B\u4E3A\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token comment">&lt;!--
    \u6839\u76EE\u5F55\u89C4\u8303(\u5FC5\u987B\u4E0D\u80FD\u4E3A\u7A7A)\uFF1A
    idm-ctrl\uFF1A\u63A7\u4EF6\u7C7B\u578B drag_container\uFF1A\u5BB9\u5668\uFF0Cdrag_container_inlieblock\uFF1A\u884C\u5185\u5BB9\u5668\uFF0Cidm_module\uFF1A\u975E\u5BB9\u5668\u7684\u7EC4\u4EF6
    id\uFF1A\u4F7F\u7528moduleObject.id\uFF0C\u5982\u679Cid\u4E0D\u4F7F\u7528\u8FD9\u4E2A\u5C06\u4F1A\u88ABidm-ctrl-id\u5C5E\u6027\u66FF\u6362
    idm-ctrl-id\uFF1A\u7EC4\u4EF6\u7684id\uFF0C\u8FD9\u4E2A\u5FC5\u987B\u4E0D\u80FD\u4E3A\u7A7A
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">idm-ctrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag_container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleObject.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:idm-ctrl-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleObject.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5185\u5D4C\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5185\u5D4C\u5BB9\u5668" aria-hidden="true">#</a> \u5185\u5D4C\u5BB9\u5668</h3><p>\u5185\u5D4C\u5BB9\u5668\u4EE3\u8868\u5916\u5C42\u662F\u666E\u901A\u7EC4\u4EF6\u5F62\u5F0F\uFF0C\u5185\u90E8\u542B\u6709\u5BB9\u5668\u7684\u5143\u7D20\uFF0C\u53EF\u4EE5\u653E\u4E0B\u5176\u4ED6\u7EC4\u4EF6\uFF0C\u4EE5\u4E0B\u4E3A\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token comment">&lt;!--
    \u6839\u76EE\u5F55\u89C4\u8303(\u5FC5\u987B\u4E0D\u80FD\u4E3A\u7A7A)\uFF1A
    idm-ctrl\uFF1A\u63A7\u4EF6\u7C7B\u578B drag_container\uFF1A\u5BB9\u5668\uFF0Cdrag_container_inlieblock\uFF1A\u884C\u5185\u5BB9\u5668\uFF0Cidm_module\uFF1A\u975E\u5BB9\u5668\u7684\u7EC4\u4EF6
    id\uFF1A\u4F7F\u7528moduleObject.id\uFF0C\u5982\u679Cid\u4E0D\u4F7F\u7528\u8FD9\u4E2A\u5C06\u4F1A\u88ABidm-ctrl-id\u5C5E\u6027\u66FF\u6362
    idm-ctrl-id\uFF1A\u7EC4\u4EF6\u7684id\uFF0C\u8FD9\u4E2A\u5FC5\u987B\u4E0D\u80FD\u4E3A\u7A7A
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">idm-ctrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>idm_module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleObject.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:idm-ctrl-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleObject.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>idm-columns-layout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
      \u7EC4\u4EF6\u5185\u90E8\u5BB9\u5668
      \u589E\u52A0class=&quot;drag_container&quot; \u4EE3\u8868\u5185\u90E8\u53EF\u5B58\u653E\u7EC4\u4EF6\u5BB9\u5668 \u5FC5\u9009
      \u589E\u52A0idm-ctrl-inner \u4EE3\u8868\u5185\u90E8\u5BB9\u5668\u7EC4\u4EF6\uFF08\u53EF\u5B9A\u4E49\u5355\u72EC\u7684\u5C5E\u6027\uFF0C\u53EA\u652F\u6301\u5B9A\u4E49\u4E00\u7C7B\u7684\u5C5E\u6027,\u4E00\u4E2A\u7EC4\u4EF6\u5185\u53EA\u5305\u542B\u4E00\u79CD\uFF09 \u53EF\u9009
      idm-ctrl-id\uFF1A\u7EC4\u4EF6\u7684id\uFF0C\u8FD9\u4E2A\u5FC5\u987B\u4E0D\u80FD\u4E3A\u7A7A
      idm-container-index  \u7EC4\u4EF6\u7684\u5185\u90E8\u5BB9\u5668\u7D22\u5F15\uFF0C\u4E0D\u91CD\u590D\u552F\u4E00\u4E14\u4E0D\u53D8\uFF0C\u5FC5\u9009\uFF0C\u5EFA\u8BAE\u4ECE1\u5F00\u59CB
      idm-refresh-container\uFF1A\u5237\u65B0\u5BB9\u5668\u6240\u5728\u7684\u7EC4\u4EF6\u72B6\u6001\uFF0C\u5982\u679C\u8981\u5237\u65B0\uFF0C\u53EA\u9700\u8981\u6B64\u5C5E\u6027\u6709\u53D8\u5316\u5373\u53EF\u5237\u65B0\u6574\u4E2A\u7EC4\u4EF6\u7684\u72B6\u6001
    --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag_container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">idm-ctrl-inner</span> <span class="token attr-name">:idm-ctrl-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleObject.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">idm-container-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag_container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">idm-ctrl-inner</span> <span class="token attr-name">:idm-ctrl-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleObject.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">idm-container-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> --&gt;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6805\u683C\u7EC4\u4EF6\u793A\u4F8B\uFF08\u90E8\u5206\u4EE3\u7801\uFF09\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag_container<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`flex-\${item}\`<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in (propData.grid || <span class="token punctuation">&#39;</span>12:12<span class="token punctuation">&#39;</span>).split(<span class="token punctuation">&#39;</span>:<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">idm-ctrl-inner</span>
    <span class="token attr-name">:idm-ctrl-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleObject.id<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:idm-container-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index + 1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:idm-refresh-container</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`flex-\${item}\`<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5BB9\u5668\u7EC4\u4EF6\u5DF2\u652F\u6301\u5F02\u6B65\u8BF7\u6C42\u751F\u6210\u7684DOM\u5143\u7D20\uFF0C\u5982\u679C\u8981\u5237\u65B0\u53EF\u4EE5\u5728\u5185\u90E8\u5BB9\u5668\u4E2D\u8FFD\u52A0 <code>idm-refresh-container</code> \u5C5E\u6027\u5E76\u4E14\u5728\u9700\u8981\u5237\u65B0\u7A7A\u72B6\u6001\u3001\u5BB9\u5668\u4E8B\u4EF6\u7684\u65F6\u5019\u53D8\u5316\u6B64\u5C5E\u6027\u4E3A\u4EFB\u4F55\u503C\u5373\u53EF</p></div><h2 id="\u5C5E\u6027\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u8BBE\u7F6E" aria-hidden="true">#</a> \u5C5E\u6027\u8BBE\u7F6E</h2><p>\u5BB9\u5668\u4E5F\u662F\u53EF\u4EE5\u5B9A\u4E49\u7EC4\u4EF6\u5C5E\u6027\u7684\uFF0C\u666E\u901A\u5BB9\u5668\u7684\u5C5E\u6027\u5E94\u7528\u4E0E\u666E\u901A\u7EC4\u4EF6\u7684\u5C5E\u6027\u5E94\u7528\u6CA1\u6709\u4EFB\u4F55\u533A\u522B\uFF0C\u8FD9\u91CC\u4E0D\u6982\u8FF0\u3002\u4F46\u662F\u5185\u5D4C\u5BB9\u5668\u7684\u5C5E\u6027\u4E0E\u7EC4\u4EF6\u672C\u8EAB\u7684\u5BB9\u5668\u5C5E\u6027\u662F\u5171\u5B58\u5173\u7CFB\uFF0C\u5177\u4F53\u8BF7\u770B\u4E0B\u8FF0\u4ECB\u7ECD\u3002</p><h3 id="\u5185\u5D4C\u5BB9\u5668\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5185\u5D4C\u5BB9\u5668\u5C5E\u6027" aria-hidden="true">#</a> \u5185\u5D4C\u5BB9\u5668\u5C5E\u6027</h3><p>\u7EC4\u4EF6\u5C5E\u6027\u6587\u4EF6\u4E2D\u7EF4\u62A4\u5BF9\u5E94\u7684\u5BB9\u5668\u540D\u79F0\u548C\u5BB9\u5668\u5C5E\u6027\u5373\u53EF</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;classId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;idm.componet.layout.igrid&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;comName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6805\u683C&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;compositeAttr&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    ...
    <span class="token property">&quot;innerComName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u683C\u5B50&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;innerAttr&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5B57\u6BB5\u6CE8\u89E3\uFF1A</strong></p><ul><li><p>innerComName\uFF1A</p><p>\u7EC4\u4EF6\u5185\u90E8\u5BB9\u5668\u7684\u5BB9\u5668\u540D\u79F0\uFF0C\u4E00\u4E2A\u7EC4\u4EF6\u5185\u53EA\u80FD\u5B58\u5728\u4E00\u79CD\u5BB9\u5668\uFF0C\u4E14\u53EA\u80FD\u6709\u4E00\u79CD\u5BB9\u5668\u540D\u79F0</p></li><li><p>innerAttr\uFF1A</p><p>\u7EC4\u4EF6\u5185\u90E8\u5BB9\u5668\u7684\u5BB9\u5668\u5C5E\u6027\u96C6\u5408\uFF0C\u4E0E<code>compositeAttr</code>\u76F8\u540C\u65B9\u5F0F\u7EF4\u62A4\u5C5E\u6027\u5373\u53EF\u3002</p></li></ul>`,21),k={class:"custom-container tip"},v=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),m=n("\u4E0A\u8FF0\u5C5E\u6027\u7EF4\u62A4\u7684\u6587\u4EF6\u53C2\u8003\uFF1A"),q=n("\u7EC4\u4EF6\u5F00\u53D1-\u5FEB\u901F\u4E0A\u624B-\u5F00\u59CB\u5F00\u53D1"),b=n("\u7684\u6B65\u9AA42\u5373\u53EF\u3002"),g=s("h2",{id:"\u5E94\u7528\u5C5E\u6027",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5E94\u7528\u5C5E\u6027","aria-hidden":"true"},"#"),n(" \u5E94\u7528\u5C5E\u6027")],-1),h=n("\u540C\u6837\u7684\u5982\u679C\u8981\u5728\u7EC4\u4EF6\u5185\u5E94\u7528\u4E0A\u5728\u5F00\u53D1\u5DE5\u5177\u4E0A\u8BBE\u7F6E\u7684\u5C5E\u6027\u4E5F\u6709\u6240\u533A\u522B\uFF0C\u666E\u901A\u7EC4\u4EF6\u548C\u5BB9\u5668\u662F\u76F4\u63A5\u628A\u5F00\u53D1\u5DE5\u5177\u8BBE\u7F6E\u7684\u6570\u636E\u5B58\u50A8\u5728"),_=s("code",null,"moduleObject.props.compositeAttr",-1),y=n("\u4E2D\uFF0C\u5E76\u4E14\u662F\u4EE5\u5BF9\u8C61\u7684\u683C\u5F0F\u5B58\u50A8\u3002\u800C\u5185\u5D4C\u5BB9\u5668\u7684\u5C5E\u6027\u662F\u5B58\u50A8\u5728"),x=s("code",null,"moduleObject.props.innerAttr",-1),f=n("\u4E2D\uFF0C\u5E76\u4E14\u662F\u4EE5\u6570\u7EC4\u7684\u683C\u5F0F\u5B58\u50A8\u7684\u3002\u4EE5\u4E0B\u4E3A\u5B9E\u9645\u5B58\u50A8\u683C\u5F0F\u793A\u4F8B\uFF08"),V=n("\u7EC4\u4EF6\u5BF9\u8C61"),j=n("\u4E2D\u7684"),O=s("code",null,"props",-1),A=n("\u5C5E\u6027\uFF09\uFF1A"),M=o(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;innerAttr&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;containerIndex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dataAttr&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bgColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;layout&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inline-block&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;align&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;justify&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;marginTopVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5px&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;marginRightVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;marginBottomVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;marginLeftVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;paddingTopVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3px&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;paddingRightVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;paddingBottomVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;paddingLeftVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;font&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;fontSizeUnit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;em&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;containerIndex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dataAttr&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bgColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;marginTopVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0px&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;marginRightVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;marginBottomVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0px&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;marginLeftVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;paddingTopVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0px&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;paddingRightVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0px&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;paddingBottomVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0px&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;paddingLeftVal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0px&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>innerAttr</code>\u4E3A\u4EC0\u4E48\u7528\u6570\u7EC4\u683C\u5F0F\u5462\uFF1F\u56E0\u4E3A\u5185\u5D4C\u5BB9\u5668\u662F\u53EF\u4EE5\u591A\u4E2A\u7684\uFF0C\u5E76\u4E14\u6709DOM\u7684\u5C5E\u6027<code>idm-container-index</code>\u4F5C\u4E3A\u5BB9\u5668\u7D22\u5F15\u5BF9\u5E94\u5173\u7CFB\u3002</p></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h2><ul><li>\u51E1\u662F\u5BB9\u5668\u5C5E\u6027\u7684\u7EC4\u4EF6\u5728\u5F00\u53D1\u5DE5\u5177\u4F1A\u81EA\u52A8\u4E3A\u5176\u8FFD\u52A0\u6837\u5F0F\u3002</li><li>\u5BB9\u5668\u7EC4\u4EF6\u5DF2\u652F\u6301\u5F02\u6B65\u8BF7\u6C42\u751F\u6210\u7684DOM\u5143\u7D20\uFF0C\u4F46\u8981\u5237\u65B0\u7684\u65F6\u5019\u7ED9\u5185\u90E8\u5BB9\u5668\u4E2D\u8FFD\u52A0 <code>idm-refresh-container</code> \u5C5E\u6027\u5E76\u6539\u53D8\u4ED6\u7684\u503C\u5373\u53EF\u3002</li></ul>`,4);function B(D,L){const a=i("RouterLink");return c(),l(u,null,[d,s("div",k,[v,s("p",null,[m,t(a,{to:"/zh/moduledevelop/easystart.html#%E5%BC%80%E5%A7%8B%E5%BC%80%E5%8F%91"},{default:p(()=>[q]),_:1}),b])]),g,s("p",null,[h,_,y,x,f,t(a,{to:"/zh/moduledevelop/moduleobject.html"},{default:p(()=>[V]),_:1}),j,O,A]),M],64)}var T=e(r,[["render",B],["__file","container.html.vue"]]);export{T as default};
