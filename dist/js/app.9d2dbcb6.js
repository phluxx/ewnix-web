(function(){"use strict";var e={2436:function(e,t,n){var o=n(9242),r=n(3396);const i={id:"app"},a=(0,r._)("div",{class:"header"},[(0,r._)("h1",null,"Ewnix Chat Server")],-1),u={class:"menu"},s=(0,r._)("li",null,[(0,r._)("a",{href:"https://ldap.ewnix.net/request"},"Request Access")],-1),l=(0,r._)("li",null,[(0,r._)("a",{href:"https://thelounge.ewnix.net"},"Chat Now")],-1),c=(0,r._)("div",{class:"content"},[(0,r._)("p",null,"Welcome to the Ewnix Chat Server's home page!"),(0,r._)("p",null,"Ewnix is an LDAP-authenticated IRCv3 server aimed..."),(0,r._)("p",null,"We look forward to seeing you soon!")],-1);function h(e,t){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",i,[a,(0,r._)("div",u,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(n,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),s,l])]),c])}var d=n(89);const f={},p=(0,d.Z)(f,[["render",h]]);var v=p,w=n(2483);const b={class:"content"},g=(0,r._)("p",null,"Welcome to the Ewnix Chat Server's home page!",-1),m=(0,r._)("p",null,[(0,r.Uk)("Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To request access, please "),(0,r._)("a",{href:"https://ldap.ewnix.net/request"},"click here"),(0,r.Uk)(" or select the appropriate menu item to your right. To learn more about us, please see the "),(0,r._)("a",{href:"/about"},"About"),(0,r.Uk)(" page!")],-1),_=(0,r._)("p",null,"We look forward to seeing you soon!",-1),y=[g,m,_];function x(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",b,y)}var k={name:"HomePage"};const O=(0,d.Z)(k,[["render",x]]);var C=O;const E={class:"content"},j=(0,r._)("p",null,"Ewnix was founded in 2003 by Eric Yoakum (eric) and Kevin Thompson (phlux/phluxeternus) in an effort to provide a safe place for chats about sensitive subjects such as politics and religion. Ewnix's goals at the time were to provide a forum for free speech, and those values are still held true today.",-1),A=(0,r._)("p",null,"Over the years, IRC has changed. Many have considered it long dead due to the advantages that Discord and Slack brings. Ewnix aims to bring an end to the reign of Discord's dominance of our Twitch and gaming communities by implementing several new IRCv3 capabilities that we believe will compete directly with Discord's stack.",-1),D=(0,r._)("p",null,"In addition to IRCv3 capabilities, we plan to implement voice and video conferencing into the client as well, but we plan to handle the encoding for such events server-side. We do not believe the brunt of resources should be placed on the user, but rather, the server should serve the user in the way it was always designed to do so.",-1),R=(0,r._)("p",null,"The idea came to phluxeternus when he caught Discord using over 4GB of RAM without conducting any voice or video conferencing activities. This is an absolutely absurd amount of RAM for what equates to a glorified chat client.",-1),T=(0,r._)("p",null,[(0,r.Uk)("You can check the status of our project by visiting "),(0,r._)("a",{href:"https://bugzilla.ewnix.net"},"our issue tracker"),(0,r.Uk)(", which will include up-to-date feature requests, bug reports, and statuses on those projects.")],-1),q=[j,A,D,R,T];function I(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",E,q)}var P={name:"AboutPage"};const U=(0,d.Z)(P,[["render",I]]);var W=U;const M=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:W}],S=(0,w.p7)({history:(0,w.PO)(),routes:M});var H=S;const Z=(0,o.ri)(v);Z.use(H),Z.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],s=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var c=s(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkewnix_web"]=self["webpackChunkewnix_web"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2436)}));o=n.O(o)})();
//# sourceMappingURL=app.9d2dbcb6.js.map