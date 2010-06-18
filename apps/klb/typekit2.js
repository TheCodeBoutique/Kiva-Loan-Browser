var Typekit=(function(y){var f={safari:"b",chromewin:"b",chrome:"a",ff35:"b",ff36:"d",ie:"c"};var x={ua:function(N){if(N){for(var O=0;O<this.enabledMatchers.length;O++){var Q=this.enabledMatchers[O][1];if(Q.call(null,N)){var P=this.enabledMatchers[O][0];return{fonts:(!!P),format:P}}}return{fonts:false}}},enabledMatchers:[],enable:function(P){this.enabledMatchers=[];for(var N=0;N<this.matchers.length;N++){var Q=this.matchers[N];for(var O=0;O<P.length;O++){if(Q[0]==P[O]){this.enabledMatchers.push([Q[1],Q[2]]);break}}}},matchers:[],add:function(N,O,i){this.matchers.push([O,N,i])}};var J={};x.add(f.ff36,"ff36",function(O){var N=O.match(/rv:(\d+\.\d+)\.(\d+).*Gecko\//);if(N){var i=parseFloat(N[1]);var P=parseInt(N[2]);if(i>=1.9&&P>1){return true}else{return false}}});x.add(f.ff35,"ff35",function(N){var i=N.match(/rv:1\.9\.1.*Gecko\//);if(N.match(/rv:1.9.1b[123]{1}/)){return false}if(i){return true}else{return false}});J.isMobileOSX=function(N){var i=N.match(/OS.(\d)_(\d)/);if(i){if(i[1]=="3"){return parseInt(i[2])>0}else{if(parseInt(i[1])>3){return true}}}return false};x.add(f.iphone,"iphone",function(i){if(!i.match(/(iPhone|iPod)/)){return false}return J.isMobileOSX(i)});x.add(f.ipad,"ipad",function(i){if(!i.match(/iPad/)){return false}return J.isMobileOSX(i)});J.isSafari=function(O){if(O.match(/Chrome/)){return false}if(O.match(/(iPhone|iPad|iPod)/)){return false}if(O.match(/webOS/)){return false}if(O.match(/Android/)){return false}var N=O.match(/AppleWebKit\/(\d+\.\d+)/);if(N){var i=N[1];return parseFloat(i)>=525.13}};J.isChrome=function(O){var N;if(O.match(/Chrome/)){N=O.match(/Chrome\/(\d+\.\d+)\.(\d+)\.(\d+)/);if(N){var i=parseFloat(N[1]);var P=parseInt(N[2]);var Q=parseInt(N[3]);if(i>4){return true}else{if(i==4&&P>249){return true}else{if(i==4&&P==249&&Q>=4){return true}else{return false}}}}}};x.add(f.chromewin,"chromewin",function(i){if(!i.match(/Windows/)){return false}return J.isChrome(i)});x.add(f.safari,"safari",J.isSafari);x.add(f.chrome,"chrome",J.isChrome);x.add(f.ie,"ie",function(O){var N=O.match(/MSIE\s(\d+\.\d+)/);if(N){var i=N[1];return parseFloat(i)>=6}});var h=(function(){var N=document.defaultView||{};var P=false;var R=false;var Q=[];function i(){if(!P){P=true;for(var S=0;S<Q.length;S++){Q[S].call(null)}}}function O(){if(R){return}R=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);i()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);i()}});if(document.documentElement.doScroll&&window==window.top){(function(){if(P){return}try{document.documentElement.doScroll("left")}catch(T){setTimeout(arguments.callee,0);return}i()})()}}}if(window.onload){var S=window.onload;window.onload=function(){S();i()}}else{window.onload=i}}return{ready:function(S){O();if(P){S()}else{Q.push(S)}},insertInto:function(T,U){var S=document.getElementsByTagName(T)[0];if(S&&S.lastChild){S.insertBefore(U,S.lastChild);return true}else{return false}},createStyleElement:function(S){var T=document.createElement("style");T.setAttribute("type","text/css");if(T.styleSheet){T.styleSheet.cssText=S}else{T.appendChild(document.createTextNode(S))}return T},createCssLink:function(T){var S=document.createElement("link");S.setAttribute("rel","stylesheet");S.setAttribute("type","text/css");S.setAttribute("href",T);return S},css:function(T,U){if(N.getComputedStyle){var S=N.getComputedStyle(T,null);return S?S.getPropertyValue(U):null}else{if(T.currentStyle){return T.currentStyle[U]}}},loadScript:function(W,V){var U=document.getElementsByTagName("head")[0];if(U){var T=document.createElement("script");T.src=W;var S=false;T.onload=T.onreadystatechange=function(){if(!S&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){S=true;if(V){V()}T.onload=T.onreadystatechange=null;if(T.parentNode.tagName=="HEAD"){U.removeChild(T)}}};U.appendChild(T)}},appendClassName:function(U,S){var T=" "+U.className+" ";if(!T.match("\\s+"+S+"\\s+")){U.className=U.className+" "+S}},removeClassName:function(W,T){var V=" "+W.className+" ";if(V.match("\\s+"+T+"\\s+")){var S=V.split(/\s+/);var U=0;var X=[];for(U=0;U<S.length;U++){if(S[U]!=T&&S[U]!=""){X.push(S[U])}}W.className=X.join(" ")}}}})();function A(){return"/k"}function j(){return"http://"}var I={};var q={};var B={};var E=[];var d={};var t={};var o=[];if(window.tkKitsTracked==undefined){window.tkKitsTracked=0}function l(N){for(var i in N){q[i]=N[i]}e("setOptions",q)}function c(O){x.enable(O.supportedBrowsers);var N=q.ua;if(N){var i=x.ua(N);q.fonts=i.fonts;q.compatibility=i.format;e("detectUA",q.fonts,q.compatibility)}}function e(i){if(q.debug&&window.console&&window.console.log){window.console.log(arguments)}}function K(i,N){if(!d[i]){d[i]=[]}if(N){d[i].push(N);e("addCallback",i,d[i].length,N)}}function r(i){var N=document.getElementsByTagName("html")[0];if(N){h.appendClassName(N,i)}}function H(i){var N=document.getElementsByTagName("html")[0];if(N){h.removeClassName(N,i)}}function z(N){var i=new Date().getTime();K(N,function(O){L(N).time=(new Date().getTime())-i})}function D(Q,P){e("executeCallbacks",Q);var O=d[Q];if(O){for(var N=0;N<O.length;N++){O[N](P)}}}function b(P,i,R,Q,O,S,N){e("addDataSet",P,i,R,Q,O,S,N);E.push(P);B[P]={kitId:P,securityToken:i,supportedBrowsers:R,badgeOptions:Q,kitOptions:O,fontData:S,selectorData:N};B[P]["callbackData"]=S;B[P]["callbackData"]["kitId"]=P}function u(Q,P){if(Q){e("loading kit",Q);G(B[Q],P)}else{for(var O=0;O<E.length;O++){var Q=E[O];var N=B[Q];e("loading kit",Q);G(N,P)}}}function G(i,N){c(i);if(i&&i.kitId){e("loadKit",i);o.push(i);m(i.selectorData);if(N["kit-initialized"]){N["kit-initialized"](i.callbackData)}if(q.fonts){z(i.kitId);H("wf-inactive");r("wf-loading");if(N.loading){N.loading(i.callbackData)}K(i.kitId,function(){H("wf-loading");r("wf-active");if(N.active){N.active(i.callbackData)}});M(i.kitId,i.securityToken,q.compatibility)}else{H("wf-loading");r("wf-inactive");if(N.inactive){N.inactive(i.callbackData)}}if(N["kit-loaded"]){N["kit-loaded"](i.callbackData)}}else{e("loadKit","data is invalid",i)}}function m(P){if(P&&P.selectors){var T=P.selectors;var R=[];for(var Q=0;Q<T.length;Q++){var N=T[Q];if(N){var V=N.selectors;var S=N.declarations;if(V&&S){var U=[];for(var O=0;O<S.length;O++){U.push(S[O]["name"]+":"+S[O]["value"]+";")}R.push(V+"{"+U.join("")+"}")}}}h.insertInto("head",h.createStyleElement(R.join("")))}}function M(P,i,N){var O=j()+q.host+A()+"/"+P+"-"+N+".css?"+i;e("loadKitStyle",O);if(h.insertInto("head",h.createCssLink(O))){n(P)}}function n(Q){e("waitForStyleLoaded",Q);var N=function(T){var i=document.createElement("span");i.setAttribute("class","wf-font-watcher");i.setAttribute("style","position:absolute;left:-999px;font-size:200px;font-family:"+T+",NONE");i.innerHTML="Mm";return i};var R=function(T,X){var i=N("NONE");var W=N(T);h.insertInto("html",i);h.insertInto("html",W);var V=i.offsetWidth;var U=function(){if(W.offsetWidth!=V){X()}else{setTimeout(U,q.styleLoadIntervalTime)}};U()};var S=B[Q].fontData.fonts;if(S&&S.length>0){var P=S.length;for(var O=0;O<S.length;O++){R(S[O].family_name,function(){if(--P==0){if(B[Q]){D(Q,B[Q].callbackData)}}})}}else{D(Q,B[Q].callbackData)}}function L(N){var i=t[N];if(!i){i=t[N]={time:0}}return i}function g(N,i){I[N]=i}function w(){if(!q.fonts){return}for(var P=0;P<o.length;P++){var O=o[P];var R=O.badgeOptions;if(R&&R.enabled){var Q=I["default"];if(Q){var N=Q(O.kitId,R,q);if(N){N.setAttribute("id","typekit-badge-"+O.kitId);h.insertInto("body",N)}}}}}function p(){if(window.tkKitsTracked>0){return}for(var O=0;O<o.length;O++){var N=o[O];var P=N.kitOptions;if(P&&P.ga){if(window._gat){v()}else{var R=j();var Q=R.match(/https/)?"ssl":"www";h.loadScript(R+Q+".google-analytics.com/ga.js",v)}break}}}function v(){try{window._gat._getTracker("UA-8850781-3")._trackPageview()}catch(i){}window.tkKitsTracked++}h.ready(w);h.ready(p);l({host:"",root:"",assetHost:"",assetRoot:"",colophonHost:"typekit.com",ua:navigator.userAgent,styleLoadIntervalTime:50,bodyWaitIntervalTime:20,debug:false});function C(){return{addDataSet:b,clearDataSets:function(){E=[];B={};o=[]},insertBadges:w,optionallyCallGoogleAnalytics:p}}function k(){return{configure:l,load:function(i){var O,N;if(typeof arguments[0]=="string"){O=arguments[0];N=arguments[1]}else{O=null;N=arguments[0]}u(O,N||{})},stats:L}}g("default",function(T,R,W){function V(Z,Y){var X=0,aa=0;if(document.documentElement&&(document.documentElement[Z]||document.documentElement[Y])){X=document.documentElement[Z];aa=document.documentElement[Y]}else{if(document.body&&(document.body[Z]||document.body[Y])){X=document.body[Z];aa=document.body[Y]}}return[X,aa]}function Q(){return V("clientWidth","clientHeight")}function O(){return V("scrollLeft","scrollTop")}function P(Z,Y,X){if(Z.attachEvent){Z["e"+Y+X]=X;Z[Y+X]=function(){Z["e"+Y+X](window.event)};Z.attachEvent("on"+Y,Z[Y+X])}else{Z.addEventListener(Y,X,false)}}var S=document.createElement("img");var N=62;var U=25;S.setAttribute("width",N);S.setAttribute("height",U);S.setAttribute("src",j()+W.assetHost+W.assetRoot+"/badges/default.gif");S.setAttribute("class","typekit-badge");S.setAttribute("alt","Fonts by Typekit");S.setAttribute("title","Information about the fonts used on this site");S.style.position="fixed";S.style.zIndex=2000000000;S.style.right=0;S.style.bottom=0;S.style.cursor="pointer";S.style.border=0;S.style.content="normal";S.style.display="inline";S.style["float"]="none";S.style.height=U+"px";S.style.left="auto";S.style.margin=0;S.style.maxHeight=U+"px";S.style.maxWidth=N+"px";S.style.minHeight=U+"px";S.style.minWidth=N+"px";S.style.orphans=2;S.style.outline="none";S.style.overflow="visible";S.style.padding=0;S.style.pageBreakAfter="auto";S.style.pageBreakBefore="auto";S.style.pageBreakInside="auto";S.style.tableLayout="auto";S.style.textIndent=0;S.style.top="auto";S.style.unicodeBidi="normal";S.style.verticalAlign="baseline";S.style.visibility="visible";S.style.widows=2;S.style.width="65px";P(S,"click",function(){document.location.href="http://"+W.colophonHost+"/colophons/"+T});if(W.ua.match(/MSIE\s(\d+\.\d+)/)){S.style.position="absolute";function i(){S.style.bottom="auto";S.style.right="auto";S.style.top=(O()[1]+Q()[1]-U)+"px";S.style.left=(O()[0]+Q()[0]-3-N)+"px"}h.ready(i);P(window,"scroll",i);P(window,"resize",i)}return S});l({host:"use.typekit.com",root:"/",assetHost:"use.typekit.com",assetRoot:"/"});b("qek5aly","3bb2a6e53c9684ffdc9a9bf6195b2a62173cbd03ca8deaa4c4329a86dd530b375ddd9884ba5df2f08f387cca0b14acf3004aabb7039a5fdb0006ed8cac7e8554f09eb6bf6ee8824d9d85061a67601ff7e9c01893e8c0536c44508766cf8310b9c1a6dcb3c30fcb",["chrome","chromewin","ff35","ff36","ie","safari"],{enabled:true},{ga:false},{fonts:[{family_name:'"museo-slab-1","museo-slab-2"',variations:{a:["n1","i1","n3","i3","n5","i5","n7","i7","n8","i8","n9","i9"],b:["n1","i1","n3","i3","n5","i5","n7","i7","n8","i8","n9","i9"],c:["n5"],d:["n1","i1","n3","i3","n5","i5","n7","i7","n8","i8","n9","i9"],f:["n1","i1","n3","i3","n5","i5","n7","i7","n8","i8","n9","i9"]}}]},{selectors:[{selectors:".kef-branded-font,.tk-museo-slab",declarations:[{value:'"museo-slab-1","museo-slab-2",serif',name:"font-family"}]}]});if(window.__webfonttypekitmodule__){for(var F=0;F<E.length;F++){var s=E[F];var a=window.__webfonttypekitmodule__[s];if(a){a(function(V,O,U){l(O.configure||{});u(s,{});var S=B[s];var Q=[];var T={};for(var R=0;R<S.fontData.fonts.length;R++){var P=S.fontData.fonts[R];var i=P.family_name;Q.push(i);T[i]=P.variations[q.compatibility]}var N=q.fonts;U(N,Q,T)})}}}return k()})();