(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c06771c"],{"0134":function(t,n,e){"use strict";(function(t){e("159b");n["a"]={data:function(){return{index:1,record:[]}},created:function(){this.Record(),this.SetRem()},methods:{SetRem:function(){var n=document.body.clientWidth;t.isMobile=!1,n<=768?(document.documentElement.style.fontSize=n/7.68+"px",t.isMobile=!0):document.documentElement.style.fontSize=n>768&&n<1920?n/19.2+"px":"100px"},Next:function(){this.index<6?this.index++:this.index=1,this.Record(),6==this.record.length&&alert("謝謝美麗又可愛和大方的小姐原諒我")},Previous:function(){alert("拜託，原諒我啦"),1!=this.index?this.index--:this.index=6,this.Record()},Record:function(){var t=this,n=!1;this.record.forEach((function(e){e==t.index&&(n=!0)})),n||this.record.push(this.index)}}}}).call(this,e("c8ba"))},"159b":function(t,n,e){var i=e("da84"),r=e("fdbc"),c=e("17c2"),o=e("9112");for(var s in r){var a=i[s],u=a&&a.prototype;if(u&&u.forEach!==c)try{o(u,"forEach",c)}catch(f){u.forEach=c}}},"17c2":function(t,n,e){"use strict";var i=e("b727").forEach,r=e("a640"),c=r("forEach");t.exports=c?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"57da":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"list"},[e("div",{staticClass:"img",class:"img_"+t.index})]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"button",on:{click:function(n){return t.Previous()}}},[t._v("不原諒我")]),e("div",{staticClass:"button",on:{click:function(n){return t.Next()}}},[t._v("原諒我")])])])},r=[],c=e("0134"),o=c["a"],s=e("2877"),a=Object(s["a"])(o,i,r,!1,null,null,null);n["default"]=a.exports},"65f0":function(t,n,e){var i=e("861d"),r=e("e8b5"),c=e("b622"),o=c("species");t.exports=function(t,n){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?i(e)&&(e=e[o],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},a640:function(t,n,e){"use strict";var i=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&i((function(){e.call(null,n||function(){throw 1},1)}))}},b727:function(t,n,e){var i=e("0366"),r=e("44ad"),c=e("7b0b"),o=e("50c4"),s=e("65f0"),a=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,f=4==t,d=6==t,l=7==t,h=5==t||d;return function(v,p,x,b){for(var m,y,E=c(v),w=r(E),C=i(p,x,3),R=o(w.length),g=0,k=b||s,A=n?k(v,R):e||l?k(v,0):void 0;R>g;g++)if((h||g in w)&&(m=w[g],y=C(m,g,E),t))if(n)A[g]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return g;case 2:a.call(A,m)}else switch(t){case 4:return!1;case 7:a.call(A,m)}return d?-1:u||f?f:A}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},e8b5:function(t,n,e){var i=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-9c06771c.1d8b01c7.js.map