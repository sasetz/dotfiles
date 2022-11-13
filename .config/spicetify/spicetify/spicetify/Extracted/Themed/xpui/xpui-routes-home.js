"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[807],{70369:(e,t,n)=>{n.d(t,{$:()=>r.$});var r=n(22578)},89091:(e,t,n)=>{n.r(t),n.d(t,{HOME_REFRESH_TIMEOUT:()=>He,default:()=>qe});var r=n(63038),a=n.n(r),i=(n(3843),n(83710),n(79753),n(68309),n(67294)),o=n.n(i),c=n(94184),l=n.n(c),u=n(65858),s=n(73526),m=n(20657),f=n(42922),d=n(89294),v=n(92457),p=n(1496),g=n(35808),y=n(1663),E=n(86964),h=n(53967),b=(n(69826),n(41539),n(23157),n(35533)),w=n(44794),_=n(80624),P=n(24872),O=n(33607),k=n(23716),I=n(74845),S=n(8247),T="PLAY_AT_FIRST_TAP_HAD_DEFERRED_ACTIONS",C="PLAY_AT_FIRST_TAP_APPLIED",x=function(e){var t=(0,P.getEventSenderInstance)(),n=(0,b.x)(e);t.send(n)};function A(e){var t=(0,w.W6)(S.Qs),n=(0,i.useState)(void 0),r=a()(n,2),o=r[0],c=r[1],l=(0,i.useState)(void 0),s=a()(l,2),m=s[0],f=s[1],d=(0,i.useState)(!1),v=a()(d,2),p=v[0],g=v[1],y=(0,k.g)(),E=(0,u.v9)((function(e){var t=e.session;return t.user&&t.user.id}));(0,i.useEffect)((function(){f(!!window.sessionStorage.getItem(T)&&(window.sessionStorage.removeItem(T),!0))}),[]),(0,i.useEffect)((function(){E&&(x({category:"play-at-first-tap",label:"log_attempt",os:(0,O.y)(),context:"ab_v3"}),g(function(e){return!!window.sessionStorage.getItem("".concat(C,"_").concat(e))}(E)),(0,I.M)(_.b.getInstance()).then((function(e){c(e.content.items.length>0)})).catch((function(){x({category:"play-at-first-tap",label:"recently-played-failed",os:(0,O.y)(),context:"ab_v3"}),c(!0)})))}),[E]),(0,i.useEffect)((function(){if(void 0!==o&&void 0!==m&&e&&E&&!p){var n=!o&&!m;if(n){!function(e){window.sessionStorage.setItem("".concat(C,"_").concat(e),JSON.stringify(!0))}(E);var r=function(e){var t=e.content.items.find((function(e){var t="CAROUSEL"===e.rendering,n="LIST"===e.rendering&&"shortcuts"!==e.id;return t||n}));if(t){var n=t.content.items.find((function(e){return!e.publisher||!e.publisher.startsWith("Spotify")}));return n&&n.uri}}(e);r&&t&&y.play({uri:r},{featureIdentifier:"home",referrerIdentifier:"home"},{paused:!0}),x({category:"play-at-first-tap",label:"play_content",os:(0,O.y)(),context:r||"no_valid_uri_retrieved"})}x({category:"play-state",label:n?"has_valid_state_yes":"has_valid_state_no",os:(0,O.y)(),context:"ab_v3"})}}),[p,o,e,m,y,E,t])}var N=n(13983),L=n(29255),j=n(70369),D=(n(21249),n(57327),n(50114)),B=n(17213),R=n(69559),M=n(4236),W=n(13218),F=n(70296),U=n(67154),H=n.n(U),q=(n(92222),n(69518)),z=n.n(q),Y=n(28342),G=n(91362),V=n(68156),Z=n(37077),J=n(18261),K=n(4232),Q=n(80507),X=n(25988),$=n(13020),ee=n(86514),te=n(59713),ne=n.n(te),re=n(16528),ae=n(28760),ie=n(43864),oe=n(55911),ce=n(46245),le=n(34325),ue=n(18061),se=n(84242),me=n(56802),fe=n(18171),de=n(67892),ve=n(80418),pe=n(49961);const ge="view-homeShortcutsGrid-shortcuts",ye="view-homeShortcutsGrid-grid",Ee="view-homeShortcutsGrid-shortcutLink",he="view-homeShortcutsGrid-shortcut",be="view-homeShortcutsGrid-draggable",we="view-homeShortcutsGrid-imageContainer",_e="view-homeShortcutsGrid-imageWrapper",Pe="view-homeShortcutsGrid-image",Oe="CKxS_0I5yf3i15WAjzvE",ke="view-homeShortcutsGrid-main",Ie="EzRmGRncgnv1zFgF4dqE",Se="bPmmKmSPLKMhtJSaUJRX",Te="view-homeShortcutsGrid-PlayButtonContainer",Ce="s9c9x_mJq197U2hBzGtV";var xe=o().memo((function(e){var t=e.images,n=void 0===t?[]:t,r=e.fallbackIcon,a=void 0===r?Y.e:r,i=(0,pe.X)(n),c=null!=i&&i.url?_e:Oe;return o().createElement("div",{className:we},o().createElement("div",{className:c},o().createElement(ve.E,{className:Pe,src:null==i?void 0:i.url,loading:"lazy",testid:"shortcut-image"},o().createElement(a,{"aria-hidden":!0}))))})),Ae=o().memo((function(e){var t,n,r=e.index,a=e.item,c=e.fallbackIcon,u=e.showPlayButton,s=e.onContextMenu,m=void 0===s?function(){}:s,f=e.onTouchStart,d=void 0===f?function(){}:f,v=e.onTouchEnd,g=void 0===v?function(){}:v,y=(0,re.k6)(),E=(0,me.o)(),h=(0,F.WQ)(),b=h.setColorFromUri,w=h.resetColor,_=(0,le.G3)(a.uri,a.release_date,null===(t=a.resume_point)||void 0===t?void 0:t.resume_position_ms,null===(n=a.resume_point)||void 0===n?void 0:n.fully_played),P=(0,p.fU)(ie.createDesktopShortcutsPlayNavCardEventFactory,{data:{position:r,uri:a.uri}}),O=P.spec,k=P.logger,I=(0,se.n)({uri:a.uri},{featureIdentifier:"home",referrerIdentifier:"home"}),T=I.isPlaying,C=I.isActive,x=I.togglePlay;function A(){E({targetUri:a.uri,intent:T?"pause":"play",type:"click"});var e,t=O.playButtonFactory();e=T?t.hitPause({itemToBePaused:a.uri}):C?t.hitResume({itemToBeResumed:a.uri}):t.hitPlay({itemToBePlayed:a.uri});var n=k.logInteraction(e);x({loggingParams:n})}var N=(0,i.useCallback)((function(){E({targetUri:a.uri,intent:"navigate",type:"click"});var e=O.hitUiNavigate({destination:a.uri});k.logInteraction(e),y.push(z().from(a.uri).toURLPath(!0))}),[y,a.uri,k,E,O]),L=(0,i.useCallback)((function(){b(a.uri)}),[a.uri,b]),j=(0,p.Wi)(O);return o().createElement("div",{ref:j,className:he,onContextMenu:m,onTouchStart:d,onTouchEnd:g,onMouseEnter:L,onMouseLeave:w},o().createElement(fe.Z,{uri:a.uri,text:a.name,extraClassName:be},o().createElement(xe,{images:a.images,fallbackIcon:c}),o().createElement("div",{className:ke},o().createElement(de.r,{to:a.uri,onClick:N,title:a.name},o().createElement(ae.Dy,{as:"p",variant:"balladBold",className:Ie},a.name)),_&&o().createElement(le.Rd,{className:Se}),u&&o().createElement("div",{className:l()(Te,ne()({},Ce,T))},o().createElement(ue.F,{property:S.iY,renderOldExperience:function(){return o().createElement(oe.JM,{size:oe.qE.sm,isPlaying:T,onClick:A})},renderNewExperience:function(){return o().createElement(ce.fh,{isPlaying:T,onClick:A})}}))),o().createElement("div",{onClick:N,className:Ee})))})),Ne=o().memo((function(e){return z().isCollection(e.item.uri)?o().createElement(Ae,H()({},e,{fallbackIcon:Y.e})):o().createElement(J._,{menu:o().createElement($.X,{uri:e.item.uri})},o().createElement(Ae,H()({},e,{fallbackIcon:Y.e})))})),Le=o().memo((function(e){return o().createElement(J._,{menu:o().createElement(K.Y,{uri:e.item.uri})},o().createElement(Ae,H()({},e,{fallbackIcon:G.u})))})),je=o().memo((function(e){return o().createElement(J._,{menu:o().createElement(Q.m,{uri:e.item.uri})},o().createElement(Ae,H()({},e,{fallbackIcon:V.i})))})),De=o().memo((function(e){return o().createElement(J._,{menu:o().createElement(ee.M,{uri:e.item.uri})},o().createElement(Ae,H()({},e,{fallbackIcon:Z.n,showPlayButton:!1})))})),Be=o().memo((function(e){return o().createElement(J._,{menu:o().createElement(X.k,{uri:e.item.uri})},o().createElement(Ae,H()({},e,{fallbackIcon:Z.n,showPlayButton:!1})))}));var Re=270,Me=o().memo((function(e){var t,n,r=e.tagline,c=e.items,l=(0,F.WQ)().fetchMultipleColors,u=(0,i.useState)({minWidth:Re,itemHeight:80,showPlayButton:!0}),s=a()(u,2),f=s[0],d=s[1],v=!(0,M.k)(),p=(0,i.useRef)(null),g=(t=(new Date).getHours(),n=m.ag.get("home.evening"),t>=5&&t<12?n=m.ag.get("home.morning"):t>=12&&t<18&&(n=m.ag.get("home.afternoon")),n),y=(0,i.useCallback)((function(){if(p.current){var e=p.current.offsetWidth,t=e<600?200:Re,n=Math.min(Math.floor((e+24)/(t+24)),3);d({minWidth:t,showPlayButton:(e-24*(n-1))/n>=Re,itemHeight:e>=858?80:64})}}),[]);if((0,R.a)((function(){y()})),(0,i.useEffect)((function(){y()}),[y]),(0,i.useEffect)((function(){var e=(null==c?void 0:c.map(F.lh))||[];l(e)}),[c,l]),v||null==c||!c.length)return null;var E=64===f.itemHeight?12:16;return o().createElement("section",{className:ge,"aria-label":g,ref:p},o().createElement(W.r,{title:g,titleVariant:"alto",tagline:r}),o().createElement("div",{className:ye,style:{"--min-column-width":"".concat(f.minWidth,"px"),"--column-gap":"".concat(24,"px"),"--row-gap":"".concat(E,"px"),"--item-height":"".concat(f.itemHeight,"px")}},c.filter((function(e,t){return t<6})).map((function(e,t){var n=function(e){var t=(z().from(e)||{}).type;switch(t){case z().Type.ARTIST:return je;case z().Type.ALBUM:case z().Type.COLLECTION_ALBUM:return Le;case z().Type.PLAYLIST:case z().Type.PLAYLIST_V2:return Ne;case z().Type.SHOW:return De;case z().Type.EPISODE:return Be;case z().Type.COLLECTION:return Ne;default:return console.warn("Unable to resolve entity shortcut from ".concat(e,' of type "').concat(t||"unknown",'"')),De}}(e.uri);return o().createElement(n,{index:t,key:e.id,item:e,showPlayButton:f.showPlayButton,shouldSetBackgroundColor:0===t})}))))})),We=(0,D.P)(Me,(function(){return null}),(function(e){return(0,B.v)({from:"HomeShortcutsGrid",error:e})})),Fe=n(5001),Ue=n(76092),He=18e5;const qe=o().memo((function(){var e=(0,u.v9)(L.Gg).isAnonymous,t=(0,v.h)(d.N9.SIGNUP).status,n=(0,Fe.v8)(e,t===d.b_.COMPLETE),r=(0,g.P)(n),c=r.view,b=r.refreshContents,w=(0,p.fU)(s.createDesktopHomeEventFactory,{data:{identifier:n,uri:"spotify:home"}}),_=w.spec,P=w.UBIFragment;(0,N.z)("home"),A(c);var O=(null==c?void 0:c.timestamp)||0;(0,i.useEffect)((function(){var e=function(){Date.now()>O+He&&b()};return window.addEventListener("focus",e),function(){window.removeEventListener("focus",e)}}),[O,b]);var k=null==c?void 0:c.content.items,I=(0,i.useMemo)((function(){var e=[],t=null;if(Array.isArray(k))for(var n=0;n<k.length;n++){var r=k[n];"shortcuts"===r.id?t=r:e.push(r)}return[t,e]}),[k]),S=a()(I,2),T=S[0],C=S[1];return o().createElement(P,{spec:_},o().createElement(j.$,null,m.ag.get("page.generic-title")),o().createElement(i.Suspense,{fallback:null},o().createElement(h.SearchOnHomeTopBar,null)),c?o().createElement("section",{"data-testid":"home-page"},o().createElement("div",{className:Ue.Z.home},o().createElement("div",{className:l()(Ue.Z.content,"contentSpacing")},T?o().createElement(P,{spec:_.shortcutsFactory()},o().createElement(f.JL,{value:"headered-grid",key:T.id},o().createElement(We,{items:T.content.items,title:T.name,tagline:T.tag_line}))):null,o().createElement(P,{spec:_.shelvesFactory()},o().createElement(E.c,{spaces:C,viewName:c.name,viewId:n,isAnonymous:e}))))):o().createElement(y.h,{hasError:!1,errorMessage:m.ag.get("error.not_found.title.page")}))}))},86964:(e,t,n)=>{n.d(t,{c:()=>S});var r=n(59713),a=n.n(r),i=(n(26699),n(32023),n(74916),n(15306),n(23157),n(21249),n(57327),n(41539),n(68309),n(82526),n(41817),n(47941),n(38880),n(89554),n(54747),n(49337),n(33321),n(69070),n(67294)),o=n.n(i),c=n(54543),l=n(18686),u=n(42922),s=n(37146),m=n(21794),f=n(28760),d=n(44794),v=n(44503),p=n(67892);const g="EPMDgp7znILo0hvyirzv",y="noUm6pjQ6KWq7mVxYDor",E="PqnKjxzJ1Zvr9qKRlRbO",h="uuBQS9Ym_VPmAQrLhPQb";var b=function(e){return(0,d.W6)(v.sE)?o().createElement(p.Z,{to:e.uri,target:"_blank",className:g},o().createElement("div",{className:y}),o().createElement(f.Dy,{className:E,as:"h2",variant:"alto"},e.label),o().createElement(f.Dy,{className:h,as:"p",variant:"mesto"},e.tagline)):null},w=function(e){return o().createElement(i.Suspense,{fallback:null},o().createElement(b,e))},_=n(5001),P=n(1150);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){var t;return null===(t=e.id)||void 0===t?void 0:t.startsWith("scc-corona")},S=function(e){var t=e.spaces,n=e.viewName,r=e.viewId,a=e.isAnonymous,f=(0,i.useCallback)((function(e,t){var n=function(e,t){var n=e.uri;return e.href.includes("https://api.spotify.com/v1/views/")&&(n=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),n=(0,s.$)(n),"hub-browse-grid"===t&&(n=n.replace(":view:",":genre:"))),n}(e,r);return o().createElement(c.q,{key:e.href,index:t,entity:k(k({},e),{},{uri:n})})}),[r]),d=(0,i.useCallback)((function(e,t){return o().createElement(u.JL,{key:e.uri||t,value:"card",index:t},o().createElement(c.q,{index:t,entity:e}))}),[]),v=(0,i.useCallback)((function(e,t){return"link"===e.type?f(e,t):d(e,t)}),[d,f]),p=(0,i.useCallback)((function(e){return!!I(e)||!(function(e){return"HEADER"===e.rendering}(e)||0===e.content.total||a&&"uniquely-yours-shelf"===e.id)}),[a]);return t&&0!==t.length?t[0].content?o().createElement(o().Fragment,null,t.filter(p).map((function(e,t){var n=e.content&&(0,m.p)((0,m.S)(e.href));if(e.id===P.RECENTLY_PLAYED_VIEW_ID||e.id===_.uK)return o().createElement(u.JL,{value:"headered-grid",index:t,key:e.id},o().createElement(P.RecentlyPlayed,{showAll:!1,index:t}));if(I(e)){var a=e.content.items[0];return a&&a.name&&a.description&&a.href?o().createElement(w,{label:a.name,tagline:a.description,uri:a.href}):null}return o().createElement(u.JL,{value:"headered-grid",index:t,key:e.id},o().createElement(l.q,{total:e.content.total,seeAllUri:n,pageId:r,title:e.name,tagline:e.tag_line||void 0,index:t,id:e.id},e.content.items.map(v)))}))):o().createElement(u.JL,{value:"headered-grid"},o().createElement(l.q,{showAll:!0,title:n,total:(null==t?void 0:t.length)||0,index:0,id:null!=r?r:"spaces-see-all-grid"},null==t?void 0:t.map(v))):null}},35808:(e,t,n)=>{n.d(t,{P:()=>g});n(47941),n(82526),n(57327),n(41539),n(38880),n(89554),n(54747),n(49337),n(33321),n(69070);var r=n(59713),a=n.n(r),i=n(63038),o=n.n(i),c=n(94321),l=n(29255),u=n(67294),s=n(65858),m=n(43088),f=n(44794),d=n(8247);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=(0,m.n)(),n=(0,u.useState)((function(){return t.getViewFromCache(e)})),r=o()(n,2),a=r[0],i=r[1],v=(0,f.W6)(d.Xf),g=(0,s.v9)(c.rZ),y=(0,s.v9)(l.Gg),E=y.locale,h=y.overrides,b=(null==h?void 0:h.country)||g,w=(null==h?void 0:h.locale)||E;return(0,u.useEffect)((function(){t.getView(e,p({country:b,locale:w},v&&{extraTypes:["uri_link"]})).then((function(e){i(e)}))}),[b,w,e,t,v]),{view:a,getNextPage:(0,u.useCallback)((function(){t.getMore(e).then((function(e){e&&i(e)}))}),[e,t]),refreshContents:(0,u.useCallback)((function(){t.getView(e,p({country:b,locale:w,ignoreCache:!0},v&&{extraTypes:["uri_link"]})).then((function(e){i(e)}))}),[b,w,e,t,v])}}}}]);
//# sourceMappingURL=xpui-routes-home.js.map