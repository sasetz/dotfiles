"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[713],{28622:(e,t,a)=>{a.r(t),a.d(t,{Show:()=>Jt,default:()=>$t});var n=a(59713),r=a.n(n),l=a(63038),i=a.n(l),o=(a(68309),a(82526),a(41817),a(73210),a(67294)),c=a.n(o),s=a(16528),u=a(28760),m=a(44794),d=a(44503),g=(a(74916),a(64765),a(66992),a(41539),a(78783),a(33948),a(41637),a(21249),a(15306),a(47941),a(57327),a(38880),a(89554),a(54747),a(49337),a(33321),a(69070),a(59385)),E=a(56802),y=a(47034),p=a(25678),f=a(49961),v=a(85105);const b="GPPWAsVio35hH080drEK",k="f8FyVnjsXfG9VtTzk9Df",h="tpOdce3HYBF6ASz4MXdr",C="p9AillvR7MCZkOrv3U3h",S="zMqHdOQtjEEbcMV7YHe9",P="zPJ5qeQhpgUvKpAAlNpA",w="n3G4Y43jgF6wXOuj0X44";function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=c().memo((function(e){var t=e.coverArt,a=e.showAccessInfo,n=e.isOpen,r=e.toggleModal,l=e.backgroundColor,i=(0,s.k6)(),m=(0,E.o)();if((0,o.useEffect)((function(){m({type:"view",intent:"audiobook-gated-entry-point"})}),[m]),!a||!a.partnerLink)return null;var d=a.partnerLink,N=d.title,O=d.body,D=d.soaPartners,I=(0,f.X)(t,{desiredSize:640}),x={"--bg-color":l};return c().createElement(v.Z,{contentLabel:"activation-modal",isOpen:n,onRequestClose:r},c().createElement("div",{className:b,style:A({},x)},c().createElement(p.Ee,{loading:"lazy",src:null==I?void 0:I.url,className:k}),c().createElement("div",{className:h},c().createElement(u.Dy,{as:"p",variant:"canon",className:C},N),c().createElement(u.Dy,{as:"p",className:S},O),D&&(null==D?void 0:D.map((function(e){return c().createElement("a",{href:e.linkUrl,className:P,key:e.linkUrl,onClick:function(){m({type:"click",intent:"navigate-to-access-provider",itemIdSuffix:e.displayName}),r(),i.replace("?isUnlockingAudiobook=true")}},c().createElement("img",{src:e.logoUrl||"",alt:"",width:"24px"}),c().createElement("span",{className:w},c().createElement(u.Dy,{variant:"ballad"},e.displayName," ")),c().createElement(y.X,{fill:g.white,height:16,width:16}))}))))))})),D=a(95661),I=a(22345),x=a(20657),R=a(20246),U=a(44887),z=a(7469),L=a(42781);const M={container:"SpVoh9vvBN0kIwzfCiBh",isActive:"nsGHaEmn310z9W4RMbb8",title:"PfYVlZzroXSurDmS_kxY",main:"kCT99_BcJQtW47mEfVF6",titleContainer:"gmDgEbPyRXNixmjYAT9f",duration:"itbbweiDUhLIrwEjSRWv",trailerContainer:"XlZGcb86bItwlMPQ2jOf",image:"VGTtqfOlX2jIbpff6mPP",imageContainer:"aexqooSgfdW95poEaxjH",playButton:"Fui2wGupk4F1Khigbrhj",entityImageLarge:"jWcvSz47NFpbLjnkFT1O",entityImageSmall:"Oo6MP8F01W5uGlnw8dag"};var T,j=a(55911),B=a(94184),F=a.n(B),G=a(33985),_=a(87257),Z=a(57978),W=a(95775),X=a(84788),Y=a(46245);!function(e){e.SMALL="small",e.LARGE="large"}(T||(T={}));var q=function(e){var t,a=e.images,n=e.title,l=e.contentRating,i=e.duration,o=e.moreButton,s=e.onClick,m=e.onContextMenu,d=e.onTouchStart,g=e.onTouchEnd,E=e.isPlaying,y=e.isActive,p=e.size,f=e.className,v=e.enableEncoreWebMigration,b=e.label,k=p===T.LARGE?j.qE.md:j.qE.sm,h=p===T.LARGE?"md":"sm",C=(0,X.r)({contentRating:l}).badges;return c().createElement("div",{"data-testid":"trailer-component",className:F()(M.container,f,r()({},M.isActive,y)),onContextMenu:m,onTouchStart:d,onTouchEnd:g},c().createElement("div",{className:M.main},c().createElement("div",{className:M.imageContainer},c().createElement(U.O,{type:L.p.EPISODE,title:n,className:F()(M.image,(t={},r()(t,M.entityImageSmall,p===T.SMALL),r()(t,M.entityImageLarge,p===T.LARGE),t)),size:z.m$.SIZE_56,images:a,shape:U.K.ROUNDED_CORNERS}),c().createElement("div",{className:M.playButton},v?c().createElement(Y.fh,{"data-testid":"trailer-play-button",version:j.ul.transparent,size:h,isPlaying:E,onClick:s}):c().createElement(j.JM,{"data-testid":"trailer-play-button",version:j.ul.transparent,size:k,isPlaying:E,onClick:s}))),c().createElement("div",{className:M.metadata},c().createElement("div",{className:M.titleContainer},c().createElement(u.Dy,{dir:"auto",className:M.title,variant:"balladBold"},n)),c().createElement("div",{className:M.trailerContainer},c().createElement(W.V,{text:b}),C.explicit&&c().createElement(_.N,null),C.nineteen&&c().createElement(Z.X,null),c().createElement(u.Dy,{dir:"auto",variant:"mesto"},c().createElement(G.nL,{durationMs:i}))))),o)},H=a(40080),K=a(43620),V=a(84242),Q=a(27999),J=a(86649),$=a(8247),ee=a(60410),te=a(192);a(69600);var ae=a(20238),ne=a(67892),re=a(37146);const le="nLNTsyonBwoRIzAv1AME",ie="E4I5I7G2CfW32hLWZaqE";var oe=function(e){var t=e.title,a=e.uri,n=e.className,r=(0,re.$)(a);return c().createElement(ne.r,{"aria-label":t,className:F()(ie,n),to:r},c().createElement(u.Dy,{dir:"auto",variant:"mestoBold"},t))};function ce(e){return!!e.uri&&!!e.title}var se=function(e){var t=e.topics,a=e.className;return c().createElement("div",{className:F()(le,a)},t.filter(ce).map((function(e){return c().createElement(oe,{key:e.uri,title:e.title,uri:e.uri})})))};const ue={sectionTitle:"igKG5CnS4gyhXQWp5GVu",author:"E8g_EyijtSREXL0vMFbL",narrator:"Pc8AKn4KmzHwEw8lPiSb",topics:"yE1clVJOE3LrEuOvUxxq"};var me=function(e){var t=e.authorName,a=e.htmlDescription,n=e.narrators,r=(0,E.o)(),l=(0,o.useCallback)((function(){r({intent:"expand-description",type:"click"})}),[r]),i=[{title:"Education",uri:"spotify:genre:educational_podcasts"}],s=i.length>0;return c().createElement(c().Fragment,null,c().createElement(u.Dy,{as:"h3",variant:"canon",semanticColor:"textBase",className:ue.sectionTitle},x.ag.get("artist.about")),c().createElement(u.Dy,{as:"p",variant:"ballad",className:ue.author},x.ag.get("web-player.audiobooks.author",t)),n.length?c().createElement(u.Dy,{as:"p",variant:"ballad",className:ue.narrator},x.ag.get("web-player.audiobooks.narratedByX",n.join(x.ag.getSeparator()))):null,s&&c().createElement(se,{topics:i,className:ue.topics}),a&&c().createElement(ae.o,{maxLines:4,content:a,htmlContent:a,LinkComponent:ne.Z,onExpanded:l,className:ue.description}))},de=a(30947),ge=a(14535),Ee=a(4383),ye=a(98778),pe=a(55120),fe=a(4236),ve=c().memo((function(e){var t=e.backgroundColor,a=e.uri,n=e.isPlaying,r=e.togglePlay,l=e.isLocked,s=(0,Ee.Z)(a),u=i()(s,2),m=u[0],d=u[1],g=!(0,fe.k)(),y=(0,E.o)(),p=(0,o.useCallback)((function(){y({targetUri:a,intent:m?"unsave":"save",type:"click"}),d(!m)}),[y,a,m,d]);return c().createElement(de.o,{backgroundColor:t},c().createElement(de.F,null,c().createElement(pe.$,{onClick:function(){return r()},isPlaying:n,size:j.qE.lg,uri:a,locked:l}),c().createElement(ye.r,{key:"follow-button"},c().createElement(ge.e,{isFollowing:m,onClick:p,disabled:g,buttonText:m?x.ag.get("saved"):x.ag.get("save")}))))})),be=a(32626),ke=a(28137),he=a(42273),Ce=a(59482),Se=a(72907),Pe=c().memo((function(e){var t=e.coverArt,a=e.name,n=e.authorName,r=e.uri,l=e.backgroundColor,i=e.isPlaying,o=e.togglePlay,s=e.isLocked;return c().createElement(he.gF,{backgroundColor:l},c().createElement(Ce.W,null,c().createElement(pe.$,{size:j.qE.sm,onClick:function(){return o()},isPlaying:i,uri:r,locked:s}),c().createElement(Se.i,{text:a,dragUri:r,dragLabel:a})),c().createElement(be._P,{menu:c().createElement(ke.X,{uri:r})},c().createElement(he.Oz,{images:t,name:a,shape:U.K.ROUNDED_CORNERS})),c().createElement(he.sP,null,c().createElement(he.dy,{small:!0,uppercase:!0},x.ag.get("web-player.audiobooks.audiobook")),c().createElement(he.xd,{canEdit:!1,onClick:function(){}},a),c().createElement(he.QS,{author:n})))})),we=(a(26699),a(32023),a(69518)),Ne=a.n(we),Ae=a(75016),Oe=a(24656),De=a(69010),Ie=a(8341),xe=a(5944),Re=a(92408),Ue=a(31610);const ze="BO8KtKFwgSHtMt6PAmuv",Le="b0Vng72SrQiFroJKXfk2",Me="eWxDd0LanTnTlSl8SOHX",Te="eAOkseqV13_CAmzuDJpa",je="fovofKIYdEIURgIYoKm2",Be="we_1b4qCQBaFPT12eUXp",Fe="NXXFrQO7npgPCRuSKaAA",Ge="ekkhhuxKVGAzkEmuh9kE",_e="zd6xqobF255bxHFtCmXy";var Ze=c().memo((function(e){var t=e.name,a=e.duration,n=e.uri,l=e.bookUri,m=e.bookName,d=e.usePlayContextItem,g=e.isLocked,y=e.isPlayable,p=e.resumePositionMs,f=e.isFullyPlayed,v=e.releaseDate,b=e.toggleActivationModal,k=(0,s.k6)(),h=Ne().from(n).toURLPath(!0),C=(0,o.useState)(f),S=i()(C,2),P=S[0],w=S[1],N=(0,o.useRef)(p),A=d({uri:n}),O=A.isPlaying,R=A.togglePlay,U=(0,Ie.Y)((function(e){var t;if((null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===n){var a,r=null!==(a=(0,xe.k)(e))&&void 0!==a?a:0;return N.current=r,r}return 0})),z=(0,(0,o.useContext)(Oe.I).useDownloading)(n).currentAvailability,L=[De.V8.YES,De.V8.DOWNLOADING,De.V8.WAITING].includes(z),M=(0,o.useCallback)((function(e){e.stopPropagation(),e.preventDefault()}),[]),T=(0,o.useCallback)((function(e){M(e),h&&k.push(h)}),[M,h,k]),j=(0,E.o)(),B=(0,o.useCallback)((function(e){M(e),g?(j({type:"click",intent:"audiobook-gated-entry-point",itemIdSuffix:"target-chapter"}),b()):R()}),[g,j,M,b,R]),G=(0,o.useCallback)((function(e){e||(N.current=0),w(e)}),[]);return c().createElement(be._P,{menu:c().createElement(I.r,{uri:n,showUri:l,isPlayed:P,onMarkAsPlayed:G})},c().createElement("div",{className:Te},c().createElement(ne.r,{to:n,onClick:T,className:ze,tabIndex:-1},c().createElement("hr",{className:Me,"aria-hidden":!0}),c().createElement("div",{className:Le},c().createElement(u.Dy,{as:"h2",variant:"balladBold",className:Fe,semanticColor:"textBase"},t),c().createElement("div",{className:Ge},c().createElement(Y.fh,{size:"sm",version:Y.ul.secondary,onClick:B,isPlaying:O,ariaPlayLabel:x.ag.get("tracklist.a11y.play",t,m),ariaPauseLabel:x.ag.get("tracklist.a11y.pause",t,m),locked:g,disabled:!y&&!g}),g?c().createElement(Ae.g,null):null,c().createElement("div",{className:_e},c().createElement(Re.E,{isPlaying:O,fullyPlayed:P,durationMs:a.milliseconds,releaseDate:v,resumePositionMs:N.current,position:O?U:void 0}))),c().createElement(be.yj,{menu:c().createElement(I.r,{uri:n,showUri:l,isPlayed:P,onMarkAsPlayed:G})},c().createElement(D.z,{className:je,size:Ue.q.sm,label:x.ag.get("more.label.context",t),onClick:M})),c().createElement(Ue.o,{uri:n,bookUri:l,className:F()(r()({},Be,!L)),onClick:M,size:Ue.q.sm})))))}));const We="mmCZ5VczybT9VqKB5wFU",Xe="At_ihDspJfh1yw3Cn2cq",Ye="q9WSh3pBJkL9Zyp8zyS7",qe="eiC4nh70nb5UHZBYMgNA",He="qcUG6XxCBqe75bTAbGTY",Ke="uU7tdAyRmWf_U95Daugm";var Ve=c().memo((function(e){var t,a,n=e.metadata,r=n.uri,l=n.coverArt,d=n.name,g=n.htmlDescription,y=n.authorName,p=n.sample,f=n.narrators,v=(0,s.TH)().search,b=!!new URLSearchParams(v).get("isUnlockingAudiobook"),k=!(!(0,H.D)(b)||b),h=(0,K.Z)(null===(t=l[0])||void 0===t?void 0:t.url),C=function(e,t){var a=(0,te.z)(),n=(0,o.useState)(null),r=i()(n,2),l=r[0],c=r[1];return(0,o.useEffect)((function(){a.getBookContents(e,t).then((function(e){c(e)}))}),[a,e,t]),l}(r,k),S=(0,o.useState)(!1),P=i()(S,2),w=P[0],N=P[1],A=(0,E.o)();(0,o.useEffect)((function(){A({type:"view",intent:"audiobook"})}),[A]);var U=(0,o.useCallback)((function(){w||A({type:"click",intent:"audiobook-gated-entry-point",itemIdSuffix:"target-header"}),N(!w)}),[A,w]),z=(0,m.W6)($.iY),L=(0,Q.ye)(r),M=(0,V.n)({uri:r},{featureIdentifier:"audiobook"}),j=M.togglePlay,B=M.isPlaying,F=M.usePlayContextItem,G=F({uri:(null==p?void 0:p.uri)||""}),_=G.isActive,Z=G.isPlaying,W=G.togglePlay,X=(0,o.useCallback)((function(){null!=p&&p.uri&&(A({targetUri:p.uri,intent:Z?"play":"pause",type:"click"}),W())}),[Z,A,W,null==p?void 0:p.uri]),Y=(0,ee.g)(C);return c().createElement("section",{className:We},c().createElement(Pe,{name:d,authorName:y,uri:r,coverArt:l,backgroundColor:h,togglePlay:Y?U:j,isPlaying:B,isLocked:Y}),c().createElement(ve,{backgroundColor:h,uri:r,togglePlay:Y?U:j,isPlaying:B,isLocked:Y}),c().createElement("div",{className:Xe},c().createElement("div",{className:qe},c().createElement(u.Dy,{as:"h1",variant:"canon",className:He},x.ag.get("web-player.audiobooks.chapters")),c().createElement("ul",null,C&&C.map((function(e){var t=e.name,a=e.duration,n=e.uri,l=e.playability.playable,i=e.playedState,o=i.playPositionMilliseconds,s=i.state,u=e.releaseDate;return c().createElement(Ze,{name:t,duration:a,uri:n,bookUri:r,bookName:d,key:n,usePlayContextItem:F,isLocked:(0,ee.S)(e),isPlayable:l,resumePositionMs:o,isFullyPlayed:s===J.sY.Completed,releaseDate:(null==u?void 0:u.isoString)||"",toggleActivationModal:U})})))),c().createElement("div",{className:Ye},c().createElement(me,{htmlDescription:g,authorName:y,narrators:f}),p&&c().createElement(q,{label:x.ag.get("sample"),className:Ke,images:p.coverArt||[],title:p.name,duration:p.duration.milliseconds,moreButton:c().createElement(R.y,{menu:c().createElement(I.r,{uri:p.uri,showUri:r})},c().createElement(D.z,null)),onClick:X,isPlaying:Z,isActive:_,size:T.LARGE,contentRating:null===(a=p.contentRating)||void 0===a?void 0:a.label,enableEncoreWebMigration:z}))),w&&L&&c().createElement(O,{backgroundColor:h,isOpen:w,toggleModal:U,coverArt:l,showAccessInfo:L}))})),Qe=a(18261),Je=a(94233),$e=a(39561),et=a(89952),tt=a(49125),at=(a(88674),(0,o.lazy)((function(){return a.e(381).then(a.bind(a,18381))})));function nt(e){return(0,m.W6)(d.$f)?c().createElement(o.Suspense,{fallback:!0},c().createElement(at,e)):null}var rt=a(1663),lt=a(38894),it=a(25988),ot=a(86514),ct=a(70369),st=a(319),ut=a.n(st),mt=(a(40561),a(92222),a(33241)),dt=a(42922),gt=a(18864),Et=a(22583),yt=(0,o.createContext)({setSortState:function(){throw new Error("setSortState must be used within a ShowFilterProvider")},sortState:[]}),pt=c().memo((function(e){var t=e.uri,a=e.children;return c().createElement(Et.r,{uri:t,defaultState:[],sortContext:yt,localStorageKey:"showFilterParams-v2"},a)})),ft=(a(51532),a(26382)),vt={field:ft.ay.PUBLISH_DATE,order:ft.i5.DESC},bt={field:ft.ay.PUBLISH_DATE,order:ft.i5.ASC},kt={field:ft.ay.LENGTH,order:ft.i5.DESC},ht={field:ft.ay.LENGTH,order:ft.i5.ASC},Ct={episodic:vt,sequential:bt,recent:vt};function St(e){return Ct[e]}var Pt=(0,o.createContext)({setSortState:function(){throw new Error("setSortState must be used within a ShowSortProvider")},sortState:St("recent")}),wt=c().memo((function(e){var t=e.uri,a=e.children,n=e.defaultSortParam;return c().createElement(Et.r,{uri:t,defaultState:n,sortContext:Pt,localStorageKey:"showSortParam"},a)})),Nt=a(65858),At=a(62975),Ot=a(52759),Dt=a(7073),It=a(84629),xt=a(15212),Rt=a(72917),Ut=a(63133),zt=a(95806),Lt=a(68107);function Mt(e){return{uri:e.uri,name:e.name,trailer:e.trailer,showTypes:e.showTypes}}var Tt=function(e){return"activation-trigger-mme-".concat(e)},jt=c().memo((function(e){var t,a,n,r,l,s,u,m,d=e.index,g=e.showMetadata,y=e.episode,p=e.usePlayContextItem,f=null===(t=(0,Nt.oR)().getState().platform)||void 0===t?void 0:t.isBrowser,v=y.playedState.playPositionMilliseconds,b=y.uri,k=(0,o.useRef)(null),h=(0,o.useState)(y.playedState.state===Dt.sY.Completed),C=i()(h,2),S=C[0],P=C[1],w=(0,xt.O1)(),N=(0,lt.g)(),A=(0,gt.jh)(),O=(0,E.o)(),I=(0,Nt.I0)(),U=p({uri:b}),z=U.isActive,L=U.isPlaying,M=U.togglePlay,T=(0,Ot.z)(1e4,(function(e){var t;return(null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===b})),j=i()(T,1)[0];(0,o.useEffect)((function(){L&&(k.current=j)}),[L,j]),(0,o.useEffect)((function(){!L&&k.current&&y.duration.milliseconds<=k.current&&P(!0)}),[L,y.duration.milliseconds]);var B=(0,o.useCallback)((function(e){e||(k.current=0),P(e)}),[]),F=Mt(g),G=(0,Lt.s)(y,F),W=(0,o.useCallback)((function(){y.episodeType===Dt.Wf.Episode&&f?At.y.set((function(){return{triggerId:Tt(y.uri),triggerAction:null}})):N?G():(O({targetUri:b,intent:L?"pause":"play",type:"click"}),M())}),[G,O,M,b,L,N,y,f]),Y=(0,o.useCallback)((function(){O({type:"click",targetUri:b,intent:"navigate"})}),[b,O]),q=null!==(a=null===(n=y.podcastSubscription)||void 0===n?void 0:n.isPaywalled)&&void 0!==a&&a,H=null!==(r=null===(l=y.podcastSubscription)||void 0===l?void 0:l.isUserSubscribed)&&void 0!==r&&r,K=q&&!H,V=q&&N,Q=(0,X.r)({contentRating:null===(s=y.contentRating)||void 0===s?void 0:s.label,isPaywalled:q}).badges,J=(0,o.useCallback)((function(){return I((0,It.RM)(g.uri))}),[g.uri,I]),$=(0,o.useCallback)((function(e){var t=e;return(K||V)&&(t=c().createElement(zt.l,{enabled:!0,showUri:g.uri},t)),!y.playability.playable&&Q.nineteen&&(t=c().createElement("div",{onClick:function(e){e.stopPropagation(),J()}},e)),t=c().createElement(Rt.c,{id:Tt(b),targetURI:Ne().from(b)},t)}),[b,K,V,g.uri,Q.nineteen,y.playability.playable,J]);return c().createElement(dt.ZP,{value:"row",index:d},c().createElement(Qe._,{menu:c().createElement(it.k,{uri:b,showUri:g.uri,sharingInfo:y.sharingInfo,isPlayed:S,onMarkAsPlayed:B})},c().createElement(Ut.X,{index:d,uri:b,size:A,images:y.coverArt||[],name:y.name,showName:g.name,description:y.description,isPlayable:y.playability.playable||K,fullyPlayed:S,durationMs:y.duration.milliseconds,releaseDate:(null===(u=y.releaseDate)||void 0===u?void 0:u.isoString)||"",resumePositionMs:null!==(m=k.current)&&void 0!==m?m:v,handleDragStart:function(e){if(e.target===e.currentTarget){var t="".concat(y.name," · ").concat(g.name);w(e,[b],t,g.uri)}},handlePlaybackClick:W,handleClick:Y,isCurrentlyPlaying:z,isPaywalled:q,isUserSubscribed:H,isPlaying:L,position:L?j:void 0,episodeSharingInfo:y.sharingInfo,onMarkAsPlayed:B,contentInformation:y.contentInformation,badges:c().createElement(c().Fragment,null,Q.explicit&&c().createElement(_.N,null),Q.paid&&c().createElement(Ae.g,null),Q.nineteen&&c().createElement(Z.X,{size:16})),playButtonWrapper:$,topActionButtons:c().createElement(R.y,{menu:c().createElement(it.k,{uri:b,showUri:g.uri,sharingInfo:y.sharingInfo,isPlayed:S,onMarkAsPlayed:B})},c().createElement(D.z,{size:D.q.sm,label:x.ag.get("more.label.context",y.name)}))})))}));const Bt="Y_WW1akjiQKXSzCBalCD",Ft="NuwyWYpV2HzQDzNBFiaU";function Gt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _t(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Gt(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Gt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Zt={totalCount:0,nextOffset:0,items:[]},Wt=c().memo((function(e){var t,a=e.showMetadata,n=e.usePlayContextItem,l=(0,o.useContext)(Pt).sortState,s=(0,o.useContext)(yt).sortState,u=(0,Q.ZM)(a.uri,l,s),m=(0,o.useState)(Zt),d=i()(m,2),g=d[0],E=d[1],y=(0,o.useRef)(!1),p=(0,o.useRef)(0),f=(0,gt.Db)((t={},r()(t,gt.Uo.MEDIUM,0),r()(t,gt.Uo.LARGE,600),t)),v=f.ref,b=f.breakpoint,k=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(u){var t=p.current;null!==t&&(y.current||(y.current=!0,u(t,50).then((function(a){E((function(n){var r=e?[]:ut()(n.items);return r.splice.apply(r,[t,a.items.length].concat(ut()(a.items))),p.current=a.nextOffset,_t(_t({},a),{},{items:r})})),y.current=!1}))))}}),[u]);return(0,o.useEffect)((function(){E(Zt)}),[a.uri]),(0,o.useEffect)((function(){p.current=0,k(!0)}),[k]),c().createElement(gt.ZU.Provider,{value:b},c().createElement(dt.ZP,{value:"track-list"},c().createElement("div",{ref:v},c().createElement(mt.C,{onReachBottom:k,triggerOnInitialLoad:!0},g.items.map((function(e,t){return c().createElement("div",{className:Ft,key:"".concat(t).concat(e.uri)},c().createElement("hr",{className:Bt,"aria-hidden":!0}),c().createElement(jt,{key:"".concat(e.uri,"/").concat(t),index:t,episode:e,showMetadata:a,usePlayContextItem:n}))}))))))})),Xt=(a(91038),a(69826),a(5212),a(95289)),Yt={field:ft.YG.ISPLAYED,operator:ft.NK.EQUALS,value:!1},qt={field:ft.YG.STARTEDPLAYING,operator:ft.NK.GREATER_THAN,value:0};var Ht="all-episodes",Kt=function(){var e=(0,o.useContext)(yt),t=e.sortState,a=e.setSortState,n=new Map([[Yt,{key:"is-played",value:x.ag.get("shows.filter.unplayed")}],[qt,{key:"started-playing",value:x.ag.get("shows.filter.in-progress")}]]),r=Array.from(n.values());r.unshift({key:Ht,value:x.ag.get("mwp.podcast.all.episodes")});var l=Array.from(n.keys()),i=(0,o.useCallback)((function(e){if(e===Ht)a([]);else{var t=l.find((function(t){var a;return(null===(a=n.get(t))||void 0===a?void 0:a.key)===e}));t&&a([t])}}),[a,l,n]);if(!n.size||!l)return null;var s=r[0],u=Array.from(n.entries()).filter((function(e){return null==t?void 0:t.some((function(t){return t.field===e[0].field&&t.operator===e[0].operator}))}));return u.length>0&&(s=u[0][1]),c().createElement(Xt.A,{options:r,onSelect:function(e){return i(e)},selected:s,variant:"balladBold",semanticColor:"textBase",heading:x.ag.get("drop_down.filter_by")})},Vt=function(){var e=(0,o.useContext)(Pt),t=e.sortState,a=e.setSortState,n=new Map([[vt,{key:"newest-to-oldest",value:x.ag.get("shows.sort.newest-to-oldest")}],[bt,{key:"oldest-to-newest",value:x.ag.get("shows.sort.oldest-to-newest")}],[kt,{key:"longest-to-shortest",value:x.ag.get("shows.sort.longest-to-shortest")}],[ht,{key:"shortest-to-longest",value:x.ag.get("shows.sort.shortest-to-longest")}]]),r=Array.from(n.values()),l=Array.from(n.keys()),i=(0,o.useCallback)((function(e){var t=l.find((function(t){var a;return(null===(a=n.get(t))||void 0===a?void 0:a.key)===e}));t&&a(t)}),[l,n,a]);if(!n.size||!t)return null;var s=Array.from(n.keys()).find((function(e){return e.field===t.field&&e.order===t.order})),u=n.get(s);return c().createElement(Xt.A,{options:r,onSelect:function(e){return i(e)},selected:u,heading:x.ag.get("drop_down.sort_by")})},Qt=a(45063),Jt=function(e){var t,a,n,l=e.metadata,s=e.showId,g=l.uri,y=l.coverArt,p=l.name,f=l.trailer,v=l.topics,b=l.description,k=l.htmlDescription,h=l.podcastType,C=l.publisherName,S=(0,E.o)(),P=(0,m.W6)(d.Cz),w=(0,m.W6)(d.iY),N=!(0,fe.k)(),A=(0,lt.g)(),O=(0,Ee.Z)(g),I=i()(O,2),U=I[0],z=I[1],L=(0,Q.zZ)().capabilities,M=L.canSort,j=L.canFilter,B=(0,o.useContext)(Pt).sortState,F=(0,o.useContext)(yt).sortState,G=(0,Q.zZ)(),_=(0,K.Z)((null===(t=y[0])||void 0===t?void 0:t.url)||null),Z=(0,V.n)({uri:g,metadata:(a={},r()(a,et.sb.SORTING_CRITERIA,G.getPlayerSort(B)),r()(a,et.sb.FILTERING_PREDICATE,G.getPlayerFilter(F)),a)},{featureIdentifier:"show"}).usePlayContextItem,W=Z({uri:(null==f?void 0:f.uri)||""}),X=W.isActive,Y=W.isPlaying,H=W.togglePlay,J=(0,o.useCallback)((function(){S({targetUri:g,intent:U?"unsave":"save",type:"click"}),z(!U)}),[S,g,U,z]),$=(0,o.useCallback)((function(){S({intent:"expand-description",type:"click"})}),[S]),ee=Mt(l),te=(0,Lt.s)(f,ee),re=(0,o.useCallback)((function(){null!=f&&f.uri&&(A?te():(S({targetUri:f.uri,intent:Y?"play":"pause",type:"click"}),H()))}),[te,A,Y,S,H,null==f?void 0:f.uri]),le=(0,$e.e)(),ie=le.isXSOnly,oe=le.isSMOnly,ce=ie||oe,ue=v.length>0,me=b||P&&k,pe=me||ue;return c().createElement("section",{className:Qt.Z.ShowPage},c().createElement(ct.$,null,x.ag.get("podcasts.show.seo.title",{name:p})),c().createElement(he.gF,{backgroundColor:_},c().createElement(Ce.W,null,c().createElement(Se.i,{text:p,dragUri:g,dragLabel:p})),c().createElement("div",{className:Qt.Z.imageContainer},c().createElement(Qe._,{menu:c().createElement(ot.M,{uri:g})},c().createElement(he.Oe,{loading:"eager",name:p,images:y,placeholderType:"show",shape:he.Kc.ROUNDED_CORNERS}))),c().createElement(he.sP,null,c().createElement(he.dy,{small:!0,uppercase:!0},"SHOW"===h?x.ag.get("type.show"):x.ag.get("type.podcast")),c().createElement(Qe._,{menu:c().createElement(ot.M,{uri:g})},c().createElement(he.xd,{dragUri:g,dragLabel:p},c().createElement("span",{"data-testid":"show-title"},p))),c().createElement(he.dy,{large:!ce,medium:ce,bold:!0},C))),c().createElement(de.o,{backgroundColor:_},c().createElement(de.F,null,c().createElement(ye.r,{key:"follow-button"},c().createElement(ge.e,{isFollowing:U,onClick:J,disabled:N})),c().createElement(R.y,{menu:c().createElement(ot.M,{uri:g})},c().createElement(D.z,{label:x.ag.get("more.label.context",p)})))),c().createElement("div",{className:Qt.Z.ShowContent},c().createElement("div",{className:Qt.Z.metadata},pe&&c().createElement(c().Fragment,null,c().createElement(u.Dy,{as:"h3",variant:"canon",semanticColor:"textBase",className:Qt.Z.sectionTitle},x.ag.get("artist.about")),me&&c().createElement(ae.o,{maxLines:4,content:(b||"").trim(),onExpanded:$,htmlContent:P&&k?k:void 0,LinkComponent:ne.Z}),ue&&c().createElement(se,{topics:v||[]})),c().createElement(nt,{showId:s,uri:g}),f&&c().createElement(Qe._,{menu:c().createElement(it.k,{uri:f.uri,showUri:g,sharingInfo:f.sharingInfo})},c().createElement(q,{label:x.ag.get("track-trailer"),className:Qt.Z.trailer,images:f.coverArt||[],title:f.name,duration:f.duration.milliseconds,moreButton:c().createElement(R.y,{menu:c().createElement(it.k,{uri:f.uri,sharingInfo:f.sharingInfo,showUri:g})},c().createElement(D.z,null)),onClick:re,isPlaying:Y,isActive:X,size:T.LARGE,contentRating:null===(n=f.contentRating)||void 0===n?void 0:n.label,enableEncoreWebMigration:w}))),c().createElement("div",{className:Qt.Z.episodes,"data-testid":"show-all-episode-list"},c().createElement("div",{className:Qt.Z.episodesHeader},j&&c().createElement("div",{className:Qt.Z.episodesFilter},c().createElement(Kt,null)),!j&&c().createElement(u.Dy,{as:"h3",variant:"canon",semanticColor:"textBase",className:Qt.Z.sectionTitle},x.ag.get("mwp.podcast.all.episodes")),M&&c().createElement("div",{className:Qt.Z.episodesSort},c().createElement(Vt,null))),c().createElement(Wt,{showMetadata:l,usePlayContextItem:Z})),c().createElement(Je.k,{copyrights:[]})))};const $t=c().memo((function(){var e=(0,s.UO)().showId,t="spotify:show:".concat(e),a=(0,m.W6)(d.uB),n=(0,tt.l)(t,a);return n?(0,J.l6)(n)?c().createElement(o.Suspense,{fallback:null},c().createElement(Ve,{metadata:n})):c().createElement(o.Suspense,{fallback:null},c().createElement(pt,{uri:n.uri},c().createElement(wt,{uri:n.uri,defaultSortParam:St(n.consumptionOrder)},c().createElement(Jt,{showId:e,metadata:n})))):c().createElement(rt.h,{hasError:!1,errorMessage:x.ag.get("error.not_found.title.podcast")})}))},95289:(e,t,a)=>{a.d(t,{A:()=>P});var n=a(59713),r=a.n(n),l=a(63038),i=a.n(l),o=a(67294),c=a.n(o),s=a(94184),u=a.n(s),m=a(28760),d=a(26115),g=a(74594),E=a(20246),y=(a(21249),a(62012)),p=a(6577),f=a(30005),v=a(36652),b=a(21691),k=a(28248),h=function(e){var t,a=e.heading,n=e.selected,r=e.onSelect,l=e.options,i=e.sortOrder;return i&&(i===k.kn.ASC||i===k.kn.SECONDARY_ASC?t=c().createElement(y.e,{iconSize:16}):i!==k.kn.DESC&&i!==k.kn.SECONDARY_DESC||(t=c().createElement(p.c,{iconSize:16}))),c().createElement(f.v,null,a?c().createElement(v.F,null,a):null,l.map((function(e){var a=e.key,l=e.value;return c().createElement(b.s,{role:"menuitemradio","aria-checked":a===n.key&&!t,key:a,onClick:function(){return r(a)},icon:a===n.key&&t},c().createElement(m.Dy,{variant:"mesto"},l))})))};const C="x-sortBox-sortDropdown",S="CbHJjxYxldG7uUPMYMaP";var P=function(e){var t=e.heading,a=e.options,n=e.selected,l=e.onSelect,o=e.isSelectionChanged,s=e.sortOrder,y=e.variant,p=void 0===y?"mesto":y,f=e.semanticColor,v=i()(a,1)[0];n||(n=v);var b=o?o(n):n!==v;return c().createElement(E.y,{menu:c().createElement(h,{selected:n,options:a,onSelect:l,sortOrder:s,heading:t})},(function(e,t,a){return c().createElement("button",{className:u()(C,r()({},S,b)),onClick:t,ref:a,type:"button"},c().createElement(m.Dy,{semanticColor:f,variant:p},n.value),e?c().createElement(d.q,{iconSize:16}):c().createElement(g.m,{iconSize:16}))}))}},94233:(e,t,a)=>{a.d(t,{k:()=>o});a(21249),a(74916),a(15306),a(92222);var n=a(67294),r=a.n(n),l=a(28760);const i="rTMkDBDp47Eo12ZEQv4U";var o=function(e){var t=e.copyrights,a=e.courtesyLine,n=(t||[]).map((function(e,t){var a,n=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");return a="C"===e.type?"©":"P"===e.type?"℗":"(".concat(e.type,")"),r().createElement(l.Dy,{as:"p",variant:"finale",key:t,dir:"auto"},"".concat(a," ").concat(n))}));return a&&n.unshift(r().createElement(l.Dy,{as:"p",variant:"finale",key:n.length,dir:"auto"},a)),r().createElement("div",{className:i},n)}},14535:(e,t,a)=>{a.d(t,{e:()=>g});var n=a(59713),r=a.n(n),l=a(67294),i=a.n(l),o=a(20657),c=a(94184),s=a.n(c);const u="aAr9nYtPsG7P2LRzciXc",m="fBTYgGyvIbHizHIj7AAX",d="oUzIIkcyBdRs7hrwbwIo";var g=i().memo((function(e){var t,a=e.isFollowing,n=e.onClick,l=e.disabled,c=void 0!==l&&l,g=e.buttonText,E=a?o.ag.get("following"):o.ag.get("follow");return i().createElement("button",{type:"button",className:s()(u,(t={},r()(t,m,a),r()(t,d,c),t)),onClick:n},g||E)}))}}]);
//# sourceMappingURL=xpui-routes-show.js.map