import{S as M,i as V,s as w,l as v,r as S,a as E,m as g,n as $,u as q,h as d,c as B,p as m,b as C,J as h,f as k,d as H,t as y,M as J,N,w as j,x as z,y as A,B as G,g as K}from"../chunks/index-f3b5f3fe.js";import{d as L}from"../chunks/stores-204de4d6.js";import O from"./FeatureBlock.svelte-db454bc9.js";import"../chunks/index-5bd72393.js";import"../chunks/Logo-c1a927c1.js";/* empty css                                                           */function D(o,e,n){const t=o.slice();return t[1]=e[n].title,t[2]=e[n].text,t[3]=e[n].svg,t}function F(o){let e,n;return e=new O({props:{title:o[1],text:o[2],svg:o[3]}}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,c){A(e,t,c),n=!0},p(t,c){const i={};c&1&&(i.title=t[1]),c&1&&(i.text=t[2]),c&1&&(i.svg=t[3]),e.$set(i)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function P(o){let e,n,t,c,i,b,u,p,f=o[0].features,a=[];for(let s=0;s<f.length;s+=1)a[s]=F(D(o,f,s));const I=s=>y(a[s],1,1,()=>{a[s]=null});return{c(){e=v("div"),n=v("h1"),t=S("Main features"),c=E(),i=v("div"),b=E(),u=v("div");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0,id:!0});var l=$(e);n=g(l,"H1",{class:!0});var r=$(n);t=q(r,"Main features"),r.forEach(d),c=B(l),i=g(l,"DIV",{class:!0}),$(i).forEach(d),b=B(l),u=g(l,"DIV",{class:!0});var _=$(u);for(let x=0;x<a.length;x+=1)a[x].l(_);_.forEach(d),l.forEach(d),this.h()},h(){m(n,"class","svelte-1rpdkac"),m(i,"class","divisor svelte-1rpdkac"),m(u,"class","features-grid svelte-1rpdkac"),m(e,"class","features svelte-1rpdkac"),m(e,"id","features")},m(s,l){C(s,e,l),h(e,n),h(n,t),h(e,c),h(e,i),h(e,b),h(e,u);for(let r=0;r<a.length;r+=1)a[r].m(u,null);p=!0},p(s,[l]){if(l&1){f=s[0].features;let r;for(r=0;r<f.length;r+=1){const _=D(s,f,r);a[r]?(a[r].p(_,l),k(a[r],1)):(a[r]=F(_),a[r].c(),k(a[r],1),a[r].m(u,null))}for(K(),r=f.length;r<a.length;r+=1)I(r);H()}},i(s){if(!p){for(let l=0;l<f.length;l+=1)k(a[l]);p=!0}},o(s){a=a.filter(Boolean);for(let l=0;l<a.length;l+=1)y(a[l]);p=!1},d(s){s&&d(e),J(a,s)}}}function Q(o,e,n){let t;return N(o,L,c=>n(0,t=c)),[t]}class Z extends M{constructor(e){super(),V(this,e,Q,P,w,{})}}export{Z as default};
