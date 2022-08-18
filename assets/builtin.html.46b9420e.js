import{_ as o,r as c,o as l,c as i,a as n,b as t,w as p,F as u,e,d as s}from"./app.e8137591.js";const r={},d=e(`<h1 id="\u5185\u7F6E\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u65B9\u6CD5" aria-hidden="true">#</a> \u5185\u7F6E\u65B9\u6CD5</h1><p>\u7EC4\u4EF6\u5185\u90FD\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4E00\u4E9B\u57FA\u7840\u65B9\u6CD5\uFF0C\u53EA\u9700\u8981\u5728\u7EC4\u4EF6\u5185\u589E\u52A0\u5373\u53EF\u5B9E\u73B0\u5BF9\u5E94\u7684\u529F\u80FD\uFF0C\u7136\u540E\u5728\u65B9\u6CD5\u5185\u5B9E\u73B0\u903B\u8F91\u5373\u53EF\u3002</p><h2 id="propdatawatchhandle" tabindex="-1"><a class="header-anchor" href="#propdatawatchhandle" aria-hidden="true">#</a> propDataWatchHandle</h2><p>\u5176\u4E3B\u8981\u4F5C\u7528\u5728\u4E8E\u5F00\u53D1\u5DE5\u5177\u4FEE\u6539\u5C5E\u6027\u7684\u65F6\u5019\u80FD\u5B9E\u65F6\u6E32\u67D3\u5E94\u7528\u5230\u7EC4\u4EF6\u4E0A\uFF0C\u6BCF\u6B21\u4FEE\u6539\u5C5E\u6027\u90FD\u4F1A\u8C03\u7528\u6B64\u65B9\u6CD5\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Demo&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">propData</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span>propData<span class="token punctuation">.</span>compositeAttr<span class="token operator">||</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u63D0\u4F9B\u7236\u7EA7\u7EC4\u4EF6\u8C03\u7528\u7684\u5237\u65B0prop\u6570\u636E\u7EC4\u4EF6
     */</span>
    <span class="token function">propDataWatchHandle</span><span class="token punctuation">(</span><span class="token parameter">propData</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>propData <span class="token operator">=</span> propData<span class="token punctuation">.</span>compositeAttr<span class="token operator">||</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="receivebroadcastmessage" tabindex="-1"><a class="header-anchor" href="#receivebroadcastmessage" aria-hidden="true">#</a> receiveBroadcastMessage</h2><p>\u7528\u4E8E\u63A5\u6536\u7EC4\u4EF6\u4E4B\u95F4\u901A\u4FE1\u7684\u6D88\u606F\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Demo&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u7EC4\u4EF6\u901A\u4FE1\uFF1A\u63A5\u6536\u6D88\u606F\u7684\u65B9\u6CD5
     */</span>
    <span class="token function">receiveBroadcastMessage</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EC4\u4EF6\u6536\u5230\u6D88\u606F&quot;</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),k=n("thead",null,[n("tr",null,[n("th",null,"key"),n("th",null,"\u8BF4\u660E")])],-1),v=n("td",null,"type",-1),m=s("\u6D88\u606F\u7C7B\u578B\uFF0C\u5185\u7F6E\u534F\u8BAE\u503C\u53C2\u8003"),g=s("\u7EC4\u4EF6\u901A\u4FE1-\u5185\u7F6E\u901A\u4FE1\u534F\u8BAE"),b=n("tr",null,[n("td",null,"message"),n("td",null,"\u5B9E\u9645\u7684\u6D88\u606F\u5BF9\u8C61")],-1),h=n("tr",null,[n("td",null,"messageKey"),n("td",null,"\u6D88\u606F\u7684key\u503C")],-1),y=n("tr",null,[n("td",null,"isAcross"),n("td",null,"\u5982\u679C\u4E3Atrue\u5219\u4EE3\u8868\u53D1\u9001\u6765\u6E90\u662F\u5176\u4ED6\u9875\u9762\u7684\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u4E3Afalse")],-1),_=n("tr",null,[n("td",null,"triggerType"),n("td",null,"\u6D88\u606F\u53D8\u5316\u89E6\u53D1\u7684\u7C7B\u578B\u503C\uFF0CAT\uFF1A\u81EA\u52A8\u89E6\u53D1\u7684\uFF0CMT\uFF1A\u624B\u52A8\u5207\u6362\u89E6\u53D1\u7684\uFF0COT\uFF1A\u5176\u4ED6\u65B9\u5F0F\u89E6\u53D1\u7684")],-1),f=n("tr",null,[n("td",null,"..."),n("td",null,"\u5176\u4ED6\u81EA\u5B9A\u4E49\u7684\u7C7B\u578B\u503C\uFF0C\u53EF\u4EE5\u53C2\u8003\u53D1\u9001\u7684\u65F6\u5019\u643A\u5E26\u7684\u989D\u5916\u53C2\u6570")],-1),q={class:"custom-container tip"},x=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),w=s("\u53D1\u9001\u4E0E\u63A5\u6536\u8BE6\u7EC6\u8BF4\u660E\u8BF7\u53C2\u8003\uFF1A"),D=s("\u7EC4\u4EF6\u901A\u4FE1"),E=e(`<h2 id="setcontextvalue" tabindex="-1"><a class="header-anchor" href="#setcontextvalue" aria-hidden="true">#</a> setContextValue</h2><p>\u7528\u4E8E\u8BBE\u7F6E\u7EC4\u4EF6\u7684\u4E0A\u4E0B\u6587\u5185\u5BB9\u503C\uFF0C\u7EC4\u4EF6\u5185\u6839\u636E\u9700\u8981\u81EA\u884C\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\u663E\u793A\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Demo&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u8BBE\u7F6E\u7EC4\u4EF6\u7684\u4E0A\u4E0B\u6587\u5185\u5BB9\u503C
     */</span>
    <span class="token function">setContextValue</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u63A5\u6536\u5230\u7684\u5185\u5BB9\u503C&quot;</span><span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>key</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>type</td><td>\u5B9A\u4E49\u7684\u7C7B\u578B\uFF0C\u5DF2\u77E5\u7C7B\u578B\uFF1ApageCommonInterface\uFF08\u9875\u9762\u7EDF\u4E00\u63A5\u53E3\u8FD4\u56DE\u503C\uFF09</td></tr><tr><td>key</td><td>\u6570\u636Ekey\u6807\u8BC6\uFF0C\u9875\u9762\u6BCF\u4E2A\u63A5\u53E3\u8BBE\u7F6E\u7684\u6570\u636E\u96C6\u540D\u79F0\uFF0C\u65B9\u4FBF\u8BC6\u522B\u83B7\u53D6\u81EA\u5DF1\u9700\u8981\u7684\u6570\u636E</td></tr><tr><td>data</td><td>\u6570\u636E\u96C6\uFF0C\u5185\u5BB9\u4E3A\uFF1A\u5B57\u7B26\u4E32 or \u6570\u7EC4 or \u5BF9\u8C61 or \u4EFB\u610F\u683C\u5F0F\u6570\u636E</td></tr></tbody></table>`,4),A={class:"custom-container tip"},j=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),B=s("\u76EE\u524D\u9875\u9762\u5C5E\u6027\u914D\u7F6E\u7684"),C=s("\u9875\u9762\u63A5\u53E3"),V=s("\u90FD\u4F1A\u56DE\u8C03\u7ED3\u679C\u96C6\u7ED9\u6240\u6709\u7EC4\u4EF6\u7684\u6B64\u65B9\u6CD5\uFF0C\u5E76\u4E14type\u7C7B\u578B\u503C\u4E3A"),F=n("code",null,"pageCommonInterface",-1),T=s("\u3002"),N=e(`<h2 id="getcontextvalue" tabindex="-1"><a class="header-anchor" href="#getcontextvalue" aria-hidden="true">#</a> getContextValue</h2><p>\u7528\u4E8E\u83B7\u53D6\u7EC4\u4EF6\u7684\u4E0A\u4E0B\u6587\u5185\u5BB9\u503C\uFF0C\u7EC4\u4EF6\u5185\u6839\u636E\u9700\u8981\u81EA\u884C\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\u8FD4\u56DE\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Demo&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u9700\u8981\u8FD4\u56DE\u7684\u503C
     */</span>
    <span class="token function">getContextValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u6B64\u8FD4\u56DE\u7ED3\u679C\u4EC5\u4F5C\u4E3A\u793A\u4F8B\uFF0C\u5E76\u4E0D\u56FA\u5B9A\u3002</span>
      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>formFiledKey <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>propData<span class="token punctuation">.</span>ctrlId<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8868\u5355\u7C7B\u578B\u7684\u63A7\u4EF6\u5EFA\u8BAE\u8FD4\u56DE\u4E0B\u9762\u7EDF\u4E00\u683C\u5F0F\uFF0C\u540E\u7AEF\u5904\u7406\u4ECE\u800C\u66F4\u52A0\u65B9\u4FBF\uFF0C\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;type\u4E3A\u5931\u8D25\u7684\u65F6\u5019\u539F\u56E0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5B9A\u4E49\u7684key\u6807\u8BC6\uFF0C\u4E00\u822C\u7EC4\u4EF6\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5C5E\u6027\uFF0C\u7136\u540E\u83B7\u53D6\u6307\u5B9A\u5C5E\u6027\u586B\u5199\u7684\u503C\uFF0C\u8FD9\u6837\u8FD4\u56DE\u540E\u5C31\u80FD\u8BC6\u522B\u5BF9\u5E94\u7684\u5B57\u6BB5\u6216\u8005\u5143\u6570\u636E&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u8981\u8FD4\u56DE\u7684\u503C\uFF0C\u5185\u5BB9\u4E3A\uFF1A\u5B57\u7B26\u4E32 or \u6570\u7EC4 or \u5BF9\u8C61 or \u4EFB\u610F\u683C\u5F0F\u6570\u636E&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function z(I,M){const a=c("RouterLink");return l(),i(u,null,[d,n("table",null,[k,n("tbody",null,[n("tr",null,[v,n("td",null,[m,t(a,{to:"/zh/moduledevelop/communication.html#%E5%86%85%E7%BD%AE%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE"},{default:p(()=>[g]),_:1})])]),b,h,y,_,f])]),n("div",q,[x,n("p",null,[w,t(a,{to:"/zh/moduledevelop/communication.html"},{default:p(()=>[D]),_:1})])]),E,n("div",A,[j,n("p",null,[B,t(a,{to:"/zh/guide/developtool.html#%E9%A1%B5%E9%9D%A2%E6%8E%A5%E5%8F%A3%E5%AD%90%E8%A1%A8interfacelist"},{default:p(()=>[C]),_:1}),V,F,T])]),N],64)}var K=o(r,[["render",z],["__file","builtin.html.vue"]]);export{K as default};
