(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{28:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i=t(0),s=t.n(i),u=t(13),l=t.n(u),d=t(7),b=t(4),f=t(2),m=t(3),p=t(1),j=m.b.div(r||(r=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 2em auto;\n  color: #ffffff;\n  font-size: 1.25rem;\n\n  .current-score,\n  .best-score {\n    padding: 1em;\n    border-radius: 6px;\n    width: 200px;\n    margin: 24px;\n    text-align: center;\n  }\n\n  .current-score {\n    background-color: #0075be;\n  }\n\n  .best-score {\n    background-color: #ffcc00;\n    color: #000000;\n  }\n\n  @media (max-width: 490px) {\n    flex-direction: column;\n\n    .current-score,\n    .best-score {\n      margin: 12px;\n    }\n  }\n"]))),x=function(n){return Object(p.jsxs)(j,{children:[Object(p.jsxs)("p",{className:"current-score",children:["Current Score: ",n.currentScore]}),Object(p.jsxs)("p",{className:"best-score",children:["Best Score: ",n.bestScore]})]})},g=m.b.div(c||(c=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 200px;\n  height: 200px;\n  color: #000000;\n  border-radius: 6px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.07);\n  background-color: #ffcc00;\n  transition: transform 200ms ease-in-out;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.05);\n  }\n\n  img {\n    display: block;\n    margin: 0 auto;\n    width: 96px;\n    height: 96px;\n  }\n\n  p {\n    text-align: center;\n    margin: 0.25em 0;\n    font-size: 1.25rem;\n  }\n"]))),h=function(n){return Object(p.jsxs)(g,{onClick:n.handleCardClick,id:n.id,children:[Object(p.jsx)("img",{src:n.img,alt:n.name}),Object(p.jsx)("p",{children:n.name})]})},O=m.b.div(a||(a=Object(f.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 200px);\n  justify-content: center;\n  gap: 24px;\n\n  @media (max-width: 700px) {\n    grid-template-columns: repeat(auto-fit, 200px);\n  }\n"]))),k=function(n){return Object(p.jsx)(O,{children:n.data.map((function(e,t){return Object(p.jsx)(h,{name:e.name,img:e.img,handleCardClick:n.handleCardClick,id:e.id},t)}))})},v=Object(m.a)(o||(o=Object(f.a)(['\n  * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: "Nunito", sans-serif;\n    }\n\n    body {\n      background-color: #0A285F;\n    }\n\n    .error {\n      color: #ffffff;\n      font-size: 2rem;\n      text-align: center;\n    }\n']))),w=t(11),y=t.n(w),C=t(17),S=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},z=function(n){return n.map((function(n,e){return{name:S(n.name),img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e+1,".png"),id:e+1}}))},A=function(n){var e=Object(i.useState)(null),t=Object(b.a)(e,2),r=t[0],c=t[1];return Object(i.useEffect)((function(){var e=new AbortController,t=function(){var t=Object(C.a)(y.a.mark((function t(){var r,a,o,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(n),{signal:e.signal});case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,o=a.results,i=z(o),c(i),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[n]),[r]},N=function(n,e){if(null!==n){for(var t=Object(d.a)(n),r=t.length-1;r>0;r--){var c=Math.floor(Math.random()*(r+1)),a=t[r];t[r]=t[c],t[c]=a}e(t)}},E=function(){var n=A(9),e=Object(b.a)(n,1)[0],t=Object(i.useState)([]),r=Object(b.a)(t,2),c=r[0],a=r[1],o=Object(i.useState)(0),s=Object(b.a)(o,2),u=s[0],l=s[1],f=Object(i.useState)(0),m=Object(b.a)(f,2),j=m[0],g=m[1],h=Object(i.useState)([]),O=Object(b.a)(h,2),w=O[0],y=O[1];Object(i.useEffect)((function(){N(e,a)}),[e]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)(x,{currentScore:u,bestScore:j}),e?Object(p.jsx)(k,{data:c,handleCardClick:function(n){return function(n,e,t){N(e,t),l((function(n){return n+1})),y([].concat(Object(d.a)(w),[n.currentTarget.id])),w.includes(n.currentTarget.id)&&(u>j&&g(u),l(0),y([]))}(n,c,a)}}):Object(p.jsx)("div",{className:"error",children:"Couldn't fetch Pokemons"})]})};l.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4da4e252.chunk.js.map