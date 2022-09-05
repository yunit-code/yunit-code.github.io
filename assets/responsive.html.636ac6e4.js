import{_ as i,r as a,o as p,c as l,a as n,b as e,w as r,F as d,e as u,d as s}from"./app.db3be2bf.js";const _={},h=u(`<h1 id="\u54CD\u5E94\u5F0F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u4F7F\u7528" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u4F7F\u7528</h1><h2 id="\u9875\u9762\u5927\u5C0F\u53D8\u5316\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5927\u5C0F\u53D8\u5316\u54CD\u5E94" aria-hidden="true">#</a> \u9875\u9762\u5927\u5C0F\u53D8\u5316\u54CD\u5E94</h2><p>\u5728\u5B9E\u9645\u5E94\u7528\u9875\u9762\u4E2D\uFF0C\u9875\u9762\u54CD\u5E94\u5F0F\u5904\u7406\u3001\u76D1\u542C\u9875\u9762\u5927\u5C0F\u6539\u53D8\u662F\u5E38\u7528\u7684\u9700\u6C42\u3002\u5728IDM\u4E2D\u5185\u7F6E\u4E86\u9875\u9762\u5927\u5C0F\u6539\u53D8\u4E8B\u4EF6\u76D1\u542C\uFF0C\u5E76\u4E14\u76D1\u542C\u5230\u6539\u53D8\u4F1A\u628A\u5F53\u524D\u9875\u9762\u5BBD\u5EA6\u4F5C\u4E3A\u6D88\u606F\u4EE5\u7C7B\u578B\u4E3A<code>pageResize</code>\u7684\u503C\u5E7F\u64AD\u7ED9\u6240\u6709\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u5185\u53EF\u6839\u636E\u503C\u505A\u54CD\u5E94\u7684\u5904\u7406\u5373\u53EF\u3002</p><p>\u56E0\u4E3A<code>window.onresize</code>\u4E00\u4E2A\u9875\u9762\u53EA\u80FD\u53EA\u6709\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5982\u679C\u5728\u7EC4\u4EF6\u5185\u76F4\u63A5\u4F7F\u7528<code>window.onresize=function(){}</code>\u4F1A\u5BFC\u81F4IDM\u5185\u7F6E\u5931\u6548\u53D1\u751F\u51B2\u7A81\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6848\u89E3\u51B3\u51B2\u7A81\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addEventOnResize</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> originFn <span class="token operator">=</span> window<span class="token punctuation">.</span>onresize
    window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        originFn <span class="token operator">&amp;&amp;</span> <span class="token function">originFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),v=s("\u4F7F\u7528\u65B9\u6CD5\u53EF\u53C2\u8003\uFF1A"),f=s("\u7EC4\u4EF6\u901A\u4FE1-\u5185\u7F6E\u901A\u4FE1\u534F\u8BAE"),b=n("h2",{id:"\u54CD\u5E94\u5F0F\u5168\u5C4F\u5E03\u5C40\u7EC4\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u54CD\u5E94\u5F0F\u5168\u5C4F\u5E03\u5C40\u7EC4\u4EF6","aria-hidden":"true"},"#"),s(" \u54CD\u5E94\u5F0F\u5168\u5C4F\u5E03\u5C40\u7EC4\u4EF6")],-1),g=n("p",null,[s("\u53EF\u80FD\u5B9E\u9645\u4E1A\u52A1\u4E2D\u4F1A\u6709\u8FD9\u6837\u4E00\u4E2A\u9700\u6C42\uFF0C\u9700\u8981\u5168\u5C4F\u663E\u793A\u5168\u90E8\u9875\u9762\u90E8\u4EF6\u51FA\u6765\uFF0C\u5E76\u4E14\u8981\u9002\u914D\u5404\u79CD\u5206\u8FA8\u7387\uFF0C\u5E76\u4E14\u8FD8\u80FD\u6839\u636E\u5206\u8FA8\u7387\u9690\u85CF\u90E8\u5206\u7EC4\u4EF6\uFF0C\u8FD9\u79CDIDM\u79F0\u4F5C\u5168\u5C4F\u9002\u914D\u3002\u56E0\u6B64\u57FA\u4E8E\u6B64\u9700\u6C42IDM\u5B98\u65B9\u5F00\u53D1\u51FA\u6765\u4E00\u4E2A\u65B0\u7684\u7EC4\u4EF6\uFF08\u7C7B\u540D"),n("code",null,"IFullScreenLayout"),s("\uFF09\uFF0C\u53EB\u5168\u5C4F\u5E03\u5C40\u7EC4\u4EF6\uFF0C\u80FD\u901A\u8FC7\u50CFExcel\u753B\u683C\u5B50\u81EA\u7531\u5708\u753B\u7EC4\u4EF6\u5927\u5C0F\u8303\u56F4\uFF0C\u81EA\u7531\u5B9A\u5236\u54CD\u5E94\u5F0F\u6761\u4EF6\u7B49\u7B49\u3002")],-1),w=["src"],E={class:"custom-container tip"},x=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),y=s("IFullScreenLayout\u5728layout\u7EC4\u4EF6\u5305\u4E2D\uFF1A"),F={href:"https://github.com/yunit-code/layout",target:"_blank",rel:"noopener noreferrer"},I=s("layout");function z(t,B){const o=a("RouterLink"),c=a("ExternalLinkIcon");return p(),l(d,null,[h,n("div",m,[k,n("p",null,[v,e(o,{to:"/zh/moduledevelop/communication.html#%E5%86%85%E7%BD%AE%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE"},{default:r(()=>[f]),_:1})])]),b,g,n("img",{src:t.$withBase("/images/idm_module_fullscreenlayout_001.jpg"),alt:"\u5168\u5C4F\u5E03\u5C40\u7EC4\u4EF6"},null,8,w),n("div",E,[x,n("p",null,[y,n("a",F,[I,e(c)])])])],64)}var L=i(_,[["render",z],["__file","responsive.html.vue"]]);export{L as default};
