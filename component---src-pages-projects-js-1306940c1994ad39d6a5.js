(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+qE3":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("2Spj"),n("f3/d"),n("hHhE"),n("HAE/"),n("xfY5"),n("7h0T"),n("ioFf"),n("xpiv"),n("3xty");var r,i="object"==typeof Reflect?Reflect:null,a=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function l(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,n,r){var i,a,o,s;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),o=a[t]),void 0===o)o=a[t]=n,++e._eventsCount;else if("function"==typeof o?o=a[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(i=l(e))>0&&o.length>i&&!o.warned){o.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=o.length,s=c,console&&console.warn&&console.warn(s)}return e}function f(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,a(this.listener,this.target,e))}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function m(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):v(i,i.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var c=i[e];if(void 0===c)return!1;if("function"==typeof c)a(c,this,t);else{var l=c.length,u=v(c,l);for(n=0;n<l;++n)a(u[n],this,t)}return!0},s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,a,o;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,i=a;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,a=Object.keys(n);for(r=0;r<a.length;++r)"removeListener"!==(i=a[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},s.prototype.listeners=function(e){return m(this,e,!0)},s.prototype.rawListeners=function(e){return m(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},"16l3":function(e,t,n){"use strict";n.r(t),n.d(t,"queryImage",(function(){return d}));n("0mN4");var r=n("q1tI"),i=n.n(r),a=n("17x9"),o=n.n(a),s=n("Wbzz"),c=n("9eSz"),l=n.n(c),u=n("Zttt"),f=n("wtQ5"),p=n("ZO1O"),m=n("IP2g"),h=n("8tEE"),v=(n("+qE3"),n("0NyX")),d="223903196",y=function(e){var t=e.data;return i.a.createElement(u.a,null,i.a.createElement(f.a,{pageTitle:"Projects",description:"Front-end developer, developing web pages",keywords:"React, Gatsby, Front-end, developer, API"}),i.a.createElement("section",{className:"section is-size-5-desktop is-size-6-touch"},i.a.createElement(v.a,null,"Projects"),i.a.createElement("p",{className:"has-text-centered"},"See some of my projects on my ",i.a.createElement("a",{href:"https://github.com/pedrohenrickcs",target:"_blank","aria-label":"Github"},i.a.createElement("span",{className:"icon"},i.a.createElement(m.a,{icon:h.b})),"GitHub")),i.a.createElement("div",{className:"columns is-centered"},i.a.createElement("div",{className:"column is-half"},i.a.createElement(p.a,{title:"Aniversário Brastemp",subtitle:"Criação Landing Page para aniversário da loja",link:"https://loja.brastemp.com.br/cadastro",tags:["HTML","SCSS","Javascript","Vtex"],image:i.a.createElement(l.a,{fixed:t.project1.childImageSharp.fixed,alt:"Brastemp"})}),i.a.createElement(p.a,{title:"Landing Page",subtitle:"Criação Landing Page para aniversário da loja",link:"https://www.diretonaloja.com.br/landing",tags:["HTML","SCSS","Javascript","Vtex"],image:i.a.createElement(l.a,{fixed:t.project2.childImageSharp.fixed,alt:"Direto na Loja"})}),i.a.createElement(p.a,{title:"Diretonaloja",subtitle:"Página de cupom customizada feita em Vtex",link:"https://www.diretonaloja.com.br/cupom",tags:["HTML","SCSS","Javascript","Vtex"],image:i.a.createElement(l.a,{fixed:t.project3.childImageSharp.fixed,alt:"Direto na Loja"})}),i.a.createElement(p.a,{title:"Compra Certa",subtitle:"Criação Landing Page para aniversário da loja",link:"https://www.compracerta.com.br/landing/aniversario",tags:["HTML","SCSS","Javascript","Vtex"],image:i.a.createElement(l.a,{fixed:t.project4.childImageSharp.fixed,alt:"Direto na Loja"})}),i.a.createElement(p.a,{title:"Api GitHub",subtitle:"Consulta repositórios GitHub",link:"https://pedrohenrick-api-github.netlify.com",tags:["HTML","SCSS","React","Rest API"],image:i.a.createElement(l.a,{fixed:t.project5.childImageSharp.fixed,alt:"Api Guthub"})}))),i.a.createElement("p",{className:"has-text-centered"},"Check out my"," ",i.a.createElement(s.Link,{to:"/stack"},"stacks"),".")))};y.protoType={data:o.a.object.isRequired},t.default=y},"3xty":function(e,t,n){var r=n("XKFU"),i=n("2OiF"),a=n("y3w9"),o=(n("dyZX").Reflect||{}).apply,s=Function.apply;r(r.S+r.F*!n("eeVq")((function(){o((function(){}))})),"Reflect",{apply:function(e,t,n){var r=i(e),c=a(n);return o?o(r,t,c):s.call(r,t,c)}})},"7h0T":function(e,t,n){var r=n("XKFU");r(r.S,"Number",{isNaN:function(e){return e!=e}})},ZO1O:function(e,t,n){"use strict";n("tUrg");var r=n("q1tI"),i=n.n(r),a=function(e){var t=e.title,n=e.subtitle,r=e.link,a=e.image,o=e.tags;return i.a.createElement("a",{href:r,target:"_blank"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},a),i.a.createElement("div",{className:"media-content"},i.a.createElement("h4",{className:"title is-size-5-desktop is-size-5-touch has-text-light"},t),i.a.createElement("p",{className:"subtitle is-size-5-desktop is-size-6-touch has-text-light"},n),i.a.createElement("div",{className:"tags"},o.map((function(e){return i.a.createElement("span",{className:"tag",key:e},e)}))))))))};a.defaultProps={link:null,tags:[],image:null};var o=a;n.d(t,"a",(function(){return o}))},mQtv:function(e,t,n){var r=n("kJMx"),i=n("JiEa"),a=n("y3w9"),o=n("dyZX").Reflect;e.exports=o&&o.ownKeys||function(e){var t=r.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),i=n("aagx"),a=n("LZWt"),o=n("Xbzi"),s=n("apmT"),c=n("eeVq"),l=n("kJMx").f,u=n("EemH").f,f=n("hswa").f,p=n("qncB").trim,m=r.Number,h=m,v=m.prototype,d="Number"==a(n("Kuth")(v)),y="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,r,i,a=(t=y?t.trim():p(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var o,c=t.slice(2),l=0,u=c.length;l<u;l++)if((o=c.charCodeAt(l))<48||o>i)return NaN;return parseInt(c,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(d?c((function(){v.valueOf.call(n)})):"Number"!=a(n))?o(new h(g(t)),n,m):g(t)};for(var b,E=n("nh4g")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;E.length>w;w++)i(h,b=E[w])&&!i(m,b)&&f(m,b,u(h,b));m.prototype=v,v.constructor=m,n("KroJ")(r,"Number",m)}},xpiv:function(e,t,n){var r=n("XKFU");r(r.S,"Reflect",{ownKeys:n("mQtv")})}}]);
//# sourceMappingURL=component---src-pages-projects-js-1306940c1994ad39d6a5.js.map