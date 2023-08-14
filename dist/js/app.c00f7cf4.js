(function(){"use strict";var e={9386:function(e,t,n){var a=n(9242),r=n(3396);function s(e,t,n,a,s,o){const i=(0,r.up)("HeaderPage"),u=(0,r.up)("MenuPage"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i),(0,r.Wm)(u),(0,r.Wm)(l)])}const o=e=>((0,r.dD)("data-v-40735e22"),e=e(),(0,r.Cn)(),e),i={class:"header"},u=o((()=>(0,r._)("h1",null,"Ewnix Chat Server",-1))),l=[u];function c(e,t,n,a,s,o){return(0,r.wg)(),(0,r.iD)("div",i,l)}var d={name:"PageTitle",mounted(){document.title="Ewnix Chat"}},m=n(89);const h=(0,m.Z)(d,[["render",c],["__scopeId","data-v-40735e22"]]);var p=h;const v=e=>((0,r.dD)("data-v-51993968"),e=e(),(0,r.Cn)(),e),f={class:"menu"},g=v((()=>(0,r._)("a",{href:"https://chat.ewnix.net"},"Chat Now",-1))),w=[g];function b(e,t,n,a,s,o){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("ul",null,[(0,r._)("li",{onClick:t[0]||(t[0]=e=>o.navigateTo("/"))},[(0,r.Wm)(i,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),(0,r._)("li",{onClick:t[1]||(t[1]=e=>o.navigateTo("/about"))},[(0,r.Wm)(i,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})]),(0,r._)("li",{onClick:t[2]||(t[2]=e=>o.navigateTo("/request"))},[(0,r.Wm)(i,{to:"/request"},{default:(0,r.w5)((()=>[(0,r.Uk)("Request Access")])),_:1})]),(0,r._)("li",{onClick:t[3]||(t[3]=e=>o.navigateTo("https://chat.ewnix.net"))},w)])])}var _={methods:{navigateTo(e){window.location.href=e}}};const y=(0,m.Z)(_,[["render",b],["__scopeId","data-v-51993968"]]);var k=y,U={components:{HeaderPage:p,MenuPage:k}};const q=(0,m.Z)(U,[["render",s]]);var x=q,C=n(2483);const D=e=>((0,r.dD)("data-v-18df4ee4"),e=e(),(0,r.Cn)(),e),E={class:"content"},R=D((()=>(0,r._)("p",null,"Welcome to the Ewnix Chat Server's home page!",-1))),T=D((()=>(0,r._)("p",null,[(0,r.Uk)("Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To request access, please "),(0,r._)("a",{class:"content-link",href:"https://ldap.ewnix.net/request"},"click here"),(0,r.Uk)(" or select the appropriate menu item to your right. To learn more about us, please see the "),(0,r._)("a",{class:"content-link",href:"/about"},"About"),(0,r.Uk)(" page!")],-1))),A=D((()=>(0,r._)("p",null,"We look forward to seeing you soon!",-1))),S=[R,T,A];function I(e,t){return(0,r.wg)(),(0,r.iD)("div",E,S)}const O={},P=(0,m.Z)(O,[["render",I],["__scopeId","data-v-18df4ee4"]]);var Z=P;const j=e=>((0,r.dD)("data-v-4b2e844f"),e=e(),(0,r.Cn)(),e),W={class:"content"},M=j((()=>(0,r._)("p",null,"Ewnix was founded in 2003 by Eric Yoakum (eric) and Kevin Thompson (phlux/phluxeternus) in an effort to provide a safe place for chats about sensitive subjects such as politics and religion. Ewnix's goals at the time were to provide a forum for free speech, and those values are still held true today.",-1))),z=j((()=>(0,r._)("p",null,"Over the years, IRC has changed. Many have considered it long dead due to the advantages that Discord and Slack brings. Ewnix aims to bring an end to the reign of Discord's dominance of our Twitch and gaming communities by implementing several new IRCv3 capabilities that we believe will compete directly with Discord's stack.",-1))),F=j((()=>(0,r._)("p",null,"In addition to IRCv3 capabilities, we plan to implement voice and video conferencing into the client as well, but we plan to handle the encoding for such events server-side. We do not believe the brunt of resources should be placed on the user, but rather, the server should serve the user in the way it was always designed to do so.",-1))),B=j((()=>(0,r._)("p",null,"The idea came to phluxeternus when he caught Discord using over 4GB of RAM without conducting any voice or video conferencing activities. This is an absolutely absurd amount of RAM for what equates to a glorified chat client.",-1))),V=j((()=>(0,r._)("p",null,[(0,r.Uk)("You can check the status of our project by visiting "),(0,r._)("a",{class:"content-link",href:"https://bugzilla.ewnix.net"},"our issue tracker"),(0,r.Uk)(", which will include up-to-date feature requests, bug reports, and statuses on those projects.")],-1))),H=[M,z,F,B,V];function L(e,t){return(0,r.wg)(),(0,r.iD)("div",W,H)}const Y={},$=(0,m.Z)(Y,[["render",L],["__scopeId","data-v-4b2e844f"]]);var G=$,K=n(7139);const N=e=>((0,r.dD)("data-v-60cceefc"),e=e(),(0,r.Cn)(),e),J={class:"content"},Q={class:"form-container"},X=N((()=>(0,r._)("h2",null,"Request Access",-1))),ee=N((()=>(0,r._)("label",{for:"username"},"Username:",-1))),te=N((()=>(0,r._)("br",null,null,-1))),ne=N((()=>(0,r._)("br",null,null,-1))),ae={key:0,class:"error"},re=N((()=>(0,r._)("br",null,null,-1))),se=N((()=>(0,r._)("label",{for:"email"},"E-mail:",-1))),oe=N((()=>(0,r._)("br",null,null,-1))),ie=N((()=>(0,r._)("br",null,null,-1))),ue=N((()=>(0,r._)("br",null,null,-1))),le=["disabled"];function ce(e,t,n,s,o,i){return(0,r.wg)(),(0,r.iD)("div",J,[(0,r._)("div",Q,[X,(0,r._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>i.submitRequest&&i.submitRequest(...e)),["prevent"]))},[ee,te,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e),type:"text",id:"username",required:"",onBlur:t[1]||(t[1]=(...e)=>i.validateUsername&&i.validateUsername(...e))},null,544),[[a.nr,o.username]]),ne,o.usernameError?((0,r.wg)(),(0,r.iD)("div",ae,(0,K.zw)(o.usernameError),1)):(0,r.kq)("",!0),re,se,oe,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.email=e),type:"email",id:"email",required:""},null,512),[[a.nr,o.email]]),ie,ue,(0,r._)("button",{type:"submit",class:"request-button",disabled:i.isButtonDisabled},"Request Access!",8,le)],32),o.message?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,K.C_)(o.messageStatus)},(0,K.zw)(o.message),3)):(0,r.kq)("",!0)])])}var de=n(4161),me={data(){return{username:"",email:"",message:"",messageStatus:"",usernameError:""}},computed:{isButtonDisabled(){return!this.validateUsername()}},methods:{async submitRequest(){console.log("Submitting request with Username:",this.username),console.log("Submitting request with Email:",this.email);try{await de.Z.post("https://goladyp.ewnix.net/request",{username:this.username,email:this.email}),this.message="Request sent successfully!",this.messageStatus="success",this.username="",this.email=""}catch(e){e.response&&409===e.response.status?this.message="Username already exists. Try again!":e.response&&e.response.data&&e.response.data.message?this.message=`Error: ${e.response.data.message}`:this.message="An unknown error occurred. Please try again later.",this.messageStatus="error",console.error("Error:",e)}},validateUsername(){if(!this.username)return this.usernameError="",!0;const e=/^[A-Za-z][A-Za-z0-9_-]*$/;return!e.test(this.username)||this.username.length>31?(this.usernameError="Invalid username format. Username must start with a letter and can contain letters, digits, underscores, and hyphens.",!1):(this.usernameError="",!0)}}};const he=(0,m.Z)(me,[["render",ce],["__scopeId","data-v-60cceefc"]]);var pe=he;const ve=e=>((0,r.dD)("data-v-2c4021d7"),e=e(),(0,r.Cn)(),e),fe={class:"content"},ge={class:"form-container"},we=ve((()=>(0,r._)("h2",null,"Avatar Upload",-1))),be=ve((()=>(0,r._)("label",{for:"username"},"Username:",-1))),_e=ve((()=>(0,r._)("br",null,null,-1))),ye=ve((()=>(0,r._)("br",null,null,-1))),ke=ve((()=>(0,r._)("br",null,null,-1))),Ue=ve((()=>(0,r._)("label",{for:"password"},"Password:",-1))),qe=ve((()=>(0,r._)("br",null,null,-1))),xe=ve((()=>(0,r._)("br",null,null,-1))),Ce=ve((()=>(0,r._)("br",null,null,-1))),De=ve((()=>(0,r._)("label",{for:"image"},"Upload your avatar!:",-1))),Ee=ve((()=>(0,r._)("button",{type:"submit",class:"upload-button"},"Upload Avatar",-1)));function Re(e,t,n,s,o,i){return(0,r.wg)(),(0,r.iD)("div",fe,[(0,r._)("div",ge,[we,(0,r._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[be,_e,(0,r.wy)((0,r._)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>o.username=e),required:""},null,512),[[a.nr,o.username]]),ye,ke,Ue,qe,(0,r.wy)((0,r._)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),required:""},null,512),[[a.nr,o.password]]),xe,Ce,De,(0,r._)("input",{type:"file",id:"image",onChange:t[2]||(t[2]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e)),accept:"image/*",required:""},null,32),Ee],32)])])}var Te={data(){return{username:"",password:"",image:null}},methods:{handleFileUpload(e){const t=e.target.files[0],n=new FileReader;n.onload=e=>{this.image=e.target.result},n.readAsDataURL(t)},async handleSubmit(){try{const e={username:this.username,password:this.password,image:this.image},t=await de.Z.post("/your-endpoint-here",e);console.log(t.data)}catch(e){console.error("There was an error!",e)}}}};const Ae=(0,m.Z)(Te,[["render",Re],["__scopeId","data-v-2c4021d7"]]);var Se=Ae;const Ie=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:G},{path:"/request",name:"request",component:pe},{path:"/avatar",name:"avatar",component:Se}],Oe=(0,C.p7)({history:(0,C.PO)("/"),routes:Ie});var Pe=Oe;(0,a.ri)(x).use(Pe).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,s){if(!a){var o=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],s=e[c][2];for(var i=!0,u=0;u<a.length;u++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(i=!1,s<o&&(o=s));if(i){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,o=a[0],i=a[1],u=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var c=u(n)}for(t&&t(a);l<o.length;l++)s=o[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},a=self["webpackChunkewnix_new_new"]=self["webpackChunkewnix_new_new"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9386)}));a=n.O(a)})();
//# sourceMappingURL=app.c00f7cf4.js.map