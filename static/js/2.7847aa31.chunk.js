(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[2],{151:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(58),o=r(62),i=r(86),a=r(81);function s(){var t=!1,e=[],r=new Set,s={subscribe:function(t){return r.add(t),function(){r.delete(t)}},start:function(n,o){if(t){var a=[];return r.forEach((function(t){a.push(Object(i.a)(t,n,{transitionOverride:o}))})),Promise.all(a)}return new Promise((function(t){e.push({animation:[n,o],resolve:t})}))},set:function(e){return Object(o.a)(t,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),r.forEach((function(t){Object(a.d)(t,e)}))},stop:function(){r.forEach((function(t){Object(i.b)(t)}))},mount:function(){return t=!0,e.forEach((function(t){var e=t.animation,r=t.resolve;s.start.apply(s,Object(n.e)([],Object(n.c)(e))).then(r)})),function(){t=!1,s.stop()}}};return s}var c=r(0),u=r(71);function l(){var t=Object(u.a)(s);return Object(c.useEffect)(t.mount,[]),t}},67:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return s})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return u})),r.d(e,"g",(function(){return l}));var n=r(18);function o(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(t)}function i(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"8 17 12 21 16 17"}},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"}},{tag:"path",attr:{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}}]})(t)}function a(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(t)}function s(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(t)}function c(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"}}]})(t)}function u(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(t)}function l(t){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(t)}},97:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(0);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var i=new Map,a=new WeakMap,s=0;function c(t){return Object.keys(t).sort().filter((function(e){return void 0!==t[e]})).map((function(e){return e+"_"+("root"===e?(r=t.root)?(a.has(r)||(s+=1,a.set(r,s.toString())),a.get(r)):"0":t[e]);var r})).toString()}function u(t,e,r){if(void 0===r&&(r={}),!t)return function(){};var n=function(t){var e=c(t),r=i.get(e);if(!r){var n,o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r,i=e.isIntersecting&&n.some((function(t){return e.intersectionRatio>=t}));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=i),null==(r=o.get(e.target))||r.forEach((function(t){t(i,e)}))}))}),t);n=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:a,elements:o},i.set(e,r)}return r}(r),o=n.id,a=n.observer,s=n.elements,u=s.get(t)||[];return s.has(t)||s.set(t,u),u.push(e),a.observe(t),function(){u.splice(u.indexOf(e),1),0===u.length&&(s.delete(t),a.unobserve(t)),0===s.size&&(a.disconnect(),i.delete(o))}}function l(t){return"function"!==typeof t.children}var h=function(t){var e,r;function i(e){var r;return(r=t.call(this,e)||this).node=null,r._unobserveCb=null,r.handleNode=function(t){r.node&&(r.unobserve(),t||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=t||null,r.observeNode()},r.handleChange=function(t,e){t&&r.props.triggerOnce&&r.unobserve(),l(r.props)||r.setState({inView:t,entry:e}),r.props.onChange&&r.props.onChange(t,e)},r.state={inView:!!e.initialInView,entry:void 0},r}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var a=i.prototype;return a.componentDidUpdate=function(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var t=this.props,e=t.threshold,r=t.root,n=t.rootMargin,o=t.trackVisibility,i=t.delay;this._unobserveCb=u(this.node,this.handleChange,{threshold:e,root:r,rootMargin:n,trackVisibility:o,delay:i})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!l(this.props)){var t=this.state,e=t.inView,r=t.entry;return this.props.children({inView:e,entry:r,ref:this.handleNode})}var i=this.props,a=i.children,s=i.as,c=i.tag,u=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(n.createElement)(s||c||"div",o({ref:this.handleNode},u),a)},i}(n.Component);function d(t){var e=void 0===t?{}:t,r=e.threshold,o=e.delay,i=e.trackVisibility,a=e.rootMargin,s=e.root,c=e.triggerOnce,l=e.skip,h=e.initialInView,d=Object(n.useRef)(),f=Object(n.useState)({inView:!!h}),p=f[0],v=f[1],g=Object(n.useCallback)((function(t){void 0!==d.current&&(d.current(),d.current=void 0),l||t&&(d.current=u(t,(function(t,e){v({inView:t,entry:e}),e.isIntersecting&&c&&d.current&&(d.current(),d.current=void 0)}),{root:s,rootMargin:a,threshold:r,trackVisibility:i,delay:o}))}),[Array.isArray(r)?r.toString():r,s,a,c,l,i,o]);Object(n.useEffect)((function(){d.current||!p.entry||c||l||v({inView:!!h})}));var b=[g,p.inView,p.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}}}]);