(this["webpackJsonpgoogle-docs-clone"]=this["webpackJsonpgoogle-docs-clone"]||[]).push([[0],{40:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(34),s=n.n(c),i=(n(40),n(11)),l=n(8),u=n(26),o=n(16),j=n(3),b=n(6),d=n.n(b),p=n(7),m=n(24);n(42),n(52),n(51);m.a.initializeApp({apiKey:"AIzaSyB7zTYmhFI7Ygvhf_f1VTHTWAAGN9VlJoI",authDomain:"forms-clone-127b9.firebaseapp.com",projectId:"forms-clone-127b9",storageBucket:"forms-clone-127b9.appspot.com",messagingSenderId:"356296216795",appId:"1:356296216795:web:df779d62a4322f75a43cfe"});var h=m.a.auth(),O=m.a.firestore(),x=m.a.storage(),f=function(){var e=Object(p.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.createUserWithEmailAndPassword(t.trim(),n.trim()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.signInWithEmailAndPassword(t.trim(),n.trim()));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){return localStorage.setItem("gfc-user",""),h.signOut()},N=function(e){var t=JSON.parse(localStorage.getItem("gfc-user"));return O.collection("forms").add(Object(o.a)(Object(o.a)({},e),{},{uid:t.uid}))},y=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("gfc-user")),e.next=3,O.collection("forms").get({uid:t.uid});case 3:return n=(n=e.sent).docs,r=n.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("forms").get(t);case 2:return n=e.sent,r=n.docs[0],r=Object(o.a)(Object(o.a)({},r.data()),{},{id:r.id}),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("submissions").where("formId","==",t).get();case 2:n=(n=e.sent).docs,r=Object(u.a)(n),e.prev=5,r.s();case 7:if((a=r.n()).done){e.next=13;break}return c=a.value,e.next=11,O.collection("submissions").doc(c.id).delete();case 11:e.next=7;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:return e.abrupt("return",O.collection("forms").doc(t).delete());case 22:case"end":return e.stop()}}),e,null,[[5,15,18,21]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){return x.ref("files/"+t).put(e)},C=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("submissions").get(t);case 2:return n=(n=e.sent).docs,r=n.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})),console.log(r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=n(1);var E=function(){var e=function(){var e=Object(r.useState)({}),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){h.onAuthStateChanged((function(e){return a(e)}))}),[]),n}(),t=Object(l.g)(),n=Object(l.f)();return Object(r.useEffect)((function(){e?(localStorage.setItem("gfc-user",JSON.stringify(e)),"/signup"!==t.pathname&&"/login"!==t.pathname||n.push("/")):"/create"!==t.pathname&&"/forms"!==t.pathname&&"/submissions"!==t.pathname.slice(0,12)||n.push("/login")}),[e,t,n]),Object(q.jsxs)("div",{className:"navbar container",children:[Object(q.jsx)("a",{href:"/",className:"brand",children:"WM Surveys"}),Object(q.jsx)("nav",{className:"nav",children:e?Object(q.jsxs)("span",{children:[Object(q.jsx)(i.b,{to:"/forms",children:"my surveys"}),Object(q.jsx)(i.b,{to:"/create",children:"create"}),Object(q.jsx)("span",{onClick:g,children:"logout"})]}):Object(q.jsxs)("span",{children:[Object(q.jsx)(i.b,{to:"/signup",children:"signup"}),Object(q.jsx)(i.b,{to:"/login",children:"login"})]})})]})};var T=function(){return Object(q.jsx)("div",{className:"footer container",children:Object(q.jsxs)("div",{children:[Object(q.jsx)("a",{href:"/",className:"title mr-1",children:"WM Surveys"}),Object(q.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()]})]})})};var I=function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)("div",{className:"section",children:Object(q.jsxs)("div",{className:"content",children:[Object(q.jsx)("h1",{children:"Welcome to WM Surveys!"}),Object(q.jsx)("p",{children:"Join us now to create a survey and share it with others to see their responses!"}),Object(q.jsx)(i.b,{to:"/create",className:"btn",children:"get started"})]})}),Object(q.jsx)("div",{className:"section"})]})};var A=function(e){var t=e.inputType,n=e.add,a=e.close,c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(""),o=Object(j.a)(u,2),b=o[0],d=o[1],p=Object(r.useState)(!1),m=Object(j.a)(p,2),h=m[0],O=m[1];return Object(q.jsxs)("div",{children:[Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Enter field title"}),Object(q.jsx)("input",{type:"text",placeholder:"Eg. Enter your ".concat("short-text"===t?"Username":"long-text"===t?"information":"age"),onChange:function(e){return d(e.target.value)}})]}),Object(q.jsxs)("div",{className:"input inline",children:[Object(q.jsx)("label",{children:"Required: "}),Object(q.jsx)("input",{type:"checkbox",onChange:function(){return O(!h)}})]}),i&&Object(q.jsx)("p",{className:"err mb-1",children:i}),Object(q.jsx)("button",{className:"btn",onClick:function(){return b.trim()?b.trim().length<3?l("Title should be atleast 3 characters long"):(n({title:b,required:h,type:t}),void a()):l("Title is required")},children:"add field"})]})},D=n(19);var M=function(e){var t=e.inputType,n=e.add,a=e.close,c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(""),o=Object(j.a)(u,2),b=o[0],d=o[1],p=Object(r.useState)(""),m=Object(j.a)(p,2),h=m[0],O=m[1],x=Object(r.useState)(!1),f=Object(j.a)(x,2),v=f[0],g=f[1],N=Object(r.createRef)(),y=Object(r.useState)([]),w=Object(j.a)(y,2),k=w[0],S=w[1],C=Object(r.useState)(""),E=Object(j.a)(C,2),T=E[0],I=E[1];return Object(q.jsxs)("div",{children:[Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Enter field title"}),Object(q.jsx)("input",{type:"text",placeholder:"Eg. Select your ".concat("multioption-multianswer"===t?"skills":"gender"),onChange:function(e){return O(e.target.value)}})]}),k.length>0&&Object(q.jsxs)("div",{className:"mb-1",children:[Object(q.jsx)("p",{className:"b",children:"Options"}),k.map((function(e,n){return Object(q.jsxs)("div",{className:"input inline mb-0",children:[Object(q.jsx)("input",{type:"multioption-singleanswer"===t?"radio":"checkbox",className:"mr-1",name:"inputs"}),Object(q.jsx)("label",{children:e})]},n)}))]}),Object(q.jsxs)("div",{className:"input grey-container p-1",children:[Object(q.jsx)("input",{type:"text",className:"mb-1",placeholder:"Enter a option",onChange:function(e){return I(e.target.value)},ref:N}),b&&Object(q.jsx)("p",{className:"err mb-1 text-small",children:b}),Object(q.jsx)("button",{class:"btn",onClick:function(){if(!T.trim())return d("Option is required");var e=Object(D.a)(k);e.push(T),I(""),S(e),N.current.value="",d("")},children:"Add Option"})]}),Object(q.jsxs)("div",{className:"input inline",children:[Object(q.jsx)("label",{children:"Required: "}),Object(q.jsx)("input",{type:"checkbox",onChange:function(){return g(!v)}})]}),i&&Object(q.jsx)("p",{className:"err mb-1",children:i}),Object(q.jsx)("button",{className:"btn",onClick:function(){return h.trim()?h.trim().length<4?l("Title should be atleast 4 characters long"):k.length<1?l("Atleast one option is required"):(n({title:h,required:v,options:k,type:t}),void a()):l("Title is required")},children:"add field"})]})},P=n(27),F=function(e,t,n,r){var a=Object.assign({},t);a[n]=r,e(a)},W=function(e,t,n,r,a){var c=Object(D.a)(t);c[n]=Object.assign({},c[n],Object(P.a)({},r,a)),e(c)},z=function(e,t){var n=e.indexOf(t);n>-1?e.splice(n,1):e.push(t)},J=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},U=function(e){var t=[];for(var n in e){var r=e[n];if(r.value&&!(r.value.length<1)){var a={title:r.title,value:r.value,type:r.type};t.push(a)}}return t},B=function(e){var t,n=Object(u.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.required||r.value.trim())if(["short-text","long-text","number","file"].indexOf(r.type)>-1){if(r.required&&!r.value.trim())return"'".concat(r.title,"' is a required field")}else if(r.required&&r.value.length<1)return"'".concat(r.title,"' is a required field")}}catch(a){n.e(a)}finally{n.f()}return!1};var L=function(e){var t=e.inputType,n=e.add,a=e.close,c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(""),o=Object(j.a)(u,2),b=o[0],d=o[1],p=Object(r.useState)(!1),m=Object(j.a)(p,2),h=m[0],O=m[1],x=Object(r.useState)([]),f=Object(j.a)(x,2),v=f[0],g=f[1];return Object(q.jsxs)("div",{children:[Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Enter survey title"}),Object(q.jsx)("input",{type:"text",placeholder:"Eg. All about you",onChange:function(e){return d(e.target.value)}})]}),Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Select acceptable file types"}),Object(q.jsx)("div",{className:"inline-inputs",children:["jpg","png","jpeg","pdf","txt"].map((function(e,t){return Object(q.jsxs)("div",{className:"input inline",children:[Object(q.jsx)("input",{type:"checkbox",className:"mr-1",onChange:function(){return function(e){var t=Object(D.a)(v);z(t,e),g(t)}(e)}}),Object(q.jsxs)("label",{children:[".",e]})]},t)}))})]}),Object(q.jsxs)("div",{className:"input inline",children:[Object(q.jsx)("label",{children:"Required: "}),Object(q.jsx)("input",{type:"checkbox",onChange:function(){return O(!h)}})]}),i&&Object(q.jsx)("p",{className:"err mb-1",children:i}),Object(q.jsx)("button",{className:"btn",onClick:function(){return b.trim()?b.trim().length<4?l("Title should be atleast 4 characters long"):v.length?(n({title:b,required:h,type:t,accepted:v}),void a()):l("Select atleast one file type"):l("Title is required")},children:"add field"})]})};var R=function(e){var t=e.inputType,n=e.add,r=e.close;return Object(q.jsx)("div",{className:"modal",children:Object(q.jsxs)("div",{className:"modal-content",children:[Object(q.jsx)("span",{className:"close",onClick:r,children:"\xd7"}),["short-text","long-text","number"].indexOf(t)>-1?Object(q.jsx)(A,{inputType:t,add:n,close:r}):["multioption-singleanswer","multioption-multianswer"].indexOf(t)>-1?Object(q.jsx)(M,{inputType:t,add:n,close:r}):"file"===t?Object(q.jsx)(L,{inputType:t,add:n,close:r}):Object(q.jsx)("p",{children:"Unknown type"})]})})};var Y=function(e){var t=e.model;return Object(q.jsxs)("div",{className:"grey-container mb-1",children:[Object(q.jsx)("h1",{className:"mb-1",children:"Preview"}),t.fields.map((function(e,t){return"short-text"===e.type||"number"===e.type?Object(q.jsxs)("div",{className:"input",children:[Object(q.jsxs)("label",{children:[e.title,e.required&&Object(q.jsx)("span",{className:"err",children:"*"})]}),Object(q.jsx)("input",{type:e.type})]},t):"long-text"===e.type?Object(q.jsxs)("div",{className:"input",children:[Object(q.jsxs)("label",{children:[e.title,e.required&&Object(q.jsx)("span",{className:"err",children:"*"})]}),Object(q.jsx)("textarea",{})]},t):"file"===e.type?Object(q.jsxs)("div",{className:"input",children:[Object(q.jsxs)("label",{children:[e.title,e.required&&Object(q.jsx)("span",{className:"err",children:"*"})]}),Object(q.jsx)("input",{type:"file"})]},t):"multioption-singleanswer"===e.type||"multioption-multianswer"===e.type?Object(q.jsxs)("div",{className:"input",children:[Object(q.jsxs)("label",{children:[e.title,e.required&&Object(q.jsx)("span",{className:"err",children:"*"})]}),e.options.map((function(t,n){return Object(q.jsxs)("div",{className:"input inline",children:[Object(q.jsx)("input",{type:"multioption-singleanswer"===e.type?"radio":"checkbox",className:"mr-1",name:e.title.replace(" ","")}),Object(q.jsx)("label",{children:t})]},n)}))]},t):Object(q.jsx)("p",{children:"Unknown fiel type."},t)})),Object(q.jsx)("button",{className:"btn mt-1",children:"submit"})]})};var V=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("text"),s=Object(j.a)(c,2),i=s[0],u=s[1],o=Object(r.useState)(""),b=Object(j.a)(o,2),m=b[0],h=b[1],O=Object(r.useState)(!1),x=Object(j.a)(O,2),f=x[0],v=x[1],g=Object(l.f)(),y=Object(r.useState)({title:"",createdAt:+new Date,fields:[{title:"Enter your email",type:"short-text",required:!0}],endMessage:"",expiration:""}),w=Object(j.a)(y,2),k=w[0],S=w[1],C=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=2;break}return e.abrupt("return");case 2:if(h(""),k.title.trim()){e.next=5;break}return e.abrupt("return",h("Title is required"));case 5:if(!(k.title.trim().length<5||k.title.trim().length>50)){e.next=7;break}return e.abrupt("return",h("Title should be 5 - 50 characters long"));case 7:if(!(k.expiration.trim()&&k.expiration<1)){e.next=9;break}return e.abrupt("return",h("Validity should be at least an hour"));case 9:if(!(k.fields.length<2)){e.next=11;break}return e.abrupt("return",h("You need to add at least one field"));case 11:return v(!0),e.prev=12,e.next=15,N(k);case 15:v(!1),g.push("/forms"),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(12),h(e.t0.message),v(!1);case 23:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{className:"heading",children:"Create new form"}),Object(q.jsxs)("div",{className:"form",children:[Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Title of the from"}),Object(q.jsx)("input",{type:"text",placeholder:"Enter title",onChange:function(e){return F(S,k,"title",e.target.value)}})]}),k.fields.length>0&&Object(q.jsx)(Y,{model:k}),Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"End message"}),Object(q.jsx)("input",{type:"text",placeholder:"What should user see after submitting the form",onChange:function(e){return F(S,k,"endMessage",e.target.value)}})]}),Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Validity(Optonal)"}),Object(q.jsx)("input",{type:"number",placeholder:"For how many hours the form should be fillable",onKeyDown:function(e){"."!==e.key&&"-"!==e.key||e.preventDefault()},onChange:function(e){return F(S,k,"expiration",e.target.value)}})]})]}),Object(q.jsxs)("p",{className:"mb-2 text-right",children:[m&&Object(q.jsx)("p",{className:"err text-right mb-1",children:m}),Object(q.jsx)("button",{className:"btn",onClick:C,children:f?Object(q.jsx)("span",{className:"spinner white"}):Object(q.jsx)("span",{children:"create form"})})]}),Object(q.jsxs)("div",{className:"add-field-container grey-container",children:[Object(q.jsx)("p",{children:"Add new field"}),["short-text","long-text","number","multioption-singleanswer","multioption-multianswer","file"].map((function(e,t){return Object(q.jsx)("button",{className:"btn",onClick:function(){return function(e){a(!0),u(e)}(e)},children:e.replace("-"," ")},t)}))]}),n&&Object(q.jsx)(R,{inputType:i,close:function(){return a(!1)},add:function(e){var t=Object.assign({},k);t.fields.push(e),S(t)}})]})};var _=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(j.a)(c,2),l=s[0],u=s[1],o=Object(r.useState)(""),b=Object(j.a)(o,2),m=b[0],h=b[1],O=Object(r.useState)(!1),x=Object(j.a)(O,2),f=x[0],g=x[1],N=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!f){e.next=3;break}return e.abrupt("return");case 3:if(h(""),n.trim()){e.next=6;break}return e.abrupt("return",h("Email is required"));case 6:if(J(n)){e.next=8;break}return e.abrupt("return",h("Email is not valid"));case 8:if(l.trim()){e.next=10;break}return e.abrupt("return",h("Password is required"));case 10:if(!(l.trim().length<6||l.trim().length>20)){e.next=12;break}return e.abrupt("return",h("Password should be 6 - 20 characters long"));case 12:return g(!0),e.prev=13,e.next=16,v(n,l);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(13),g(!1),h(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[13,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("form",{onSubmit:N,children:[Object(q.jsx)("h1",{className:"heading mb-1",children:"Login below"}),Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Email"}),Object(q.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(e){return a(e.target.value)}})]}),Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Password"}),Object(q.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:function(e){return u(e.target.value)}})]}),m&&Object(q.jsx)("p",{className:"err mb-1",children:m}),Object(q.jsx)(i.b,{to:"/signup",className:"alt",children:"don't have an account?"}),Object(q.jsx)("button",{className:"btn",type:"submit",children:f?Object(q.jsx)("span",{className:"spinner white"}):Object(q.jsx)("span",{children:"login"})})]})};var K=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(j.a)(c,2),l=s[0],u=s[1],o=Object(r.useState)(""),b=Object(j.a)(o,2),m=b[0],h=b[1],O=Object(r.useState)(""),x=Object(j.a)(O,2),v=x[0],g=x[1],N=Object(r.useState)(!1),y=Object(j.a)(N,2),w=y[0],k=y[1],S=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!w){e.next=3;break}return e.abrupt("return");case 3:if(g(""),n.trim()){e.next=6;break}return e.abrupt("return",g("Email is required"));case 6:if(J(n)){e.next=8;break}return e.abrupt("return",g("Email is not valid"));case 8:if(l.trim()){e.next=10;break}return e.abrupt("return",g("Password is required"));case 10:if(!(l.trim().length<6||l.trim().length>20)){e.next=12;break}return e.abrupt("return",g("Password should be 6 - 20 characters long"));case 12:if(m.trim()){e.next=14;break}return e.abrupt("return",g("Confirm your password"));case 14:if(l===m){e.next=16;break}return e.abrupt("return",g("Passwords do not match"));case 16:return k(!0),e.prev=17,e.next=20,f(n,l);case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(17),k(!1),g(e.t0.message);case 26:case"end":return e.stop()}}),e,null,[[17,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("form",{onSubmit:S,children:[Object(q.jsx)("h1",{className:"heading mb-1",children:"Create a new account"}),Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Email"}),Object(q.jsx)("input",{type:"email",placeholder:"Enter your email",onChange:function(e){return a(e.target.value)}})]}),Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Password"}),Object(q.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:function(e){return u(e.target.value)}})]}),Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:"Confirm"}),Object(q.jsx)("input",{type:"password",placeholder:"Confirm your password",onChange:function(e){return h(e.target.value)}})]}),v&&Object(q.jsx)("p",{className:"err mb-1",children:v}),Object(q.jsx)(i.b,{to:"/login",className:"alt",children:"already have an account?"}),Object(q.jsx)("button",{className:"btn",type:"submit",children:w?Object(q.jsx)("span",{className:"spinner white"}):Object(q.jsx)("span",{children:"create account"})})]})};var Z=function(e){var t,n=e.form,a=e.onDelete,c=Object(r.useState)(!1),s=Object(j.a)(c,2),l=s[0],u=s[1],o=Object(r.useState)(!1),b=Object(j.a)(o,2),m=b[0],h=b[1],O=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure you want to delete this form?")){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.next=5,k(n.id);case 5:h(!1),a(n.id);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{className:"card",children:[Object(q.jsxs)("h2",{className:"title mb-1",children:[Object(q.jsx)("span",{children:n.title}),Object(q.jsx)("span",{className:"card-date",children:(t=n.createdAt,new Date(t).toLocaleString())})]}),Object(q.jsx)("a",{href:"".concat(window.location.origin,"/fill/").concat(n.id),rel:"noreferrer",className:"link mb-1",target:"_blank",children:"".concat(window.location.origin,"/fill/").concat(n.id)}),Object(q.jsxs)("p",{className:"card-nav",children:[Object(q.jsx)("span",{className:"nav-item",onClick:function(){return u(!0)},children:"preview"}),Object(q.jsx)(i.b,{to:"/submissions/"+n.id,className:"nav-item",children:"submissions"}),Object(q.jsx)("span",{className:"nav-item",onClick:O,children:m?Object(q.jsx)("span",{className:"spinner red"}):Object(q.jsx)("span",{children:"delete"})})]}),l&&Object(q.jsx)("div",{className:"modal",children:Object(q.jsxs)("div",{className:"modal-content preview",children:[Object(q.jsx)("span",{className:"close",onClick:function(){return u(!1)},children:"\xd7"}),Object(q.jsx)(Y,{model:n})]})})]})};var G=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],l=s[1],u=Object(r.useState)(!0),o=Object(j.a)(u,2),b=o[0],m=o[1];Object(r.useEffect)((function(){localStorage.getItem("gfc-user")&&function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:t=e.sent,a(t),m(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),m(!1),l(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var h=function(e){a(n.filter((function(t){return t.id!==e})))};return Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{className:"heading",children:"My Surveys"}),b?Object(q.jsx)("p",{className:"text-center mt-1",children:Object(q.jsx)("span",{className:"spinner"})}):i?Object(q.jsx)("h3",{className:"msg mt-1",children:i}):Object(q.jsx)("div",{className:"cards-container",children:n.length>0?n.map((function(e){return Object(q.jsx)(Z,{form:e,onDelete:h},e.id)})):Object(q.jsx)("h3",{className:"msg mt-1",children:"You haven't created any forms yet"})})]})};var H=function(e){var t=e.fieldModel,n=e.onSelected,a=Object(r.useState)([]),c=Object(j.a)(a,2),s=c[0],i=c[1];return Object(q.jsxs)("div",{className:"input",children:[Object(q.jsxs)("label",{children:[t.title,t.required&&Object(q.jsx)("span",{className:"err",children:"*"})]}),t.options.map((function(e,r){return Object(q.jsxs)("div",{className:"input inline",children:[Object(q.jsx)("input",{type:"multiple choice"===t.type?"checkbox":"radio",className:"mr-1",name:t.title.replace(" ",""),onChange:function(){return function(e){var r=Object(D.a)(s);"multple choice"===t.type?z(r,e):r=[e],i(r),n(r)}(e)}}),Object(q.jsx)("label",{children:e})]},r)}))]})};var $=function(e){var t=e.fieldModel,n=e.onCompleted,a=Object(r.useState)(""),c=Object(j.a)(a,2),s=c[0],i=c[1],l=Object(r.useState)(0),u=Object(j.a)(l,2),o=u[0],b=u[1],m=Object(r.useState)(!1),h=Object(j.a)(m,2),O=h[0],x=h[1],f=Object(r.useState)(""),v=Object(j.a)(f,2),g=v[0],N=v[1],y=function(){var e=Object(p.a)(d.a.mark((function e(r){var a,c,s,l,u,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(""),b(0),a=r.target.files[0],c=a.name.split(".").pop().toLowerCase(),a){e.next=6;break}return e.abrupt("return");case 6:if(-1!==t.accepted.indexOf(c)){e.next=8;break}return e.abrupt("return",N("Choose file with thoe following extensions: "+t.accepted.join(", ")));case 8:if(!(a.size>2097152)){e.next=10;break}return e.abrupt("return",N("File size should be less than than 2MB"));case 10:return x(!0),i(a.name),s=+new Date+"-"+a.name,(l=S(a,s)).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;b(t)}),(function(e){return N(e.message)})),e.next=17,l;case 17:return u=e.sent,e.next=20,u.ref.getDownloadURL();case 20:o=e.sent,n(o);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{className:"input",children:[Object(q.jsxs)("label",{children:[t.title,t.required&&Object(q.jsx)("span",{className:"err",children:"*"})]}),Object(q.jsxs)("div",{className:"file-field",children:[Object(q.jsx)("input",{type:"file",className:"file",id:t.title.replace(" ",""),onChange:y}),Object(q.jsx)("label",{className:"btn",htmlFor:t.title.replace(" ",""),children:"choose file"}),Object(q.jsx)("span",{children:s})]}),O&&Object(q.jsx)("div",{className:"progress-bar",children:Object(q.jsx)("div",{className:"progress",style:{width:o+"%"}})}),g&&Object(q.jsx)("p",{className:"err",children:g})]})};var Q=function(e){var t=e.model,n=e.onSubmitted,a=Object(r.useState)(function(e){var t=[],n=e.fields;for(var r in n){var a=n[r];t.push(Object(o.a)(Object(o.a)({},a),{},{value:"multioption-singleanswer"===a.type||"multioption-multianswer"===a.type?[]:""}))}return t}(t)),c=Object(j.a)(a,2),s=c[0],i=c[1],l=Object(r.useState)(!1),u=Object(j.a)(l,2),b=u[0],m=u[1],h=Object(r.useState)(""),x=Object(j.a)(h,2),f=x[0],v=x[1],g=function(){var e=Object(p.a)(d.a.mark((function e(){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(""),!b){e.next=3;break}return e.abrupt("return");case 3:if(!(r=B(s,t.id))){e.next=6;break}return e.abrupt("return",v(r));case 6:return m(!0),a=U(s),e.prev=8,e.next=11,c=a,i=t.id,O.collection("submissions").add({submission:c,formId:i});case 11:m(!1),n(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),v(e.t0.message),m(!1);case 19:case"end":return e.stop()}var c,i}),e,null,[[8,15]])})));return function(){return e.apply(this,arguments)}}();return Object(q.jsxs)("div",{className:"main-form mt-1",children:[s.map((function(e,t){return["short-text","number"].indexOf(e.type)>-1?Object(q.jsxs)("div",{className:"input",children:[Object(q.jsxs)("label",{children:[e.title,e.required&&Object(q.jsx)("span",{className:"err",children:"*"})]}),Object(q.jsx)("input",{type:"number"===e.type?"number":"text",onChange:function(e){return W(i,s,t,"value",e.target.value)}})]},t):"long-text"===e.type?Object(q.jsxs)("div",{className:"input",children:[Object(q.jsxs)("label",{children:[e.title,e.required&&Object(q.jsx)("span",{className:"err",children:"*"})]}),Object(q.jsx)("textarea",{onChange:function(e){return W(i,s,t,"value",e.target.value)}})]},t):"multioption-singleanswer"===e.type||"multioption-multianswer"===e.type?Object(q.jsx)(H,{fieldModel:e,onSelected:function(e){return W(i,s,t,"value",e)}},t):"file"===e.type?Object(q.jsx)($,{fieldModel:e,onCompleted:function(e){return W(i,s,t,"value",e)}},t):Object(q.jsx)("p",{children:"Unknown field type"},t)})),f&&Object(q.jsx)("p",{className:"err mb-1",children:f}),Object(q.jsx)("button",{className:"btn",onClick:g,children:b?Object(q.jsx)("span",{className:"spinner white"}):Object(q.jsx)("span",{children:"submit"})})]})};var X=function(){var e,t,n=Object(l.h)().id,a=Object(r.useState)(null),c=Object(j.a)(a,2),s=c[0],i=c[1],u=Object(r.useState)(""),o=Object(j.a)(u,2),b=o[0],m=o[1],h=Object(r.useState)(!1),O=Object(j.a)(h,2),x=O[0],f=O[1],v=Object(r.useState)(!0),g=Object(j.a)(v,2),N=g[0],y=g[1];return Object(r.useEffect)((function(){localStorage.getItem("gfc-user")&&function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w({id:n});case 3:t=e.sent,i(t),y(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),y(!1),m(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[n]),Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{className:"heading",children:s?s.title:"Fill in the form"}),N?Object(q.jsx)("p",{className:"text-center mt-1",children:Object(q.jsx)("span",{className:"spinner"})}):b?Object(q.jsx)("h3",{className:"msg mt-1",children:b}):x?Object(q.jsx)("h3",{className:"msg mt-1",children:s?s.endMessage||"Thank you for submitting the form":"Unknown state"}):s?t&&+new Date-e<60*parseInt(t)*60*1e3?Object(q.jsx)("h3",{className:"msg mt-1",children:"This form has been expired"}):Object(q.jsx)(Q,{model:s,onSubmitted:function(){return f(!0)}}):Object(q.jsx)("h3",{className:"msg mt-1",children:"Form not found"})]})};var ee=function(e){var t=e.submission;return Object(q.jsx)("div",{className:"card",children:t.map((function(e,t){return Object(q.jsxs)("div",{className:"input",children:[Object(q.jsx)("label",{children:e.title}),"multioption-singleanswer"===e.type||"multioption-multianswer"===e.type?e.value.map((function(e,t){return Object(q.jsxs)("p",{className:"li",children:["- ",e]},t)})):"file"===e.type?Object(q.jsx)("a",{href:e.value,download:!0,className:"link",children:e.value}):Object(q.jsx)("p",{children:e.value})]})}))})};var te=function(){var e=Object(r.useState)(!0),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],u=s[1],o=Object(r.useState)([]),b=Object(j.a)(o,2),m=b[0],h=b[1],O=Object(l.h)().id;return Object(r.useEffect)((function(){localStorage.getItem("gfc-user")&&function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C({formID:O});case 3:t=e.sent,h(t),a(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),a(!1),u(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[O]),Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{className:"heading mb-1",children:"Form Submissions"}),n?Object(q.jsx)("p",{className:"text-center mt-1",children:Object(q.jsx)("span",{className:"spinner"})}):i?Object(q.jsx)("h3",{className:"msg mt-1",children:i}):m.length>0?Object(q.jsx)("div",{className:"cards-container submissions",children:m.map((function(e,t){return Object(q.jsx)(ee,{submission:e.submission},t)}))}):Object(q.jsx)("h3",{className:"msg mt-1",children:"No submissions yet"})]})};var ne=function(){return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsxs)(i.a,{children:[Object(q.jsx)(E,{}),Object(q.jsx)("div",{className:"container main",children:Object(q.jsxs)(l.c,{children:[Object(q.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(q.jsx)(l.a,{path:"/create",component:V}),Object(q.jsx)(l.a,{path:"/login",component:_}),Object(q.jsx)(l.a,{path:"/signup",component:K}),Object(q.jsx)(l.a,{path:"/forms",component:G}),Object(q.jsx)(l.a,{path:"/fill/:id",component:X}),Object(q.jsx)(l.a,{path:"/submissions/:id",component:te})]})})]}),Object(q.jsx)(T,{})]})};s.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(ne,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.fc3cb0d6.chunk.js.map