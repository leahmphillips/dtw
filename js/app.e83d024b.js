(function(t){function o(o){for(var e,i,s=o[0],a=o[1],u=o[2],c=0,p=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);h&&h(o);while(p.length)p.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var t,o=0;o<l.length;o++){for(var r=l[o],e=!0,s=1;s<r.length;s++){var a=r[s];0!==n[a]&&(e=!1)}e&&(l.splice(o--,1),t=i(i.s=r[0]))}return t}var e={},n={app:0},l=[];function i(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,o,r){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)i.d(r,e,function(o){return t[o]}.bind(null,e));return r},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=o,s=s.slice();for(var u=0;u<s.length;u++)o(s[u]);var h=a;l.push([0,"chunk-vendors"]),r()})({0:function(t,o,r){t.exports=r("cd49")},cd49:function(t,o,r){"use strict";r.r(o);r("e260"),r("e6cf"),r("cca6"),r("a79d");var e=r("2b0e"),n=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"container-fluid p-2 text-center",attrs:{id:"app"}},[t._l(t.output,(function(o,e){return[r("div",{key:o.id,staticClass:"w-100 d-flex flex-row justify-content-end align-items-center pb-1 mb-1",class:{"border-bottom":"END"!==o.roll,"border-secondary":"END"!==o.roll}},[r("div",{staticClass:"flex-grow-1 text-left"},["END"===o.roll?[r("hr",{staticStyle:{color:"transparent","border-color":"transparent"}})]:[r("div",{staticClass:"row"},[r("div",{staticClass:"col-1"},[o.roll?r("h3",[t._v("["+t._s(o.roll)+"] ")]):t._e()]),r("div",{staticClass:"col-11"},[r("h3",[t._v(t._s(o.output))])])])]],2),"END"!==o.roll?r("button",{staticClass:"btn btn-danger text-light",attrs:{type:"button"},on:{click:function(o){return t.removeItem(e)}}},[t._v("×")]):t._e()])]}))],2)},l=[],i=(r("99af"),["0","Butt plug","Completely naked & drool over face and body","Nipple clamps","Completely naked & drool into container","Collar, high heels, and bound when possible","Blow for 2m","The Full Package","Spank yourself the entire time","The Eager Slut"]),s=["1x deepthroat hold until you can't anymore","10x deepthroat hold 5s","40x back of throat","3x deepthroat hold 15s","10x deepthroat hold 5s with pushups","15x deepthroat hold 8s","20x deepthroat hold 10s","12x deepthroat fast and keep in mouth","20x deepthroat hold 15s","The Exhaustive Warmup"],a=["1x throatfuck until vomit","3x throatfuck for 10s","1x throatfuck for 25s","12x deepthroat hold 20s","1x deepthroat for 60s slowly","Lay on bed, head hanging over the side","5x throatfuck until gag","16x deepthroat hold 20s","Reflex Training","20x deepthroat hold 25s"],u=["Roll entire workout again","Ruin","Ruin on your face","Ruin on dildo and 1x deepthroat to clean","Ruin while deepthroating","Ruin in mouth and swallow","Edge 5 times","Ruin on your face and don't clean it (roll X)","The Hard Worker (roll Y)","The Professional Whore (roll W)"],h=0,c=e["a"].extend({name:"App",data:function(){return{intro:!0,output:[],secondPass:!1,droolOnFace:!1,special:2}},mounted:function(){var t=this.runWorkout();t&&(this.secondPass=!0,this.runWorkout())},methods:{roll:function(t){var o=this,r=function(){return Math.floor(10*Math.random())},e=function(){return 0},n=function(){return 9},l=function(){return 9},i=function(){return 1===o.special?0:4};if(this.special>0)switch(t){case"W":return e();case"X":return n();case"Y":return l();case"Z":return i();default:return r()}return r()},print:function(t,o){var r=h;h+=1,this.output.push({id:r,roll:t,output:o})},printRoll:function(t,o,r){var e=""===t||o<0?"":"".concat(t).concat(o);this.print(e,r)},handleDroolOnFace:function(){this.droolOnFace&&this.printRoll("",-1,"Pour drool on your face")},resolveW:function(t){if(0!==t){var o=i[t];this.printRoll("W",t,o)}4!==t&&9!==t&&0!==t||(this.droolOnFace=!0),7===t?(this.printRoll("W",-1,i[1]),this.printRoll("W",-1,i[3]),this.printRoll("W",-1,i[5])):9===t?(this.printRoll("W",-1,i[4]),this.printRoll("W",-1,"Blow for 3m")):0===t&&(this.printRoll("W",0,i[1]),this.printRoll("W",-1,i[3]),this.printRoll("W",-1,i[5]),this.printRoll("W",-1,i[4]),this.printRoll("W",-1,"Blow for 5m with deepthroat every 15s"))},resolveX:function(t){var o=s[t];this.printRoll("X",t,o),9===t&&(this.printRoll("X",-1,s[2]),this.printRoll("X",-1,s[4]),this.printRoll("X",-1,s[7]))},resolveY:function(t){var o=a[t];this.printRoll("Y",t,o),5===t?this.printRoll("Y",-1,a[1]):8===t&&(this.printRoll("Y",-1,a[2]),this.printRoll("Y",-1,a[2]),this.printRoll("Y",-1,a[4]),this.printRoll("Y",-1,a[4]))},resolveZ:function(t,o){this.handleDroolOnFace();var r=this.secondPass&&0===t?8:t;r=o&&6===r?7:r;var e=u[r];return this.printRoll("Z",r,e),6===r?this.resolveZ(this.roll("Z"),!0):7===r?(this.resolveX(this.roll("X")),this.printRoll("Z",-1,"You may clean up now")):8===r?(this.resolveY(this.roll("Y")),this.printRoll("Z",-1,u[3])):9===r&&(this.resolveW(this.roll("W")),this.handleDroolOnFace(),this.printRoll("Z",-1,u[5])),this.print("END",""),!this.secondPass&&0===r},runWorkout:function(){return this.droolOnFace=!1,this.resolveW(this.roll("W")),this.resolveX(this.roll("X")),this.resolveY(this.roll("Y")),this.resolveZ(this.roll("Z"),!1)},removeItem:function(t){for(var o=[],r=0;r<this.output.length;r+=1)r!==t&&o.push(this.output[r]);this.output=o}}}),p=c,d=r("2877"),f=Object(d["a"])(p,n,l,!1,null,null,null),v=f.exports;r("ab8b");e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.e83d024b.js.map