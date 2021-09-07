import{t as e,d as t,s as n,a as r,_ as i,b as o,c as s,e as c,f as a,i as l,g as d,S as u,h as f,j as h,k as v,l as g,r as p}from"./vendor.d9b76168.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k=e("<svg><circle></circle></svg>",4,!0),w=e('<svg><line stroke="black"></line></svg>',4,!0);t(["click"]);const m=e('<svg><polygon stroke="none"></polygon></svg>',4,!0);var b=function(){function e(t,n){o(this,e),s(this,"r",void 0),s(this,"q",void 0),this.r=t,this.q=n}return i(e,[{key:"coord",value:function(){return{x:480+1.5*this.q*60,y:480+60*(Math.sqrt(3)/2*this.q+Math.sqrt(3)*this.r)}}},{key:"distance",value:function(e){return(Math.abs(this.q-e.q)+Math.abs(this.r-e.r)+Math.abs(this.q+this.r-e.q-e.r))/2}},{key:"id",value:function(){return"hex".concat(this.r).concat(this.q)}},{key:"edge",value:function(e){var t=this;return C(this,15,"black","black","fill-current stroke-current hover:text-green-700",this.id(),(function(){return e(t)}))}},{key:"add",value:function(t,n){return new e(this.r+t,this.q+n)}},{key:"validBoard",value:function(){return this.distance(new e(0,0))<=3}},{key:"equals",value:function(e){return this.r==e.r&&this.q==e.q}},{key:"alpha",value:function(){var e=this.q+5,t=5-this.r-(e<=5?0:e-5);return String.fromCharCode("a".charCodeAt(0)-1+e)+t}}]),e}(),y=new b(-1,-1);function x(e){if(2!=(e=e.toLowerCase()).length)return y;var t=e.charCodeAt(0)-"a".charCodeAt(0)+1,n=+e[1];if(n<0||n>9||t<0||t>9)return y;var r=new b(t<=5?5-n:10-n-t,t-5);return r.distance(new b(0,0))<=4?r:y}function q(e){return Array.from(Array(Math.floor(e.length/2)).keys()).map((function(t){return x(e.slice(2*t,2*t+2))}))}function S(e,t){for(var n=0;n<e.length;n++)if(e[n].equals(t))return n;return-1}function C(e,t,i,o,s,c,a){var l=e.coord();return function(e,t,i,o,s,c,a,l){return d=k.cloneNode(!0),r(d,"click",l,!0),n(d,"cx",e),n(d,"cy",t),n(d,"r",i),n(d,"stroke",o),n(d,"stroke-width",5),n(d,"fill",s),n(d,"class",c),n(d,"id",a),d;var d}(l.x,l.y,t,i,o,s,c,a)}function M(e,t){var r,i,o,s,c,a=e.coord(),l=t.coord();return r=a.x,i=a.y,o=l.x,s=l.y,c=w.cloneNode(!0),n(c,"x1",r),n(c,"x2",o),n(c,"y1",i),n(c,"y2",s),n(c,"stroke-width",5),c}function A(e){return"".concat(e.r,":").concat(e.q)}function B(e){var t=e.split(":"),n=a(t,2),r=n[0],i=n[1];return new b(+r,+i)}var N=function(){function e(){o(this,e),s(this,"pieces",void 0),this.pieces=new Map}return i(e,[{key:"set",value:function(e,t){this.pieces.set(A(e),t)}},{key:"get",value:function(e){return this.pieces.get(A(e))}},{key:"delete",value:function(e){this.pieces.delete(A(e))}},{key:"length",get:function(){return this.pieces.size}}]),e}();e('<svg><rect width="60" height="22" fill="#eeeeee"></rect></svg>',4,!0),e('<svg><text font-size="13" fill="blue" text-anchor="middle">r:<!> q:</text></svg>',5,!0);function T(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw o}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e){return"black"===e?"white":"black"}var G=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;switch(o(this,e),s(this,"pieces",void 0),s(this,"available",void 0),s(this,"captured",void 0),s(this,"gameType",void 0),s(this,"currentMove",void 0),s(this,"who",void 0),s(this,"kind",void 0),s(this,"selected",void 0),s(this,"gipfToRemove",void 0),this.pieces=new N,this.currentMove=this.who="white",this.who="white",this.kind="move",this.selected=[],this.gipfToRemove=[],this.captured={black:0,white:0},this.available={black:12+r,white:12+n},this.gameType=t,t){case"basic":this.pieces.set(new b(3,0),{color:"white",kind:"regular"}),this.pieces.set(new b(0,-3),{color:"white",kind:"regular"}),this.pieces.set(new b(-3,3),{color:"white",kind:"regular"}),this.pieces.set(new b(-3,0),{color:"black",kind:"regular"}),this.pieces.set(new b(3,-3),{color:"black",kind:"regular"}),this.pieces.set(new b(0,3),{color:"black",kind:"regular"});break;case"standard":this.pieces.set(new b(3,0),{color:"white",kind:"gipf"}),this.pieces.set(new b(0,-3),{color:"white",kind:"gipf"}),this.pieces.set(new b(-3,3),{color:"white",kind:"gipf"}),this.pieces.set(new b(-3,0),{color:"black",kind:"gipf"}),this.pieces.set(new b(3,-3),{color:"black",kind:"gipf"}),this.pieces.set(new b(0,3),{color:"black",kind:"gipf"})}}return i(e,[{key:"stats",value:function(){return{available:{black:this.available.black,white:this.available.white},captured:{black:this.captured.black,white:this.captured.white},status:"selected"!==this.kind?this.kind:"",color:this.who,kind:this.kind}}},{key:"movable",value:function(e,t){for(var n=t.r-e.r,r=t.q-e.q,i=t;i.validBoard()&&this.pieces.get(i);)i=i.add(n,r);return i.validBoard()}},{key:"neighbors",value:function(e){return R.map((function(t){var n=a(t,2),r=n[0],i=n[1];return e.add(r,i)})).filter((function(e){return e.validBoard()}))}},{key:"possibleMoves",value:function(e){var t=this;return this.neighbors(e).filter((function(n){return t.movable(e,n)}))}},{key:"move",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"regular";if(t)"string"==typeof t&&(t=x(t)),"string"==typeof e&&(e=x(e));else{if("string"!=typeof e)return!1;var r=q(e),i=a(r,2);e=i[0],t=i[1]}if("move"!==this.kind||!t||!e||e.equals(y)||t.equals(y)||!this.movable(e,t))return!1;console.log('g.move("'.concat(e.alpha()).concat(t.alpha(),'")'));for(var o=t.r-e.r,s=t.q-e.q,c=t,l={color:this.currentMove,kind:n};this.pieces.get(c)&&c.validBoard();){var d=this.pieces.get(c);this.pieces.set(c,l),l=d,c=c.add(o,s)}return this.pieces.set(c,l),this.available[this.currentMove]--,this.updateState()}},{key:"quads",value:function(){var e,t=[],n=[],r=T(j);try{for(r.s();!(e=r.n()).done;)for(var i,o=a(e.value,3),s=o[0],c=o[1],l=o[2],d=null===(i=this.pieces.get(s))||void 0===i?void 0:i.color,u=1;s.validBoard();){var f;s=s.add(c,l);var h=null===(f=this.pieces.get(s))||void 0===f?void 0:f.color;if(h===d?u++:(d=h,u=1),d&&4===u){var v=[];v.push(s);for(var g=s.add(c,l);g.validBoard()&&this.pieces.get(g);g=g.add(c,l))v.push(g);for(var p=s.add(-c,-l);p.validBoard()&&this.pieces.get(p);p=p.add(-c,-l))v.push(p);"white"==d?n.push(v):t.push(v);break}}}catch(k){r.e(k)}finally{r.f()}return{black:t,white:n}}},{key:"select",value:function(e){if("confirm quad"!=this.kind&&"confirm gipf"!=this.kind)return!1;"string"==typeof e&&(e=x(e));var t=this.quads()[this.who];if(t.length<2)return!1;for(var n=0,r=-1,i=0;i<t.length;i++)-1!==S(t[i],e)&&(n++,r=i);return!(n>1)&&(this.selected=t[r],this.updateState())}},{key:"toggleGipf",value:function(e){if("confirm gipf"!=this.kind)return!1;"string"==typeof e&&(e=x(e));var t=S(this.gipfToRemove,e);return-1==t?this.gipfToRemove.push(e):this.gipfToRemove.splice(t,1),!0}},{key:"removeSelected",value:function(){if("selected"!==this.kind&&"confirm gipf"!==this.kind||!this.selected)return!1;var e,t=T(this.selected);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=this.pieces.get(n);"gipf"==r.kind&&-1==S(this.gipfToRemove,n)||(r.color==this.who?this.available[r.color]+="gipf"===r.kind?2:1:this.captured[_(r.color)]+="gipf"===r.kind?2:1,this.pieces.delete(n))}}catch(i){t.e(i)}finally{t.f()}return this.updateState()}},{key:"updateState",value:function(){var e=this.currentMove,t=_(this.currentMove);switch(this.kind){case"move":case"selected":case"confirm gipf":var n=this.quads();0==n.black.length&&0==n.white.length?(this.kind="move",this.currentMove=this.who=t,this.selected=[]):1===n[this.currentMove].length?(this.selected=n[this.currentMove][0],this.updateSelectedConfirmGipf()):n[this.currentMove].length>1?this.kind="confirm quad":1==n[t].length?(this.selected=n[t][0],this.who=t,this.updateSelectedConfirmGipf()):n[t].length>1&&(this.kind="confirm quad",this.who=t);break;case"confirm quad":this.updateSelectedConfirmGipf();break;default:return!1}return"standard"===this.gameType&&0==this.gipfPiecesOnBoard(t)?(this.kind="won",this.who=e):"standard"===this.gameType&&0==this.gipfPiecesOnBoard(e)?(this.kind="won",this.who=t):0==this.available[t]?(this.kind="won",this.who=e):0==this.available[e]&&(this.kind="won",this.who=t),!0}},{key:"updateSelectedConfirmGipf",value:function(){var e=this;this.containsGipf(this.selected)?(this.kind="confirm gipf",this.gipfToRemove=this.selected.filter((function(t){var n=e.pieces.get(t);return"gipf"===n.kind&&n.color!==e.who}))):this.kind="selected"}},{key:"gipfPiecesOnBoard",value:function(e){var t,n=0,r=T(this.pieces.pieces);try{for(r.s();!(t=r.n()).done;){var i=a(t.value,2),o=(i[0],i[1]);o.color===e&&"gipf"===o.kind&&n++}}catch(s){r.e(s)}finally{r.f()}return n}},{key:"display",value:function(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=Array(),i=T(this.pieces.pieces);try{for(i.s();!(e=i.n()).done;){var o=a(e.value,2),s=o[0],c=o[1],l=B(s);r.push(C(l,40,"black",c.color,"","",null)),"gipf"===c.kind&&r.push(C(l,20,_(c.color),"transparent","","",null))}}catch(y){i.e(y)}finally{i.f()}var d,u,f,h="text-red-200",v="text-red-500",g=T(this.selected);try{var p=function(){var e=f.value,i=t.pieces.get(e);switch(t.kind){case"selected":d="fill-current stroke-current ".concat(v),u=null;break;case"confirm quad":break;case"confirm gipf":"regular"===i.kind?(d="fill-current stroke-current ".concat(v),u=null):"gipf"===i.kind&&(d=-1==S(t.gipfToRemove,e)?"fill-current stroke-current ".concat(h," hover:").concat(v):"fill-current stroke-current ".concat(v," hover:").concat(h),u=function(){return n(e)})}r.push(C(e,12,"","",d,"",u))};for(g.s();!(f=g.n()).done;)p()}catch(y){g.e(y)}finally{g.f()}if("confirm quad"===this.kind){var k,w=this.quads()[this.who],m=T(w.flat());try{var b=function(){var e=k.value;1===w.filter((function(t){return-1!=S(t,e)})).length?(d="fill-current stroke-current ".concat(h," hover:").concat(v),u=function(){return n(e)}):(d="fill-current stroke-current ".concat(h),u=null),r.push(C(e,12,"","",d,"",u))};for(m.s();!(k=m.n()).done;)b()}catch(y){m.e(y)}finally{m.f()}}return r}},{key:"selectable",value:function(){var e=this;switch(this.kind){case"confirm quad":var t=this.quads()[this.who];return t.length<=1?(console.log("Unexpected combination: kind='confirm quad' yet quads[".concat(this.who,"]="),t),[]):t.flat(1);case"confirm gipf":return this.selected.filter((function(t){return"gipf"===e.pieces.get(t).kind}));default:return[]}}},{key:"containsGipf",value:function(e){var t,n=T(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if("gipf"===this.pieces.get(r).kind)return!0}}catch(i){n.e(i)}finally{n.f()}return!1}}]),e}(),R=[[0,1],[0,-1],[1,0],[-1,0],[1,-1],[-1,1]],j=[[new b(-3,0),1,-1],[new b(-3,1),1,-1],[new b(-3,2),1,-1],[new b(-3,3),1,-1],[new b(-2,3),1,-1],[new b(-1,3),1,-1],[new b(0,3),1,-1],[new b(0,-3),1,0],[new b(-1,-2),1,0],[new b(-2,-1),1,0],[new b(-3,0),1,0],[new b(-3,1),1,0],[new b(-3,2),1,0],[new b(-3,3),1,0],[new b(3,-3),0,1],[new b(2,-3),0,1],[new b(1,-3),0,1],[new b(0,-3),0,1],[new b(-1,-2),0,1],[new b(-2,-1),0,1],[new b(-3,0),0,1]];const I=e('<svg><circle cx="18" cy="18" r="8" class="fill-current stroke-current text-red-500"></circle></svg>',4,!0),O=e('<svg version="1.1" height="36" width="36" class="flex justify-center"><circle cx="18" cy="18" r="15" stroke="black" stroke-width="3"></circle></svg>'),E=e('<div class="max-w-4xl mx-auto mt-2"><dl class="rounded-lg bg-white shadow-lg grid grid-cols-5"><div class="flex flex-col border-b border-gray-100 p-3 text-center sm:border-0 sm:border-r"><dt class="order-2 mt-2 text-md leading-3 font-medium text-gray-500">white pieces</dt><dd class="order-1 text-3xl font-extrabold text-indigo-600"></dd></div><div class="flex flex-col border-b border-gray-100 p-3 text-center sm:border-0 sm:border-r"><dt class="order-2 mt-2 text-md leading-3 font-medium text-gray-500">white captured</dt><dd class="order-1 text-3xl font-extrabold text-indigo-600"></dd></div><div class="flex flex-col border-b border-gray-100 p-3 text-center sm:border-0 sm:border-r"><dt class="order-2 mt-2 text-md leading-3 font-medium text-gray-500"></dt><dd class="order-1 "></dd></div><div class="flex flex-col border-b border-gray-100 p-3 text-center sm:border-0 sm:border-r"><dt class="order-2 mt-2 text-md leading-3 font-medium text-gray-500">black pieces</dt><dd class="order-1 text-3xl font-extrabold text-indigo-600"></dd></div><div class="flex flex-col border-b border-gray-100 p-3 text-center sm:border-0 sm:border-r"><dt class="order-2 mt-2 text-md leading-3 font-medium text-gray-500">black captured</dt><dd class="order-1 text-3xl font-extrabold text-indigo-600"></dd></div></dl></div>'),L=e('<button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">confirm gipf</button>');var P=function(e){return t=E.cloneNode(!0),i=t.firstChild.firstChild,o=i.firstChild.nextSibling,s=i.nextSibling,a=s.firstChild.nextSibling,f=s.nextSibling,h=f.firstChild,v=h.nextSibling,g=f.nextSibling,p=g.firstChild.nextSibling,k=g.nextSibling.firstChild.nextSibling,l(o,(function(){return e.state.available.white})),l(a,(function(){return e.state.captured.white})),l(h,d(u,{get when(){return"confirm gipf"!==e.state.kind},get fallback(){return t=L.cloneNode(!0),r(t,"click",e.onConfirmGipf,!0),t;var t},get children(){return e.state.status}})),l(v,d(u,{get when(){return e.state.status},get children(){var t=O.cloneNode(!0),r=t.firstChild;return l(t,d(u,{get when(){return"confirm quad"===e.state.kind||"confirm gipf"===e.state.kind},get children(){return I.cloneNode(!0)}}),null),c((function(){return n(r,"fill",e.state.color)})),t}})),l(p,(function(){return e.state.available.black})),l(k,(function(){return e.state.captured.black})),t;var t,i,o,s,a,f,h,v,g,p,k};t(["click"]);const z=e("<svg><g></g></svg>",4,!0),U=e('<svg><text text-anchor="middle"></text></svg>',4,!0);var K=[new b(-4,0),new b(-4,1),new b(-4,2),new b(-4,3),new b(-4,4),new b(-3,-1),new b(-3,4),new b(-2,-2),new b(-2,4),new b(-1,-3),new b(-1,4),new b(0,-4),new b(0,4),new b(1,-4),new b(1,3),new b(2,-4),new b(2,2),new b(3,-4),new b(3,1),new b(4,-4),new b(4,-3),new b(4,-2),new b(4,-1),new b(4,0)],D=f(Array(7).keys()).map((function(e){return[M(new b(3-e,e<4?-4:-7+e),new b(3-e,e<4?e+1:4)),M(new b(e<4?4:7-e,e-3),new b(e<4?-e-1:-4,e-3)),M(new b(e<4?-4:-7+e,e<4?e+1:4),new b(e<4?e+1:4,e<4?-4:-7+e))]})),F=x("e1").coord(),H=["a1","b1","c1","d1","e1","f1","g1","h1","i1"],J=x("e9").coord(),Q=["a5","b6","c7","d8","e9","f8","g7","h6","i5"],V=F.x-x("d1").coord().x,W=function(e){var t,r=K.map((function(t){return t.edge(e.select)}));return t=z.cloneNode(!0),l(t,(function(){return function(e,t){var r,i=e.map((function(e){var t=e.coord(),n=t.x,r=t.y;return"".concat(n,",").concat(r)}));return r=m.cloneNode(!0),n(r,"fill",t),c((function(){return n(r,"points",i.join(" "))})),r}(q("b2b5e8h5h2e2"),"rgb(255,251,235)")}),null),l(t,(function(){return D.flat()}),null),l(t,r,null),l(t,(function(){return H.map((function(e,t){return r=U.cloneNode(!0),l(r,e),c((function(e){var i=F.x+(t-4)*V,o=F.y+48;return i!==e._v$&&n(r,"x",e._v$=i),o!==e._v$2&&n(r,"y",e._v$2=o),e}),{_v$:void 0,_v$2:void 0}),r;var r}))}),null),l(t,(function(){return Q.map((function(e,t){return r=U.cloneNode(!0),l(r,e),c((function(e){var i=F.x+(t-4)*V,o=J.y-36;return i!==e._v$3&&n(r,"x",e._v$3=i),o!==e._v$4&&n(r,"y",e._v$4=o),e}),{_v$3:void 0,_v$4:void 0}),r;var r}))}),null),t};const X=e('<div><div class="max-w-4xl mx-auto"><svg version="1.1"></svg></div></div>');var Y=function(){var e=new G("standard"),t=h(null),r=a(t,2),i=r[0],o=r[1],s=function(t){if(t&&"move"===e.kind){var n=i();if(n)document.getElementById(n.id()).setAttribute("class","fill-current stroke-current hover:text-green-700");if(n&&n.equals(t))o(null);else document.getElementById(t.id()).setAttribute("class","fill-current stroke-current text-green-700"),o(t)}},c=h([]),u=a(c,2),f=u[0],p=u[1];v((function(){if(i()){var t=e.possibleMoves(i());t?p(t):s(i())}else p([])}));var k,w,m,b=function(t){$(e.stats()),A(e.display(t))},y=function t(n){e.select(n),b(t)},x=function t(n){e.toggleGipf(n),b(t)},q=h(e.display(y)),S=a(q,2),M=S[0],A=S[1],B=g(e.stats()),N=a(B,2),T=N[0],$=N[1],_=h(null),R=a(_,2),j=R[0],I=R[1];return v((function(){i()&&j()&&(s(i()),I(null),e.move(i(),j()),"confirm gipf"===e.kind?b(x):b(y))})),v((function(){"confirm gipf"===e.kind&&b(x)})),v((function(){""===T.status&&(T.available.black||T.available.white)&&setTimeout((function(){e.removeSelected(),b(y)}),1e3)})),k=X.cloneNode(!0),w=k.firstChild,m=w.firstChild,l(k,d(P,{state:T,onConfirmGipf:function(){e.removeSelected(),"confirm gipf"===e.kind?b(x):b(y)}}),w),n(m,"viewBox","0 0 ".concat(960," ").concat(960)),l(m,d(W,{select:s}),null),l(m,M,null),l(m,(function(){return f().map((function(e){return C(e,15,"","","fill-current stroke-current text-green-300 hover:text-green-600","",(function(){return I(e)}))}))}),null),k},Z=function(){return d(Y,{})};p((function(){return d(Z,{})}),document.getElementById("root"));
