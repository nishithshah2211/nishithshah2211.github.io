(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/9aa":function(t,n,e){var r=e("NykK"),o=e("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"/YQh":function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),o=e.n(r),i=(e("f3/d"),e("a1Th"),e("Btvt"),e("XfO3"),e("HEwt"),e("rGqo"),e("rE2o"),e("ioFf"),e("91GP"),e("FLlr"),e("bHtr"),e("LvDl")),a=e("WjpJ"),u=e.n(a),c=function(t){var n=t.markSize,e={width:.15*n+"vmin",height:n+"vmin",backgroundColor:"black",position:"absolute"},r=Object.assign({},e,{transform:"rotate(45deg)"}),i=Object.assign({},e,{transform:"rotate(-45deg)"});return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:r}),o.a.createElement("div",{style:i}))},l=function(t){var n=t.markSize,e={borderRadius:"50%",position:"absolute"},r=Object.assign({width:n+"vmin",height:n+"vmin",backgroundColor:"black"},e),i=Object.assign({width:.75*n+"vmin",height:.75*n+"vmin",backgroundColor:"white"},e);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:r}),o.a.createElement("div",{style:i}))},f=function(t){var n=t.cellNum,e=t.cellSize,i=t.X_Player,a=t.O_Player,u=t.playerTurn,f=Object(r.useState)(null),s=f[0],v=f[1],p=.85*e,d=Object(r.useState)(!1),m=d[0],b=d[1],h={border:"1px solid black",height:e+"vmin",width:e+"vmin",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},y=Object.assign({},h,{backgroundColor:"lightblue",cursor:"pointer"}),g=m?y:h;return null===s?o.a.createElement("div",{role:"button",tabIndex:"-1",style:g,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},onClick:function(){return u(n,v)}}):o.a.createElement("div",{role:"button",tabIndex:"-1",style:g,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)}},s===i&&o.a.createElement(c,{markSize:p}),s===a&&o.a.createElement(l,{markSize:p}))},s=function(t){var n=t.columns,e=t.rowIndex,r={cellSize:t.cellSize,X_Player:t.X_Player,O_Player:t.O_Player,playerTurn:t.playerTurn};return o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},Object(i.times)(n,(function(t){return o.a.createElement(f,Object.assign({},r,{key:t,cellNum:e*n+t}))})))};function v(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var d=function(t){var n=t.rows,e=t.columns,a=t.k,c=Math.min(80/n,80/e),l=Object(r.useState)({board:new Array(n*e).fill(""),turn:"x",win:null,draw:!1}),f=l[0],p=l[1],d="x".repeat(a),m="o".repeat(a),b={columns:e,cellSize:c,gameState:f,setGameState:p,X_Player:"x",O_Player:"o",playerTurn:function(t,r){if(!f.draw&&null===f.win){var o=f.board,i=f.turn;if(o[t]=i,p((function(t){return Object.assign({},t,{board:o})})),r(i),function(t){for(var r="x"===f.turn?d:m,o=Math.floor(t/e),i=Math.floor(t%e),c=Math.max(0,i-a+1),l=Math.min(e,i+a),s=-1!==u()(c,l).map((function(t){return f.board[o*e+t]})).join("").indexOf(r),p=Math.max(0,o-a+1),b=Math.min(n,o+a),h=-1!==u()(p,b).map((function(t){return f.board[t*e+i]})).join("").indexOf(r),y=[],g=o-1,x=i-1,j=0;g>=0&&x>=0&&j<a-1;j++,g--,x--)y.push([g,x]);for(var w=[],S=o+1,O=i+1,E=0;S<n&&O<e&&E<a-1;E++,S++,O++)w.push([S,O]);for(var P=-1!==[].concat(v(y.reverse()),[[o,i]],w).map((function(t){return f.board[t[0]*e+t[1]]})).join("").indexOf(r),k=[],F=o-1,C=i+1,M=0;F>=0&&C<e&&M<a-1;M++,F--,C++)k.push([F,C]);for(var N=[],I=o+1,K=i-1,A=0;I<n&&K>=0&&A<a-1;A++,I++,K--)N.push([I,K]);var U=-1!==[].concat(v(N.reverse()),[[o,i]],k).map((function(t){return f.board[t[0]*e+t[1]]})).join("").indexOf(r);return s||h||P||U}(t))p((function(t){return Object.assign({},t,{win:i})}));else if(f.board.map((function(t){return"x"===t||"o"===t})).every(Boolean))p((function(t){return Object.assign({},t,{draw:!0})}));else{var c="x"===i?"o":"x";p((function(t){return Object.assign({},t,{turn:c})}))}}}};return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(i.times)(n,(function(t){return o.a.createElement(s,Object.assign({},b,{key:t,rowIndex:t}))})),!f.draw&&null===f.win&&o.a.createElement("div",null,"Player ",f.turn.toUpperCase()," to Play!"),f.draw&&o.a.createElement("div",null,"Draw Game!"),null!==f.win&&o.a.createElement("div",null,"Player ",f.win.toUpperCase()," wins!"))},m=function(t){var n=t.title,e=t.onClick,i=Object(r.useState)(!1),a=i[0],u=i[1],c={width:"16vmin",border:"1px solid black",padding:"1vmin"},l=Object.assign({},c,{backgroundColor:"lightblue",cursor:"pointer"}),f=a?l:c;return o.a.createElement("button",{onClick:e,style:f,onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}},n)};n.default=function(){var t=Object(r.useState)(1),n=t[0],e=t[1],i=Object(r.useState)(1),a=i[0],u=i[1],c=Object(r.useState)(1),l=c[0],f=c[1],s=Object(r.useState)(!1),v=s[0],p=s[1],b=Object(r.useState)(!1),h=b[0],y=b[1],g=Object(r.useState)(""),x=g[0],j=g[1],w={width:"8vmin",backgroundColor:"beige",color:"black",border:"1px solid black",padding:"1vmin",margin:"1vmin",textAlign:"center"};return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",width:"100vw",height:"100vh"}},!v&&o.a.createElement("div",null,o.a.createElement("span",null,"Rows(M):"),o.a.createElement("input",{value:n,style:w,type:"number",min:"1",placeholder:"rows",onChange:function(t){return e(parseInt(t.target.value))}}),o.a.createElement("span",null,"Columns(N):"),o.a.createElement("input",{value:a,style:w,type:"number",min:"1",placeholder:"columns",onChange:function(t){return u(parseInt(t.target.value))}}),o.a.createElement("span",null,"K:"),o.a.createElement("input",{value:l,style:w,type:"number",min:"1",placeholder:"columns",onChange:function(t){return f(parseInt(t.target.value))}}),o.a.createElement(m,{title:"Start Game",onClick:function(){l>n&&l>a?(j("K cannot be greater than both Rows or Columns!"),y(!0)):(j(""),y(!1),p(!0))}})),h&&o.a.createElement("div",{style:{borderWidth:"5px",borderStyle:"dashed solid",borderColor:"black",padding:"1vmin",color:"lightred",backgroundColor:"lightblue"}},x),v&&o.a.createElement(d,{rows:n,columns:a,k:l}),v&&o.a.createElement("div",null,"M = ",n,"| N = ",a," | K = ",l),v&&o.a.createElement(m,{title:"Restart Game",onClick:function(){return p(!1)}}))}},"/e88":function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6VaU":function(t,n,e){"use strict";var r=e("XKFU"),o=e("xF/b"),i=e("S/j/"),a=e("ne8i"),u=e("2OiF"),c=e("zRwo");r(r.P,"Array",{flatMap:function(t){var n,e,r=i(this);return u(t),n=a(r.length),e=c(r,0),o(e,r,r,n,0,1,t,arguments[1]),e}}),e("nGyu")("flatMap")},"7VC1":function(t,n,e){"use strict";var r=e("XKFU"),o=e("Lgjv"),i=e("ol8x"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*a,"String",{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"9XZr":function(t,n,e){"use strict";var r=e("XKFU"),o=e("Lgjv"),i=e("ol8x"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*a,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},AP2z:function(t,n,e){e("a1Th"),e("h7Nl"),e("Btvt");var r=e("nmnc"),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,u),e=t[u];try{t[u]=void 0;var r=!0}catch(c){}var o=a.call(t);return r&&(n?t[u]=e:delete t[u]),o}},AphP:function(t,n,e){"use strict";var r=e("XKFU"),o=e("S/j/"),i=e("apmT");r(r.P+r.F*e("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var n=o(this),e=i(n);return"number"!=typeof e||isFinite(e)?n.toISOString():null}})},ExA7:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},FLlr:function(t,n,e){var r=e("XKFU");r(r.P,"String",{repeat:e("l0Rn")})},GoyQ:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},"HAE/":function(t,n,e){var r=e("XKFU");r(r.S+r.F*!e("nh4g"),"Object",{defineProperty:e("hswa").f})},HLqC:function(t,n,e){var r=e("R5Y4"),o=e("mv/X"),i=e("ZCgT");t.exports=function(t){return function(n,e,a){return a&&"number"!=typeof a&&o(n,e,a)&&(e=a=void 0),n=i(n),void 0===e?(e=n,n=0):e=i(e),a=void 0===a?n<e?1:-1:i(a),r(n,e,a,t)}}},I74W:function(t,n,e){"use strict";e("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},INYr:function(t,n,e){"use strict";var r=e("XKFU"),o=e("CkkT")(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e("nGyu")(i)},KfNM:function(t,n,e){e("a1Th"),e("h7Nl"),e("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,n,e){var r=e("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},Lgjv:function(t,n,e){var r=e("ne8i"),o=e("l0Rn"),i=e("vhPU");t.exports=function(t,n,e,a){var u=String(i(t)),c=u.length,l=void 0===e?" ":String(e),f=r(n);if(f<=c||""==l)return u;var s=f-c,v=o.call(l,Math.ceil(s/l.length));return v.length>s&&(v=v.slice(0,s)),a?v+u:u+v}},MMmD:function(t,n,e){var r=e("lSCD"),o=e("shjB");t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},Nr18:function(t,n,e){"use strict";var r=e("S/j/"),o=e("d/Gc"),i=e("ne8i");t.exports=function(t){for(var n=r(this),e=i(n.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,e),c=a>2?arguments[2]:void 0,l=void 0===c?e:o(c,e);l>u;)n[u++]=t;return n}},NykK:function(t,n,e){var r=e("nmnc"),o=e("AP2z"),i=e("KfNM"),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},Oyvg:function(t,n,e){var r=e("dyZX"),o=e("Xbzi"),i=e("hswa").f,a=e("kJMx").f,u=e("quPj"),c=e("C/va"),l=r.RegExp,f=l,s=l.prototype,v=/a/g,p=/a/g,d=new l(v)!==v;if(e("nh4g")&&(!d||e("eeVq")((function(){return p[e("K0xU")("match")]=!1,l(v)!=v||l(p)==p||"/a/i"!=l(v,"i")})))){l=function(t,n){var e=this instanceof l,r=u(t),i=void 0===n;return!e&&r&&t.constructor===l&&i?t:o(d?new f(r&&!i?t.source:t,n):f((r=t instanceof l)?t.source:t,r&&i?c.call(t):n),e?this:s,l)};for(var m=function(t){t in l||i(l,t,{configurable:!0,get:function(){return f[t]},set:function(n){f[t]=n}})},b=a(f),h=0;b.length>h;)m(b[h++]);s.constructor=l,l.prototype=s,e("KroJ")(r,"RegExp",l)}e("elZq")("RegExp")},R5Y4:function(t,n){var e=Math.ceil,r=Math.max;t.exports=function(t,n,o,i){for(var a=-1,u=r(e((n-t)/(o||1)),0),c=Array(u);u--;)c[i?u:++a]=t,t+=o;return c}},SPin:function(t,n,e){"use strict";var r=e("XKFU"),o=e("eyMr");r(r.P+r.F*!e("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return o(this,t,arguments.length,arguments[1],!0)}})},Tze0:function(t,n,e){"use strict";e("qncB")("trim",(function(t){return function(){return t(this,3)}}))},WFqU:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e("yLpj"))},WjpJ:function(t,n,e){var r=e("HLqC")();t.exports=r},YuTi:function(t,n,e){e("HAE/"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},ZCgT:function(t,n,e){var r=e("tLB3");t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},bHtr:function(t,n,e){var r=e("XKFU");r(r.P,"Array",{fill:e("Nr18")}),e("nGyu")("fill")},fA63:function(t,n,e){"use strict";e("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},h7Nl:function(t,n,e){var r=Date.prototype,o=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&e("KroJ")(r,"toString",(function(){var t=i.call(this);return t==t?o.call(this):"Invalid Date"}))},l0Rn:function(t,n,e){"use strict";var r=e("RYi7"),o=e("vhPU");t.exports=function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},lSCD:function(t,n,e){var r=e("NykK"),o=e("GoyQ");t.exports=function(t){if(!o(t))return!1;var n=r(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},ljhN:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},mGWK:function(t,n,e){"use strict";var r=e("XKFU"),o=e("aCFj"),i=e("RYi7"),a=e("ne8i"),u=[].lastIndexOf,c=!!u&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!e("LyE8")(u)),"Array",{lastIndexOf:function(t){if(c)return u.apply(this,arguments)||0;var n=o(this),e=a(n.length),r=e-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=e+r);r>=0;r--)if(r in n&&n[r]===t)return r||0;return-1}})},"mv/X":function(t,n,e){var r=e("ljhN"),o=e("MMmD"),i=e("wJg7"),a=e("GoyQ");t.exports=function(t,n,e){if(!a(e))return!1;var u=typeof n;return!!("number"==u?o(e)&&i(n,e.length):"string"==u&&n in e)&&r(e[n],t)}},nmnc:function(t,n,e){var r=e("Kz5y").Symbol;t.exports=r},qncB:function(t,n,e){var r=e("XKFU"),o=e("vhPU"),i=e("eeVq"),a=e("/e88"),u="["+a+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(t,n,e){var o={},u=i((function(){return!!a[t]()||"​"!="​"[t]()})),c=o[t]=u?n(s):a[t];e&&(o[e]=c),r(r.P+r.F*u,"String",o)},s=f.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(l,"")),t};t.exports=f},shjB:function(t,n){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},tLB3:function(t,n,e){e("pIFo");var r=e("GoyQ"),o=e("/9aa"),i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=u.test(t);return e||c.test(t)?l(t.slice(2),e?2:8):a.test(t)?NaN:+t}},wJg7:function(t,n){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},"xF/b":function(t,n,e){"use strict";var r=e("EWmC"),o=e("0/R4"),i=e("ne8i"),a=e("m0Pp"),u=e("K0xU")("isConcatSpreadable");t.exports=function t(n,e,c,l,f,s,v,p){for(var d,m,b=f,h=0,y=!!v&&a(v,p,3);h<l;){if(h in c){if(d=y?y(c[h],h,e):c[h],m=!1,o(d)&&(m=void 0!==(m=d[u])?!!m:r(d)),m&&s>0)b=t(n,e,d,i(d.length),b,s-1)-1;else{if(b>=9007199254740991)throw TypeError();n[b]=d}b++}h++}return b}},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"==typeof window&&(e=window)}t.exports=e}}]);
//# sourceMappingURL=component---src-pages-tictactoe-js-e95e389a9cec978bda89.js.map