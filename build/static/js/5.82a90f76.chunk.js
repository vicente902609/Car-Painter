(this["webpackJsonppaint-builder"]=this["webpackJsonppaint-builder"]||[]).push([[5],{1100:function(e,t,n){"use strict";n.r(t);var c=n(359),r=n(0),o=n(36),i=n(15),a=n(321),l=n(82),u=n(33),j=n(323),d=n(319),s=n(1103),b=n(1074),f=n(1075),O=n(6),p=Object(u.c)(d.a).withConfig({displayName:"ProjectSelectDialog__Button",componentId:"zubwo6-0"})(j.b),h=function(e){var t=e.onCreateProject,n=e.onOpenProject,c=e.open;return Object(O.jsxs)(s.a,{"aria-labelledby":"project-select-title",open:c,children:[Object(O.jsx)(b.a,{id:"project-select-title",children:"Paint Builder"}),Object(O.jsx)(f.a,{dividers:!0,children:Object(O.jsxs)(a.a,{display:"flex",flexDirection:"column",children:[Object(O.jsx)(p,{onClick:t,color:"default",variant:"outlined",mb:1,children:"CREATE A NEW PAINT"}),Object(O.jsx)(p,{onClick:n,color:"default",variant:"outlined",children:"OPEN A PAINT BUILDER PROJECT"})]})})]})},g=n(130),x=n(1076),m=n(369),C=Object(u.c)(d.a).withConfig({displayName:"OpenProjectDialog__Button",componentId:"nso4l9-0"})(j.b),v=Object(u.c)(a.a).withConfig({displayName:"OpenProjectDialog__SchemeWrapper",componentId:"nso4l9-1"})(["cursor:pointer;padding:10px;:hover{background:rgba(255,255,255,0.1);}"]),P=function(e){var t=e.schemeList,n=e.onCreateProject,c=e.onOpenProject,r=e.onCancel,o=e.open;return Object(O.jsxs)(s.a,{"aria-labelledby":"project-select-title",open:o,children:[Object(O.jsx)(b.a,{id:"project-select-title",children:"Open a Paint Builder Project"}),Object(O.jsx)(f.a,{dividers:!0,children:Object(O.jsx)(a.a,{display:"flex",flexDirection:"column",children:t&&t.length?t.map((function(e){return Object(O.jsxs)(v,{onClick:function(){return c(e.id)},children:[Object(O.jsx)(g.a,{variant:"body1",children:e.name}),Object(O.jsxs)(g.a,{variant:"body2",children:["Last modified ",Object(m.b)(e.date_modified)]})]},e.id)})):Object(O.jsx)(O.Fragment,{})})}),Object(O.jsxs)(x.a,{children:[Object(O.jsx)(C,{onClick:r,color:"secondary",variant:"outlined",children:"Cancel"}),Object(O.jsx)(C,{onClick:n,color:"default",variant:"outlined",children:"NEW"})]})]})},y=n(8),D=n(16),I=n(58),_=n.n(I),N=n(1069),k=n(1101),w=Object(u.c)(d.a).withConfig({displayName:"CreateProjectDialog__Button",componentId:"e1fbbf-0"})(j.b),S=Object(u.c)(k.a).withConfig({displayName:"CreateProjectDialog__Autocomplete",componentId:"e1fbbf-1"})(j.b),E=Object(u.c)(x.a).withConfig({displayName:"CreateProjectDialog__CustomDialogActions",componentId:"e1fbbf-2"})(["padding-right:24px;"]),M=Object(u.c)(N.a).withConfig({displayName:"CreateProjectDialog__NameField",componentId:"e1fbbf-3"})([".MuiInputBase-root{height:56px;}"]),B=function(e){var t=Object(r.useState)(null),n=Object(c.a)(t,2),o=n[0],i=n[1],l=Object(r.useState)(""),u=Object(c.a)(l,2),j=u[0],d=u[1],p=e.onContinue,h=e.onCancel,g=e.open,x=e.carMakeList,m=_.a.orderBy(Object(D.a)(x),["name","car_type"],["asc","asc"]);return Object(O.jsxs)(s.a,{"aria-labelledby":"project-select-title",open:g,children:[Object(O.jsx)(b.a,{id:"project-select-title",children:"Create a new paint"}),Object(O.jsx)(f.a,{dividers:!0,children:Object(O.jsxs)(a.a,{display:"flex",flexDirection:"column",children:[x&&x.length?Object(O.jsx)(S,{id:"car-make-select",options:m,groupBy:function(e){return e.car_type},getOptionLabel:function(e){return e.name},style:{width:500},mb:4,onChange:function(e,t){i(t)},renderInput:function(e){return Object(O.jsx)(N.a,Object(y.a)(Object(y.a)({},e),{},{label:"Select Vehicle",variant:"outlined"}))}}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)(M,{label:"Name",value:j,variant:"outlined",onChange:function(e){return d(e.target.value)}})]})}),Object(O.jsxs)(E,{children:[Object(O.jsx)(w,{onClick:h,color:"secondary",variant:"outlined",children:"Cancel"}),Object(O.jsx)(w,{onClick:function(){return p(o,j)},color:"primary",variant:"outlined",disabled:!o,children:"Continue"})]})]})},R=n(137),A=n(67);t.default=function(){var e=Object(o.d)(),t=Object(i.f)(),n=Object(r.useState)("ProjectSelectDialog"),u=Object(c.a)(n,2),j=u[0],d=u[1],s=Object(o.e)((function(e){return e.authReducer.user})),b=Object(o.e)((function(e){return e.carMakeReducer.list})),f=Object(o.e)((function(e){return e.schemeReducer.list})),p=Object(o.e)((function(e){return e.schemeReducer.current})),g=Object(o.e)((function(e){return e.schemeReducer.loading})),x=Object(o.e)((function(e){return e.carMakeReducer.loading}));Object(r.useEffect)((function(){s&&(f.length||e(Object(R.f)(s.id)),b.length||e(Object(A.b)()))}),[s]),Object(r.useEffect)((function(){p&&t.push("/scheme/".concat(p.id))}),[p]);return Object(O.jsx)(a.a,{width:"100%",height:"100%",display:"flex",flexDirection:"column",children:g||x||!f||!b?Object(O.jsx)(l.a,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{open:"ProjectSelectDialog"===j,onCreateProject:function(){return d("CreateProjectDialog")},onOpenProject:function(){return d("OpenProjectDialog")},onCancel:function(){return d(null)}}),Object(O.jsx)(P,{schemeList:f,open:"OpenProjectDialog"===j,onCreateProject:function(){return d("CreateProjectDialog")},onOpenProject:function(t){return n=t,console.log("Opening scheme: ",n),e(Object(R.e)(n)),void d(null);var n},onCancel:function(){return d("ProjectSelectDialog")}}),Object(O.jsx)(B,{carMakeList:b,open:"CreateProjectDialog"===j,onContinue:function(t,n){return function(t,n){e(Object(R.c)(t,n,s.id)),d(null)}(t,n)},onCancel:function(){return d("ProjectSelectDialog")}})]})})}},369:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return b}));var c=n(16),r=n(8),o=(n(58),n(549)),i=n.n(o),a=function(e){var t=(new Date).getTime()/1e3-new Date(e).getTime();if(t<60)return"".concat(Math.round(t)," seconds ago");var n=t/60;if(n<60)return"".concat(Math.round(n)," minutes ago");var c=n/60;if(c<24)return"".concat(Math.round(c)," hours ago");var r=c/24;return"".concat(Math.round(r)," days ago")},l=function(e){var t=e.length>7?/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e):/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16),a:e.length>7?parseInt(t[4],16):255}:null},u=function(e){return Math.round(100*(e+Number.EPSILON))/100},j=function(e){return!e||!e.length||i()(e)},d=function(e){var t=e.getAbsoluteTransform().copy();t.invert();var n=e.getStage().getPointerPosition();return t.point(n)},s=function(e,t){var n=Object(r.a)({},t);return 90===e?(n.x=-t.y,n.y=t.x):180===e?(n.x=-t.x,n.y=-t.y):270===e&&(n.x=t.y,n.y=-t.x),n},b=function(e){for(var t=Object(c.a)(e);t[t.length-1]===t[t.length-3]&&t[t.length-2]===t[t.length-4];)t.splice(-2,2);return t}}}]);
//# sourceMappingURL=5.82a90f76.chunk.js.map