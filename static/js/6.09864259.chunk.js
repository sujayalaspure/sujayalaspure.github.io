(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[6],{207:function(n,e,t){},237:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return D}));var r=t(4),i=t(17),o=t(1),c=t(2),a=function(n,e,t){var r=e-n;return((t-n)%r+r)%r+n};var s,l,d,p=t(86),u=t(5),h=t(3),b={open:{y:0,opacity:1,display:"flex",transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,display:"none",transition:{y:{stiffness:1e3}}}};function j(n){var e=n.title;return Object(h.jsx)(x,{variants:b,whileHover:{scale:1.1},whileTap:{scale:.95},children:Object(h.jsxs)("a",{href:"".concat("https://sujayalaspure.github.io/","#").concat(e),children:[Object(h.jsx)(g,{}),Object(h.jsx)(v,{children:e})]})})}var f,x=Object(u.a)(p.a.li)(s||(s=Object(r.a)(["\n  list-style: none;\n  margin-bottom: 30px;\n  cursor: pointer;\n  color: var(--light-slate);\n  transition: var(--transition);\n  a {\n    display: flex;\n    align-items: center;\n  }\n  &:hover {\n    color: var(--accent);\n  }\n"]))),g=u.a.div(l||(l=Object(r.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  /* flex: 20px 0; */\n  margin-right: 40px;\n  border: 2px solid var(--accent);\n"]))),v=u.a.div(d||(d=Object(r.a)(["\n  border-radius: 5px;\n  width: 200px;\n  /* height: 40px; */\n  flex: 1;\n  color: inherit;\n  align-items: center;\n  font-size: var(--fz-lg);\n"]))),O={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}};function y(n){n.isOpen;return Object(h.jsx)(k,{variants:O,children:w.map((function(n){return Object(o.createElement)(j,{title:n,key:n})}))})}var m,w=["About","Work","Experience","Contact"],k=Object(u.a)(p.a.ul)(f||(f=Object(r.a)(["\n\tpadding: 25px;\n\tposition: absolute;\n\ttop: 100px;\n\twidth: 230px;\n"]))),C=t(12),L=t(8),M=function(n){return Object(h.jsx)(p.a.path,Object(C.a)({fill:"transparent",strokeWidth:"3",stroke:L.a.accent,strokeLinecap:"round"},n))};function z(n){var e=n.toggle;return Object(h.jsx)(R,{onClick:e,children:Object(h.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[Object(h.jsx)(M,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),Object(h.jsx)(M,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),Object(h.jsx)(M,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})})}var E,H,R=u.a.button(m||(m=Object(r.a)(["\n  outline: none;\n  border: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  cursor: pointer;\n  position: absolute;\n  top: 18px;\n  left: 15px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: transparent;\n  &:focus {\n    outline: none;\n  }\n"]))),W=(t(207),{open:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return{clipPath:"circle(".concat(2*n+200,"px at 40px 40px)"),transition:{type:"spring",stiffness:20,restDelta:2}}},closed:{clipPath:"circle(30px at 40px 40px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}});function D(){var n=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=Object(o.useRef)(0),r=Object(c.c)(Object(o.useState)(n[t.current]),2),i=r[0],s=r[1];return[i,function(e){t.current="number"!==typeof e?a(0,n.length,t.current+1):e,s(n[t.current])}]}(!1,!0),e=Object(i.a)(n,2),t=e[0],r=e[1],s=Object(o.useRef)(null),l=function(n){var e=Object(o.useRef)({width:0,height:0});return Object(o.useEffect)((function(){e.current.width=n.current.offsetWidth,e.current.height=n.current.offsetHeight}),[]),e.current}(s).height;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(p.a.nav,{initial:!1,animate:t?"open":"closed",custom:l,ref:s,children:[Object(h.jsx)(p.a.div,{className:"background",variants:W}),Object(h.jsx)(y,{isOpen:t}),Object(h.jsx)(z,{toggle:function(){return r()}})]}),Object(h.jsx)("div",{style:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(h.jsx)(J,{children:Object(h.jsx)(P,{children:" Hello sone jhbhv evb s"})})})]})}var J=u.a.div(E||(E=Object(r.a)(["\n  /* background-color: white; */\n  padding: 20px;\n  width: 100%;\n"]))),P=u.a.button(H||(H=Object(r.a)(['\n  background-color: transparent;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  outline: none;\n  border: none;\n  padding: 0.75rem 1rem;\n  color: var(--slate);\n\n  &::before {\n    content: "";\n    border: 1px solid var(--accent);\n    display: block;\n    position: absolute;\n    inset: 0;\n    height: 100%;\n    width: 50px;\n    border-radius: 32px;\n    z-index: -1;\n    background-color: var(--accent-tint);\n\n    transition: width 200ms;\n  }\n\n  &:hover::before {\n    /* background-color: red; */\n    width: 100%;\n  }\n'])))}}]);