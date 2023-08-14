(function(){"use strict";var e={2788:function(e,t,n){var a=n(9242),s=n(3396);function r(e,t,n,a,r,o){const i=(0,s.up)("HeaderPage"),u=(0,s.up)("MenuPage"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i),(0,s.Wm)(u),(0,s.Wm)(l)])}const o=e=>((0,s.dD)("data-v-1d70ab19"),e=e(),(0,s.Cn)(),e),i={class:"header"},u=o((()=>(0,s._)("h1",null,"Ewnix Chat Server",-1))),l=[u];function c(e,t){return(0,s.wg)(),(0,s.iD)("div",i,l)}var d=n(89);const h={},p=(0,d.Z)(h,[["render",c],["__scopeId","data-v-1d70ab19"]]);var m=p;const f=e=>((0,s.dD)("data-v-51993968"),e=e(),(0,s.Cn)(),e),v={class:"menu"},g=f((()=>(0,s._)("a",{href:"https://chat.ewnix.net"},"Chat Now",-1))),w=[g];function b(e,t,n,a,r,o){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("ul",null,[(0,s._)("li",{onClick:t[0]||(t[0]=e=>o.navigateTo("/"))},[(0,s.Wm)(i,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})]),(0,s._)("li",{onClick:t[1]||(t[1]=e=>o.navigateTo("/about"))},[(0,s.Wm)(i,{to:"/about"},{default:(0,s.w5)((()=>[(0,s.Uk)("About")])),_:1})]),(0,s._)("li",{onClick:t[2]||(t[2]=e=>o.navigateTo("/request"))},[(0,s.Wm)(i,{to:"/request"},{default:(0,s.w5)((()=>[(0,s.Uk)("Request Access")])),_:1})]),(0,s._)("li",{onClick:t[3]||(t[3]=e=>o.navigateTo("https://chat.ewnix.net"))},w)])])}var _={methods:{navigateTo(e){window.location.href=e}}};const y=(0,d.Z)(_,[["render",b],["__scopeId","data-v-51993968"]]);var k=y,q={components:{HeaderPage:m,MenuPage:k}};const x=(0,d.Z)(q,[["render",r]]);var C=x,D=n(2483);const R=e=>((0,s.dD)("data-v-18df4ee4"),e=e(),(0,s.Cn)(),e),T={class:"content"},O=R((()=>(0,s._)("p",null,"Welcome to the Ewnix Chat Server's home page!",-1))),U=R((()=>(0,s._)("p",null,[(0,s.Uk)("Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To request access, please "),(0,s._)("a",{class:"content-link",href:"https://ldap.ewnix.net/request"},"click here"),(0,s.Uk)(" or select the appropriate menu item to your right. To learn more about us, please see the "),(0,s._)("a",{class:"content-link",href:"/about"},"About"),(0,s.Uk)(" page!")],-1))),E=R((()=>(0,s._)("p",null,"We look forward to seeing you soon!",-1))),A=[O,U,E];function I(e,t){return(0,s.wg)(),(0,s.iD)("div",T,A)}const S={},j=(0,d.Z)(S,[["render",I],["__scopeId","data-v-18df4ee4"]]);var P=j;const W=e=>((0,s.dD)("data-v-4b2e844f"),e=e(),(0,s.Cn)(),e),Z={class:"content"},M=W((()=>(0,s._)("p",null,"Ewnix was founded in 2003 by Eric Yoakum (eric) and Kevin Thompson (phlux/phluxeternus) in an effort to provide a safe place for chats about sensitive subjects such as politics and religion. Ewnix's goals at the time were to provide a forum for free speech, and those values are still held true today.",-1))),z=W((()=>(0,s._)("p",null,"Over the years, IRC has changed. Many have considered it long dead due to the advantages that Discord and Slack brings. Ewnix aims to bring an end to the reign of Discord's dominance of our Twitch and gaming communities by implementing several new IRCv3 capabilities that we believe will compete directly with Discord's stack.",-1))),H=W((()=>(0,s._)("p",null,"In addition to IRCv3 capabilities, we plan to implement voice and video conferencing into the client as well, but we plan to handle the encoding for such events server-side. We do not believe the brunt of resources should be placed on the user, but rather, the server should serve the user in the way it was always designed to do so.",-1))),V=W((()=>(0,s._)("p",null,"The idea came to phluxeternus when he caught Discord using over 4GB of RAM without conducting any voice or video conferencing activities. This is an absolutely absurd amount of RAM for what equates to a glorified chat client.",-1))),Y=W((()=>(0,s._)("p",null,[(0,s.Uk)("You can check the status of our project by visiting "),(0,s._)("a",{class:"content-link",href:"https://bugzilla.ewnix.net"},"our issue tracker"),(0,s.Uk)(", which will include up-to-date feature requests, bug reports, and statuses on those projects.")],-1))),B=[M,z,H,V,Y];function F(e,t){return(0,s.wg)(),(0,s.iD)("div",Z,B)}const G={},K=(0,d.Z)(G,[["render",F],["__scopeId","data-v-4b2e844f"]]);var L=K,N=n(7139);const $=e=>((0,s.dD)("data-v-59f69ee6"),e=e(),(0,s.Cn)(),e),J={class:"content"},Q={class:"form-container"},X=$((()=>(0,s._)("h2",null,"Request Access",-1))),ee=$((()=>(0,s._)("label",{for:"username"},"Username:",-1))),te=$((()=>(0,s._)("br",null,null,-1))),ne=$((()=>(0,s._)("br",null,null,-1))),ae=$((()=>(0,s._)("br",null,null,-1))),se=$((()=>(0,s._)("label",{for:"email"},"E-mail:",-1))),re=$((()=>(0,s._)("br",null,null,-1))),oe=$((()=>(0,s._)("br",null,null,-1))),ie=$((()=>(0,s._)("br",null,null,-1))),ue=$((()=>(0,s._)("button",{type:"submit",class:"request-button"},"Request Access!",-1)));function le(e,t,n,r,o,i){return(0,s.wg)(),(0,s.iD)("div",J,[(0,s._)("div",Q,[X,(0,s._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)(((...e)=>i.submitRequest&&i.submitRequest(...e)),["prevent"]))},[ee,te,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e),type:"text",id:"username",required:"",pattern:"[A-Za-z][A-Za-z0-9-_]*"},null,512),[[a.nr,o.username]]),ne,ae,se,re,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.email=e),type:"email",id:"email",required:""},null,512),[[a.nr,o.email]]),oe,ie,ue],32),o.message?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,N.C_)(o.messageStatus)},(0,N.zw)(o.message),3)):(0,s.kq)("",!0)])])}var ce=n(4161),de={data(){return{username:"",email:"",message:"",messageStatus:""}},methods:{async submitRequest(){console.log("Submitting request with Username:",this.username),console.log("Submitting request with Email:",this.email);try{await ce.Z.post("https://goladyp.ewnix.net/request",{username:this.username,email:this.email}),this.message="Request sent successfully!",this.messageStatus="success",this.username="",this.email=""}catch(e){e.response&&409===e.response.status?this.message="Username already exists. Try again!":e.response&&e.response.data&&e.response.data.message?this.message=`Error: ${e.response.data.message}`:this.message="An unknown error occurred. Please try again later.",this.messageStatus="error",console.error("Error:",e)}}}};const he=(0,d.Z)(de,[["render",le],["__scopeId","data-v-59f69ee6"]]);var pe=he;const me=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:L},{path:"/request",name:"request",component:pe}],fe=(0,D.p7)({history:(0,D.PO)("/"),routes:me});var ve=fe;(0,a.ri)(C).use(ve).mount("#app")}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,s,r){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],r=e[c][2];for(var i=!0,u=0;u<a.length;u++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(i=!1,r<o&&(o=r));if(i){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,r,o=a[0],i=a[1],u=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(u)var c=u(n)}for(t&&t(a);l<o.length;l++)r=o[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkewnix_new_new"]=self["webpackChunkewnix_new_new"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2788)}));a=n.O(a)})();
//# sourceMappingURL=app.c6ae5631.js.map