(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{17:function(e,t,n){"use strict";t.a={transparent:"transparent",black:"#000000",white:"#ffffff",darknavy:"#020c1b",navy:"#0a192f",lightnavy:"#112240",lightestnavy:"#233554",navyshadow:"rgba(2,12,27,0.7)",darkslate:"#495670",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",surface:"#",accent:"#f6ad55",error:"#F04400",onSurface:"#",disabled:"#5B5B5B",placeholder:"#666666",backdrop:"#",notification:"#",card:"#",border:"#ced4da",orange:"#f6ad55",yellow:"#f6e05e",green:"#48bb78",teal:"#38b2ac",blue:"#3182ce"}},27:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return l}));var a=n(70),i=n(36),o=n(3),r=n.p+"static/media/profile.f3922fbe.jpg",s="/assets/Resume_Sujay_Alaspure_Software_Developer_3_years.pdf",c={github:"https://github.com/alaspuresujay",linkedin:"https://www.linkedin.com/in/alaspuresujay/",instagram:"https://www.instagram.com/alaspuresujay/",leetcode:"https://leetcode.com/alaspuresujay/",medium:"https://alaspuresujay.medium.com/",resume:s},l=[{name:"Github",Icon:Object(o.jsx)(i.c,{}),link:c.github,color:"#caccd1"},{name:"LinkedIn",Icon:Object(o.jsx)(i.e,{}),link:c.linkedin,color:"#0077b5"},{name:"Medium",Icon:Object(o.jsx)(i.f,{}),link:c.medium,color:"#caccd1"},{name:"Leetcode",Icon:Object(o.jsx)(a.a,{}),link:c.leetcode,color:"#fbb034"},{name:"Download Resume",Icon:Object(o.jsx)(i.b,{}),link:s,color:"#5ec6f2"}]},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n(46),i=n(15),o=n(1),r=n.n(o),s=n(68),c=n(3),l=r.a.createContext();function u(){return Object(o.useContext)(l)}function d(e){var t=e.children,n=Object(o.useState)(0),r=Object(i.a)(n,2),u=r[0],d=r[1];var p=h((function(e){d(e.scrollY)}),100);function h(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,i=!1,o=function o(){null==t?i=!1:(e.apply(void 0,Object(a.a)(t)),t=null,setTimeout(o,n))};return function(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];i?t=r:(e.apply(void 0,r),i=!0,setTimeout(o,n))}}Object(o.useEffect)((function(){return window.onscroll=function(){p(window)},function(){}}),[]);var b={getProject:function(e){return s.a.find((function(t){return t.slug===e}))},scrolled:u,throttle:h};return Object(c.jsx)(l.Provider,{value:b,children:t})}},41:function(e,t,n){},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a,i,o=n(9),r=(n(1),n(10)),s=n(3);function c(e){e.number;var t=e.title;return Object(s.jsx)(l,{children:Object(s.jsx)(u,{children:t})})}var l=r.a.div(a||(a=Object(o.a)(["\n  color: var(--slate);\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  justify-content: center;\n  margin: 40px 0;\n  /* background-color: red; */\n"]))),u=r.a.h4(i||(i=Object(o.a)(['\n  display: flex;\n  /* align-items: center; */\n  /* position: relative; */\n  /* width: 100%; */\n  font-size: clamp(12px, 2vw, 18px);\n  white-space: nowrap;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: var(--accent);\n  /* background-color: yellow; */\n\n  &:before {\n    content: "/";\n    /* display: block; */\n    /* position: relative; */\n    /* font-size: clamp(12px, 2vw, 18px); */\n    color: var(--accent);\n    /* font-size: 14px; */\n    font-weight: 600;\n  }\n\n  /* &:after {\n    content: "";\n    display: block;\n    position: relative;\n    width: 30%;\n    height: 3px;\n    margin-left: 20px;\n    background-color: var(--lightest-navy);\n  } */\n'])))},50:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c.a})),n.d(t,"d",(function(){return l.b})),n.d(t,"f",(function(){return u.a})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return y}));var a=n(1),i=(n(41),n(3));var o=n(27);function r(){return Object(i.jsx)("a",{href:"".concat(o.a.github,"/alaspuresujay.github.io"),className:"github-corner","aria-label":"View source on GitHub",children:Object(i.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true",children:[Object(i.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(i.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),Object(i.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})}function s(){return Object(i.jsxs)("div",{className:"get-in-touch",children:[Object(i.jsx)("h5",{children:"My inbox is always open. Whether you have a question or just want to say hi, I\u2019ll try my best to get back to you!"}),Object(i.jsx)("a",{className:"button",href:"mailto:alaspuresujay@gmail.com",children:"Say Hello"})]})}var c=n(61),l=n(62),u=n(63),d=n(46),p=n(88);function h(e){e.i;return Object(i.jsx)(i.Fragment,{children:Object(d.a)(Array(10).keys()).map((function(e){return Object(i.jsx)(p.a.div,{style:{color:"white",zIndex:-10,opacity:.2,position:"fixed",top:e+Math.floor(720*Math.random())+50,right:e+Math.floor(1901*Math.random())+50},animate:{rotate:360,scrollSnapAlign:"end"},transition:{ease:"backInOut",duration:2,repeat:1/0},children:"\u2606"},e)}))})}var b,g=n(9),m=n(15),f=n(28),j=n(10),x=n(17),y=function(){var e=Object(a.useState)({x:null,y:null}),t=Object(m.a)(e,2),n=t[0],o=t[1],r=(0,Object(f.b)().throttle)((function(e){o({x:e.pageX,y:e.pageY})}),100);return Object(a.useEffect)((function(){return document.addEventListener("mousemove",r),function(){document.removeEventListener("mousemove",r)}}),[]),Object(i.jsx)(v,{style:{left:n.x-40,top:n.y-40}})},v=j.a.div(b||(b=Object(g.a)(["\n  height: 80px;\n  width: 80px;\n  background-color: ",";\n  border-radius: 50%;\n  position: absolute;\n  opacity: 0.7;\n  filter: blur(30px);\n  z-index: -1;\n  transition: all 0.1s ease;\n"])),x.a.darkslate);n(65),n(42)},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,i,o,r,s=n(9),c=(n(1),n(27)),l=n(10),u=n(3);function d(e){var t=e.showSocial,n=void 0!==t&&t;return Object(u.jsxs)(p,{children:[Object(u.jsx)(h,{showSocial:n,children:Object(u.jsx)("ul",{children:c.d.map((function(e){var t=e.Icon,n=e.link;e.name;return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:t})},n)}))})}),Object(u.jsxs)(b,{children:[Object(u.jsx)("a",{href:c.a.github,target:"_blank",rel:"noopener noreferrer",children:"Designed & Built by Sujay Alaspure"}),Object(u.jsxs)(g,{children:["The source code for this website is",Object(u.jsx)("a",{href:"".concat(c.a.github,"/alaspuresujay.github.io"),children:" available on GitHub "}),"under the",Object(u.jsx)("a",{href:"http://opensource.org/licenses/mit-license.html",children:" MIT license."})]})]})]})}var p=l.a.div(a||(a=Object(s.a)(["\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  flex-direction: column;\n  height: auto;\n  min-height: 70px;\n  padding: 15px;\n  text-align: center;\n"]))),h=l.a.div(i||(i=Object(s.a)(["\n  display: ",";\n  width: 100%;\n  max-width: 220px;\n  color: var(--light-slate);\n  margin: 0px auto 10px;\n  ul {\n    display: flex;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    align-items: center;\n    padding: 0px;\n    margin: 0px;\n    list-style: none;\n  }\n  @media (max-width: 768px) {\n    display: block;\n  }\n"])),(function(e){return e.showSocial?"block":"none"})),b=l.a.div(o||(o=Object(s.a)(["\n  color: var(--light-slate);\n  font-family: var(--font-mono);\n  font-size: var(--fz-xxs);\n  line-height: 1;\n  a {\n    padding: 10px;\n  }\n"]))),g=l.a.p(r||(r=Object(s.a)(["\n  margin-bottom: 1rem;\n  font-size: 0.6rem;\n  opacity: 0.7;\n"])))},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(49),i=n(69),o=(n(1),n(41),n(3)),r=["children","href","newTab","button"];function s(e){var t=e.children,n=e.href,s=e.newTab,c=e.button,l=void 0!==c&&c,u=Object(i.a)(e,r);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("a",Object(a.a)(Object(a.a)({className:l?"button":"link-item",href:n,target:s?"_blank":"_self",type:l?"button":void 0,rel:"noreferrer"},u),{},{children:t}))})}t.b=s},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a,i,o,r,s,c,l,u,d=n(9),p=n(28),h=(n(1),n(10)),b=(n(41),n(17)),g=n(3);function m(){var e=Object(p.b)().scrolled;return Object(g.jsxs)(x,{scrolled:e,children:[Object(g.jsx)(y,{children:Object(g.jsx)(v,{})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(C,{}),Object(g.jsx)(O,{})]})]})}var f=Object(h.b)(a||(a=Object(d.a)(["  \n  0% {top: 1px;}\n  25% {top: 2px;}\n  50% {top: 3px;}\n  75% {top: 2px;}\n  100% {top: 1px;}"]))),j=Object(h.b)(i||(i=Object(d.a)(["  \n  0% {opacity: 0;  }\n  25% {opacity: 0.5;}\n  50% {opacity: 1;}\n  75% {opacity: 0.5;}\n  100% {opacity: 0;}"]))),x=h.a.div(o||(o=Object(d.a)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10%;\n  width: 24px;\n  height: 100px;\n  transition: all 0.5s ease-in-out;\n  opacity: ",";\n"])),(function(e){return e.scrolled>100?0:1})),y=h.a.div(r||(r=Object(d.a)(["\n  height: 42px;\n  width: 24px;\n  border-radius: 14px;\n  -webkit-transform: none;\n  transform: none;\n  border: 2px solid ",";\n  top: 170px;\n"])),b.a.lightestSlate),v=h.a.div(s||(s=Object(d.a)(["\n  display: block;\n  margin: 5px auto;\n  background: transparent;\n  position: relative;\n  height: 10px;\n  width: 6px;\n  border: 2px solid ",";\n  border-radius: 8px;\n  -webkit-animation: "," 0.8s ease-in-out infinite;\n  animation: "," 0.8s ease-in-out infinite;\n"])),b.a.lightestSlate,f,f),w=h.a.div(c||(c=Object(d.a)(["\n  display: block;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border-right: 2px solid ",";\n  border-bottom: 2px solid ",";\n  margin: 0 0 5px 6px;\n  width: 13px;\n  height: 13px;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n  animation: "," 1s infinite;\n"])),b.a.lightestSlate,b.a.lightestSlate,j),C=Object(h.a)(w)(l||(l=Object(d.a)(["\n  -webkit-animation-delay: 0.1s;\n  -moz-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n  margin-top: 1px;\n"]))),O=Object(h.a)(w)(u||(u=Object(d.a)(["\n  -webkit-animation-delay: 0.2s;\n  -moz-animation-delay: 0.2s;\n  margin-top: -6px;\n  animation-delay: 0.2s;\n"])))},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));n(1),n(84);var a=n(42);n.d(t,"a",(function(){return a.a}));var i=n(3);function o(e){var t=e.children;return Object(i.jsx)("section",{className:"section",children:t})}},66:function(e,t,n){"use strict";n(1);var a=n(17),i=(n(85),n(3));t.a=function(e){var t=e.color,n=e.zoom,o=window.innerWidth,r={stroke:t||a.a.lightestnavy};return Object(i.jsx)("div",{className:"container-logo",children:Object(i.jsxs)("svg",{style:{zoom:n||(o>1e3?1:.6)},className:"logo-icon",xmlns:"http://www.w3.org/2000/svg",width:"439",height:"363",children:[Object(i.jsx)("path",{className:"outer-ring stroke",style:r,d:"M112.529 6.02777C102.987 12.1915 95.9745 32.3755 89.9498 42C69.6964 74.3555 50.3162 107.316 30.6011 140C24.7777 149.654 19.0789 159.386 13.189 169C10.9626 172.634 6.46944 177.487 6.6929 182C6.91083 186.402 11.1769 191.373 13.4244 195C19.3949 204.636 25.2671 214.334 31.189 224C50.9435 256.244 69.9865 288.948 90.0502 321C95.9562 330.435 103.475 351.426 113.185 356.972C120.644 361.232 137.49 358 146 358L229 358L299 358C305.913 358 320.573 360.782 326.471 356.972C336.508 350.49 344.275 329.208 350.4 319C369.431 287.28 388.486 255.543 407.811 224C413.921 214.027 419.982 204.03 426 194C428.186 190.357 432.466 185.455 432.332 181C432.195 176.461 427.852 171.732 425.601 168L408 139C388.749 106.918 369.622 74.6577 349.681 43C343.35 32.9487 336.264 12.662 326.39 6.02777C320.015 1.74423 302.603 5 295 5L210 5L140 5C133.087 5 118.427 2.21759 112.529 6.02777z"}),Object(i.jsx)("path",{className:"stroke",style:r,d:"M79 48L80 49L79 48M159 270C167.088 287.333 194.715 285.958 207.999 275.606C222.243 264.508 227.385 246.153 233.424 230C235.989 223.142 237.771 211.894 242.702 206.43C249.712 198.662 272.01 195.835 282 193C282 212.887 283.685 234.678 288.63 254C291.069 263.531 294.866 273.045 304 277.954C329.398 291.604 357.713 270.241 373.714 252C377.982 247.134 387.253 238.724 387.907 232C388.514 225.765 382.616 216.528 380 211L379 211C369.949 223.6 360.185 235.77 347 244.301C342.894 246.958 336.13 251.471 331.108 248.806C326.979 246.616 326.115 241.171 325.438 237C323.575 225.522 322.902 213.589 322.09 202C318.781 154.798 311.976 107.298 311 60C298.052 58.3636 275.656 55.2159 264.214 63.0857C256.288 68.5369 253.079 87.2967 249.6 96C240.852 117.887 232.307 139.924 224.05 162C220.675 171.023 217.801 185.387 211.351 192.61C206.708 197.809 195.602 202.095 189 204C187.857 177.778 167.112 151.773 155.753 129C150.809 119.088 143.827 106.462 146.139 95C149.849 76.608 176.847 75.9391 185.867 90.0038C194.945 104.161 185.24 115.601 181 129C186.859 129 199.459 131.397 204.363 127.972C208.181 125.305 209.677 118.192 210.975 114C215.899 98.0865 213.617 79.7879 202.384 67.0903C184.288 46.6335 146.662 48.1186 125 61.4668C100.542 76.5377 96.0143 102.687 105.811 128C108.408 134.71 119 149.926 117.335 156.896C116.138 161.906 104.947 166.41 101 169.375C90.5083 177.257 81.7059 186.949 76.3125 199C63.7994 226.96 76.4648 264.64 107 273.961C125.122 279.492 141.56 274.76 159 270M76 53L77 54L76 53z"}),Object(i.jsx)("path",{className:"stroke",style:r,d:"M275 110L259.308 153L250 181L281 171L277.285 128L275 110z"}),Object(i.jsx)("path",{className:"stroke",style:r,d:"M1 177L2 178L1 177M131 177C123.158 180.666 115.369 185.813 109.439 192.17C104.707 197.243 100.977 203.279 99.159 210C95.9919 221.707 98.4591 235.584 108.015 243.671C119.508 253.396 140.4 251.91 146.891 237C149.116 231.891 149.121 226.469 148.985 221C148.838 215.069 147.011 209.428 144.716 204C140.812 194.766 136.054 185.66 131 177M438 178L439 179L438 178z"}),Object(i.jsx)("path",{className:"stroke",style:r,d:"M189 208C189 234.096 182.217 252.724 159 267L159 268C166.023 265.337 172.664 260.104 177 254L178 254C182.77 257.595 187.798 254.708 190.637 249.985C195.978 241.096 200.613 229.071 203 219L190 226L189 208M422 210L423 211L422 210z"})]})})}},68:function(e,t,n){"use strict";var a=n.p+"static/media/icon.03164e60.webp",i=n.p+"static/media/logo_name.1ece3d63.webp",o=n.p+"static/media/designSystem.22d5ef55.webp",r=n.p+"static/media/banner3.89763756.webp",s=n.p+"static/media/profile.cb449294.webp",c=n.p+"static/media/loginui.414bfbf7.webp",l=[{type:"bannerImage",value:{title:"",imgsrc:r}},{type:"tophead",value:{caseName:"SmartHM",caseBio:"Control All your home Devices from your fingertip"}},{type:"brief",value:{briefTitle:"The Challange",content:"Smarthm is an application to control all your smarthome appliances. Be it TV, light,\n      Fan, or anything. The first and foremost important thing was to build an app which is user\n      friendly, powerful and scalable at any extent. I choose to go with React Native because of cross\n      platform and scalability. I audition dozens of design to keep app interaction simplest yet powerful.",links:[{linkName:"Play Store",src:"https://play.google.com/store/apps/details?id=com.indivisible.smarthm"}]}},{type:"bannerImage",value:{title:"The design won't leave you cold",imgsrc:o}},{type:"splitshow",value:{title:"",left:[{imgsrc:"data:image/png;base64,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",caption:"Our first task was to give SmartHM a logotype and corporate identity."},{imgsrc:i,caption:""},{imgsrc:n.p+"static/media/home.04ba414e.webp",caption:"The homepage style went through several phases and multiple iterations."},{imgsrc:s,caption:""}],right:[{imgsrc:a,caption:""},{imgsrc:c,caption:"To ease the user onboarding process, We have setup the login with email as well as Google auth."},{imgsrc:n.p+"static/media/drawer.38cea110.webp",caption:""}]}},{type:"brief",value:{briefTitle:"Extra attention to detail development",content:"We were motivated to focus on every little detail including icon animation, to really enhance the user interaction."}}],u=n.p+"static/media/banner.63e45e4f.webp",d=n.p+"static/media/keep-banner.9e1ee51c.webp",p=n.p+"static/media/home4.d3ea455a.webp",h=n.p+"static/media/music-section.3f963af1.webp",b=n.p+"static/media/img2.4568b315.jpeg",g=[{featured:!0,title:"Smarthm",slug:"smarthm",image:r,description:"This app provide the functionality to control your smart home devices from your mobile, set alert, add automation to devices. Toggle device on specific time and much more. And yes with security and privacy because of its all new OfflineFirst technology.",tags:["React Native","Firebase","Appcenter API","playStore CLI"],githubLink:"",playStore:"https://play.google.com/store/apps/details?id=com.indivisible.smarthm",data:l},{featured:!0,title:"Keeper App",slug:"keeper",image:d,description:"A Clone app of Google's note taking app <a href='https://keep.google.com/' target='_blank' class='link-item' > Google Keep</a>. This app is built using React and Firebase. It has all the features of Google keep. Adding, editing and deleting Notes, Colors, Labels, etc",tags:["ReactJs","Firebase@V9","Context-API","Google-auth"],githubLink:"https://github.com/alaspuresujay/google-keep/",externalLink:"https://alaspuresujay.github.io/google-keep/",data:null},{featured:!1,title:"Cryptoverse",slug:"cryptoverse",image:u,description:"As name says this app provides all the info regarding crypto, exchanges, news, details, live price, chart history and a lot more...",tags:["React","Ant-Design","RapidAPI","Redux/toolkit"],githubLink:"https://github.com/alaspuresujay/cryptoverse/",externalLink:"https://alaspuresujay.github.io/cryptoverse/",data:null},{title:"React Gallery App",slug:"gallery-app",description:"A Simple Gallary App. Photo upload to Firebase Storage, Realtime photo preview with Interactive animation using framer Motion",tags:["ReactJs","Firebase","Framer-Motion"],githubLink:"https://github.com/alaspuresujay/react-galary",externalLink:"https://alaspuresujay.github.io/react-galary/",data:null},{title:"Chrome Extension App : Scaler-Timer",slug:"scaler-timer",description:"A Simple time tracking extension for Scaler.com. It tracks the time taken by the user to solve the DSA problem. ",tags:["Javascript","Chrome-Extension"],githubLink:"https://github.com/alaspuresujay/scaler-timer",externalLink:null,data:null,case:!1},{title:"React Native Todo App",slug:"todo-app",description:"A Simple and Beautiful Todo App. Create todo and Separate the to-do items as per categories. Live Sync to Server.",tags:["React Native","Firebase"],githubLink:"https://github.com/alaspuresujay/todo-app/",externalLink:"https://expo.dev/@alaspuresujay/todo-app",data:null,case:!1},{title:"Music Redesigned",slug:"music-redesigned",description:"This is a redesign of YouTube Music. In this design, I mostly tried to create a dark and artistic space for users to interact with.",tags:["ReactJS","RapidAPI","Redux/toolkit"],githubLink:"https://github.com/alaspuresujay/music-redesigned",data:[{type:"bannerImage",value:{title:null,imgsrc:p}},{type:"tophead",value:{caseName:"Music Redesigned",caseBio:"This is a redesign of YouTube Music"}},{type:"brief",value:{briefTitle:"The Design",content:"In this design, I mostly tried to create a dark and artistic space for users\nIn the dashboard section, I put a section called friend rooms where you can listen to a song with your friends and interact with them.\nAnd in the radio section, you can listen to radios from different region across the india. You can also search for a song and listen to it.",links:[{linkName:"Live Demo",src:"https://music-redesigned.netlify.app/"}]}},{type:"bannerImage",value:{title:"The original design is designed by @Mahdi.design (dribble)",imgsrc:"https://cdn.dribbble.com/users/5080573/screenshots/17147578/media/71a6eb73cec9e79bc790aae08b377e7c.png"}},{type:"splitshow",value:{title:"",left:[{imgsrc:h,caption:"Listen to your favourite songs"},{imgsrc:n.p+"static/media/img3.a42c6404.webp",caption:""}],right:[{imgsrc:b,caption:"Special Thanks to @mahdi.design_ (Instagram) for this wonderful design"}]}},{type:"brief",value:{briefTitle:"Some Future Work thoughts",content:"In the dashboard section, I will be adding a section called friend rooms where you can listen to a song with your friends and interact with them."}}],case:!0},{title:"Person Movement Detection",slug:"person-movement-detection",description:"Detect the person movement in the room, Capture their images and send mail to the provided ID.",tags:["Python","OpenCV","Computer Vision"],githubLink:"https://github.com/alaspuresujay/Person-Detection",data:null,case:!1},{title:"Image Color picker",slug:"image-color-picker",description:"Detect pixel colour over the image by Hovering the mouse over it",tags:["Python","OpenCV","Computer Vision"],githubLink:"https://github.com/alaspuresujay/color-detection",youtubeLink:"https://youtu.be/1-b7aUZ1dzo",data:null,case:!1},{featured:!0,image:n.p+"static/media/Scratch-app-thumbnail.47672e32.webp",title:"MIT Scratch app clone",slug:"mit-scratch-app",description:"This project is a clone of <a class='link-item' href=\"https://scratch.mit.edu/projects/editor/\">Scratch app from MIT</a>. Having fully featured Drag and Drop UI and animation based on Scratch Blocks.",tags:["ReactJs","React-DND","Context-API"],githubLink:"https://github.com/alaspuresujay/scratch-mit-clone",externalLink:"https://sujay-scratch-mit.netlify.app/",data:null,case:!1}];t.a=g},78:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(60),r=n.n(o),s=n(51),c=n(4),l=(n(78),n(28)),u=n(0),d=n(3);function p(e){var t=e.children;return Object(d.jsx)(l.a,{children:Object(d.jsx)(u.b.Provider,{value:{className:"react-icons"},children:t})})}var h=n(50),b=n(66),g=i.a.lazy((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,224))})),m=i.a.lazy((function(){return n.e(6).then(n.bind(null,227))})),f=i.a.lazy((function(){return Promise.all([n.e(8),n.e(5)]).then(n.bind(null,228))})),j=i.a.lazy((function(){return n.e(7).then(n.bind(null,223))}));var x=function(){Object(a.useEffect)((function(){window.location.href.includes("/resume")&&(window.location.href="https://alaspuresujay.github.io/assets/Resume_Sujay_Alaspure_Software_Developer_3_years.pdf")}),[]);var e=function(){return Object(d.jsx)("div",{className:"full-screen",children:Object(d.jsx)(b.a,{})})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(p,{children:[Object(d.jsx)(h.e,{}),Object(d.jsx)(h.g,{}),Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(e,{}),children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{path:"/",exact:!0,element:Object(d.jsx)(g,{})}),Object(d.jsx)(c.a,{path:"/test",element:Object(d.jsx)(m,{})}),Object(d.jsx)(c.a,{path:"/case/:slug",element:Object(d.jsx)(f,{})}),Object(d.jsx)(c.a,{path:"*",element:Object(d.jsx)(j,{})})]})})]})})};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(s.a,{basename:"/",children:Object(d.jsx)(x,{})})}),document.getElementById("root"))}},[[86,1,3]]]);