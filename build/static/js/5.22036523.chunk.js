(this["webpackJsonppaint-builder"]=this["webpackJsonppaint-builder"]||[]).push([[5],{1117:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(13),i=n(361),o=n(33),r=n(0),l=n.n(r),s=n(48),u=n.n(s),d=n(38),j=n(16),b=n(77),p=n(326),h=n(322),m=n(1065),O=n(324),f=n(1114),x=n(1104),g=n(1116),C=n(1069),y=n(1064),v=n(134),w=n(1089),I=n(421),_=n(1107),k=n(138),N=n(82),M=n(1077),L=n(1109),B=n(1075),D=n(1076),S=n(7),R=Object(o.c)(h.a).withConfig({displayName:"CreateProjectDialog__Button",componentId:"e1fbbf-0"})(p.b),z=Object(o.c)(_.a).withConfig({displayName:"CreateProjectDialog__Autocomplete",componentId:"e1fbbf-1"})(p.b),P=Object(o.c)(M.a).withConfig({displayName:"CreateProjectDialog__CustomDialogActions",componentId:"e1fbbf-2"})(["padding-right:24px;"]),A=Object(o.c)(C.a).withConfig({displayName:"CreateProjectDialog__NameField",componentId:"e1fbbf-3"})([".MuiInputBase-root{height:56px;}"]),F=function(e){var t=Object(r.useState)(null),n=Object(i.a)(t,2),o=n[0],l=n[1],s=Object(r.useState)(""),d=Object(i.a)(s,2),j=d[0],b=d[1],p=e.onContinue,h=e.onCancel,m=e.open,f=e.carMakeList,x=u.a.orderBy(Object(a.a)(f),["name","car_type"],["asc","asc"]);return Object(S.jsxs)(L.a,{"aria-labelledby":"project-select-title",open:m,children:[Object(S.jsx)(B.a,{id:"project-select-title",children:"Create a new paint"}),Object(S.jsx)(D.a,{dividers:!0,children:Object(S.jsxs)(O.a,{display:"flex",flexDirection:"column",children:[f&&f.length?Object(S.jsx)(z,{id:"car-make-select",options:x,groupBy:function(e){return e.car_type},getOptionLabel:function(e){return e.name},style:{width:500},mb:4,onChange:function(e,t){l(t)},renderInput:function(e){return Object(S.jsx)(C.a,Object(c.a)(Object(c.a)({},e),{},{label:"Select Vehicle",variant:"outlined"}))}}):Object(S.jsx)(S.Fragment,{}),Object(S.jsx)(A,{label:"Name",value:j,variant:"outlined",onChange:function(e){return b(e.target.value)}})]})}),Object(S.jsxs)(P,{children:[Object(S.jsx)(R,{onClick:h,color:"secondary",variant:"outlined",children:"Cancel"}),Object(S.jsx)(R,{onClick:function(){return p(o,j)},color:"primary",variant:"outlined",disabled:!o,children:"Continue"})]})]})},E=l.a.memo(F),V=n(444),J=n(43),W=n(64),T=n(71),U=Object(o.c)(h.a).withConfig({displayName:"project__Button",componentId:"tmuuxz-0"})(p.b),q=Object(o.c)(_.a).withConfig({displayName:"project__Autocomplete",componentId:"tmuuxz-1"})(p.b),G=Object(o.c)(m.a).withConfig({displayName:"project__CustomFormControl",componentId:"tmuuxz-2"})([".MuiInputBase-root{height:38px;margin-right:10px;}"]),H=Object(o.c)(q).withConfig({displayName:"project__CustomAutocomplete",componentId:"tmuuxz-3"})([".MuiInputLabel-outlined{transform:translate(14px,12px) scale(1);&.MuiInputLabel-shrink{transform:translate(14px,-6px) scale(0.75);}}.MuiInputBase-root{padding-top:0;padding-bottom:0;}"]),K=Object(o.c)(I.a).withConfig({displayName:"project__CustomInfiniteScroll",componentId:"tmuuxz-4"})(["&.infinite-scroll-component{overflow:hidden !important;}"]),Q=o.c.img.withConfig({displayName:"project__CustomImg",componentId:"tmuuxz-5"})(["width:100%;height:100%;position:relative;object-fit:contain;"]),X=Object(o.c)(O.a).withConfig({displayName:"project__Wrapper",componentId:"tmuuxz-6"})(["background-color:#444;border-radius:10px;"]),Y=Object(o.c)(O.a).withConfig({displayName:"project__ItemWrapper",componentId:"tmuuxz-7"})(["border:1px solid grey;cursor:pointer;"]);t.default=function(){var e=Object(d.d)(),t=Object(j.f)(),n=Object(d.e)((function(e){return e.authReducer.user})),o=Object(d.e)((function(e){return e.carMakeReducer.list})),l=Object(d.e)((function(e){return e.schemeReducer.list})),s=Object(d.e)((function(e){return e.schemeReducer.current})),p=Object(d.e)((function(e){return e.schemeReducer.loading})),h=Object(d.e)((function(e){return e.carMakeReducer.loading})),m=Object(r.useState)(),I=Object(i.a)(m,2),_=I[0],M=I[1],L=Object(r.useState)(15),B=Object(i.a)(L,2),D=B[0],R=B[1],z=Object(r.useState)(""),P=Object(i.a)(z,2),A=P[0],F=P[1],q=Object(r.useState)(null),Z=Object(i.a)(q,2),$=Z[0],ee=Z[1],te=Object(r.useState)(1),ne=Object(i.a)(te,2),ce=ne[0],ae=ne[1],ie=Object(r.useMemo)((function(){return u.a.orderBy(Object(a.a)(o),["name","car_type"],["asc","asc"])}),[o]),oe=Object(r.useMemo)((function(){return u.a.orderBy(l.filter((function(e){return(e.name.toLowerCase().includes(A.toLowerCase())||e.carMake.name.toLowerCase().includes(A.toLowerCase()))&&(!$||$.id===e.carMake.id)})),1===ce?["name"]:2===ce?["carMake.name"]:["date_modified"],1===ce||2===ce?["asc"]:["desc"])}),[l,A,$,ce]);Object(r.useEffect)((function(){n&&(l.length||e(Object(W.g)(n.id)),o.length||e(Object(T.b)()))}),[n]),Object(r.useEffect)((function(){s&&t.push("/scheme/".concat(s.id))}),[s]);return Object(S.jsx)(O.a,{width:"100%",height:"100%",display:"flex",flexDirection:"column",children:p||h||!l||!o?Object(S.jsx)(N.a,{}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(X,{display:"flex",flexDirection:"column",justifyContent:"flex-start",m:2,p:5,height:"calc(100% - 16px)",children:[Object(S.jsxs)(O.a,{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",mb:3,children:[Object(S.jsx)(V.a,{value:A,onChange:function(e){return F(e)}}),Object(S.jsx)(U,{onClick:function(){M("CreateProjectDialog")},color:"default",variant:"outlined",startIcon:Object(S.jsx)(w.a,{}),children:"New"})]}),Object(S.jsxs)(O.a,{display:"flex",justifyContent:"flex-start",alignItems:"center",width:"100%",mb:3,children:[Object(S.jsxs)(G,{variant:"outlined",children:[Object(S.jsx)(f.a,{id:"sort-label",children:"Sort By"}),Object(S.jsxs)(x.a,{labelId:"sort-label",value:ce,onChange:function(e){return ae(e.target.value)},label:"Sort By",children:[Object(S.jsx)(g.a,{value:1,children:"Project Name"}),Object(S.jsx)(g.a,{value:2,children:"Vehicle Name"}),Object(S.jsx)(g.a,{value:3,children:"Last Modified"})]})]}),o&&o.length?Object(S.jsx)(H,{id:"car-make-select",options:ie,groupBy:function(e){return e.car_type},getOptionLabel:function(e){return e.name},style:{width:500},onChange:function(e,t){ee(t)},renderInput:function(e){return Object(S.jsx)(C.a,Object(c.a)(Object(c.a)({},e),{},{label:"Filter By Vehicle",variant:"outlined"}))}}):Object(S.jsx)(S.Fragment,{})]}),Object(S.jsx)(O.a,{id:"scheme-list-content",overflow:"auto",position:"relative",children:Object(S.jsx)(K,{dataLength:D,next:function(){R(D+15)},hasMore:D<oe.length,loader:Object(S.jsx)(k.a,{}),scrollableTarget:"scheme-list-content",children:Object(S.jsx)(y.a,{container:!0,spacing:4,children:oe.slice(0,D).map((function(t){return Object(S.jsx)(y.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:3,onClick:function(){return n=t.id,console.log("Opening scheme: ",n),e(Object(W.f)(n)),void M(null);var n},children:Object(S.jsxs)(Y,{display:"flex",flexDirection:"column",children:[Object(S.jsx)(Q,{src:(n=t.id,"".concat(b.a.assetsURL,"/scheme_thumbnails/").concat(n,".png")),alt:t.name}),Object(S.jsxs)(O.a,{display:"flex",flexDirection:"column",p:4,children:[Object(S.jsx)(v.a,{variant:"body1",children:t.name}),Object(S.jsxs)(v.a,{variant:"body2",children:["Edited"," ",Object(J.d)(t.date_modified)]}),Object(S.jsx)(v.a,{variant:"body2",children:t.carMake.name})]})]})},t.id);var n}))})})})]}),Object(S.jsx)(E,{carMakeList:o,open:"CreateProjectDialog"===_,onContinue:function(t,c){return function(t,c){e(Object(W.d)(t,c,n.id)),M(null)}(t,c)},onCancel:function(){return M(null)}})]})})}},444:function(e,t,n){"use strict";var c=n(19),a=(n(0),n(1067)),i=n(1111),o=n(576),r=n.n(o),l=n(7),s=Object(a.a)((function(e){return{search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:"transparent","&:hover":{backgroundColor:"transparent"},border:"1px solid #8A8A8A",width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"}}}));t.a=function(e){var t=e.value,n=e.onChange,c=s();return Object(l.jsxs)("div",{className:c.search,children:[Object(l.jsx)("div",{className:c.searchIcon,children:Object(l.jsx)(r.a,{})}),Object(l.jsx)(i.a,{placeholder:"Search",classes:{root:c.inputRoot,input:c.inputInput},value:t,inputProps:{"aria-label":"search"},onChange:function(e){n(e.target.value)}})]})}}}]);
//# sourceMappingURL=5.22036523.chunk.js.map