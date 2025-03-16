(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,e,t){n.exports=t(29)},29:function(n,e,t){"use strict";t.r(e);var r,a=t(0),o=t.n(a),l=t(5),c=t(2);const i=Object(c.b)(r||(r=Object(l.a)(['\n  html {\n    box-sizing: border-box;\n  }\n  *,\n  ::after,\n  ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: "Montserrat", sans-serif;\n    background-color: #eee;\n    word-break: break-all;\n  }\n'])));var d=t(16),s=t.n(d),u=t(6);var b,g,m;const p=c.c.form(b||(b=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n  margin: 10px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]))),x=c.c.input(g||(g=Object(l.a)(["\n  padding: 10px;\n  height: 40px;\n  box-sizing: border-box;\n  font-size: 16px;\n\n  &:active {\n    border: black;\n  }\n\n  @media (max-width: 767px) {\n    height: 40px;\n    font-size: 16px;\n  }\n"]))),h=c.c.button(m||(m=Object(l.a)(["\n  padding: 10px;\n  color: ",";\n  background-color: rgb(2, 128, 128);\n  border: none;\n  transition: transform 0.25s linear, background 0.75s linear;\n  height: 40px;\n  font-size: 16px;\n  box-sizing: border-box;\n\n  &:hover {\n    background-color: rgb(32, 160, 160);\n    transform: scale(1.025);\n    cursor: pointer;\n  }\n\n  &:active {\n    outline: 1px solid teal;\n    color: ",";\n    transform: scale(1);\n  }\n\n  @media (max-width: 767px) {\n    height: 40px;\n    font-size: 16px;\n  }\n"])),n=>{let{theme:e}=n;return e.color.white},n=>{let{theme:e}=n;return e.color.tealButton});var k=t(10),v=t(9);const f=Object(v.b)({name:"tasks",initialState:{tasks:[],hideDone:!1},reducers:{addTask:(n,e)=>{let{payload:t}=e;n.tasks.push(t)},toggleHideDone:n=>{n.hideDone=!n.hideDone},toggleTaskDone:(n,e)=>{let{payload:t}=e;const r=n.tasks.find(n=>{let{id:e}=n;return e===t});r&&(r.done=!r.done)},removeTask:(n,e)=>{let{payload:t}=e;const r=n.tasks.findIndex(n=>{let{id:e}=n;return e===t});-1!==r&&n.tasks.splice(r,1)},setAllDone:n=>{n.tasks=n.tasks.map(n=>Object(k.a)(Object(k.a)({},n),{},{done:!0}))}}}),{addTask:j,toggleHideDone:E,toggleTaskDone:O,removeTask:w,setAllDone:y}=f.actions,z=n=>n.tasks;var D=f.reducer;var C,F,T,$,S=()=>{const[n,e]=Object(a.useState)(""),t=Object(a.useRef)(null),r=Object(u.b)();return o.a.createElement(p,{onSubmit:a=>{a.preventDefault();const o=n.trim();""!==o&&(r(j({content:o,done:!1,id:Object(v.c)()})),e(""),t.current.focus())}},o.a.createElement(x,{ref:t,value:n,placeholder:"Co jest do zrobienia?",onChange:n=>{let{target:t}=n;return e(t.value)}}),o.a.createElement(h,null,"Dodaj zadanie"))};const A=c.c.ul(C||(C=Object(l.a)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n"]))),B=c.c.li(F||(F=Object(l.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 15px;\n  border-bottom: 1px solid #ddd;\n  padding: 10px;\n\n  ","\n"])),n=>{let{$hidden:e}=n;return e&&"display: none;"}),H=c.c.button(T||(T=Object(l.a)(["\n  background-color: ",";\n  border: none;\n  color: ",";\n  width: 30px;\n  height: 30px;\n  margin: 10px;\n  transition: background 0.2s;\n\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  ","\n"])),n=>{let{remove:e}=n;return e?"rgb(239, 24, 42)":"green"},n=>{let{theme:e}=n;return e.color.white},n=>{let{$remove:e}=n;return e?"rgb(255, 80, 80)":"rgb(80, 225, 85)"},n=>{let{$remove:e}=n;return e?"rgb(239, 24, 42)":"rgb(53, 190, 50)"},n=>{let{$remove:e}=n;return e&&"\n      background-color: rgb(251, 6, 6);\n      margin-left: 10px;\n\n      &:hover {\n        background-color: rgb(255, 80, 80);\n      }\n\n      &:active {\n        background-color: rgb(239, 24, 42);\n      }\n    "}),L=c.c.div($||($=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  margin: 20px 0;\n  padding: 10px;\n  background-color: white;\n\n  ","\n"])),n=>{let{$done:e}=n;return e&&"\n      text-decoration: line-through;\n      color: gray;\n    "});var I,P,J,M,R=()=>{const{tasks:n,hideDone:e}=Object(u.c)(z),t=Object(u.b)();return o.a.createElement(A,null,n.map(n=>o.a.createElement(B,{key:n.id,$hidden:e&&n.done},o.a.createElement(H,{onClick:()=>t(O(n.id))},n.done?"\u2714":""),o.a.createElement(L,{$done:n.done},n.content),o.a.createElement(H,{$remove:!0,onClick:()=>t(w(n.id))},"\ud83d\uddd1"))))};const U=c.c.div(I||(I=Object(l.a)(["\n  text-align: right;\n  font-size: 18px;\n"]))),q=c.c.button(P||(P=Object(l.a)(["\n  background-color: rgb(61, 189, 65);\n  border: none;\n  color:  ",";\n  width: 30px;\n  height: 30px;\n  margin: 10px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgb(80, 225, 85);\n    cursor: pointer;\n  }\n\n  &:active {\n    background-color: rgb(53, 190, 50);\n  }\n"])),n=>{let{theme:e}=n;return e.color.white}),G=(Object(c.c)(q)(J||(J=Object(l.a)(["\n  background-color: rgb(251, 6, 6);\n  margin-left: 150 px;\n\n  &:hover {\n    background-color: rgb(255, 80, 80);\n  }\n\n  &:active {\n    background-color: rgb(239, 24, 42);\n  }\n"]))),c.c.button(M||(M=Object(l.a)(["\n  color: ",";\n  background-color: transparent;\n  border: none;\n\n  &:active {\n    color: ",";\n  }\n  &:disabled {\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  @media (max-width: 767px) {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n  }\n"])),n=>{let{theme:e}=n;return e.color.teal},n=>{let{theme:e}=n;return e.color.tealActive},n=>{let{theme:e}=n;return e.color.gray}));var K,N,Q,V=()=>{const{tasks:n,hideDone:e}=Object(u.c)(z),t=Object(u.b)();return o.a.createElement(U,null,n.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{onClick:()=>t(E())},e?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement(G,{disabled:n.every(n=>{let{done:e}=n;return e}),onClick:()=>t(y())},"Uko\u0144cz wszystkie")))};const W=c.c.section(K||(K=Object(l.a)(["\n  margin: 15px 0;\n  background-color: white;\n"]))),X=c.c.h2(N||(N=Object(l.a)(["\n  margin: 0;\n  padding: 20px;\n  border-bottom: 1px solid #ddd;\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n\n  @media (max-width: 767px) {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n"]))),Y=c.c.div(Q||(Q=Object(l.a)(["\n  padding: 15px;\n\n  @media (max-width: 767px) {\n    padding: 20px 15px;\n  }\n"])));var Z=n=>{let{title:e,body:t,extraHeaderContent:r}=n;return o.a.createElement(W,null,o.a.createElement(X,null,e,r),o.a.createElement(Y,null,t))};var _,nn=n=>{let{title:e}=n;return o.a.createElement("header",null,o.a.createElement("h1",null,e))};const en=c.c.div(_||(_=Object(l.a)(["\n  max-width: 900px;\n  padding: 20px;\n  margin: 0 auto;\n  font-size: 14px;\n\n  @media (max-width: 768px) {\n    padding: 15px;\n    font-size: 12px;\n  }\n"])));var tn=n=>{let{children:e}=n;return o.a.createElement(en,null,e)};var rn=function(){return o.a.createElement(tn,null,o.a.createElement(nn,{title:"Lista zada\u0144"}),o.a.createElement(Z,{title:"Dodaj nowe zadanie",body:o.a.createElement(S,null)}),o.a.createElement(Z,{title:"Lista zada\u0144",body:o.a.createElement(R,null),extraHeaderContent:o.a.createElement(V,null)}))};var an=()=>o.a.createElement(rn,null);var on=n=>{n&&n instanceof Function&&t.e(3).then(t.bind(null,30)).then(e=>{let{getCLS:t,getFID:r,getFCP:a,getLCP:o,getTTFB:l}=e;t(n),r(n),a(n),o(n),l(n)})};var ln=Object(v.a)({reducer:{tasks:D}});s.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,{store:ln},o.a.createElement(c.a,{theme:{color:{white:"#FFFFFF",teal:"#038282",tealActive:"#94b9e9",grey:"#808080",tealButton:"#016060"}}},o.a.createElement(i,null),o.a.createElement(an,null))))),on()}},[[19,1,2]]]);
//# sourceMappingURL=main.9c1060bd.chunk.js.map