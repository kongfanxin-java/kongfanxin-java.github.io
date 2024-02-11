import{_ as s,r as c,o as n,c as i,b as r,e,f as a,F as l,g as d}from"./app.012aded6.js";const t={},p=r("h1",{id:"\u8D21\u732E\u6307\u5357",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#\u8D21\u732E\u6307\u5357","aria-hidden":"true"},"#"),e(" \u8D21\u732E\u6307\u5357")],-1),h=r("h2",{id:"\u6982\u89C8",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#\u6982\u89C8","aria-hidden":"true"},"#"),e(" \u6982\u89C8")],-1),u={href:"https://classic.yarnpkg.com/zh-Hans/docs/workspaces",target:"_blank",rel:"noopener noreferrer"},b={href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener noreferrer"},v=r("code",null,"packages",-1),_=d('<ul><li><p><code>@vuepress/core</code>: Core \u6A21\u5757\u3002\u63D0\u4F9B Node API \u6765\u521B\u5EFA VuePress App \uFF0C\u5305\u62EC\u9875\u9762\u903B\u8F91\u3001\u63D2\u4EF6\u7CFB\u7EDF\u3001\u6570\u636E\u51C6\u5907\u7B49\u529F\u80FD\u3002</p></li><li><p><code>@vuepress/client</code>: Client \u6A21\u5757\u3002\u5305\u542B\u5BA2\u6237\u7AEF\u9875\u9762\u5165\u53E3\uFF0C\u5E76\u63D0\u4F9B\u4E86\u5BA2\u6237\u7AEF\u5F00\u53D1\u65F6\u53EF\u4EE5\u7528\u5230\u7684\u7C7B\u578B\u548C\u5DE5\u5177\u51FD\u6570\u3002</p></li><li><p><code>@vuepress/bundler-vite</code>: \u57FA\u4E8E Vite \u7684 Bundler \u6A21\u5757\u3002\u4F7F\u7528 Vite \u5BF9 VuePress App \u6267\u884C <code>dev</code> \u548C <code>build</code> \u64CD\u4F5C\u3002</p></li><li><p><code>@vuepress/bundler-webpack</code>: \u57FA\u4E8E Webpack \u7684 Bundler \u6A21\u5757\u3002\u4F7F\u7528 Webpack \u5BF9 VuePress App \u6267\u884C <code>dev</code> \u548C <code>build</code> \u64CD\u4F5C\u3002</p></li><li><p><code>@vuepress/cli</code>: \u547D\u4EE4\u884C\u63A5\u53E3 (CLI) \u6A21\u5757\u3002\u5305\u542B\u89E3\u6790\u7528\u6237\u914D\u7F6E\u6587\u4EF6\u3001\u8C03\u7528 <code>@vuepress/core</code> \u521B\u5EFA VuePress App \u3001\u8C03\u7528 <code>@vuepress/bundler-${name}</code> \u6765\u6267\u884C\u5BF9\u5E94\u547D\u4EE4\u7B49\u529F\u80FD\u3002</p></li><li><p><code>@vuepress/theme-default</code>: \u9ED8\u8BA4\u4E3B\u9898\u3002</p></li><li><p><code>@vuepress/plugin-${name}</code>: \u5B98\u65B9\u63D2\u4EF6\u3002</p></li><li><p><code>@vuepress/shared</code>: \u65E2\u53EF\u4EE5\u5728 Node \u7AEF\u4F7F\u7528\u3001\u4E5F\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684\u5DE5\u5177\u51FD\u6570\u6A21\u5757\u3002</p></li><li><p><code>@vuepress/utils</code>: \u4EC5\u53EF\u4EE5\u5728 Node \u7AEF\u4F7F\u7528\u7684\u5DE5\u5177\u51FD\u6570\u6A21\u5757\u3002</p></li><li><p><code>vuepress</code>: \u662F <code>vuepress-vite</code> \u7684\u5C01\u88C5\u3002</p></li><li><p><code>vuepress-vite</code>: \u662F <code>@vuepress/cli</code> + <code>@vuepress/bundler-vite</code> + <code>@vuepress/theme-default</code> \u7684\u5C01\u88C5\u3002\u5982\u679C\u7528\u6237\u60F3\u4F7F\u7528 \u9ED8\u8BA4\u4E3B\u9898 + Vite \uFF0C\u4EC5\u5B89\u88C5\u8FD9\u4E2A Package \u5C31\u53EF\u4EE5\u4E86\u3002</p></li><li><p><code>vuepress-webpack</code>: \u662F <code>@vuepress/cli</code> + <code>@vuepress/bundler-webpack</code> + <code>@vuepress/theme-default</code> \u7684\u5C01\u88C5\u3002\u5982\u679C\u7528\u6237\u60F3\u4F7F\u7528 \u9ED8\u8BA4\u4E3B\u9898 + Webpack \uFF0C\u4EC5\u5B89\u88C5\u8FD9\u4E2A Package \u5C31\u53EF\u4EE5\u4E86\u3002</p></li></ul><h2 id="\u5F00\u53D1\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u914D\u7F6E" aria-hidden="true">#</a> \u5F00\u53D1\u914D\u7F6E</h2><p>\u5F00\u53D1\u8981\u6C42\uFF1A</p>',3),y={href:"http://nodejs.org",target:"_blank",rel:"noopener noreferrer"},f=r("strong",null,"version 14+",-1),g={href:"https://classic.yarnpkg.com/zh-Hans/docs/install",target:"_blank",rel:"noopener noreferrer"},k=d(`<p>\u514B\u9686\u4EE3\u7801\u4ED3\u5E93\uFF0C\u5E76\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u76D1\u542C\u6E90\u6587\u4EF6\u4FEE\u6539\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6253\u5F00\u53E6\u4E00\u4E2A\u7EC8\u7AEF\uFF0C\u5F00\u59CB\u5F00\u53D1\u9879\u76EE\u6587\u6863\u7F51\u7AD9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn docs:dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u672C\u9879\u76EE\u5F00\u53D1\u4F7F\u7528\u7684\u4E00\u4E9B\u4E3B\u8981\u5DE5\u5177\uFF1A</p>`,7),m={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},w=d('<h2 id="\u5F00\u53D1\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u811A\u672C" aria-hidden="true">#</a> \u5F00\u53D1\u811A\u672C</h2><h3 id="yarn-build" tabindex="-1"><a class="header-anchor" href="#yarn-build" aria-hidden="true">#</a> <code>yarn build</code></h3><p><code>build</code> \u547D\u4EE4\u4F1A\u4F7F\u7528 <code>tsc</code> \u5C06 TS \u6E90\u6587\u4EF6\u7F16\u8BD1\u4E3A JS \u6587\u4EF6\u3002</p><p>\u4F60\u5728\u514B\u9686\u4EE3\u7801\u4ED3\u5E93\u540E\uFF0C\u53EF\u80FD\u9700\u8981\u5148\u6267\u884C\u8BE5\u547D\u4EE4\u6765\u786E\u4FDD\u9879\u76EE\u4EE3\u7801\u53EF\u4EE5\u987A\u5229\u8FD0\u884C\uFF0C\u56E0\u4E3A\u7F16\u8BD1\u540E\u7684 JS \u6587\u4EF6\u88AB <code>.gitignore</code> \u6392\u9664\u5728\u4ED3\u5E93\u4EE5\u5916\u4E86\u3002</p><h3 id="yarn-copy" tabindex="-1"><a class="header-anchor" href="#yarn-copy" aria-hidden="true">#</a> <code>yarn copy</code></h3><p><code>copy</code> \u547D\u4EE4\u4F1A\u6267\u884C\u6240\u6709\u5B50 Package \u4E2D\u7684 <code>copy</code> \u547D\u4EE4\uFF0C\u5C06\u4E00\u4E9B\u8D44\u6E90\u6587\u4EF6\u4ECE\u6E90\u4EE3\u7801\u76EE\u5F55\u590D\u5236\u5230\u8F93\u51FA\u76EE\u5F55\u3002</p><p>\u4E00\u4E9B\u8D44\u6E90\u6587\u4EF6\uFF08\u5982 <code>.vue</code>, <code>.css</code> \u6587\u4EF6\u7B49\uFF09\u4E0D\u80FD\u88AB <code>build</code> \u547D\u4EE4\u5904\u7406\uFF0C\u4F46\u662F\u540C\u6837\u9700\u8981\u5C06\u4ED6\u4EEC\u653E\u7F6E\u5230\u8F93\u51FA\u76EE\u5F55\u4E2D\u3002</p><p>\u4F60\u5728\u514B\u9686\u4EE3\u7801\u4ED3\u5E93\u540E\uFF0C\u53EF\u80FD\u4E5F\u9700\u8981\u5148\u6267\u884C\u8BE5\u547D\u4EE4\u6765\u786E\u4FDD\u9879\u76EE\u4EE3\u7801\u53EF\u4EE5\u987A\u5229\u8FD0\u884C\u3002</p><h3 id="yarn-dev" tabindex="-1"><a class="header-anchor" href="#yarn-dev" aria-hidden="true">#</a> <code>yarn dev</code></h3><p><code>dev</code> \u547D\u4EE4\u4F7F\u7528\u76D1\u542C (watch) \u6A21\u5F0F\u6267\u884C <code>copy</code> \u548C <code>build</code> \u547D\u4EE4\u3002</p><h3 id="yarn-clean" tabindex="-1"><a class="header-anchor" href="#yarn-clean" aria-hidden="true">#</a> <code>yarn clean</code></h3><p><code>clean</code> \u547D\u4EE4\u4F1A\u6267\u884C\u6240\u6709\u5B50 Package \u4E2D\u7684 <code>clean</code> \u547D\u4EE4\uFF0C\u6E05\u9664\u6240\u6709\u7684\u8F93\u51FA\u6587\u4EF6\u76EE\u5F55\u548C\u7F13\u5B58\u6587\u4EF6\u3002\u6362\u8A00\u4E4B\uFF0C\u5B83\u5C06\u79FB\u9664\u6240\u6709\u901A\u8FC7 <code>build</code> \u548C <code>copy</code> \u547D\u4EE4\u751F\u6210\u7684\u6587\u4EF6\u3002</p><p>\u5F53\u4F60\u60F3\u8981\u4ECE\u6700\u521D\u72B6\u6001\u91CD\u65B0\u6784\u5EFA\u6E90\u4EE3\u7801\u65F6\uFF0C\u4F60\u53EF\u4EE5\u6267\u884C\u8BE5\u547D\u4EE4\u3002</p><h3 id="yarn-docs" tabindex="-1"><a class="header-anchor" href="#yarn-docs" aria-hidden="true">#</a> <code>yarn docs:*</code></h3><h4 id="yarn-docs-build-yarn-docs-dev-yarn-docs-clean" tabindex="-1"><a class="header-anchor" href="#yarn-docs-build-yarn-docs-dev-yarn-docs-clean" aria-hidden="true">#</a> <code>yarn docs:build</code>, <code>yarn docs:dev</code>, <code>yarn docs:clean</code></h4><p><code>docs:</code> \u524D\u7F00\u8868\u660E\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u662F\u9488\u5BF9\u6587\u6863 (documentation) \u8FDB\u884C\u64CD\u4F5C\u7684\uFF0C\u5373 <code>docs</code> \u76EE\u5F55\u3002</p><p>VuePress \u4F7F\u7528\u5B83\u81EA\u5DF1\u6765\u6784\u5EFA\u81EA\u5DF1\u7684\u6587\u6863\u7F51\u7AD9\u3002</p><p>\u4F60\u9700\u8981\u5148\u6267\u884C <code>yarn build &amp;&amp; yarn copy</code> \u6765\u6784\u5EFA VuePress \u6E90\u4EE3\u7801\uFF0C\u7136\u540E\u518D\u8FD0\u884C\u8FD9\u4E9B <code>docs:</code> \u5F00\u5934\u7684\u547D\u4EE4\u6765\u5F00\u53D1\u6216\u6784\u5EFA\u6587\u6863\u3002</p><h4 id="yarn-docs-serve" tabindex="-1"><a class="header-anchor" href="#yarn-docs-serve" aria-hidden="true">#</a> <code>yarn docs:serve</code></h4><p>\u5728\u672C\u5730\u542F\u52A8\u6587\u6863\u7F51\u7AD9\u670D\u52A1\u5668\u3002</p><p>\u4F60\u9700\u8981\u5148\u8FD0\u884C <code>yarn docs:build</code> \u6765\u751F\u6210\u6587\u6863\u7F51\u7AD9\u7684\u8F93\u51FA\u6587\u4EF6\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u8BE5\u547D\u4EE4\u6765\u542F\u52A8\u6587\u6863\u7F51\u7AD9\u3002</p><h3 id="yarn-lint" tabindex="-1"><a class="header-anchor" href="#yarn-lint" aria-hidden="true">#</a> <code>yarn lint</code></h3><p><code>lint</code> \u547D\u4EE4\u4F7F\u7528 ESLint \u6765\u68C0\u67E5\u6240\u6709\u6E90\u6587\u4EF6\u3002</p><h3 id="yarn-test" tabindex="-1"><a class="header-anchor" href="#yarn-test" aria-hidden="true">#</a> <code>yarn test</code></h3><p><code>test</code> \u547D\u4EE4\u4F7F\u7528 Jest \u6765\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5\u3002</p><h2 id="\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h2><p>VuePress \u7684\u6587\u6863\u662F\u7531 VuePress \u81EA\u5DF1\u9A71\u52A8\u7684\uFF0C\u662F\u7531\u8BE5\u4ED3\u5E93\u4E2D\u7684\u6E90\u7801\u6784\u5EFA\u800C\u6765\u3002</p><p>\u6240\u6709\u7684 Markdown \u6E90\u6587\u4EF6\u90FD\u653E\u7F6E\u5728 <code>docs</code> \u76EE\u5F55\u4E0B\u3002\u6211\u4EEC\u7EF4\u62A4\u4E86\u4E24\u79CD\u7FFB\u8BD1\uFF1A</p><ul><li>\u82F1\u8BED (en-US) \u5728 <code>/</code> \u8DEF\u5F84\u4E0B</li><li>\u4E2D\u6587 (zh-CN) \u5728 <code>/zh/</code> \u8DEF\u5F84\u4E0B</li></ul><p>\u6211\u4EEC\u90E8\u7F72\u4E86\u4E24\u5957\u7AD9\u70B9\uFF1A</p>',30),E={href:"https://www.netlify.com",target:"_blank",rel:"noopener noreferrer"},D={href:"https://v2.vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"},N={href:"https://pages.github.com",target:"_blank",rel:"noopener noreferrer"},S={href:"https://vuepress.github.io",target:"_blank",rel:"noopener noreferrer"};function j(C,A){const o=c("ExternalLinkIcon");return n(),i(l,null,[p,h,r("p",null,[e("\u9879\u76EE\u4ED3\u5E93\u501F\u52A9\u4E8E "),r("a",u,[e("Yarn Classic \u5DE5\u4F5C\u533A"),a(o)]),e(" \u6765\u5B9E\u73B0 "),r("a",b,[e("Monorepo"),a(o)]),e(" \uFF0C\u5728 "),v,e(" \u76EE\u5F55\u4E0B\u5B58\u653E\u4E86\u591A\u4E2A\u4E92\u76F8\u5173\u8054\u7684\u72EC\u7ACB Package \u3002")]),_,r("ul",null,[r("li",null,[r("a",y,[e("Node.js"),a(o)]),e(),f]),r("li",null,[r("a",g,[e("Yarn v1 classic"),a(o)])])]),k,r("ul",null,[r("li",null,[r("a",m,[e("TypeScript"),a(o)]),e(" \u4F5C\u4E3A\u5F00\u53D1\u8BED\u8A00")]),r("li",null,[r("a",x,[e("Jest"),a(o)]),e(" \u7528\u4E8E\u5355\u5143\u6D4B\u8BD5")]),r("li",null,[r("a",P,[e("ESLint"),a(o)]),e(" + "),r("a",V,[e("Prettier"),a(o)]),e(" \u7528\u4E8E\u4EE3\u7801\u68C0\u67E5\u548C\u683C\u5F0F\u5316")])]),w,r("ul",null,[r("li",null,[e("\u5728 "),r("a",E,[e("Netlify"),a(o)]),e(" \u90E8\u7F72\u7684 Release \u7248\u672C\u3002\u8BE5\u7AD9\u70B9\u662F\u4ECE\u6700\u65B0\u53D1\u5E03\u7684\u7248\u672C\u4E2D\u6784\u5EFA\u800C\u6765\uFF0C\u56E0\u6B64\u7528\u6237\u4E0D\u4F1A\u770B\u5230\u672A\u53D1\u5E03\u7684\u6539\u52A8\u3002\u57DF\u540D\u4E3A "),r("a",D,[e("https://v2.vuepress.vuejs.org"),a(o)]),e("\u3002")]),r("li",null,[e("\u5728 "),r("a",N,[e("GitHub Pages"),a(o)]),e(" \u90E8\u7F72\u7684 Developer \u7248\u672C\u3002\u8BE5\u7AD9\u70B9\u662F\u4ECE\u6700\u65B0\u7684\u63D0\u4EA4\u4E2D\u6784\u5EFA\u800C\u6765\uFF0C\u56E0\u6B64\u5F00\u53D1\u8005\u53EF\u4EE5\u9884\u89C8\u6700\u65B0\u7684\u6539\u52A8\u3002\u57DF\u540D\u4E3A "),r("a",S,[e("https://vuepress.github.io"),a(o)]),e("\u3002")])])],64)}var L=s(t,[["render",j],["__file","contributing.html.vue"]]);export{L as default};