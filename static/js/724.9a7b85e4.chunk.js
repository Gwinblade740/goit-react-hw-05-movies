"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[724],{588:function(n,e,t){var r=t(861),i=t(757),a=t.n(i),o=t(243);function c(){return(c=(0,r.Z)(a().mark((function n(e,t){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"ccb4b84fe6a2fe23dccdfdc3b96290a5",r=new URLSearchParams({api_key:"ccb4b84fe6a2fe23dccdfdc3b96290a5",query:t,language:"en - US",page:1}),n.next=5,o.Z.get("https://api.themoviedb.org/3/".concat(e,"?").concat(r));case 5:if(200!==!(i=n.sent).status){n.next=8;break}throw new Error(i.status);case 8:return n.next=10,i.data;case 10:return n.abrupt("return",n.sent);case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}e.Z=function(n,e){return c.apply(this,arguments)}},724:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,i,a,o,c,s,u=t(439),l=t(588),d=t(791),p=t(87),f=t(689),h=t(168),b=t(444),x=t(128),g=b.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  border-color: blue;\n  border-style: inset;\n  overflow: hidden;\n"]))),m=b.ZP.input(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),v=b.ZP.button(a||(a=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  /* opacity: 0.6; */\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  /* cursor: pointer; */\n  outline: none;\n\n  /* &:hover {\n    opacity: 1;\n  } */\n"]))),Z=(0,b.ZP)(x.G4C)(o||(o=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),k=b.ZP.ul(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),y=(0,b.ZP)(p.OL)(s||(s=(0,h.Z)(["\n  padding: 8px 10px;\n"]))),w=t(184),j=function(){var n=(0,p.lr)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=t.get("query")||"",a=(0,d.useState)(null),o=(0,u.Z)(a,2),c=o[0],s=o[1],h=(0,f.TH)();(0,d.useEffect)((function(){if(""===i)return s(null);(0,l.Z)("search/movie",i).then((function(n){s(n.results)}))}),[i]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{type:"submit",disabled:!0,children:(0,w.jsx)(Z,{})}),(0,w.jsx)(m,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:i,onChange:function(n){var e=n.target.value,t=""!==e.trim()?{query:e}:{};r(t)}})]}),(0,w.jsx)(k,{children:c&&c.map((function(n){return(0,w.jsx)(y,{to:"/movies/".concat(n.id),state:h,children:n.title},n.id)}))})]})},P=function(){return(0,w.jsxs)("main",{children:[(0,w.jsx)(j,{}),(0,w.jsx)(f.j3,{})]})}}}]);
//# sourceMappingURL=724.9a7b85e4.chunk.js.map