import{a as C,b as v}from"./chunk-FNO5UEUF.js";import{$ as c,D as s,Da as M,Z as u,_ as d,da as f,ga as a,ia as h,j as e,ja as g,l,m as r}from"./chunk-WQIKMOR5.js";var A=[{path:"version",loadChildren:()=>import("./chunk-ZZHGJCXA.js").then(o=>o.AppCommonRoutingModule)},{path:"",loadChildren:()=>import("./chunk-HN7QJKZP.js").then(o=>o.BlogRoutingModule)},{path:"auth",loadChildren:()=>import("./chunk-WLLQQTAG.js").then(o=>o.AuthRoutingModule)},{path:"error",loadChildren:()=>import("./chunk-3MFVLTSS.js").then(o=>o.ErrorRoutingModule)},{path:"**",pathMatch:"full",loadChildren:()=>import("./chunk-3MFVLTSS.js").then(o=>o.ErrorRoutingModule)}],i=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o});static \u0275inj=e({imports:[a.forRoot(A),a]})};var n=class o{title="clean-blog";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=l({type:o,selectors:[["app-root"]],decls:1,vars:0,template:function(t,b){t&1&&s(0,"router-outlet")},dependencies:[f]})};var p=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=r({type:o,bootstrap:[n]});static \u0275inj=e({providers:[C,g,h],imports:[c,i,u,M,v]})};var N={production:!0};N.production&&void 0;d().bootstrapModule(p,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));
