import{_ as n,e as s}from"./app.3c253884.js";const a={},e=s(`<h1 id="\u6837\u5F0F\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u89C4\u8303" aria-hidden="true">#</a> \u6837\u5F0F\u89C4\u8303</h1><h2 id="\u57FA\u7840\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6837\u5F0F" aria-hidden="true">#</a> \u57FA\u7840\u6837\u5F0F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u6837\u5F0F\u91CD\u5199\uFF0C\u8FD9\u91CC\u5176\u5B9E\u5C31\u8DDFant design vue\u7684base.less\u57FA\u672C\u4E00\u81F4\uFF0C\u6240\u4EE5\u8FD9\u91CC\u91CD\u5199\u4E5F\u8986\u76D6\u9884\u89C8\u9875\u9762\uFF0C\u8FD9\u662F\u57FA\u7840\u6837\u5F0F\uFF0C\u6240\u6709\u7EC4\u4EF6\u90FD\u4EE5\u6B64\u6837\u5F0F\u4E3A\u57FA\u7840*/</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.65<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">font-variant</span><span class="token punctuation">:</span> tabular-nums<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-feature-settings</span><span class="token punctuation">:</span> <span class="token string">&quot;tnum&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> pingfang SC<span class="token punctuation">,</span> helvetica neue<span class="token punctuation">,</span> arial<span class="token punctuation">,</span> hiragino sans gb<span class="token punctuation">,</span> microsoft yahei ui<span class="token punctuation">,</span> microsoft yahei<span class="token punctuation">,</span> simsun<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input::-ms-clear,
input::-ms-reveal</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*,
*::before,
*::after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@-ms-viewport</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> device-width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-ms-viewport</span></span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> device-width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">img</span><span class="token punctuation">{</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6837\u5F0F\u89C4\u8303-1" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u89C4\u8303-1" aria-hidden="true">#</a> \u6837\u5F0F\u89C4\u8303</h2>`,4);function t(p,i){return e}var l=n(a,[["render",t],["__file","commonstyle.html.vue"]]);export{l as default};
