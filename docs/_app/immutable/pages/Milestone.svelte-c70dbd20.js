import{S as K,i as N,s as O,l as v,w as Q,a as L,r as k,m as _,n as h,x as R,h as d,c as q,u as H,p as m,q as F,b as U,J as n,y as W,v as C,f as X,t as Y,B as Z}from"../chunks/index-f3b5f3fe.js";import{L as x,s as G}from"../chunks/Logo-c1a927c1.js";function $(o){let e,a,i,w,r,c,g,y,s,I,M,u,p,P,B,z,b,D,f;return i=new x({props:{fill:"var(--color-level-9)",width:"2rem",height:"2rem",logoId:G(o[4])}}),{c(){e=v("div"),a=v("div"),Q(i.$$.fragment),w=L(),r=v("div"),c=v("h4"),g=k(o[0]),y=L(),s=v("p"),I=k(o[1]),M=L(),u=v("div"),p=v("h4"),P=k("Status"),B=L(),z=v("p"),b=k(o[2]),this.h()},l(t){e=_(t,"DIV",{class:!0});var l=h(e);a=_(l,"DIV",{class:!0,style:!0});var E=h(a);R(i.$$.fragment,E),E.forEach(d),w=q(l),r=_(l,"DIV",{class:!0});var S=h(r);c=_(S,"H4",{class:!0});var J=h(c);g=H(J,o[0]),J.forEach(d),y=q(S),s=_(S,"P",{class:!0});var T=h(s);I=H(T,o[1]),T.forEach(d),S.forEach(d),M=q(l),u=_(l,"DIV",{class:!0});var V=h(u);p=_(V,"H4",{class:!0});var j=h(p);P=H(j,"Status"),j.forEach(d),B=q(V),z=_(V,"P",{class:!0});var A=h(z);b=H(A,o[2]),A.forEach(d),V.forEach(d),l.forEach(d),this.h()},h(){m(a,"class","icon-wrapper svelte-szypwf"),F(a,"background-color",o[3]),m(c,"class","milestone-name svelte-szypwf"),m(s,"class","milestone-description svelte-szypwf"),m(r,"class","milestone-about svelte-szypwf"),m(p,"class","milestone-name svelte-szypwf"),m(z,"class","milestone-description svelte-szypwf"),m(u,"class","milestone-status svelte-szypwf"),m(e,"class",D="milestone "+(o[5]?"odd":"")+" svelte-szypwf")},m(t,l){U(t,e,l),n(e,a),W(i,a,null),n(e,w),n(e,r),n(r,c),n(c,g),n(r,y),n(r,s),n(s,I),n(e,M),n(e,u),n(u,p),n(p,P),n(u,B),n(u,z),n(z,b),f=!0},p(t,[l]){const E={};l&16&&(E.logoId=G(t[4])),i.$set(E),(!f||l&8)&&F(a,"background-color",t[3]),(!f||l&1)&&C(g,t[0]),(!f||l&2)&&C(I,t[1]),(!f||l&4)&&C(b,t[2]),(!f||l&32&&D!==(D="milestone "+(t[5]?"odd":"")+" svelte-szypwf"))&&m(e,"class",D)},i(t){f||(X(i.$$.fragment,t),f=!0)},o(t){Y(i.$$.fragment,t),f=!1},d(t){t&&d(e),Z(i)}}}function ee(o,e,a){let{name:i=""}=e,{description:w=""}=e,{status:r=""}=e,{color:c=""}=e,{icon:g=""}=e,{odd:y=!1}=e;return o.$$set=s=>{"name"in s&&a(0,i=s.name),"description"in s&&a(1,w=s.description),"status"in s&&a(2,r=s.status),"color"in s&&a(3,c=s.color),"icon"in s&&a(4,g=s.icon),"odd"in s&&a(5,y=s.odd)},[i,w,r,c,g,y]}class ae extends K{constructor(e){super(),N(this,e,ee,$,O,{name:0,description:1,status:2,color:3,icon:4,odd:5})}}export{ae as default};