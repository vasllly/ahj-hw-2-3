!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2)},function(t,e,n){},function(t,e){const n=[{id:26,title:"Побег из Шоушенка",imdb:9.3,year:1994},{id:25,title:"Крёстный отец",imdb:9.2,year:1972},{id:27,title:"Крёстный отец 2",imdb:9,year:1974},{id:1047,title:"Тёмный рыцарь",imdb:9,year:2008},{id:223,title:"Криминальное чтиво",imdb:8.9,year:1994}],r=document.getElementById("table");if(!(r instanceof HTMLElement))throw new Error("container is not HTMLElement");function i(t){r.removeChild(document.getElementById("tbody"));const e=document.createElement("tbody");e.id="tbody",r.appendChild(e),t.forEach(t=>{const n=document.createElement("tr"),r=document.createElement("td");r.textContent=t.id;const i=document.createElement("td");i.textContent=t.title;const o=document.createElement("td");o.textContent=`(${t.year})`;const d=document.createElement("td");d.textContent=t.imdb.toFixed(2),n.appendChild(r),n.appendChild(i),n.appendChild(o),n.appendChild(d),e.appendChild(n)})}i(n);let o=0;setInterval(()=>{const t=document.getElementById("id"),e=document.getElementById("title"),r=document.getElementById("year"),d=document.getElementById("imdb");0===o&&(n.sort((t,e)=>t.id-e.id),i(n),d.classList="",t.classList="darr"),1===o&&(n.sort((t,e)=>e.id-t.id),i(n),t.classList="uarr"),2===o&&(n.sort((t,e)=>t.title.localeCompare(e.title)),i(n),t.classList="",e.classList="darr"),3===o&&(n.sort((t,e)=>e.title.localeCompare(t.title)),i(n),e.classList="uarr"),4===o&&(n.sort((t,e)=>t.year-e.year),i(n),e.classList="",r.classList="darr"),5===o&&(n.sort((t,e)=>e.year-t.year),i(n),r.classList="uarr"),6===o&&(n.sort((t,e)=>t.imdb-e.imdb),i(n),r.classList="",d.classList="darr"),7===o&&(n.sort((t,e)=>e.imdb-t.imdb),i(n),d.classList="uarr"),o=7===o?0:o+1},2e3)}]);