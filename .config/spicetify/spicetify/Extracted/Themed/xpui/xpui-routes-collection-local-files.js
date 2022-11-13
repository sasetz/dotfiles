"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[379],{65673:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var r=n(59713),l=n.n(r),a=n(48926),i=n.n(a),c=n(63038),o=n.n(c),u=n(87757),s=n.n(u),m=(n(57327),n(41539),n(21249),n(47941),n(82526),n(38880),n(89554),n(54747),n(49337),n(33321),n(69070),n(67294)),d=n.n(m),f=n(81052),g=n(73012),E=n(52482),b=n(20657),p=n(30947),y=n(55911),h=n(31595),v=n(83280),x=n(72131),k=n(66393),C=n(23248),D=n(84242),S=n(59916),P=n(1169),T=n(36132),A=n(19565),I=n(42273),O=n(59482),_=n(72907),w=n(61048),R=n(1663),N=n(55120),U=n(32129),j=n(22423),B=n(68942),M=n(28248),L=n(78462),z=n(85676),Q=(n(66992),n(70189),n(78783),n(33948),n(68309),n(42922)),Z=n(49961),F=(n(69600),n(37763)),H=n.n(F),X=n(18261),K=n(87257),W=n(84788),q=n(26921),G=n(27481),J=n(96525),$=n(82760),Y=n(83384),V=d().memo((function(e){var t=e.uri,n=e.uid,r=e.name,l=e.duration_ms,a=e.artists,i=e.album,c=e.is19PlusOnly,o=e.isExplicit,u=e.isPlayable,s=e.index,f=e.contextUri,g=e.imgUrl,E=e.usePlayContextItem,p=(0,m.useContext)(j.fo).filter,y=E({uid:n,uri:t,index:s}),h=y.isActive,v=y.isPlaying,x=y.triggerPlay,k=y.togglePlay,C=(0,J.P)(),D=(0,W.r)({isExplicit:o}),S=D.badges,P=D.hasBadges,T=(null==a?void 0:a.map((function(e){return e.name})).join(b.ag.getSeparator()))||"";return d().createElement(Q.ZP,{value:"row",index:s},d().createElement(X._,{menu:d().createElement(q.N,{uri:t,uid:n,contextUri:f})},d().createElement($.c,{uri:t,contextUri:f,isActive:h,index:s,onTriggerPlay:function(){x()},ariaRowIndex:s+1,isPlayable:u,ageRestricted:c,dragMetadata:{name:r,createdBy:T}},d().createElement(G.Dd,{ariaColIndex:0},d().createElement(G.Du,{uri:t,playAriaLabel:b.ag.get("tracklist.a11y.play",r,T),isPlaying:v,isActive:h,onClick:function(){k()}},d().createElement(G.km,null,s+1))),d().createElement(G.vZ,{ariaColIndex:1},d().createElement(G.lD,{src:g}),d().createElement(G.vm,null,d().createElement(G.Wh,{titleText:r},d().createElement(H(),{searchWords:[p],textToHighlight:r,findChunks:C,highlightClassName:Y.Z.filterHighlight})),P&&d().createElement(G.g3,null,S.explicit?d().createElement(K.N,null):null),d().createElement(G.K9,null,a&&d().createElement(J.o,{nonInteractive:!0,artists:a,filter:p})))),d().createElement(G.UA,{ariaColIndex:2},(null==i?void 0:i.name)&&d().createElement(G.BM,{nonInteractive:!0,uri:null==i?void 0:i.uri,name:null==i?void 0:i.name},d().createElement(H(),{searchWords:[p],textToHighlight:null==i?void 0:i.name,findChunks:C,highlightClassName:Y.Z.filterHighlight}))),d().createElement(G.mU,{ariaColIndex:3},d().createElement(G.A$,{duration:l}),d().createElement(G.Zv,{menu:d().createElement(q.N,{uri:t,uid:n,contextUri:f}),label:b.ag.get("more.label.track",r,T)})))))}),(function(e,t){return e.uri===t.uri&&e.index===t.index})),ee=new Set(L.MI),te=d().memo((function(e){var t=e.uri,n=e.tracks,r=e.columns,l=e.sortState,a=e.handleSort,i=e.usePlayContextItem,c=e.tracklistDomRef,o=(0,m.useRef)(null),u=(0,m.useCallback)((function(e,n){var r,l=(0,Z.X)(null===(r=e.album)||void 0===r?void 0:r.images,{desiredSize:40,desiredLabel:"small"});return d().createElement(V,{key:e.uid,index:n,contextUri:t,uri:e.uri,uid:e.uid,isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:e.isExplicit,is19PlusOnly:e.is19PlusOnly,type:e.type,imgUrl:(null==l?void 0:l.url)||"",usePlayContextItem:i})}),[t,i]);return d().createElement(d().Fragment,null,d().createElement(Q.ZP,{value:"playlist-tracklist"},d().createElement(M.Pv,{key:t,ariaLabel:b.ag.get("local-files"),hasHeaderRow:!0,columns:r,sortableColumns:ee,sortState:l,onSort:a,renderRow:u,resolveUri:function(e){return e.uri},resolveUid:function(e){return e.uid},tracks:n,nrTracks:n.length,limit:100,outerRef:o,outerDomRef:c})))}));const ne="tYmjXB2T6EJhhTtsSijS",re="EetzTXGFCRe2UZJ_1_re";function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=[M.QD.INDEX,M.QD.TITLE,M.QD.ALBUM,M.QD.DURATION],ce=function(e){var t=(null==e?void 0:e.order)===S.As.DESC?1:0;switch(null==e?void 0:e.field){case S.bD.TITLE:return f.uh.NAME_ASC+t;case S.bD.ADDED_AT:return f.uh.ADD_TIME_ASC+t;case S.bD.ALBUM:return f.uh.ALBUM_NAME_ASC+t;case S.bD.ARTIST:return f.uh.ARTIST_NAME_ASC+t;case S.bD.DURATION:return f.uh.LENGTH_ASC+t;default:return f.uh.NO_SORT}},oe=function(){var e=(0,m.useContext)(j.fo).filter,t=(0,m.useContext)(L.Gb),n=t.sortState,r=t.setSortState,l=(0,m.useContext)(k.t),a=(0,C.z)(B.J,!1),c=o()(a,1)[0],u=(0,m.useState)(),f=o()(u,2),S=f[0],M=f[1],Q=(0,h.Y)(g.Fzl),Z=(0,P.Q)(),F=Z.filterBoxApiRef,H=Z.filterBoxDomRef,X=Z.tracklistDomRef,K=Z.handleKeyDown,W=(0,m.useCallback)((function(e){r((0,T.VK)(e,n))}),[n,r]),q=(0,m.useCallback)(i()(s().mark((function t(){var r,a,i,c,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=ce((0,T._j)(n)),t.next=3,l.getTracks({query:{sortBy:c,textFilter:e},policy:z.Z});case 3:o=t.sent,M(null!==(r=null===(a=o.data)||void 0===a||null===(i=a.item)||void 0===i?void 0:i.map(v.cr))&&void 0!==r?r:[]);case 5:case"end":return t.stop()}}),t)}))),[l,n,e]);(0,m.useEffect)((function(){q()}),[q]);var G=(0,D.n)({uri:x.b,pages:[{items:(null!=S?S:[]).map((function(e){return ae(ae({},e),{},{provider:null})}))}]},{featureIdentifier:"local_files"}),J=G.isPlaying,$=G.togglePlay,Y=G.usePlayContextItem;return S?S.length&&c?d().createElement("div",{role:"presentation",className:ne,onKeyDown:K},d().createElement(I.gF,{backgroundColor:Q},d().createElement(O.W,null,d().createElement(N.$,{size:y.qE.sm,onClick:function(){return $()},isPlaying:J,uri:x.b}),d().createElement(_.i,{text:b.ag.get("local-files")})),d().createElement(I.sP,null,d().createElement(I.xd,null,b.ag.get("local-files")),d().createElement(I.T0,null,b.ag.get("local-files.description")))),d().createElement(p.o,{backgroundColor:Q},d().createElement(p.F,null,d().createElement(N.$,{size:y.qE.xl,onClick:function(){return $()},isPlaying:J,uri:x.b}),d().createElement("div",{className:re},d().createElement(m.Suspense,{fallback:null},d().createElement(w.K,{placeholder:b.ag.get("playlist.search_in_playlist"),filterBoxApiRef:F,outerRef:H})),d().createElement(U.c,{columns:L.MI})))),d().createElement("div",{className:"contentSpacing"},d().createElement(te,{tracks:S,uri:x.b,columns:ie,handleSort:W,sortState:n,usePlayContextItem:Y,tracklistDomRef:X}))):d().createElement(A.u,{linkTo:"/preferences",linkTitle:b.ag.get("local-files.empty-button"),message:b.ag.get("local-files.empty-description"),title:b.ag.get("local-files.empty-header")},d().createElement(E.X,{iconSize:64})):d().createElement(R.h,{hasError:!1,errorMessage:b.ag.get("error.request-artist-failure")})};const ue=function(){return d().createElement(L.kz,{uri:"spotify:internal:local-files"},d().createElement(j.hz,{uri:"spotify:internal:local-files"},d().createElement(oe,null)))}},85676:(e,t,n)=>{n.d(t,{Z:()=>r});const r={rowId:!0,addTime:!0,track:{link:!0,name:!0,discNumber:!0,trackNumber:!0,length:!0,isLocal:!0,playable:!0},album:{album:{link:!0,name:!0,covers:!0},artist:{link:!0,name:!0}},artist:{link:!0,name:!0}}},32129:(e,t,n)=>{n.d(t,{c:()=>g});var r=n(319),l=n.n(r),a=(n(40561),n(57327),n(41539),n(21249),n(67294)),i=n.n(a),c=n(20657),o=n(36132),u=n(95289),s=n(5292),m=n(28248),d=n(78462);function f(e){return!!e}var g=function(e){var t=e.columns,n=l()(t);n.splice(2,0,m.QD.ARTIST);var r=(0,a.useContext)(d.Gb),g=r.sortState,E=r.setSortState,b=function(e){return null===e.column?s.mE[m.QD.INDEX]:(0,o.cB)(e.column,e.order)?s.mE[m.QD.ARTIST]:s.mE[e.column]}(g),p=(0,a.useCallback)((function(e){E((0,s.WQ)(e,g.column,g.order))}),[E,g.column,g.order]),y=(0,a.useCallback)((function(){return null!==g.column}),[g.column]),h=n.map((function(e){return s.mE[e]})).filter(f);return i().createElement(u.A,{options:h,onSelect:p,selected:b,isSelectionChanged:y,sortOrder:g.order,heading:c.ag.get("drop_down.sort_by")})}}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map