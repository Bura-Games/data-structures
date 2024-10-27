(()=>{"use strict";var e,t,r,a,f,o={},d={};function c(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={exports:{}};return o[e].call(r.exports,r,r.exports,c),r.exports}c.m=o,e=[],c.O=(t,r,a,f)=>{if(!r){var o=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],f=e[i][2];for(var d=!0,n=0;n<r.length;n++)(!1&f||o>=f)&&Object.keys(c.O).every((e=>c.O[e](r[n])))?r.splice(n--,1):(d=!1,f<o&&(o=f));if(d){e.splice(i--,1);var b=a();void 0!==b&&(t=b)}}return t}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[r,a,f]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var f=Object.create(null);c.r(f);var o={};t=t||[null,r({}),r([]),r(r)];for(var d=2&a&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,c.d(f,o),f},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({27:"6461185d",53:"935f2afb",65:"6f11ca18",69:"9cb3e473",178:"dfb653d8",188:"220f6a88",217:"3b8c55ea",252:"21a5f9d6",279:"537da6f6",333:"ba94f249",374:"d3874e59",406:"6f701972",416:"3afd325f",422:"4e68fbbd",461:"1f0890b0",483:"44ba34f8",514:"1be78505",559:"e494175c",578:"ef7cd463",592:"89915680",619:"7fdfcc34",626:"db0dc3c2",671:"0e384e19",702:"2750ba56",706:"1913e025",833:"c4c72583",839:"33608545",908:"af77a49b",909:"594ad395",918:"17896441"}[e]||e)+"."+{27:"898834f3",53:"21ae314f",65:"549f331d",69:"77013d52",178:"da2267cf",188:"0ec57d08",217:"2be36353",252:"5a89b921",279:"ad1fb835",333:"6c84c909",339:"ea7d7f66",343:"0365238a",374:"c33329f4",406:"98b997c6",416:"c7516310",422:"322686f5",461:"bce3a879",483:"89cdbbfa",514:"c96f2a93",559:"1b186512",578:"f9f45134",592:"b5013681",619:"2507002d",626:"d04dcbc4",671:"17bea4ca",702:"d24ca5c4",706:"d0a22bac",833:"b3c22ea7",839:"e1e4ec5d",878:"27baceba",908:"e93422ff",909:"38873801",918:"80738a2a",972:"b370daa7"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},f="docs:",c.l=(e,t,r,o)=>{if(a[e])a[e].push(t);else{var d,n;if(void 0!==r)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+r){d=u;break}}d||(n=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.setAttribute("data-webpack",f+r),d.src=e),a[e]=[t];var l=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var f=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),n&&document.head.appendChild(d)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/game-dev-structures/",c.gca=function(e){return e={17896441:"918",33608545:"839",89915680:"592","6461185d":"27","935f2afb":"53","6f11ca18":"65","9cb3e473":"69",dfb653d8:"178","220f6a88":"188","3b8c55ea":"217","21a5f9d6":"252","537da6f6":"279",ba94f249:"333",d3874e59:"374","6f701972":"406","3afd325f":"416","4e68fbbd":"422","1f0890b0":"461","44ba34f8":"483","1be78505":"514",e494175c:"559",ef7cd463:"578","7fdfcc34":"619",db0dc3c2:"626","0e384e19":"671","2750ba56":"702","1913e025":"706",c4c72583:"833",af77a49b:"908","594ad395":"909"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var a=c.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var f=new Promise(((r,f)=>a=e[t]=[r,f]));r.push(a[2]=f);var o=c.p+c.u(t),d=new Error;c.l(o,(r=>{if(c.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var f=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+f+": "+o+")",d.name="ChunkLoadError",d.type=f,d.request=o,a[1](d)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var a,f,o=r[0],d=r[1],n=r[2],b=0;if(o.some((t=>0!==e[t]))){for(a in d)c.o(d,a)&&(c.m[a]=d[a]);if(n)var i=n(c)}for(t&&t(r);b<o.length;b++)f=o[b],c.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return c.O(i)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();