(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{0:function(t,e,n){n("J5xr"),t.exports=n("nOHt")},"5HXA":function(t,e,n){"use strict";var r=n("ANjH").compose;e.__esModule=!0,e.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},e.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(t){return t}}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("Qetd"),o=n("/HRN"),i=n("WaGi"),a=n("ZDA2"),u=n("/+P4"),c=n("N9n2"),p=n("ln6h"),l=n("KI45");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var s=l(n("q1tI")),f=n("g/15");function d(t){var e,n,r;return p.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,p.awrap((0,f.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}))}e.AppInitialProps=f.AppInitialProps;var h=function(t){function e(){return o(this,e),a(this,u(e).apply(this,arguments))}return c(e,t),i(e,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,o=t.pageProps,i=v(e);return s.default.createElement(n,r({},o,{url:i}))}}]),e}(s.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=h,h.origGetInitialProps=d,h.getInitialProps=d},J5xr:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("YNMu")}])},YNMu:function(t,e,n){"use strict";n.r(e);var r=n("eVuF"),o=n.n(r),i=n("ln6h"),a=n.n(i),u=n("0iUn"),c=n("sLSF"),p=n("MI3g"),l=n("a7VT"),s=n("Tit0"),f=n("8Bbg"),d=n.n(f),h=n("q1tI"),v=n.n(h),w=n("/MKj"),y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},g=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},_=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},O=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},E={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},S=n("p0XB"),P=n.n(S);var m=n("d04V"),x=n.n(m),j=n("yLu3"),I=n.n(j);function T(t){return function(t){if(P()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(I()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return x()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var N=n("ANjH"),X=n("hfKm"),k=n.n(X),A=n("2Eek"),D=n.n(A),L=n("XoMD"),C=n.n(L),M=n("Jo+v"),U=n.n(M),R=n("4mXO"),H=n.n(R),V=n("pLtp"),q=n.n(V),G=n("vYYK"),K=n("k2H8");function B(t,e){var n=q()(t);if(H.a){var r=H()(t);e&&(r=r.filter((function(e){return U()(t,e).enumerable}))),n.push.apply(n,r)}return n}var J={toggle:!1};var W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;switch((arguments.length>1?arguments[1]:void 0).type){case K.a.LAYOUT.TOGGLE:return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){Object(G.a)(t,e,n[e])})):C.a?D()(t,C()(n)):B(Object(n)).forEach((function(e){k()(t,e,U()(n,e))}))}return t}({},t,{toggle:!t.toggle});default:return t}},Y=Object(N.combineReducers)({storeLayout:W}),z=(n("5HXA"),function(t){return N.applyMiddleware.apply(void 0,T(t))});var F=function(t){return Object(N.createStore)(Y,t,z([]))},Q=(n("mE83"),v.a.createElement),Z=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(p.a)(this,Object(l.a)(e).call(this,t))).state={isLoading:!1},n}return Object(s.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.store;return Q(w.a,{store:r},Q(e,n))}}],[{key:"getInitialProps",value:function(t){var e,n,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=t.Component,n=t.ctx,n.store,n.isServer,n.req,n.query.amp,r={},!e.getInitialProps){o.next=7;break}return o.next=6,a.a.awrap(e.getInitialProps({ctx:n}));case 6:r=o.sent;case 7:return o.abrupt("return",{pageProps:r});case 8:case"end":return o.stop()}}),null,null,null,o.a)}}]),e}(d.a);e.default=function(t,e){var n=b(b({},E),e),r="undefined"===typeof window,o=function(o){var i=o.initialState,a=o.ctx,u=n.storeKey,c=function(){return t(n.deserializeState(i),b(b(b({},a),e),{isServer:r}))};return r?c():(u in window||(window[u]=c()),window[u])};return function(t){var e;return(e=function(e){function r(t,r){var i=e.call(this,t,r)||this,a=t.initialState;return n.debug&&console.log("4. WrappedApp.render created new store with initialState",a),i.store=o({ctx:r.ctx,initialState:a}),i}return y(r,e),r.prototype.render=function(){var e=this.props,n=e.initialProps,r=(e.initialState,O(e,["initialProps","initialState"]));return h.createElement(t,b({},r,n,{store:this.store}))},r}(h.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",e.getInitialProps=function(e){return g(void 0,void 0,void 0,(function(){var i,a;return _(this,(function(u){switch(u.label){case 0:if(!e)throw new Error("No app context");if(!e.ctx)throw new Error("No page context");return i=o({ctx:e.ctx}),n.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",i.getState()),e.ctx.store=i,e.ctx.isServer=r,a={},"getInitialProps"in t?[4,t.getInitialProps.call(t,e)]:[3,2];case 1:a=u.sent(),u.label=2;case 2:return n.debug&&console.log("3. WrappedApp.getInitialProps has store state",i.getState()),[2,{isServer:r,initialState:r?n.serializeState(i.getState()):i.getState(),initialProps:a}]}}))}))},e}}(F)(Z)}},[[0,1,2,6,0,24,23]]]);