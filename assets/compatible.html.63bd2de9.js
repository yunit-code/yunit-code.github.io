import{_ as n,e as s}from"./app.3c253884.js";const a={},t=s(`<h1 id="\u517C\u5BB9api" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9api" aria-hidden="true">#</a> \u517C\u5BB9API</h1><h2 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> trim</h2><p>\u589E\u52A0string\u7684trim\u51FD\u6570</p><ul><li><strong>\u7528\u6CD5</strong>\uFF1A<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot; 234 &quot;</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;234&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="startswiths" tabindex="-1"><a class="header-anchor" href="#startswiths" aria-hidden="true">#</a> startsWiths</h2><p>\u589E\u52A0string\u7684startsWiths</p><ul><li><strong>\u7528\u6CD5</strong>\uFF1A<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;a234b&quot;</span><span class="token punctuation">.</span><span class="token function">startsWiths</span><span class="token punctuation">(</span><span class="token string">&quot;a2&quot;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>

<span class="token string">&quot;a234b&quot;</span><span class="token punctuation">.</span><span class="token function">startsWiths</span><span class="token punctuation">(</span><span class="token string">&quot;a1&quot;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="endswiths" tabindex="-1"><a class="header-anchor" href="#endswiths" aria-hidden="true">#</a> endsWiths</h2><p>\u589E\u52A0string\u7684endsWiths</p><ul><li><strong>\u7528\u6CD5</strong>\uFF1A<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;a234b&quot;</span><span class="token punctuation">.</span><span class="token function">endsWiths</span><span class="token punctuation">(</span><span class="token string">&quot;4b&quot;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>

<span class="token string">&quot;a234b&quot;</span><span class="token punctuation">.</span><span class="token function">endsWiths</span><span class="token punctuation">(</span><span class="token string">&quot;a2&quot;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h2><p>\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u6CA1\u6709forEach</p><ul><li><strong>\u7528\u6CD5</strong>\uFF1A<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 1 </span>
<span class="token comment">// =&gt; 2 </span>
<span class="token comment">// =&gt; 3 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h2><p>\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u6CA1\u6709filter\u51FD\u6570</p><ul><li><strong>\u7528\u6CD5</strong>\uFF1A<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; [2,3] </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="classlist" tabindex="-1"><a class="header-anchor" href="#classlist" aria-hidden="true">#</a> classList</h2><p>\u517C\u5BB9\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u6CA1\u6709classList</p><ul><li><strong>\u7528\u6CD5</strong>\uFF1A<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;idm_dialog_wrap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList
<span class="token comment">/*
{
  &quot;0&quot;: &quot;idm_module&quot;,
  &quot;1&quot;: &quot;component_x8iFzJ7vZMfz0RVC&quot;
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,19);function e(i,p){return t}var o=n(a,[["render",e],["__file","compatible.html.vue"]]);export{o as default};