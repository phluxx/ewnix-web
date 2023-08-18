(function(){"use strict";var e={336:function(e,a,s){var t=s(9242),n=s(3396);function r(e,a,s,t,r,o){const i=(0,n.up)("HeaderPage"),l=(0,n.up)("MenuPage"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i),(0,n.Wm)(l),(0,n.Wm)(u)])}const o=e=>((0,n.dD)("data-v-40735e22"),e=e(),(0,n.Cn)(),e),i={class:"header"},l=o((()=>(0,n._)("h1",null,"Ewnix Chat Server",-1))),u=[l];function c(e,a,s,t,r,o){return(0,n.wg)(),(0,n.iD)("div",i,u)}var d={name:"PageTitle",mounted(){document.title="Ewnix Chat"}},m=s(89);const p=(0,m.Z)(d,[["render",c],["__scopeId","data-v-40735e22"]]);var h=p;const w=e=>((0,n.dD)("data-v-43d1b9da"),e=e(),(0,n.Cn)(),e),f={class:"menu"},v=w((()=>(0,n._)("a",{href:"https://chat.ewnix.net"},"Chat Now",-1))),g=[v];function b(e,a,s,t,r,o){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("ul",null,[(0,n._)("li",{onClick:a[0]||(a[0]=e=>o.navigateTo("/"))},[(0,n.Wm)(i,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1})]),(0,n._)("li",{onClick:a[1]||(a[1]=e=>o.navigateTo("/about"))},[(0,n.Wm)(i,{to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1})]),(0,n._)("li",{onClick:a[2]||(a[2]=e=>o.navigateTo("/staff"))},[(0,n.Wm)(i,{to:"/staff"},{default:(0,n.w5)((()=>[(0,n.Uk)("Staff")])),_:1})]),(0,n._)("li",{onClick:a[3]||(a[3]=e=>o.navigateTo("/request"))},[(0,n.Wm)(i,{to:"/request"},{default:(0,n.w5)((()=>[(0,n.Uk)("Request Access")])),_:1})]),(0,n._)("li",{onClick:a[4]||(a[4]=e=>o.navigateTo("https://chat.ewnix.net"))},g)])])}var _={methods:{navigateTo(e){window.location.href=e}}};const y=(0,m.Z)(_,[["render",b],["__scopeId","data-v-43d1b9da"]]);var k=y,P={components:{HeaderPage:h,MenuPage:k}};const D=(0,m.Z)(P,[["render",r]]);var x=D,q=s(2483);const U=e=>((0,n.dD)("data-v-18df4ee4"),e=e(),(0,n.Cn)(),e),C={class:"content"},M=U((()=>(0,n._)("p",null,"Welcome to the Ewnix Chat Server's home page!",-1))),E=U((()=>(0,n._)("p",null,[(0,n.Uk)("Ewnix is an LDAP-authenticated IRCv3 server aimed at bringing you the most unique, fun, and new IRCv3 features available today. To request access, please "),(0,n._)("a",{class:"content-link",href:"https://ldap.ewnix.net/request"},"click here"),(0,n.Uk)(" or select the appropriate menu item to your right. To learn more about us, please see the "),(0,n._)("a",{class:"content-link",href:"/about"},"About"),(0,n.Uk)(" page!")],-1))),A=U((()=>(0,n._)("p",null,"We look forward to seeing you soon!",-1))),I=[M,E,A];function T(e,a){return(0,n.wg)(),(0,n.iD)("div",C,I)}const S={},O=(0,m.Z)(S,[["render",T],["__scopeId","data-v-18df4ee4"]]);var R=O;const Z=e=>((0,n.dD)("data-v-4b2e844f"),e=e(),(0,n.Cn)(),e),z={class:"content"},N=Z((()=>(0,n._)("p",null,"Ewnix was founded in 2003 by Eric Yoakum (eric) and Kevin Thompson (phlux/phluxeternus) in an effort to provide a safe place for chats about sensitive subjects such as politics and religion. Ewnix's goals at the time were to provide a forum for free speech, and those values are still held true today.",-1))),W=Z((()=>(0,n._)("p",null,"Over the years, IRC has changed. Many have considered it long dead due to the advantages that Discord and Slack brings. Ewnix aims to bring an end to the reign of Discord's dominance of our Twitch and gaming communities by implementing several new IRCv3 capabilities that we believe will compete directly with Discord's stack.",-1))),j=Z((()=>(0,n._)("p",null,"In addition to IRCv3 capabilities, we plan to implement voice and video conferencing into the client as well, but we plan to handle the encoding for such events server-side. We do not believe the brunt of resources should be placed on the user, but rather, the server should serve the user in the way it was always designed to do so.",-1))),V=Z((()=>(0,n._)("p",null,"The idea came to phluxeternus when he caught Discord using over 4GB of RAM without conducting any voice or video conferencing activities. This is an absolutely absurd amount of RAM for what equates to a glorified chat client.",-1))),B=Z((()=>(0,n._)("p",null,[(0,n.Uk)("You can check the status of our project by visiting "),(0,n._)("a",{class:"content-link",href:"https://bugzilla.ewnix.net"},"our issue tracker"),(0,n.Uk)(", which will include up-to-date feature requests, bug reports, and statuses on those projects.")],-1))),F=[N,W,j,V,B];function H(e,a){return(0,n.wg)(),(0,n.iD)("div",z,F)}const $={},Q=(0,m.Z)($,[["render",H],["__scopeId","data-v-4b2e844f"]]);var Y=Q,G=s(7139);const K=e=>((0,n.dD)("data-v-60cceefc"),e=e(),(0,n.Cn)(),e),L={class:"content"},J={class:"form-container"},X=K((()=>(0,n._)("h2",null,"Request Access",-1))),ee=K((()=>(0,n._)("label",{for:"username"},"Username:",-1))),ae=K((()=>(0,n._)("br",null,null,-1))),se=K((()=>(0,n._)("br",null,null,-1))),te={key:0,class:"error"},ne=K((()=>(0,n._)("br",null,null,-1))),re=K((()=>(0,n._)("label",{for:"email"},"E-mail:",-1))),oe=K((()=>(0,n._)("br",null,null,-1))),ie=K((()=>(0,n._)("br",null,null,-1))),le=K((()=>(0,n._)("br",null,null,-1))),ue=["disabled"];function ce(e,a,s,r,o,i){return(0,n.wg)(),(0,n.iD)("div",L,[(0,n._)("div",J,[X,(0,n._)("form",{onSubmit:a[3]||(a[3]=(0,t.iM)(((...e)=>i.submitRequest&&i.submitRequest(...e)),["prevent"]))},[ee,ae,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>o.username=e),type:"text",id:"username",required:"",onBlur:a[1]||(a[1]=(...e)=>i.validateUsername&&i.validateUsername(...e))},null,544),[[t.nr,o.username]]),se,o.usernameError?((0,n.wg)(),(0,n.iD)("div",te,(0,G.zw)(o.usernameError),1)):(0,n.kq)("",!0),ne,re,oe,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>o.email=e),type:"email",id:"email",required:""},null,512),[[t.nr,o.email]]),ie,le,(0,n._)("button",{type:"submit",class:"request-button",disabled:i.isButtonDisabled},"Request Access!",8,ue)],32),o.message?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,G.C_)(o.messageStatus)},(0,G.zw)(o.message),3)):(0,n.kq)("",!0)])])}var de=s(4161),me={data(){return{username:"",email:"",message:"",messageStatus:"",usernameError:""}},computed:{isButtonDisabled(){return!this.validateUsername()}},methods:{async submitRequest(){console.log("Submitting request with Username:",this.username),console.log("Submitting request with Email:",this.email);try{await de.Z.post("https://goladyp.ewnix.net/request",{username:this.username,email:this.email}),this.message="Request sent successfully!",this.messageStatus="success",this.username="",this.email=""}catch(e){e.response&&409===e.response.status?this.message="Username already exists. Try again!":e.response&&e.response.data&&e.response.data.message?this.message=`Error: ${e.response.data.message}`:this.message="An unknown error occurred. Please try again later.",this.messageStatus="error",console.error("Error:",e)}},validateUsername(){if(!this.username)return this.usernameError="",!0;const e=/^[A-Za-z][A-Za-z0-9_-]*$/;return!e.test(this.username)||this.username.length>31?(this.usernameError="Invalid username format. Username must start with a letter and can contain letters, digits, underscores, and hyphens.",!1):(this.usernameError="",!0)}}};const pe=(0,m.Z)(me,[["render",ce],["__scopeId","data-v-60cceefc"]]);var he=pe;const we=e=>((0,n.dD)("data-v-7d141a9c"),e=e(),(0,n.Cn)(),e),fe={class:"content"},ve={class:"form-container"},ge=we((()=>(0,n._)("h2",null,"Avatar Upload",-1))),be=we((()=>(0,n._)("label",{for:"username"},"Username:",-1))),_e=we((()=>(0,n._)("br",null,null,-1))),ye=we((()=>(0,n._)("br",null,null,-1))),ke=we((()=>(0,n._)("br",null,null,-1))),Pe=we((()=>(0,n._)("label",{for:"password"},"Password:",-1))),De=we((()=>(0,n._)("br",null,null,-1))),xe=we((()=>(0,n._)("br",null,null,-1))),qe=we((()=>(0,n._)("br",null,null,-1))),Ue=we((()=>(0,n._)("label",{for:"image",class:"image-label"},"Choose Image",-1))),Ce=we((()=>(0,n._)("br",null,null,-1))),Me=we((()=>(0,n._)("br",null,null,-1))),Ee=we((()=>(0,n._)("button",{type:"submit",class:"upload-button"},"Upload Avatar",-1))),Ae={key:0,class:"error-message"},Ie={key:1,class:"success-message"};function Te(e,a,s,r,o,i){return(0,n.wg)(),(0,n.iD)("div",fe,[(0,n._)("div",ve,[ge,(0,n._)("form",{onSubmit:a[3]||(a[3]=(0,t.iM)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"])),action:"https://gokarashta.ewnix.net/upload",method:"post"},[be,_e,(0,n.wy)((0,n._)("input",{type:"text",id:"username","onUpdate:modelValue":a[0]||(a[0]=e=>o.username=e),required:""},null,512),[[t.nr,o.username]]),ye,ke,Pe,De,(0,n.wy)((0,n._)("input",{type:"password",id:"password","onUpdate:modelValue":a[1]||(a[1]=e=>o.password=e),required:""},null,512),[[t.nr,o.password]]),xe,qe,(0,n._)("input",{ref:"imageInput",type:"file",id:"image",onChange:a[2]||(a[2]=(...a)=>e.handleFileUpload&&e.handleFileUpload(...a)),accept:"image/*",required:"",style:{display:"none"}},null,544),Ue,Ce,Me,Ee],32),o.errorMessage?((0,n.wg)(),(0,n.iD)("div",Ae,(0,G.zw)(o.errorMessage),1)):(0,n.kq)("",!0),o.successMessage?((0,n.wg)(),(0,n.iD)("div",Ie,(0,G.zw)(o.successMessage),1)):(0,n.kq)("",!0)])])}var Se={data(){return{username:"",password:"",errorMessage:"",successMessage:""}},methods:{async handleSubmit(){try{const e=new FormData;e.append("username",this.username),e.append("password",this.password),e.append("image",this.$refs.imageInput.files[0]);const a=await de.Z.post("https://gokarashta.ewnix.net/upload",e);"Image uploaded successfully"===a.data?(this.successMessage="Avatar uploaded!",this.errorMessage=""):(this.successMessage="",this.errorMessage="Authentication failed.")}catch(e){this.successMessage="",this.errorMessage="An error occurred. Please try again later."}}}};const Oe=(0,m.Z)(Se,[["render",Te],["__scopeId","data-v-7d141a9c"]]);var Re=Oe;const Ze=e=>((0,n.dD)("data-v-1c2bbba3"),e=e(),(0,n.Cn)(),e),ze={class:"content"},Ne={class:"form-container"},We=Ze((()=>(0,n._)("h2",null,"Password Reset",-1))),je=Ze((()=>(0,n._)("label",{for:"username"},"Username:",-1))),Ve=Ze((()=>(0,n._)("br",null,null,-1))),Be=Ze((()=>(0,n._)("br",null,null,-1))),Fe=Ze((()=>(0,n._)("br",null,null,-1))),He=Ze((()=>(0,n._)("label",{for:"currentPassword"},"Current Password:",-1))),$e=Ze((()=>(0,n._)("br",null,null,-1))),Qe=Ze((()=>(0,n._)("br",null,null,-1))),Ye=Ze((()=>(0,n._)("br",null,null,-1))),Ge=Ze((()=>(0,n._)("label",{for:"newPasssword"},"New Password:",-1))),Ke=Ze((()=>(0,n._)("br",null,null,-1))),Le=Ze((()=>(0,n._)("br",null,null,-1))),Je=Ze((()=>(0,n._)("br",null,null,-1))),Xe=Ze((()=>(0,n._)("label",{for:"confirmNewPassword"},"Confirm New Password:",-1))),ea=Ze((()=>(0,n._)("br",null,null,-1))),aa=Ze((()=>(0,n._)("br",null,null,-1))),sa=Ze((()=>(0,n._)("br",null,null,-1))),ta=Ze((()=>(0,n._)("button",{type:"submit",class:"reset-button"},"Change Password",-1))),na={key:0,class:"error-message"},ra={key:1,class:"success-message"};function oa(e,a,s,r,o,i){return(0,n.wg)(),(0,n.iD)("div",ze,[(0,n._)("div",Ne,[We,(0,n._)("form",{onSubmit:a[4]||(a[4]=(0,t.iM)(((...e)=>i.resetPassword&&i.resetPassword(...e)),["prevent"]))},[je,Ve,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>o.formData.username=e),type:"text",id:"username",name:"username",required:""},null,512),[[t.nr,o.formData.username]]),Be,Fe,He,$e,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>o.formData.currentPassword=e),type:"password",id:"currentPassword",name:"currentPassword",required:""},null,512),[[t.nr,o.formData.currentPassword]]),Qe,Ye,Ge,Ke,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>o.formData.newPassword=e),type:"password",id:"newPassword",name:"newPassword",required:""},null,512),[[t.nr,o.formData.newPassword]]),Le,Je,Xe,ea,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>o.formData.confirmNewPassword=e),type:"password",id:"confirmNewPassword",name:"confirmNewPassword",required:""},null,512),[[t.nr,o.formData.confirmNewPassword]]),aa,sa,ta],32),o.errorMessage?((0,n.wg)(),(0,n.iD)("div",na,(0,G.zw)(o.errorMessage),1)):(0,n.kq)("",!0),e.successMessage?((0,n.wg)(),(0,n.iD)("div",ra,(0,G.zw)(e.successMessage),1)):(0,n.kq)("",!0)])])}var ia={data(){return{formData:{username:"",currentPassword:"",newPassword:"",confirmNewPassword:""},errorMessage:""}},methods:{async resetPassword(){if(this.formData.newPassword===this.formData.confirmNewPassword)try{const e=await de.Z.post("https://goldapresetpwd.ewnix.net/reset",{username:this.formData.username,currentPassword:this.formData.currentPassword,newPassword:this.formData.newPassword});200===e.status&&(alert("Password reset successful!"),this.formData={username:"",currentPassword:"",newPassword:"",confirmNewPassword:""})}catch(e){console.error("There was an error:",e),this.errorMessage="There was an error resetting the password. Please try again."}else this.errorMessage="The new passwords do not match!"}}};const la=(0,m.Z)(ia,[["render",oa],["__scopeId","data-v-1c2bbba3"]]);var ua=la;const ca={class:"content"},da=(0,n.uE)('<h2 data-v-3c987fa4>Staff</h2><p data-v-3c987fa4>CEO: <a class="content-link" href="mailto:phlux@ewnix.net" data-v-3c987fa4>phluxeternus</a></p><p data-v-3c987fa4>Development Operations/Server Administrator: <a class="content-link" href="mailto:steefbew@ewnix.net" data-v-3c987fa4>steefbew</a></p><p data-v-3c987fa4>Development Operations: <a class="content-link" href="mailto:werneta@ewnix.net" data-v-3c987fa4>werneta</a></p><p data-v-3c987fa4>QA: <a class="content-link" href="mailto:karashta@ewnix.net" data-v-3c987fa4>karashta</a></p><p data-v-3c987fa4>QA: <a class="content-link" href="mailto:phr0z3n@ewnix.net" data-v-3c987fa4>phr0z3n</a></p>',6),ma=[da];function pa(e,a){return(0,n.wg)(),(0,n.iD)("div",ca,ma)}const ha={},wa=(0,m.Z)(ha,[["render",pa],["__scopeId","data-v-3c987fa4"]]);var fa=wa;const va=[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:Y},{path:"/request",name:"request",component:he},{path:"/avatar",name:"avatar",component:Re},{path:"/passwdreset",name:"passwdreset",component:ua},{path:"/staff",name:"staff",component:fa}],ga=(0,q.p7)({history:(0,q.PO)("/"),routes:va});var ba=ga;(0,t.ri)(x).use(ba).mount("#app")}},a={};function s(t){var n=a[t];if(void 0!==n)return n.exports;var r=a[t]={exports:{}};return e[t].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(a,t,n,r){if(!t){var o=1/0;for(c=0;c<e.length;c++){t=e[c][0],n=e[c][1],r=e[c][2];for(var i=!0,l=0;l<t.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((function(e){return s.O[e](t[l])}))?t.splice(l--,1):(i=!1,r<o&&(o=r));if(i){e.splice(c--,1);var u=n();void 0!==u&&(a=u)}}return a}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[t,n,r]}}(),function(){s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,{a:a}),a}}(),function(){s.d=function(e,a){for(var t in a)s.o(a,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};s.O.j=function(a){return 0===e[a]};var a=function(a,t){var n,r,o=t[0],i=t[1],l=t[2],u=0;if(o.some((function(a){return 0!==e[a]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(l)var c=l(s)}for(a&&a(t);u<o.length;u++)r=o[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(c)},t=self["webpackChunkewnix_new_new"]=self["webpackChunkewnix_new_new"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=s.O(void 0,[998],(function(){return s(336)}));t=s.O(t)})();
//# sourceMappingURL=app.4ef56e5a.js.map