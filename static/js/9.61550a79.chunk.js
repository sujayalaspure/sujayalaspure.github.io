(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[9],{119:function(e,t){},189:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var r=n(13),a=n(1),o=n(0),i=function(e,t,n){var r=t-e;return((n-e)%r+r)%r+e};var s,c,l,p=n(64),m=n(68),u=n(70),d=n(2),x={open:{y:0,opacity:1,display:"flex",transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,display:"none",transition:{y:{stiffness:1e3}}}};function f(e){var t=e.title;return Object(d.jsx)(g,{variants:x,whileHover:{scale:1.1},whileTap:{scale:.95},children:Object(d.jsxs)("a",{href:"".concat("https://alaspuresujay.github.io/","#").concat(t),children:[Object(d.jsx)(h,{}),Object(d.jsx)(j,{children:t})]})})}var b,g=Object(u.a)(p.a.li)(s||(s=Object(m.a)(["\n\tlist-style: none;\n\tmargin-bottom: 30px;\n\tcursor: pointer;\n\tcolor: var(--light-slate);\n\ttransition: var(--transition);\n\ta {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t&:hover {\n\t\tcolor: var(--accent);\n\t}\n"]))),h=u.a.div(c||(c=Object(m.a)(["\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 50%;\n\t/* flex: 20px 0; */\n\tmargin-right: 40px;\n\tborder: 2px solid var(--accent);\n"]))),j=u.a.div(l||(l=Object(m.a)(["\n\tborder-radius: 5px;\n\twidth: 200px;\n\t/* height: 40px; */\n\tflex: 1;\n\tcolor: inherit;\n\talign-items: center;\n\tfont-size: var(--fz-lg);\n"]))),v={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}};function O(e){e.isOpen;return Object(d.jsx)(k,{variants:v,children:w.map((function(e){return Object(a.createElement)(f,{title:e,key:e})}))})}var y,w=["About","Work","Experience","Contact"],k=Object(u.a)(p.a.ul)(b||(b=Object(m.a)(["\n\tpadding: 25px;\n\tposition: absolute;\n\ttop: 100px;\n\twidth: 230px;\n"]))),C=n(72),S=n(92),T=function(e){return Object(d.jsx)(p.a.path,Object(C.a)({fill:"transparent",strokeWidth:"3",stroke:S.a.accent,strokeLinecap:"round"},e))};function E(e){var t=e.toggle;return Object(d.jsx)(L,{onClick:t,children:Object(d.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[Object(d.jsx)(T,{variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),Object(d.jsx)(T,{d:"M 2 9.423 L 20 9.423",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),Object(d.jsx)(T,{variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}})]})})}var L=u.a.button(y||(y=Object(m.a)(["\n\toutline: none;\n\tborder: none;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 18px;\n\tleft: 15px;\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%;\n\tbackground: transparent;\n\t&:focus {\n\t\toutline: none;\n\t}\n"]))),z=n(89),F=n.n(z),A=(n(189),n(84)),D={open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return{clipPath:"circle(".concat(2*e+200,"px at 40px 40px)"),transition:{type:"spring",stiffness:20,restDelta:2}}},closed:{clipPath:"circle(30px at 40px 40px)",transition:{delay:.5,type:"spring",stiffness:400,damping:40}}};function M(){var e=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object(a.useRef)(0),r=Object(o.c)(Object(a.useState)(e[n.current]),2),s=r[0],c=r[1];return[s,function(t){n.current="number"!==typeof t?i(0,e.length,n.current+1):t,c(e[n.current])}]}(!1,!0),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useRef)(null),l=function(e){var t=Object(a.useRef)({width:0,height:0});return Object(a.useEffect)((function(){t.current.width=e.current.offsetWidth,t.current.height=e.current.offsetHeight}),[]),t.current}(c).height;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(p.a.nav,{initial:!1,animate:n?"open":"closed",custom:l,ref:c,children:[Object(d.jsx)(p.a.div,{className:"background",variants:D}),Object(d.jsx)(O,{isOpen:n}),Object(d.jsx)(E,{toggle:function(){return s()}})]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(d.jsx)("div",{children:F()("<a class='link-item' >HTML strings</a>")}),Object(d.jsx)(A.a,{href:"#",children:"Hello"})]})]})}},73:function(e,t,n){},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(72),a=n(95),o=(n(1),n(73),n(2)),i=["children","href","newTab","button"];function s(e){var t=e.children,n=e.href,s=e.newTab,c=e.button,l=void 0!==c&&c,p=Object(a.a)(e,i);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("a",Object(r.a)(Object(r.a)({className:l?"button":"link-item",href:n,target:s?"_blank":"_self",type:l?"button":void 0,rel:"noreferrer"},p),{},{children:t}))})}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(72),a={transparent:"transparent",black:"#000000",white:"#ffffff",darknavy:"#020c1b",navy:"#0a192f",lightnavy:"#112240",lightestnavy:"#233554",navyshadow:"rgba(2,12,27,0.7)",darkslate:"#495670",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",surface:"#",accent:"#f6ad55",error:"#F04400",onSurface:"#",disabled:"#5B5B5B",placeholder:"#666666",backdrop:"#",notification:"#",card:"#",border:"#ced4da",orange:"#f6ad55",yellow:"#f6e05e",green:"#48bb78",teal:"#38b2ac",blue:"#3182ce"},o={fz:{xxs:"0.75rem",xs:"0.713rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",xxl:"1.375rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"4rem",heading:"2rem"},nav:{height:"6.25rem",scrollHeight:"4.375rem"},tab:{height:"2.625rem",width:"7.5rem"},screens:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1440px"},spacing:{px:"1px",0:"0",1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem",40:"10rem",48:"12rem",56:"14rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem",128:"32rem",144:"36rem"},transition:"all 0.25s cubic-bezier(0.645,0.045,0.355,1)",easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",backgroundColor:function(e){return e("colors")},backgroundPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},borderRadius:{none:"0",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","4xl":"2.5rem","5xl":"3rem","6xl":"4.5rem",full:"9999px"},borderWidth:{DEFAULT:"1px",0:"0",2:"2px",4:"4px",8:"8px"},boxShadow:{xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",outline:"0 0 0 3px rgba(66, 153, 225, 0.5)",raised:"0 20px 50px rgba(0,0,0, 0.075)",none:"none"},cursor:{auto:"auto",default:"DEFAULT",pointer:"pointer",wait:"wait",text:"text",move:"move","not-allowed":"not-allowed","col-resize":"col-resize"},fill:{current:"currentColor"},flex:{100:"1 1 100%",1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexGrow:{0:"0",DEFAULT:"1"},flexShrink:{0:"0",DEFAULT:"1"},fontFamily:{display:["Inter","system-ui"],sans:["system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"]},fontWeight:{hairline:"100",thin:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},height:{auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",screen:"100vh"},inset:{0:"0","1/2":"50%",auto:"auto"},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},listStyleType:{none:"none",disc:"disc",decimal:"decimal"},margin:function(e,t){var n=t.negative;return Object(r.a)(Object(r.a)({auto:"auto"},e("spacing")),n(e("spacing")))},maxHeight:{full:"100%",screen:"100vh"},maxWidth:function(e,t){var n=t.breakpoints;return Object(r.a)(Object(r.a)({none:"none",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem",full:"100%"},e("spacing")),n(e("screens")))},minHeight:function(e){return Object(r.a)({0:"0",full:"100%",screen:"100vh"},e("spacing"))},minWidth:{0:"0",full:"100%"},objectPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},opacity:{0:"0",5:"0.05",10:"0.1",15:"0.15",25:"0.25",50:"0.5",75:"0.75",100:"1"},order:{first:"-9999",last:"9999",none:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12"},padding:function(e){return e("spacing")},placeholderColor:function(e){return e("colors")},stroke:{current:"currentColor"},strokeWidth:{0:"0",1:"1",2:"2",3:"3",4:"4"},textColor:function(e){return e("colors")},width:{auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",screen:"100vw"},zIndex:{auto:"auto","-50":"-50","-40":"-40","-30":"-30","-20":"-20","-10":"-10",0:"0",10:"10",20:"20",30:"30",40:"40",50:"50"},gap:function(e){return e("spacing")},gridTemplateColumns:{none:"none",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))"},gridColumn:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12"},gridColumnStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13"},gridColumnEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13"},gridTemplateRows:{none:"none",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))"},gridRow:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6"},gridRowStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7"},gridRowEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7"},transformOrigin:{center:"center",top:"top","top-right":"top right",right:"right","bottom-right":"bottom right",bottom:"bottom","bottom-left":"bottom left",left:"left","top-left":"top left"},scale:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5"},rotate:{"-180":"-180deg","-90":"-90deg","-45":"-45deg",0:"0",45:"45deg",90:"90deg",180:"180deg"},translate:function(e,t){var n=t.negative;return Object(r.a)(Object(r.a)(Object(r.a)({},e("spacing")),n(e("spacing"))),{},{"-full":"-100%","-2/3":"-66.67%","-1/2":"-50%","1/2":"50%","2/3":"66.67%",full:"100%"})},skew:{"-12":"-12deg","-6":"-6deg","-3":"-3deg",0:"0",3:"3deg",6:"6deg",12:"12deg"},transitionProperty:{none:"none",all:"all",DEFAULT:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},transitionDuration:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"}}}}]);