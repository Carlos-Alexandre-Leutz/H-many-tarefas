(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46ea1636"],{"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?c(t):a(n(t))}},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),o=r("17c2"),i=r("9112");for(var c in a){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==o)try{i(s,"forEach",o)}catch(f){s.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=a("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),o=r("2d00"),i=a("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),i=r("e95a"),c=r("50c4"),u=r("8418"),s=r("35a1");t.exports=function(t){var e,r,f,l,d,b,p=a(t),v="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,y=s(p),O=0;if(g&&(m=n(m,h>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(e=c(p.length),r=new v(e);e>O;O++)b=g?m(p[O],O):p[O],u(r,O,b);else for(l=y.call(p),d=l.next,r=new v;!(f=d.call(l)).done;O++)b=g?o(l,m,[f.value,O],!0):f.value,u(r,O,b);return r.length=O,r}},"4f7a":function(t,e,r){"use strict";var n=r("1da1");r("96cf");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}var c=r("2591"),u=function(){function t(){a(this,t)}return i(t,[{key:"inserir",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].database().ref(r).push(e);case 3:return n=t.sent,console.log("url da requiziçao",r),t.abrupt("return",n);case 8:t.prev=8,t.t0=t["catch"](0),console.error("erro ao inserir",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"remover",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].database().ref(r).delete();case 3:return n=t.sent,console.log("url da requiziçao",r+e),t.abrupt("return",n);case 8:t.prev=8,t.t0=t["catch"](0),console.error("erro ao remover",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"get",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=c["a"].database().ref(),t.next=4,r.child(e).get();case 4:return n=t.sent,t.abrupt("return",n);case 8:t.prev=8,t.t0=t["catch"](0),console.error("erro ao obter",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),s=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new u,t.abrupt("return",r.get(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new u,t.abrupt("return",n.getId(e,r));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new u,t.abrupt("return",n.inserir(r,e));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),d=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new u,t.abrupt("return",n.editar(r,e));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),b=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new u,t.abrupt("return",a.editarId(e,r,n));case 2:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),p=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new u,t.abrupt("return",n.remover(e,r));case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),v={add:l,edit:d,remove:p,get:s,getPorId:f,editId:b};e["a"]=v},"4fad":function(t,e,r){var n=r("23e7"),a=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return a(t)}})},"65f0":function(t,e,r){var n=r("861d"),a=r("e8b5"),o=r("b622"),i=o("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6f53":function(t,e,r){var n=r("83ab"),a=r("df75"),o=r("fc6a"),i=r("d1e7").f,c=function(t){return function(e){var r,c=o(e),u=a(c),s=u.length,f=0,l=[];while(s>f)r=u[f++],n&&!i.call(c,r)||l.push(t?[r,c[r]]:c[r]);return l}};t.exports={entries:c(!0),values:c(!1)}},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),a=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?a.f(t,i,o(0,r)):t[i]=r}},"9bdd":function(t,e,r){var n=r("825a"),a=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){throw a(t),i}}},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),o=r("a691"),i=r("50c4"),c=r("7b0b"),u=r("65f0"),s=r("8418"),f=r("1dde"),l=f("splice"),d=Math.max,b=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var r,n,f,l,h,m,g=c(this),y=i(g.length),O=a(t,y),j=arguments.length;if(0===j?r=n=0:1===j?(r=0,n=y-O):(r=j-2,n=b(d(o(e),0),y-O)),y+r-n>p)throw TypeError(v);for(f=u(g,n),l=0;l<n;l++)h=O+l,h in g&&s(f,l,g[h]);if(f.length=n,r<n){for(l=O;l<y-n;l++)h=l+n,m=l+r,h in g?g[m]=g[h]:delete g[m];for(l=y;l>y-n+r;l--)delete g[l-1]}else if(r>n)for(l=y-n;l>O;l--)h=l+n-1,m=l+r-1,h in g?g[m]=g[h]:delete g[m];for(l=0;l<r;l++)g[l+O]=arguments[l+2];return g.length=y-n+r,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("d066"),i=r("c430"),c=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),v=r("7b0b"),h=r("fc6a"),m=r("c04e"),g=r("5c6c"),y=r("7c73"),O=r("df75"),j=r("241c"),w=r("057f"),x=r("7418"),S=r("06cf"),k=r("9bf2"),A=r("d1e7"),C=r("9112"),E=r("6eeb"),R=r("5692"),I=r("f772"),P=r("d012"),N=r("90e3"),T=r("b622"),z=r("e538"),J=r("746f"),M=r("d44e"),U=r("69f3"),$=r("b727").forEach,q=I("hidden"),B="Symbol",D="prototype",F=T("toPrimitive"),L=U.set,_=U.getterFor(B),H=Object[D],Q=a.Symbol,V=o("JSON","stringify"),W=S.f,G=k.f,K=w.f,X=A.f,Y=R("symbols"),Z=R("op-symbols"),tt=R("string-to-symbol-registry"),et=R("symbol-to-string-registry"),rt=R("wks"),nt=a.QObject,at=!nt||!nt[D]||!nt[D].findChild,ot=c&&f((function(){return 7!=y(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(H,e);n&&delete H[e],G(t,e,r),n&&t!==H&&G(H,e,n)}:G,it=function(t,e){var r=Y[t]=y(Q[D]);return L(r,{type:B,tag:t,description:e}),c||(r.description=e),r},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ut=function(t,e,r){t===H&&ut(Z,e,r),p(t);var n=m(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,q)&&t[q][n]&&(t[q][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,q)||G(t,q,g(1,{})),t[q][n]=!0),ot(t,n,r)):G(t,n,r)},st=function(t,e){p(t);var r=h(e),n=O(r).concat(pt(r));return $(n,(function(e){c&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):st(y(t),e)},lt=function(t){var e=m(t,!0),r=X.call(this,e);return!(this===H&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,q)&&this[q][e])||r)},dt=function(t,e){var r=h(t),n=m(e,!0);if(r!==H||!l(Y,n)||l(Z,n)){var a=W(r,n);return!a||!l(Y,n)||l(r,q)&&r[q][n]||(a.enumerable=!0),a}},bt=function(t){var e=K(h(t)),r=[];return $(e,(function(t){l(Y,t)||l(P,t)||r.push(t)})),r},pt=function(t){var e=t===H,r=K(e?Z:h(t)),n=[];return $(r,(function(t){!l(Y,t)||e&&!l(H,t)||n.push(Y[t])})),n};if(u||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===H&&r.call(Z,t),l(this,q)&&l(this[q],e)&&(this[q][e]=!1),ot(this,e,g(1,t))};return c&&at&&ot(H,e,{configurable:!0,set:r}),it(e,t)},E(Q[D],"toString",(function(){return _(this).tag})),E(Q,"withoutSetter",(function(t){return it(N(t),t)})),A.f=lt,k.f=ut,S.f=dt,j.f=w.f=bt,x.f=pt,z.f=function(t){return it(T(t),t)},c&&(G(Q[D],"description",{configurable:!0,get:function(){return _(this).description}}),i||E(H,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:Q}),$(O(rt),(function(t){J(t)})),n({target:B,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!c},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(v(t))}}),V){var vt=!u||f((function(){var t=Q();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),a[1]=e,V.apply(null,a)}})}Q[D][F]||C(Q[D],F,Q[D].valueOf),M(Q,B),P[q]=!0},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a9d7:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),a={class:"d-flex flex-column col-11 m-auto"},o={class:"col-2"},i=Object(n["h"])("Adicionar"),c={class:"card shadow"},u=Object(n["i"])("div",{class:"card-header"},"Usuário",-1),s={class:"card-body"},f=Object(n["i"])("div",{class:"\r\n                    d-flex\r\n                    flex-center\r\n                    justify-content-center\r\n                    align-items-center\r\n                  "}," Ações ",-1),l=Object(n["i"])("div",{class:"\r\n                    d-flex\r\n                    flex-center\r\n                    justify-content-center\r\n                    align-items-center\r\n                  "},[Object(n["i"])("button",{"data-edit":"2",class:"btn btn-sm btn-primary",title:"Visualizar"},[Object(n["i"])("i",{"data-edit":"2",class:"fas fa-eye"})]),Object(n["i"])("button",{title:"Editar","data-edit":"1",class:"btn btn-sm btn-warning mr-2"},[Object(n["i"])("i",{"data-edit":"1",class:"fas fa-edit"})]),Object(n["i"])("button",{title:"Excluir","data-edit":"0",class:"btn btn-sm btn-danger"},[Object(n["i"])("i",{"data-edit":"0",class:"fas fa-trash-alt"})])],-1),d=Object(n["h"])(" caregando tabela ");function b(t,e,r,b,p,v){var h=Object(n["A"])("router-link"),m=Object(n["A"])("Table");return Object(n["s"])(),Object(n["e"])("div",a,[Object(n["i"])("div",o,[Object(n["i"])(h,{title:"Adicionar novo usuário",class:"ml-auto m-1 btn btn-sm btn-primary",to:"/usuario/novo"},{default:Object(n["I"])((function(){return[i]})),_:1})]),Object(n["i"])("div",c,[u,Object(n["i"])("div",s,[(Object(n["s"])(),Object(n["e"])(n["b"],null,{default:Object(n["I"])((function(){return[Object(n["i"])(m,{class:"table-borderless table-striped",headerColumns:b.hColumns,items:b.items,componentePaginacao:b.componentePaginacao,pathPaginaAtual:"cargo",action:"true",onOnActionClick:b.onEdit},{"table-header-actions":Object(n["I"])((function(){return[f]})),"table-actions":Object(n["I"])((function(){return[l]})),_:1},8,["headerColumns","items","componentePaginacao","onOnActionClick"])]})),fallback:Object(n["I"])((function(){return[d]})),_:1}))])])])}var p=r("1da1");function v(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function h(t,e){var r=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done);i=!0)if(o.push(n.value),e&&o.length===e)break}catch(u){c=!0,a=u}finally{try{i||null==r["return"]||r["return"]()}finally{if(c)throw a}}return o}}r("fb6a"),r("b0c0"),r("a630");function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t,e){if(t){if("string"===typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(t,e){return v(t)||h(t,e)||g(t,e)||y()}r("96cf"),r("159b"),r("a434"),r("4fad");var j=r("e91f"),w=r("6c02"),x=r("3d20"),S=r.n(x),k=r("4f7a"),A={setup:function(){var t=Object(w["e"])(),e=Object(n["x"])(null),r=Object(n["x"])(null),a=Object(n["x"])(null),o=Object(n["x"])(),i=Object(n["x"])([{key:"nome",label:"Nome"},{key:"descricao",label:"Descrição"}]),c=function(n){if(n&&n.target&&n.target.dataset){if(1==n.target.dataset.edit&&(console.log("Editar",n.item.id),t.push("/usuario/editar/"+n.item.id)),2==n.target.dataset.edit&&t.push("/usuario/visualizar/"+n.item.id+"/visualizar"),0==n.target.dataset.edit){r=n.item.id;var a=!1,o=n.item.nome;S.a.fire({icon:"question",title:"Deseja excluir",confirmButtonText:"Sim",text:'O item "'.concat(o,'"?'),showCancelButton:!0,cancelButtonText:"Cancelar"}).then((function(t){if(t.isConfirmed){var n=r,i=localStorage.getItem("dataLocalStorageTarefa");if(i){var c=JSON.parse(i);c.forEach((function(t){console.log(t.atribuidaPara,n),t.atribuidaPara==n&&(a=!0)}))}if(a)S.a.fire({icon:"warning",title:"Atenção",text:'O usuário "'.concat(o,'" não pode ser excluído pois ja possui tarefas cadastradas.')});else{var u=localStorage.getItem("dataLocalStorageUsuario"),s=JSON.parse(u);s.forEach((function(t){if(t.id==n){var r=s.indexOf(t);e.value.splice(r,1);var a=JSON.stringify(e.value);localStorage.setItem("dataLocalStorageUsuario",a)}})),S.a.fire({icon:"success",title:"Concluído",text:'O Item "'.concat(o,'" foi excluído')}),a=!1}}}))}}else console.log("Objeto Errado")},u=function(){var t=[];return k["a"].get("usuarios").then((function(e){if(e.exists())for(var r=e.val(),n=0,a=Object.entries(r);n<a.length;n++){var o=O(a[n],2),i=o[0],c=o[1],u={id:c.id||i,descricao:c.descricao,nome:c.nome};t.push(u)}else console.log("No data available")})).catch((function(t){console.error(t)})),t};return Object(n["q"])(Object(p["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:r=t.sent,o.value=r,e.value=r;case 5:case"end":return t.stop()}}),t)})))),{items:e,componentePaginacao:a,hColumns:i,onEdit:c,obterUsuarios:u,nhaco:o}},components:{Table:j["a"]}};A.render=b;e["default"]=A},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in o)&&a(o,u,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),a=r("44ad"),o=r("7b0b"),i=r("50c4"),c=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(p,v,h,m){for(var g,y,O=o(p),j=a(O),w=n(v,h,3),x=i(j.length),S=0,k=m||c,A=e?k(p,x):r||d?k(p,0):void 0;x>S;S++)if((b||S in j)&&(g=j[S],y=w(g,S,O),t))if(e)A[S]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:u.call(A,g)}else switch(t){case 4:return!1;case 7:u.call(A,g)}return l?-1:s||f?f:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),i=r("5135"),c=r("861d"),u=r("9bf2").f,s=r("e893"),f=o.Symbol;if(a&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var b=d.prototype=f.prototype;b.constructor=d;var p=b.toString,v="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(i(l,t))return"";var r=v?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e91f:function(t,e,r){"use strict";var n=r("7a23"),a={class:"table"},o={key:0,id:"tableHeaderActions"};function i(t,e,r,i,c,u){return Object(n["s"])(),Object(n["e"])("table",a,[Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(i.hColumns,(function(t,e){return Object(n["s"])(),Object(n["e"])("th",{scope:"col",key:e},[Object(n["i"])("div",null,Object(n["C"])(t.label),1)])})),128)),i.lAction?(Object(n["s"])(),Object(n["e"])("th",o,[Object(n["z"])(t.$slots,"table-header-actions")])):Object(n["f"])("",!0)])]),Object(n["i"])("tbody",null,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(r.items,(function(e,r){return Object(n["s"])(),Object(n["e"])("tr",{scope:"row",key:r},[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(i.getColumns(e),(function(t,e){return Object(n["s"])(),Object(n["e"])("td",{key:e},Object(n["C"])(t),1)})),128)),i.lAction?(Object(n["s"])(),Object(n["e"])("td",{key:0,id:"tableAction"+r,"data-item":e,onClick:function(t){return i.onActionClick(t,e)}},[Object(n["z"])(t.$slots,"table-actions")],8,["id","data-item","onClick"])):Object(n["f"])("",!0)])})),128))])])}var c=r("1da1"),u=(r("96cf"),{props:["headerColumns","items","action"],setup:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,o,i,c,u,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.emit,o=Object(n["x"])(t.headerColumns),i=Object(n["x"])(!!t.action&&t.action),r.t0=n["x"],r.next=6,t.items;case 6:return r.t1=r.sent,c=(0,r.t0)(r.t1),u=function(t){for(var e=[],r=0;r<o.value.length;r++){var n=o.value[r].key;e.push(t[n])}return e},s=function(t,e){t.item=e,a("on-action-click",t)},r.abrupt("return",{lAction:i,hColumns:o,lItems:c,getColumns:u,onActionClick:s});case 11:case"end":return r.stop()}}),r)})))()}});u.render=i;e["a"]=u},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),o=r("e8b5"),i=r("23cb"),c=r("50c4"),u=r("fc6a"),s=r("8418"),f=r("b622"),l=r("1dde"),d=l("slice"),b=f("species"),p=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,f,l=u(this),d=c(l.length),h=i(t,d),m=i(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?a(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(l,h,m);for(n=new(void 0===r?Array:r)(v(m-h,0)),f=0;h<m;h++,f++)h in l&&s(n,f,l[h]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-46ea1636.7158be3c.js.map