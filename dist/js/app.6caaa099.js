(function(){"use strict";var e={553:function(e,t,n){var a=n(9242),r=n(3396);function s(e,t,n,a,s,o){const i=(0,r.up)("HeaderPage"),u=(0,r.up)("MenuPage"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),(0,r.Wm)(u),(0,r.Wm)(l)])}const o=e=>((0,r.dD)("data-v-1d70ab19"),e=e(),(0,r.Cn)(),e),i={class:"header"},u=o((()=>(0,r._)("h1",null,"Ewnix Chat Server",-1))),l=[u];function c(e,t){return(0,r.wg)(),(0,r.iD)("div",i,l)}var d=n(89);const h={},m=(0,d.Z)(h,[["render",c],["__scopeId","data-v-1d70ab19"]]);var p=m;const f=e=>((0,r.dD)("data-v-51993968"),e=e(),(0,r.Cn)(),e),v={class:"menu"},g=f((()=>(0,r._)("a",{href:"https://chat.ewnix.net"},"Chat Now",-1))),w=[g];function b(e,t,n,a,s,o){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("ul",null,[(0,r._)("li",{onClick:t[0]||(t[0]=e=>o.navigateTo("/"))},[(0,r.Wm)(i,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("li",{onClick:t[1]||(t[1]=e=>o.navigateTo("/about"))},[(0,r.Wm)(i,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r._)("li",{onClick:t[2]||(t[2]=e=>o.navigateTo("/request"))},[(0,r.Wm)(i,{to:"/request"},{default:(0,r.w5)((()=>[(0,r.Uk)("Request Access")])),_:1})]),(0,r._)("li",{onClick:t[3]||(t[3]=e=>o.navigateTo("https://chat.ewnix.net"))},w)])])}var _={methods:{navigateTo(e){window.location.href=e}}};const y=(0,d.Z)(_,[["render",b],["__scopeId","data-v-51993968"]]);var k=y,q={components:{HeaderPage:p,MenuPage:k}};const x=(0,d.Z)(q,[["render",s]]);var C=x,D=n(2483);const E=e=>((0,r.dD)("data-v-18df4ee4"),e=e(),(0,r.Cn)(),e),U={class:"content"},R=E((()=>(0,r._)("p",null,"Welcome to the Ewnix Chat Server's home page!",-1))),T=E((()=>(0,r._)("p",null,[(0,r.Uk)("Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To request access, please "),(0,r._)("a",{class:"content-link",href:"https://ldap.ewnix.net/request"},"click here"),(0,r.Uk)(" or select the appropriate menu item to your right. To learn more about us, please see the "),(0,r._)("a",{class:"content-link",href:"/about"},"About"),(0,r.Uk)(" page!")],-1))),O=E((()=>(0,r._)("p",null,"We look forward to seeing you soon!",-1))),I=[R,T,O];function A(e,t){return(0,r.wg)(),(0,r.iD)("div",U,I)}const S={},j=(0,d.Z)(S,[["render",A],["__scopeId","data-v-18df4ee4"]]);var P=j;const W=e=>((0,r.dD)("data-v-4b2e844f"),e=e(),(0,r.Cn)(),e),Z={class:"content"},M=W((()=>(0,r._)("p",null,"Ewnix was founded in 2003 by Eric Yoakum (eric) and Kevin Thompson (phlux/phluxeternus) in an effort to provide a safe place for chats about sensitive subjects such as politics and religion. Ewnix's goals at the time were to provide a forum for free speech, and those values are still held true today.",-1))),z=W((()=>(0,r._)("p",null,"Over the years, IRC has changed. Many have considered it long dead due to the advantages that Discord and Slack brings. Ewnix aims to bring an end to the reign of Discord's dominance of our Twitch and gaming communities by implementing several new IRCv3 capabilities that we believe will compete directly with Discord's stack.",-1))),B=W((()=>(0,r._)("p",null,"In addition to IRCv3 capabilities, we plan to implement voice and video conferencing into the client as well, but we plan to handle the encoding for such events server-side. We do not believe the brunt of resources should be placed on the user, but rather, the server should serve the user in the way it was always designed to do so.",-1))),H=W((()=>(0,r._)("p",null,"The idea came to phluxeternus when he caught Discord using over 4GB of RAM without conducting any voice or video conferencing activities. This is an absolutely absurd amount of RAM for what equates to a glorified chat client.",-1))),V=W((()=>(0,r._)("p",null,[(0,r.Uk)("You can check the status of our project by visiting "),(0,r._)("a",{class:"content-link",href:"https://bugzilla.ewnix.net"},"our issue tracker"),(0,r.Uk)(", which will include up-to-date feature requests, bug reports, and statuses on those projects.")],-1))),Y=[M,z,B,H,V];function $(e,t){return(0,r.wg)(),(0,r.iD)("div",Z,Y)}const F={},G=(0,d.Z)(F,[["render",$],["__scopeId","data-v-4b2e844f"]]);var K=G,L=n(7139);const N=e=>((0,r.dD)("data-v-60cceefc"),e=e(),(0,r.Cn)(),e),J={class:"content"},Q={class:"form-container"},X=N((()=>(0,r._)("h2",null,"Request Access",-1))),ee=N((()=>(0,r._)("label",{for:"username"},"Username:",-1))),te=N((()=>(0,r._)("br",null,null,-1))),ne=N((()=>(0,r._)("br",null,null,-1))),ae={key:0,class:"error"},re=N((()=>(0,r._)("br",null,null,-1))),se=N((()=>(0,r._)("label",{for:"email"},"E-mail:",-1))),oe=N((()=>(0,r._)("br",null,null,-1))),ie=N((()=>(0,r._)("br",null,null,-1))),ue=N((()=>(0,r._)("br",null,null,-1))),le=["disabled"];function ce(e,t,n,s,o,i){return(0,r.wg)(),(0,r.iD)("div",J,[(0,r._)("div",Q,[X,(0,r._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>i.submitRequest&&i.submitRequest(...e)),["prevent"]))},[ee,te,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e),type:"text",id:"username",required:"",onBlur:t[1]||(t[1]=(...e)=>i.validateUsername&&i.validateUsername(...e))},null,544),[[a.nr,o.username]]),ne,o.usernameError?((0,r.wg)(),(0,r.iD)("div",ae,(0,L.zw)(o.usernameError),1)):(0,r.kq)("",!0),re,se,oe,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.email=e),type:"email",id:"email",required:""},null,512),[[a.nr,o.email]]),ie,ue,(0,r._)("button",{type:"submit",class:"request-button",disabled:i.isButtonDisabled},"Request Access!",8,le)],32),o.message?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,L.C_)(o.messageStatus)},(0,L.zw)(o.message),3)):(0,r.kq)("",!0)])])}var de=n(4161),he={data(){return{username:"",email:"",message:"",messageStatus:"",usernameError:""}},computed:{isButtonDisabled(){return!this.validateUsername()}},methods:{async submitRequest(){console.log("Submitting request with Username:",this.username),console.log("Submitting request with Email:",this.email);try{await de.Z.post("https://goladyp.ewnix.net/request",{username:this.username,email:this.email}),this.message="Request sent successfully!",this.messageStatus="success",this.username="",this.email=""}catch(e){e.response&&409===e.response.status?this.message="Username already exists. Try again!":e.response&&e.response.data&&e.response.data.message?this.message=`Error: ${e.response.data.message}`:this.message="An unknown error occurred. Please try again later.",this.messageStatus="error",console.error("Error:",e)}},validateUsername(){if(!this.username)return this.usernameError="",!0;const e=/^[A-Za-z][A-Za-z0-9_-]*$/;return!e.test(this.username)||this.username.length>31?(this.usernameError="Invalid username format. Username must start with a letter and can contain letters, digits, underscores, and hyphens.",!1):(this.usernameError="",!0)}}};const me=(0,d.Z)(he,[["render",ce],["__scopeId","data-v-60cceefc"]]);var pe=me;const fe=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:K},{path:"/request",name:"request",component:pe}],ve=(0,D.p7)({history:(0,D.PO)("/"),routes:fe});var ge=ve;(0,a.ri)(C).use(ge).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,s){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],s=e[c][2];for(var i=!0,u=0;u<a.length;u++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(i=!1,s<o&&(o=s));if(i){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,o=a[0],i=a[1],u=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var c=u(n)}for(t&&t(a);l<o.length;l++)s=o[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},a=self["webpackChunkewnix_new_new"]=self["webpackChunkewnix_new_new"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(553)}));a=n.O(a)})();
//# sourceMappingURL=app.6caaa099.js.map