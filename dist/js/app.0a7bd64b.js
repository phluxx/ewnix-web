(function(){"use strict";var e={3085:function(e,n,t){var o=t(9242),r=t(3396);const u={id:"app"};function a(e,n,t,o,a,l){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(i)])}var l={name:"App"},i=t(89);const s=(0,i.Z)(l,[["render",a]]);var c=s,f=t(2483);const d=e=>((0,r.dD)("data-v-24810fb3"),e=e(),(0,r.Cn)(),e),p=d((()=>(0,r._)("div",{class:"header"},[(0,r._)("h1",null,"Ewnix Chat Server")],-1))),v={class:"menu"},h=d((()=>(0,r._)("li",null,[(0,r._)("div",null,[(0,r._)("a",{href:"https://ldap.ewnix.net/request"},"Request Access")])],-1))),_=d((()=>(0,r._)("li",null,[(0,r._)("div",null,[(0,r._)("a",{href:"https://thelounge.ewnix.net"},"Chat Now")])],-1))),w={class:"content"},m=d((()=>(0,r._)("p",null,"Welcome to the Ewnix Chat Server's home page!",-1))),b=d((()=>(0,r._)("a",{href:"https://ldap.ewnix.net/request"},"click here",-1))),g=d((()=>(0,r._)("p",null,"We look forward to seeing you soon!",-1)));function k(e,n,t,o,u,a){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[p,(0,r._)("div",v,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("div",null,[(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})])]),(0,r._)("li",null,[(0,r._)("div",null,[(0,r.Wm)(l,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})])]),h,_])]),(0,r._)("div",w,[m,(0,r._)("p",null,[(0,r.Uk)("Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To request access, please "),b,(0,r.Uk)(" or select the appropriate menu item to your right. To learn more about us, please see the "),(0,r.Wm)(l,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" page!")]),g])],64)}var x={name:"HomePage"};const y=(0,i.Z)(x,[["render",k],["__scopeId","data-v-24810fb3"]]);var C=y;const O=e=>((0,r.dD)("data-v-d845fca2"),e=e(),(0,r.Cn)(),e),U=O((()=>(0,r._)("div",{class:"header"},[(0,r._)("h1",null,"Ewnix Chat Server")],-1))),A={class:"menu"},W=O((()=>(0,r._)("li",null,[(0,r._)("div",null,[(0,r._)("a",{href:"https://ldap.ewnix.net/request"},"Request Access")])],-1))),q=O((()=>(0,r._)("li",null,[(0,r._)("div",null,[(0,r._)("a",{href:"https://thelounge.ewnix.net"},"Chat Now")])],-1))),D={class:"content"},E=O((()=>(0,r._)("p",null,"Welcome to the Ewnix Chat Server's home page!",-1))),P=O((()=>(0,r._)("a",{href:"https://ldap.ewnix.net/request"},"click here",-1))),j=O((()=>(0,r._)("p",null,"We look forward to seeing you soon!",-1)));function H(e,n,t,o,u,a){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[U,(0,r._)("div",A,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("div",null,[(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})])]),(0,r._)("li",null,[(0,r._)("div",null,[(0,r.Wm)(l,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})])]),W,q])]),(0,r._)("div",D,[E,(0,r._)("p",null,[(0,r.Uk)("Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To request access, please "),P,(0,r.Uk)(" or select the appropriate menu item to your right. To learn more about us, please see the "),(0,r.Wm)(l,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1}),(0,r.Uk)(" page!")]),j])],64)}var I={name:"AboutPage"};const R=(0,i.Z)(I,[["render",H],["__scopeId","data-v-d845fca2"]]);var T=R;const S=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:T}],Z=(0,f.p7)({history:(0,f.PO)("/"),routes:S});var L=Z;const N=(0,o.ri)(c);N.use(L),N.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var u=n[o]={exports:{}};return e[o].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,u){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],u=e[c][2];for(var l=!0,i=0;i<o.length;i++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](o[i])}))?o.splice(i--,1):(l=!1,u<a&&(a=u));if(l){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[o,r,u]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,u,a=o[0],l=o[1],i=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(i)var c=i(t)}for(n&&n(o);s<a.length;s++)u=a[s],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(c)},o=self["webpackChunkewnix_web"]=self["webpackChunkewnix_web"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3085)}));o=t.O(o)})();
//# sourceMappingURL=app.0a7bd64b.js.map