(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[6],{108:function(e,n,t){},120:function(e,n,t){},121:function(e,n,t){},122:function(e,n,t){},123:function(e,n,t){},153:function(e,n,t){"use strict";t.r(n);var a=t(72),i=t(13),r=t(1),c=t.n(r),o=(t(108),t(159)),s=t(64),l=t(78),d=t(155),b=t(73),j=(t(92),t(2));function h(){return Object(j.jsx)("div",{className:"sidebar left",children:Object(j.jsx)("ul",{className:"social",children:b.c.map((function(e){var n=e.name,t=e.link,a=e.Icon;return Object(j.jsx)(d.a,{title:n,"aria-label":n,placement:"right",arrow:!0,children:Object(j.jsx)("li",{className:"link",children:Object(j.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:a})})},t)}))})})}function u(){var e=Object(r.useState)("Click to copy"),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(j.jsx)("div",{className:"sidebar right",children:Object(j.jsx)(d.a,{title:t,"aria-label":"Click to copy",placement:"left",arrow:!0,onClose:function(){a("Click to copy")},children:Object(j.jsx)("div",{className:"email",children:Object(j.jsx)("p",{onClick:function(e){navigator.clipboard.writeText("alaspuresujay@gmail.com"),a("Copied"),setTimeout((function(){a("Click to copy")}),5e3)},children:"alaspuresujay@gmail.com"})})})})}var p=t(84),x=t(102),m=(t(77),["children","href","newTab","button"]);function f(e){var n=e.children,t=e.href,i=e.newTab,r=e.button,c=void 0!==r&&r,o=Object(x.a)(e,m);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("a",Object(a.a)(Object(a.a)({className:c?"button":"link-item",href:t,target:i?"_blank":"_self",type:c?"button":void 0,rel:"noreferrer"},o),{},{children:n}))})}function O(){var e=Object(l.a)({threshold:.2}),n=e.ref,t=e.inView,a=Object(o.a)();return Object(r.useEffect)((function(){t&&a.start({x:0,transition:{type:"spring",duration:1,bounce:.3}})}),[t]),Object(j.jsxs)("div",{ref:n,className:"hero",children:[Object(j.jsx)(h,{}),Object(j.jsx)(u,{}),Object(j.jsxs)(s.a.div,{initial:{x:"-100vw"},animate:a,className:"HeaderContainer",children:[Object(j.jsx)("h3",{className:"MinorHeading",children:"Hello World, my name is"}),Object(j.jsx)("h1",{className:"NameHeading",children:"Sujay Alaspure"}),Object(j.jsx)("h2",{className:"bio",children:"I build things that lives on Internet."}),Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{button:!0,href:"mailto:alaspuresujay@gmail.com",children:"Hire Me"}),Object(j.jsx)(f,{style:{margin:"0 16px"},href:b.b,children:"Get Resume"})]})]}),Object(j.jsx)(p.a,{})]})}t(120);function g(e){var n=e.number,t=e.title;return Object(j.jsxs)("div",{className:"section-heading",children:[Object(j.jsxs)("h2",{className:"number",children:[n,"."]}),Object(j.jsx)("h2",{className:"title",children:t})]})}function v(e){var n=e.children;return Object(j.jsx)("section",{className:"section",children:n})}t(121);function y(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("div",{className:"social",children:Object(j.jsx)("ul",{children:b.c.map((function(e){var n=e.Icon,t=e.link;e.name;return Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:n})},t)}))})}),Object(j.jsx)("div",{className:"credits",children:Object(j.jsx)("a",{href:"https://github.com/alaspuresujay",target:"_blank",rel:"noopener noreferrer",children:"Designed & Built by Sujay Alaspure"})})]})}var w=t(52);function k(){return Object(j.jsx)("a",{href:"https://github.com/alaspuresujay/alaspuresujay.github.io",className:"github-corner","aria-label":"View source on GitHub",children:Object(j.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true",children:[Object(j.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(j.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),Object(j.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})}t(122);function N(e){var n=e.number,t=Object(l.a)({threshold:.2}),a=t.ref,i=t.inView,c=Object(o.a)();return Object(r.useEffect)((function(){i&&c.start({x:0,transition:{type:"spring",duration:1,bounce:.1}})}),[i]),Object(j.jsxs)("section",{className:"about-me",children:[Object(j.jsx)(g,{number:n,title:"About Me"}),Object(j.jsxs)("div",{className:"inner",ref:a,children:[Object(j.jsxs)(s.a.div,{className:"about-bio",initial:{x:"-100vw"},animate:c,children:[Object(j.jsx)("p",{children:"I love writing code! \ud83d\udc68\u200d\ud83d\udcbb I strongly believe technology can change anything and that's why I am so passionate about it! I am trying to make an impact in the Web and mobile space. I love working across the stack!"}),Object(j.jsx)("p",{children:"Fast-forward to today, and I've had the privilege of working at an institute, a start-up and a huge corporation (TCS)."}),Object(j.jsx)("p",{children:"Here are a few technologies I've been working with recently:"}),Object(j.jsxs)("ul",{className:"skills-list",children:[Object(j.jsx)("li",{children:"React Js"}),Object(j.jsx)("li",{children:"React Native"}),Object(j.jsx)("li",{children:"Javascript (ES6)"}),Object(j.jsx)("li",{children:"Firebase"}),Object(j.jsx)("li",{children:"Python"})]})]}),Object(j.jsx)(s.a.div,{initial:{x:"100vw"},animate:c,className:"image",children:Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)("img",{src:b.a,alt:"Sujay Alaspure"})})})]})]})}function C(){return Object(j.jsxs)("div",{className:"get-in-touch",children:[Object(j.jsx)("h5",{children:"My inbox is always open. Whether you have a question or just want to say hi, I\u2019ll try my best to get back to you!"}),Object(j.jsx)("a",{className:"button",href:"mailto:alaspuresujay@gmail.com",children:"Say Hello"})]})}var S=t(79);t(123);function I(e){var n=e.project,t=Object(l.a)({threshold:.2}),a=t.ref,i=t.inView,c=Object(o.a)();return Object(r.useEffect)((function(){i&&c.start({opacity:1,transition:{duration:.5}})}),[i]),Object(j.jsx)("div",{ref:a,children:Object(j.jsxs)(s.a.div,{className:"inner-card",initial:{opacity:0},animate:c,children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"links",children:[n.githubLink&&Object(j.jsx)("a",{href:n.githubLink,target:"_blank",rel:"noreferrer",children:Object(j.jsx)(S.c,{})}),n.youtubeLink&&Object(j.jsx)("a",{href:n.youtubeLink,className:"youtube",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(S.g,{})}),(n.externalLink||n.data)&&Object(j.jsx)("a",{href:n.data?"/case/".concat(n.slug):n.externalLink,className:"external",target:n.externalLink&&"_blank",rel:"noreferrer",children:Object(j.jsx)(S.b,{})})]}),Object(j.jsx)("h3",{className:"project-title",children:Object(j.jsx)("a",{href:n.externalLink?n.externalLink:n.data?"/case/".concat(n.slug):null,children:n.title})}),Object(j.jsx)("div",{className:"project-description",children:Object(j.jsx)("p",{children:n.description})})]}),Object(j.jsx)("ul",{className:"project-tech-list",children:n.tags.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]})})}var L,T,z,M,A,W,_,H,E,J,R,F,B,D,P,V,G,Z,q,Y=t(124),$=t(70),K=t(71),Q=t(34),U=K.a.div(L||(L=Object($.a)(["\n  /* border: 1px solid #eaeaea; */\n  min-height: 400px;\n  position: relative;\n  /* overflow: hidden; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--slate);\n  background-color: var(--navy);\n  margin: 80px 0;\n  transition: var(--transition);\n  /* padding: 50px; */\n\n  border-radius: 10px;\n  @media (max-width: 768px) {\n    margin-bottom: 70px;\n    justify-content: center;\n  }\n  &:hover {\n    /* border-bottom: 2px solid var(--lightest-slate); */\n    box-shadow: 7px 7px 55px 0 ",";\n  }\n"])),Q.a.lightestnavy),X=K.a.div(T||(T=Object($.a)(["\n  position: absolute;\n  width: 60%;\n  ",";\n  text-align: ",";\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 4vh;\n    z-index: 10;\n    text-align: left;\n  }\n"])),(function(e){return e.right?"right : 20px":"left:20px"}),(function(e){return e.right?"right":"left"})),ee=K.a.div(z||(z=Object($.a)(["\n  margin: 10px 0px;\n  color: var(--accent);\n  font-family: var(--font-mono);\n  font-size: var(--fz-xs);\n  font-weight: 400;\n"]))),ne=K.a.h3(M||(M=Object($.a)(["\n  color: var(--lightest-slate);\n  font-size: clamp(24px, 5vw, 28px);\n  transition: var(--transition);\n  cursor: pointer;\n"]))),te=K.a.div(A||(A=Object($.a)(['\n  box-shadow: 0 10px 30px -15px var(--navy-shadow);\n  transition: var(--transition);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  border-radius: var(--border-radius);\n  background-color: var(--light-navy);\n  font-size: var(--fz-md);\n  line-height: 25px;\n  text-align: left;\n  &::before {\n    background-color: #b5e2cb;\n    content: "";\n    position: absolute;\n    height: 90%;\n    width: 0.3rem;\n\n    /* left: 0; */\n    ',"\n    ","\n    top: 5%;\n  }\n  @media (max-width: 768px) {\n    background-color: transparent;\n    box-shadow: none;\n    margin-top: 2rem;\n    padding: 0px 0px;\n\n    &::before {\n      display: none;\n    }\n  }\n"])),(function(e){return e.right?"border-top-left-radius: 100%;border-bottom-left-radius: 100%;":"border-top-right-radius: 100%;border-bottom-right-radius: 100%;"}),(function(e){return e.right?"right: 0;":"left: 0;"})),ae=K.a.ul(W||(W=Object($.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  z-index: 2;\n  margin: 25px 0px 10px;\n  padding: 0px;\n  list-style: none;\n  justify-content: ",";\n  font-style: italic;\n  @media (max-width: 768px) {\n    margin: 4vh 0;\n    font-style: italic;\n  }\n"])),(function(e){return e.right?"flex-end":"flex-start"})),ie=K.a.li(_||(_=Object($.a)(["\n  margin: 0px 10px 0px 0px;\n  color: var(--light-slate);\n  font-family: var(--font-mono);\n  font-size: var(--fz-xs);\n  white-space: nowrap;\n  padding: 2px 8px;\n  border-radius: 10px;\n"]))),re=K.a.div(H||(H=Object($.a)(["\n  display: flex;\n  /* justify-content: flex-start; */\n  justify-content: ",";\n  -webkit-box-align: center;\n  align-items: center;\n  position: relative;\n  margin-top: 10px;\n  margin-left: -10px;\n  @media (max-width: 768px) {\n    justify-content: flex-end;\n  }\n"])),(function(e){return e.right?"flex-end":"flex-start"})),ce=K.a.a(E||(E=Object($.a)(["\n  cursor: pointer;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  padding: 10px;\n  .react-icons {\n    width: 22px;\n    height: 22px;\n    margin-top: -4px;\n  }\n"]))),oe=K.a.div(J||(J=Object($.a)(["\n  width: 60%;\n  max-height: 340px;\n  position: absolute;\n\n  ",';\n  box-shadow: 0 10px 30px -15px var(--navy-shadow);\n  transition: var(--transition);\n  z-index: 1;\n  overflow: hidden;\n  border-radius: 0.5rem;\n  /* border: 1px solid var(--slate); */\n  cursor: pointer;\n  img {\n    width: 100%;\n    /* height: auto; */\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\n    filter: grayscale(100%);\n    transition: var(--transition);\n    border-radius: var(--border-radius);\n    &:hover {\n      -webkit-filter: none; /* Safari 6.0 - 9.0 */\n      filter: none;\n    }\n    @media (max-width: 768px) {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n\n      filter: grayscale(100%) contrast(1) brightness(20%);\n    }\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    max-height: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: var(--navy);\n    height: 100%;\n    &::before {\n      content: " ";\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      inset: 0px;\n      z-index: 3;\n      transition: var(--transition);\n      background-color: var(--navy);\n      mix-blend-mode: screen;\n    }\n    /* img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n      filter: grayscale(100%) contrast(1) brightness(20%);\n    } */\n  }\n'])),(function(e){return e.right?"left : 20px":"right:20px"})),se=function(e){var n=e.title,t=e.slug,a=e.description,i=e.tags,c=e.githubLink,d=e.image,b=e.playStore,h=e.appStore,u=e.externalLink,p=e.right,x=Object(l.a)({threshold:.4}),m=x.ref,f=x.inView,O=Object(o.a)();return Object(r.useEffect)((function(){f&&O.start({opacity:1,y:0,transition:{type:"spring",bounce:.4,duration:.8}})}),[f]),Object(j.jsx)(s.a.div,{ref:m,children:Object(j.jsx)(s.a.div,{initial:{y:300},animate:O,children:Object(j.jsxs)(U,{children:[Object(j.jsxs)(X,{right:p,children:[Object(j.jsx)(ee,{children:"Featured Project"}),Object(j.jsx)(ne,{children:Object(j.jsx)("a",{href:u||"/case/".concat(t),rel:"noreferrer",children:n})}),Object(j.jsx)(te,{right:p,children:Object(j.jsx)("p",{children:a})}),Object(j.jsx)(ae,{right:p,children:i.map((function(e,n){return Object(j.jsx)(ie,{children:e},n)}))}),Object(j.jsxs)(re,{right:p,children:[c&&Object(j.jsx)(ce,{href:c,target:"_blank",rel:"noreferrer",children:Object(j.jsx)(S.c,{})}),Object(j.jsx)(ce,{href:u||"/case/".concat(t),rel:"noreferrer",target:u?"_blank":"_self",children:Object(j.jsx)(S.b,{})}),b&&Object(j.jsx)(ce,{href:b,className:"external",rel:"noreferrer",children:Object(j.jsx)(Y.b,{})}),h&&Object(j.jsx)(ce,{href:h,className:"external",rel:"noreferrer",children:Object(j.jsx)(Y.a,{})})]})]}),Object(j.jsx)(oe,{right:p,children:Object(j.jsx)("img",{src:d,alt:n})})]})})})},le=t(160),de=t(154),be=t(151),je=(K.a.div(R||(R=Object($.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n"])),Q.a.slate),K.a.div(F||(F=Object($.a)(["\n  min-height: 50px;\n  background-color: aliceblue;\n  box-shadow: 0px 2px 5px 0px ",";\n"])),Q.a.navyshadow),Object(K.a)(de.a)(B||(B=Object($.a)(["\n  .MuiTabs-root {\n    color: ",";\n  }\n  .MuiTab-textColorPrimary.Mui-selected {\n    color: ",";\n  }\n  .MuiTab-textColorPrimary {\n    color: ",";\n  }\n  .MuiTabs-indicator {\n    background-color: ",";\n  }\n  .MuiTabs-scrollButtons {\n    color: ",";\n  }\n"])),Q.a.slate,Q.a.accent,Q.a.slate,Q.a.accent,Q.a.slate)),he=Object(K.a)(be.a)(D||(D=Object($.a)(["\n  padding: 0 20px;\n"]))),ue=K.a.div(P||(P=Object($.a)(["\n  padding: 20px 4px;\n"]))),pe=K.a.div(V||(V=Object($.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-size: 1.2rem;\n  .company {\n    color: ",";\n  }\n"])),Q.a.lightestSlate,Q.a.accent),xe=K.a.div(G||(G=Object($.a)(["\n  color: ",";\n  font-size: 13px;\n  margin-bottom: 20px;\n"])),Q.a.slate),me=K.a.ul(Z||(Z=Object($.a)(["\n  list-style: none;\n  padding-right: 2rem;\n"]))),fe=K.a.li(q||(q=Object($.a)(["\n  color: ",';\n  /* display: list-item; */\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  text-align: -webkit-match-parent;\n  &::before {\n    content: "\u25b9";\n    position: absolute;\n    left: 0px;\n    color: ',";\n  }\n"])),Q.a.slate,Q.a.accent),Oe=[{title:"Software Developer",company:"Robosoft Technologies",companyWebsite:"https://indivisiblesol.com/",start:"Oct 2021",end:"Present",details:[{id:"1",content:"Worked with a team of 10 Developers to build a Super App for Stanza Living. An ambitious startup working in Living Space."},{id:"2",content:"Communicate with multi-disciplinary teams of developers, designers, and clients on a daily basis."}]},{title:"Cofounder and CTO",company:"Indivisible Solutions",companyWebsite:"https://indivisiblesol.com/",start:"Aug 2020",end:"Jan 2021",details:[{id:"1",content:"Developed and shipped highly interactive android applications for Home Automation SmartHM."},{id:"2",content:"Worked on various Framework and CMS such as React, React Native, Wordpress CMS, Firebase, etc."},{id:"3",content:"Architected and implemented the front-end of company website and various internal tools."}]},{title:"Software Developer",company:"TCS",companyWebsite:"www.tcs.com",start:"Nov 2019",end:"Apr 2021",details:[{id:"1",content:"Developed modern, performant, and robust code for a diverse array of client and internal projects."},{id:"2",content:"Took ownership of development of a Automation testing utility using Selenium Framework in Java. This help reducing the manual testing efforts by 90% and soft saving of $15000 annually."},{id:"3",content:"Work with a variety of different languages, frameworks, and tools such as Selenium, Bash Script, Jenkins, JavaScript, React, etc."}]}],ge=["data","value"],ve=function(e){var n=e.data,t=e.value,i=Object(x.a)(e,ge);return Object(j.jsxs)(ue,Object(a.a)(Object(a.a)({role:"tabpanel",id:"scrollable-auto-tabpanel-".concat(t),"aria-labelledby":"scrollable-auto-tab-".concat(t)},i),{},{children:[Object(j.jsxs)(pe,{children:[Object(j.jsx)("span",{children:n.title})," ",Object(j.jsxs)("span",{className:"company",children:["\xa0@\xa0",Object(j.jsx)(f,{children:n.company})]})]}),Object(j.jsxs)(xe,{children:[n.start," - ",n.end]}),Object(j.jsx)(me,{children:n.details.map((function(e,n){return Object(j.jsx)(fe,{children:e.content},n)}))})]}))},ye=function(){var e=c.a.useState(0),n=Object(i.a)(e,2),t=n[0],r=n[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(le.a,{position:"static",style:{backgroundColor:Q.a.navy},children:Object(j.jsx)(je,{value:t,onChange:function(e,n){r(n)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable tabs",children:Oe.map((function(e,n){return Object(j.jsx)(he,Object(a.a)({label:e.company},function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}(n)),n)}))})}),Object(j.jsx)(ve,{value:t,data:Oe[t]})]})};var we=t(51);n.default=function(){var e=Object(r.useState)(!0),n=Object(i.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]),t?Object(j.jsx)(we.a,{color:Q.a.accent}):Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(k,{}),Object(j.jsx)(O,{}),Object(j.jsx)(N,{number:"01"}),Object(j.jsxs)(v,{children:[Object(j.jsx)(g,{number:"02",title:"Where I\u2019ve Worked"}),Object(j.jsx)(ye,{})]}),Object(j.jsxs)(v,{children:[Object(j.jsx)(g,{number:"03",title:"Some Things I\u2019ve Built"}),w.a.filter((function(e){return e.featured})).map((function(e,n){return Object(j.jsx)(se,Object(a.a)({right:n%2},e),n)}))]}),Object(j.jsxs)(v,{children:[Object(j.jsx)(g,{number:"04",title:"Other Projects"}),Object(j.jsx)("ul",{className:"project-grid",children:w.a.filter((function(e){return!e.featured})).map((function(e,n){return Object(j.jsx)(I,{project:e},n)}))})]}),Object(j.jsxs)(v,{children:[Object(j.jsx)(g,{number:"05",title:"Get In Touch"}),Object(j.jsx)(C,{})]}),Object(j.jsx)(y,{})]})}},73:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return s}));var a=t(79),i=t(91),r=t(2),c=t.p+"static/media/profile.f3922fbe.jpg",o="/Assets/resume.pdf",s=[{name:"Github",Icon:Object(r.jsx)(a.c,{}),link:"https://github.com/alaspuresujay"},{name:"LinkedIn",Icon:Object(r.jsx)(a.e,{}),link:"https://www.linkedin.com/in/alaspuresujay/"},{name:"Instagram",Icon:Object(r.jsx)(a.d,{}),link:"https://www.instagram.com/alaspuresujay/"},{name:"E-Mail",Icon:Object(r.jsx)(a.f,{}),link:"mailto:alaspuresujay@gmail.com"},{name:"Leetcode",Icon:Object(r.jsx)(i.a,{}),link:"https://leetcode.com/alaspuresujay/"},{name:"Resume",Icon:Object(r.jsx)(a.a,{}),link:o}]},77:function(e,n,t){},84:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a,i,r,c,o,s,l,d,b=t(70),j=t(13),h=t(1),u=t(71),p=(t(77),t(34)),x=t(2);function m(){var e=Object(h.useState)(0),n=Object(j.a)(e,2),t=n[0],a=n[1];return Object(h.useEffect)((function(){return window.onscroll=function(){a(window.scrollY)},function(){}}),[]),Object(x.jsxs)(g,{scrolled:t,children:[Object(x.jsx)(v,{children:Object(x.jsx)(y,{})}),Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),Object(x.jsx)(N,{})]})]})}var f=Object(u.b)(a||(a=Object(b.a)(["  \n  0% {top: 1px;}\n  25% {top: 2px;}\n  50% {top: 3px;}\n  75% {top: 2px;}\n  100% {top: 1px;}"]))),O=Object(u.b)(i||(i=Object(b.a)(["  \n0% {opacity: 0;  }\n  25% {opacity: 0.5;}\n  50% {opacity: 1;}\n  75% {opacity: 0.5;}\n  100% {opacity: 0;}"]))),g=u.a.div(r||(r=Object(b.a)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10%;\n  width: 24px;\n  height: 100px;\n  transition: all 0.5s ease-in-out;\n  opacity: ",";\n"])),(function(e){return e.scrolled>100?0:1})),v=u.a.div(c||(c=Object(b.a)(["\n  height: 42px;\n  width: 24px;\n  border-radius: 14px;\n  -webkit-transform: none;\n  transform: none;\n  border: 2px solid ",";\n  top: 170px;\n"])),p.a.lightestSlate),y=u.a.div(o||(o=Object(b.a)(["\n  display: block;\n  margin: 5px auto;\n  background: transparent;\n  position: relative;\n  height: 10px;\n  width: 6px;\n  border: 2px solid ",";\n  border-radius: 8px;\n  -webkit-animation: "," 0.8s ease-in-out infinite;\n  animation: "," 0.8s ease-in-out infinite;\n"])),p.a.lightestSlate,f,f),w=u.a.div(s||(s=Object(b.a)(["\n  display: block;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border-right: 2px solid ",";\n  border-bottom: 2px solid ",";\n  margin: 0 0 5px 6px;\n  width: 13px;\n  height: 13px;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n  animation: "," 1s infinite;\n"])),p.a.lightestSlate,p.a.lightestSlate,O),k=Object(u.a)(w)(l||(l=Object(b.a)(["\n  -webkit-animation-delay: 0.1s;\n  -moz-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n  margin-top: 1px;\n"]))),N=Object(u.a)(w)(d||(d=Object(b.a)(["\n  -webkit-animation-delay: 0.2s;\n  -moz-animation-delay: 0.2s;\n  margin-top: -6px;\n  animation-delay: 0.2s;\n"])))},92:function(e,n,t){}}]);