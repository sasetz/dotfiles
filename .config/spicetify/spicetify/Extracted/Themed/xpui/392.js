"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[392],{42811:(e,n,i)=>{i.d(n,{Hr:()=>t,qo:()=>l,GJ:()=>d,B$:()=>r,pf:()=>o,X7:()=>m});i(85827),i(41539),i(68309),i(21249),i(91058);var a=i(7073),t=function(e){return e?e.reduce((function(e,n){return e.push(n.releases.items[0]),e}),[]):[]},l=function(e){return"spotify:artist:".concat(e)},d=function(e){return"spotify:app:artist:".concat(e)},r=function(e,n,i){var a,t;return{artists:[{uri:n,name:i}],images:(null===(a=e.coverArt)||void 0===a?void 0:a.sources)||[],name:e.name,uri:e.uri,year:null===(t=e.date)||void 0===t?void 0:t.year,type:e.type,sharingInfo:e.sharingInfo}},o=function(e){var n,i,a;return{artists:e.artists.items.map((function(e){return{uri:e.uri,name:e.profile.name}})),images:(null===(n=e.coverArt)||void 0===n?void 0:n.sources)||[],name:e.name,uri:e.uri,year:null===(i=e.date)||void 0===i?void 0:i.year,type:e.type,sharingInfo:null!==(a=e.sharingInfo)&&void 0!==a?a:null}},m=function(e,n){var i,t=e.track,l=t.uri,d=t.name,r=t.playcount,o=t.duration.totalMilliseconds,m=t.contentRating,u=t.artists.items,s=t.album,c=s.coverArt,k=s.uri,v=t.playability.playable;return{uri:l,contextUri:n,totalMilliseconds:o,name:d,contentRating:(null==m?void 0:m.label)||a.KS.None,isPlayable:v,playcount:parseInt(r||"0",10),artists:u.map((function(e){return{uri:e.uri,name:e.profile.name}})),imageUrl:null!=c&&null!==(i=c.sources)&&void 0!==i&&i.length?c.sources[0].url:"",albumUri:k}}},90110:(e,n,i)=>{i.d(n,{q:()=>T,o:()=>x});var a=i(63038),t=i.n(a),l=i(59713),d=i.n(l),r=i(67294),o=i.n(r),m=i(94184),u=i.n(m),s=i(69518),c=i.n(s),k=i(50020),v=i(96895),N=i(20657),S=i(83692),g=i(24656),p=i(69010),b=i(80946),f=i(6116),y=i(38209),F=i(40080);const h="l_MW0G9qeeCKlVJwBykT",E="x-downloadButton-DownloadButton",w="x-downloadButton-button",D="_APVWqivXc4YqgsnpFkP",C="VmwiDoU6RpqyzK_n7XRO",A="rEx3EYgBzS8SoY7dmC6x",I="z3zia5snl987x676qe5w";var T;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(T||(T={}));var V=function(e){var n=e.currentTarget;e.detail>0&&n&&n.blur()},x=function(e){var n=e.uri,i=e.isFollowing,a=e.onFollow,l=e.size,m=void 0===l?T.sm:l,s=e.className,x=e.onClick,P=void 0===x?function(){}:x,R=d()({},"--size","".concat(m,"px")),L=(0,r.useContext)(g.I),U=L.useDownloading,O=L.useDownloadCapability,M=(0,r.useState)(!1),_=t()(M,2),z=_[0],W=_[1],q=O(c().isEpisode(n)),B=t()(q,2),Y=B[0],Q=B[1],H=(0,r.useState)(!1),X=t()(H,2),Z=X[0],G=X[1],K=U(n),$=K.currentAvailability,j=K.progress,J=K.beginDownload,ee=K.clearDownload;!function(e,n){var i=(0,y.r)(),a=(0,r.useRef)(!1);(0,r.useEffect)((function(){e===p.V8.DOWNLOADING&&!1===a.current&&(a.current=!0,i.say(N.ag.get("download.downloading",n.totalItems)))}),[i,e,n]);var t=(0,F.D)(e);(0,r.useEffect)((function(){t===p.V8.DOWNLOADING&&e===p.V8.YES&&(a.current=!1,i.say(N.ag.get("download.complete")))}),[i,t,e])}($,j);var ne=(0,r.useCallback)((function(e){Q===p.v$.DOWNLOADING_NOT_ALLOWED?G(!0):!1===i?(a(),W(!0)):J(),P(e),V(e)}),[J,Q,i,P,a]),ie=(0,r.useCallback)((function(e){ee(),V(e),P(e)}),[ee,P]);return(0,r.useEffect)((function(){!0===z&&!0===i&&(J(),W(!1))}),[i,z,J]),Y===p.PQ.NO_DOWNLOAD_CAPABILITY?null:Q===p.v$.DOWNLOADING_NOT_ALLOWED?o().createElement("div",{className:E},o().createElement(S.w,{label:N.ag.get("download.download")},o().createElement("button",{className:u()(w,s),role:"switch",onClick:ne,"aria-label":N.ag.get("download.download"),"aria-checked":!1},o().createElement(k.a,{iconSize:m}))),Z&&o().createElement("div",{className:I},o().createElement(b.E,{withTopLeftPointer:!0,horizontal:!0,onClose:function(){G(!1)}},N.ag.get("download.upsell")))):$===p.V8.YES?o().createElement(S.w,{label:N.ag.get("download.remove")},o().createElement("button",{className:u()(w,s,D),role:"switch",onClick:ie,"aria-label":N.ag.get("download.remove"),"aria-checked":!0},o().createElement(v.C,{iconSize:m}))):$===p.V8.NO?o().createElement(S.w,{label:N.ag.get("download.download")},o().createElement("button",{className:u()(w,s),role:"switch",onClick:ne,"aria-label":N.ag.get("download.download"),"aria-checked":!1},o().createElement(k.a,{iconSize:m}))):o().createElement("div",{className:u()(C,s),role:"switch","aria-checked":!0},o().createElement(S.w,{label:N.ag.get("download.cancel")},o().createElement("button",{style:R,className:u()(w,h,s),onClick:ie,"aria-label":N.ag.get("download.cancel")})),o().createElement("span",{style:R,className:u()(A,h)},o().createElement(f.e,{"aria-valuetext":N.ag.get("progress.downloading-tracks"),percentage:j.percentage,size:m})))}},13768:(e,n,i)=>{i.d(n,{i:()=>c});i(68309),i(83710),i(41539),i(39714);var a=i(67294),t=i.n(a),l=i(20657),d=i(18261),r=i(48528),o=i(4232),m=i(36590),u=i(8498),s=i(27298),c=t().memo((function(e){var n=e.images,i=e.name,a=e.uri,c=e.type,k=e.year,v=e.sharingInfo,N=e.latest,S=e.showType,g=e.onClick,p=e.delegatePlayback,b=void 0!==p&&p,f=e.isPlaying,y=e.onPlay,F=e.index,h=e.navigationUrl,E=N?l.ag.get("artist.latest-release"):k;return t().createElement(d._,{menu:t().createElement(o.Y,{uri:a,sharingInfo:v})},t().createElement(m.C,{onClick:g,featureIdentifier:"album",headerText:i,uri:a,index:F,delegatePlayback:b,isPlaying:f,onPlay:y,navigationUrl:h,renderCardImage:function(){return t().createElement(u.x,{images:n})},renderSubHeaderContent:function(){return t().createElement(t().Fragment,null,E&&t().createElement("time",{dateTime:(k||"").toString()},E),S&&t().createElement("span",{className:s.Z.type},(0,r.R)(c)))}}))}))},70369:(e,n,i)=>{i.d(n,{$:()=>a.$});var a=i(22578)},77392:(e,n,i)=>{i.r(n),i.d(n,{AlbumTrackList:()=>ge,default:()=>De});var a=i(67154),t=i.n(a),l=i(48926),d=i.n(l),r=i(63038),o=i.n(r),m=i(87757),u=i.n(m),s=(i(91058),i(66992),i(41539),i(78783),i(33948),i(41637),i(74916),i(64765),i(47042),i(68309),i(21249),i(5212),i(85827),i(15306),i(67294)),c=i.n(s),k=i(16528),v=i(28760),N=i(26115),S=i(74594),g=i(42811),p=i(90110),b=i(95661),f=i(13768),y=i(4232),F=i(70369),h=i(42273),E=i(59482),w=i(72907),D=i(1663),C=i(6479),A=i.n(C),I=i(20657),T=i(11414),V=i(18937),x=i(74380),P=i(6489),R=i(91931),L=i(38894),U=function(e){var n,i=e.children,a=e.content,t=e.onIntercept,l=void 0===t?function(){}:t,d=(0,L.g)();try{n=c().Children.only(i)}catch(e){return c().createElement(c().Fragment,null,i)}return d?c().createElement(R.Nt,{trigger:"click",action:"open",placement:"bottom",offset:[0,20],content:a},c().cloneElement(n,{onClick:l})):c().createElement(c().Fragment,null,i)},O=(i(82526),i(41817),i(65858)),M=i(16229),_=i(1447),z=i(42922),W=i(70108),q=i(56802);const B={container:"WHINADihyTCx2VFxwY8X"};var Y=function(e){var n=e.title,i=e.description,a=(0,O.I0)(),t=(0,_.qT)(),l=(0,q.o)();return(0,s.useEffect)((function(){l({intent:"open-upsell",type:"view"})}),[l]),c().createElement(R.yv,null,c().createElement("div",{className:B.container},c().createElement(v.Dy,{as:"p",className:B.title,variant:"cello"},n),c().createElement(v.Dy,{as:"p",className:B.description,variant:"mesto"},i),c().createElement("div",{className:B.buttonContainer},c().createElement(M.Y,{className:B.secondaryButton,version:"tertiary",onClick:function(){l({intent:"close-upsell",type:"click"}),t({type:"close"})}},I.ag.get("action-trigger.button.not-now")),c().createElement(M.Y,{className:B.primaryButton,version:"primary",onClick:function(){l({intent:"login",type:"click"}),a((0,W.sX)())}},I.ag.get("login")))))},Q=function(e){return c().createElement(z.ZP,{value:"tooltip-with-cta"},c().createElement(Y,e))},H=["uri"],X=function(e){var n=e.uri,i=A()(e,H),a=(0,x.j5)();return c().createElement(U,{content:c().createElement(Q,{title:I.ag.get("action-trigger.save-library"),description:I.ag.get("action-trigger.save-album")}),onIntercept:function(){return a.storeAction(V.wH,{operation:P.pT.ADD,uris:[n]})}},c().createElement(T.H,i))},Z=i(55120),G=i(19480),K=i(80322),$=i(4236),j=i(30947),J=i(55911),ee=i(32626),ne=i(20246),ie=i(94233),ae=i(53646),te=i(98984),le=i(4383),de=i(84242),re=i(7073),oe=i(319),me=i.n(oe),ue=(i(92222),{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAlbumMetadata"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumCoverArt"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumDiscs"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumTracksMetadata"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumReleases"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}},{kind:"Field",name:{kind:"Name",value:"precision"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"label"}},{kind:"Field",name:{kind:"Name",value:"copyright"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"text"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"courtesyLine"}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"shareId"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"moreAlbumsByArtist"}}]}}]}}].concat(me()([{kind:"FragmentDefinition",name:{kind:"Name",value:"albumArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}}]}}]}}]}}]}}]),me()([{kind:"FragmentDefinition",name:{kind:"Name",value:"albumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]),me()([{kind:"FragmentDefinition",name:{kind:"Name",value:"albumDiscs"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"discs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"number"}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}}]}}]}}]}}]}}]),me()([{kind:"FragmentDefinition",name:{kind:"Name",value:"albumTracksMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}}]}}]}}]}}]}}]),me()([{kind:"FragmentDefinition",name:{kind:"Name",value:"albumReleases"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]),me()([{kind:"FragmentDefinition",name:{kind:"Name",value:"moreAlbumsByArtist"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"moreAlbumsByArtist"},name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"popularReleases"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareId"}},{kind:"Field",name:{kind:"Name",value:"shareUrl"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]))}),se=([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAlbumContents"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albumTrack"}}]}}]}}]}}]}}].concat(me()([{kind:"FragmentDefinition",name:{kind:"Name",value:"albumTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ContextTrack"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"albumTrackArtists"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"discNumber"}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"shareId"}}]}}]}}]}}]),me()([{kind:"FragmentDefinition",name:{kind:"Name",value:"albumTrackArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"role"}},{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}])),i(43290),i(34553),i(28248)),ce=i(3775),ke=i(29064),ve=i(9554),Ne={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumTracks"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"discNumber"}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"relinkingInformation"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"isRelinked"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]};function Se(e){return e.total_count>=2&&e.total_count<=10}var ge=c().memo((function(e){var n=e.ariaLabel,i=e.nrTracks,a=e.discs,t=e.albumUri,l=e.highlightUri,d=e.scrollToIndex,r=e.usePlayContextItem,m=e.hasHeaderRow,u=void 0===m||m,k=(0,ke.ZO)()===ve.W.Web,v=(0,s.useContext)(ce.Ax).request,N=(0,s.useRef)(null),S=(0,s.useRef)(!1),g=(0,s.useState)(null),p=o()(g,2),b=p[0],f=p[1];(0,s.useEffect)((function(){N.current&&(b?N.current.scrollToIndex(b):d&&N.current.scrollToIndex(d))}),[b,d]);var y=(0,s.useMemo)((function(){return function(e){return Se(e)?e.items.reduce((function(e,n){return e.push(n.number-1),e.concat(Array(n.total_tracks).fill(n.number))}),[]):null}(a)}),[a]),F=(0,s.useCallback)((function(e,n){return v(Ne,{uri:t,offset:null!==y?e-y[e]:e,limit:n}).then((function(e){var n,i;if(l&&!b){var t,d,r,o=null==e||null===(t=e.data)||void 0===t||null===(d=t.album)||void 0===d||null===(r=d.tracks.items)||void 0===r?void 0:r.findIndex((function(e){return e.track.uri===l}));f(o||-1)}return function(e,n){if(!Se(n)||!e)return e;var i=0;return e.reduce((function(e,n){return(n.track.trackNumber<i||1===n.track.trackNumber)&&e.push({discNumber:n.track.discNumber}),e.push(n),i=n.track.trackNumber,e}),[])}(null==e||null===(n=e.data)||void 0===n||null===(i=n.album)||void 0===i?void 0:i.tracks.items,a)||[]}))}),[v,t,y,l,b,a]),h=(0,s.useCallback)((function(e,n){var i,a,d;if("discNumber"in e)return c().createElement(se.UT,{key:n+e.discNumber,discNumber:e.discNumber});var o,m=e,u=m.uid,s=m.track;o=null!==(i=s.relinkingInformation)&&void 0!==i&&i.isRelinked?s.relinkingInformation.uri:s.uri;var v=s.playcount?parseInt(s.playcount,10):0,N=!(S.current||!l||l!==s.uri&&l!==(null===(a=s.relinkingInformation)||void 0===a?void 0:a.uri));return N&&(S.current=!0),c().createElement(se.Ym,{key:n+s.uri,index:n,trackNumber:s.trackNumber,contextUri:t,uri:o,uid:u,duration_ms:s.duration.totalMilliseconds,name:s.name,isPlayable:s.playability.playable,artists:s.artists.items,contentRating:null===(d=s.contentRating)||void 0===d?void 0:d.label,playcount:v,shouldRenderPlayCount:!k,shouldHighLight:N,usePlayContextItem:r})}),[l,t,k,r]),E=(0,s.useMemo)((function(){return function(e){return e?[se.QD.INDEX,se.QD.TITLE,se.QD.DURATION]:[se.QD.INDEX,se.QD.TITLE,se.QD.PLAYS,se.QD.DURATION]}(k)}),[k]),w=(0,s.useCallback)((function(e){return"track"in e?e.track.uri:""}),[]);return c().createElement(z.ZP,{value:"album-tracklist"},c().createElement(se.Pv,{key:t,ariaLabel:n,hasHeaderRow:u,rowPlaceholder:se.uD,columns:E,renderRow:h,resolveUri:w,nrTracks:Se(a)?a.total_count+i:i,fetchTracks:F,limit:300,outerRef:N}))})),pe=i(69518),be=i.n(pe),fe=i(30005),ye=i(21691),Fe=function(e){var n=e.releases;return c().createElement(fe.v,null,n.map((function(e){return c().createElement(ye.s,{key:e.uri,role:"menuitem",to:be().from(e.uri).toURLPath(!0)},e.name)})))};const he={album:"n8Bz0c0v17whD3KfMdOk",albumWindowedMessage:"zddjxV2lX9ukNM5QXloA",albumWindowedMessageHeader:"lVqlPjQLuQhK2flsxB78",albumWindowedMessageDescription:"O_EguRjsZ4uI1hHamkOA",moreAlbumsByArtist:"jcaQQxoVnuuhtVwDJU1R",releasesDropdown:"fLS8v3_EfBadEerbGVoR",footer:"in4OjUTflcsoj9RUpf05"};var Ee=function(e){var n,i,a,l,r,m,D,C,A,V,x,P,R,L=e.uri,U=e.album,O=(0,k.k6)(),M=(0,q.o)(),_=(0,$.k)(),z=null===(n=U.moreAlbumsByArtist)||void 0===n||null===(i=n.items[0])||void 0===i||null===(a=i.discography)||void 0===a||null===(l=a.popularReleases)||void 0===l?void 0:l.items,W=(0,le.Z)(L),B=o()(W,2),Y=B[0],Q=B[1],H=parseInt(new URLSearchParams((0,k.TH)().search).get("index")||"0",10),te=(0,K.Y)(L),oe=(0,de.n)({uri:te},{featureIdentifier:"album"}),me=oe.usePlayContextItem,ue=oe.togglePlay,se=oe.isPlaying,ce=(0,s.useCallback)(d()(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M({targetUri:L,intent:Y?"unsave":"save",type:"click"}),e.prev=1,e.next=4,Q(!Y);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])}))),[M,L,Y,Q]),ke=(0,s.useCallback)((function(){return new URLSearchParams(O.location.search.slice(1)).get("highlight")||""}),[O.location.search]),ve=U.uri,Ne=U.name,Se=U.type,pe=null===(r=U.date)||void 0===r?void 0:r.isoString,be=U.tracks.totalCount,fe=((null===(m=U.coverArt)||void 0===m?void 0:m.sources)||[]).map((function(e){return{url:e.url,width:e.width||void 0,height:e.height||void 0}})),ye=null===(D=U.coverArt)||void 0===D||null===(C=D.extractedColors)||void 0===C?void 0:C.colorRaw.hex,Ee=U.artists.items.map((function(e){var n;return{name:e.profile.name,images:((null===(n=e.visuals.avatarImage)||void 0===n?void 0:n.sources)||[]).map((function(e){return{url:e.url,width:e.width||void 0,height:e.height||void 0}})),uri:e.uri,id:e.uri}})),we=U.tracks.items.some((function(e){return e.track.playability.playable})),De=U.playability.reason===re.Ku.CatalogueRestricted,Ce=(0,s.useMemo)((function(){return{total_count:U.discs.totalCount,items:U.discs.items.map((function(e){return{number:e.number,total_tracks:e.tracks.totalCount}}))}}),[U.discs]),Ae=U.copyright.items,Ie=U.courtesyLine,Te=U.tracks.items.reduce((function(e,n){return e+n.track.duration.totalMilliseconds}),0),Ve=U.tracks.items.length>0?Te/U.tracks.items.length*U.tracks.totalCount:0,xe=U.tracks.items.length<U.tracks.totalCount,Pe=ke(),Re=_;return(0,ae.Y5)(ye||null),c().createElement("section",{className:he.album,"data-testid":"album-page"},c().createElement(F.$,null,I.ag.get("album.page-title",U.name)),c().createElement(h.gF,{backgroundColor:ye},c().createElement(E.W,null,c().createElement(Z.$,{size:J.qE.sm,onClick:function(){return ue()},disabled:!we,isPlaying:se,uri:L}),c().createElement(w.i,{text:Ne,dragUri:L,dragLabel:Ne})),c().createElement(ee._P,{menu:c().createElement(y.Y,{uri:U.uri,artistUri:null==Ee||null===(A=Ee[0])||void 0===A?void 0:A.uri,sharingInfo:U.sharingInfo})},c().createElement(h.Oz,{dragUri:ve,images:fe,name:Ne,placeholderType:"album"})),c().createElement(h.sP,null,c().createElement(h.dy,{small:!0,uppercase:!0},function(e){switch(e){case re.VZ.Single:return I.ag.get("single");case re.VZ.Ep:return I.ag.get("ep");case re.VZ.Compilation:return I.ag.get("compilation");case re.VZ.Album:default:return I.ag.get("album")}}(Se)),c().createElement(ee._P,{menu:c().createElement(y.Y,{uri:U.uri,artistUri:null==Ee||null===(V=Ee[0])||void 0===V?void 0:V.uri,sharingInfo:U.sharingInfo})},c().createElement(h.xd,{dragUri:U.uri,dragLabel:U.name},Ne)),c().createElement(h.QS,{creators:Ee,releaseDate:pe,totalTracks:be,durationMilliseconds:Ve,isEstimatedDuration:xe}))),c().createElement(j.o,{backgroundColor:ye},c().createElement(j.F,null,c().createElement(Z.$,{onClick:function(){return ue()},disabled:!we,isPlaying:se,size:J.qE.lg,uri:L}),c().createElement(X,{isAdded:!!Y,onClick:ce,disabled:!_,size:T.q.md,uri:L}),Re?c().createElement(p.o,{uri:L,isFollowing:!!Y,onFollow:ce,size:p.q.md}):null,c().createElement(ne.y,{menu:c().createElement(y.Y,{uri:U.uri,artistUri:null==Ee||null===(x=Ee[0])||void 0===x?void 0:x.uri,sharingInfo:U.sharingInfo})},c().createElement(b.z,{label:I.ag.get("more.label.context",Ne)})))),De?c().createElement("div",{className:he.albumWindowedMessage},c().createElement(v.Dy,{as:"h2",variant:"cello",className:he.albumWindowedMessageHeader},I.ag.get("windowed.product-album-header")),c().createElement("div",{className:he.albumWindowedMessageDescription},I.ag.get("windowed.product-album-description"))):null,c().createElement("div",{className:"contentSpacing"},c().createElement(ge,{ariaLabel:Ne,nrTracks:be,discs:Ce,albumUri:ve,highlightUri:Pe,scrollToIndex:H,usePlayContextItem:me}),c().createElement("div",{className:he.footer},c().createElement(ie.k,{copyrights:Ae,courtesyLine:Ie}),U.releases.items.length>0&&c().createElement(ee.xV,{menu:c().createElement(Fe,{releases:U.releases.items})},(function(e,n,i){return c().createElement("button",{ref:i,className:he.releasesDropdown,type:"button",onClick:n},c().createElement(v.Dy,{variant:"mesto"},I.ag.get("album-page.more-releases",U.releases.items.length)),e?c().createElement(N.q,{className:he.chevron,iconSize:16}):c().createElement(S.m,{className:he.chevron,iconSize:16}))})))),(null==z?void 0:z.length)>0&&c().createElement("div",{className:"contentSpacing"},c().createElement(G.P,{className:he.moreAlbumsByArtist,title:I.ag.get("album-page.more-by-artist",null==Ee||null===(P=Ee[0])||void 0===P?void 0:P.name),total:z.length,seeAllUri:"".concat(null==Ee||null===(R=Ee[0])||void 0===R?void 0:R.uri.replace("artist","app:artist"),":discography"),seeAllLabel:I.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0},z.map((function(e,n){var i,a,l,d,r;return c().createElement(f.i,t()({index:n,key:null===(i=e.releases)||void 0===i||null===(a=i.items)||void 0===a||null===(l=a[0])||void 0===l?void 0:l.uri},(0,g.B$)(e.releases.items[0],null==Ee||null===(d=Ee[0])||void 0===d?void 0:d.uri,null==Ee||null===(r=Ee[0])||void 0===r?void 0:r.name)))})))))},we=c().memo((function(){var e,n,i=(0,k.UO)().albumId,a="spotify:album:".concat(i),t=(e={uri:a},n={cacheTime:15*te.y},(0,te.a)(ue,e,n)),l=t.loading,d=t.error,r=t.data;return l||null==r||!r.album?c().createElement(D.h,{hasError:null!==d,errorMessage:I.ag.get("error.not_found.title.album")}):c().createElement(Ee,{uri:a,album:r.album})}));const De=we},38894:(e,n,i)=>{i.d(n,{g:()=>l});var a=i(65858),t=i(29255),l=function(){return(0,a.v9)(t.Gg).isAnonymous}},94233:(e,n,i)=>{i.d(n,{k:()=>r});i(21249),i(74916),i(15306),i(92222);var a=i(67294),t=i.n(a),l=i(28760);const d="rTMkDBDp47Eo12ZEQv4U";var r=function(e){var n=e.copyrights,i=e.courtesyLine,a=(n||[]).map((function(e,n){var i,a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");return i="C"===e.type?"©":"P"===e.type?"℗":"(".concat(e.type,")"),t().createElement(l.Dy,{as:"p",variant:"finale",key:n,dir:"auto"},"".concat(i," ").concat(a))}));return i&&a.unshift(t().createElement(l.Dy,{as:"p",variant:"finale",key:a.length,dir:"auto"},i)),t().createElement("div",{className:d},a)}},40080:(e,n,i)=>{i.d(n,{D:()=>t});var a=i(67294);function t(e){var n=(0,a.useRef)();return(0,a.useEffect)((function(){n.current=e}),[e]),n.current}},48528:(e,n,i)=>{i.d(n,{R:()=>l});var a=i(20657),t=i(15066);function l(e){switch(e){case t.n.SINGLE:return a.ag.get("single");case t.n.EP:return a.ag.get("ep");case t.n.COMPILATION:return a.ag.get("compilation");case t.n.ALBUM:default:return a.ag.get("album")}}}}]);
//# sourceMappingURL=392.js.map