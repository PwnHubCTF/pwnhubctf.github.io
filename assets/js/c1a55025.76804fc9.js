"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(u,".").concat(m)]||p[m]||g[m]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:5},i="Signed Flag",o={unversionedId:"tutorial/signed-flag",id:"tutorial/signed-flag",title:"Signed Flag",description:"This feature allows flag to be unique for each players.",source:"@site/docs/tutorial/signed-flag.md",sourceDirName:"tutorial",slug:"/tutorial/signed-flag",permalink:"/docs/tutorial/signed-flag",draft:!1,editUrl:"https://github.com/PwnHubCTF/pwnhubctf.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/signed-flag.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"XSS Bot",permalink:"/docs/tutorial/xss-bot"},next:{title:"Theme",permalink:"/docs/tutorial/theme"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Way 1 - Multiple instance challenge",id:"way-1---multiple-instance-challenge",level:3},{value:"Way 2 - XSS challenge",id:"way-2---xss-challenge",level:3}],c={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signed-flag"},"Signed Flag"),(0,a.kt)("p",null,"This feature allows flag to be unique for each players."),(0,a.kt)("p",null,"It can be usefull to reduce flag sharing."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The is multiple ways to use this feature"),(0,a.kt)("h3",{id:"way-1---multiple-instance-challenge"},"Way 1 - Multiple instance challenge"),(0,a.kt)("p",null,"Challenge must:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be a ",(0,a.kt)("inlineCode",{parentName:"li"},"multiple")," instance"),(0,a.kt)("li",{parentName:"ul"},"Use an env var ",(0,a.kt)("inlineCode",{parentName:"li"},"FLAG")," to set the flag.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PwnHubCTF/challenges/tree/main/web"},"Exemple")),(0,a.kt)("h3",{id:"way-2---xss-challenge"},"Way 2 - XSS challenge"),(0,a.kt)("p",null,"Challenge must:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be a ",(0,a.kt)("inlineCode",{parentName:"li"},"multiple")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"single")," instance"),(0,a.kt)("li",{parentName:"ul"},"Be a web challenge, with ",(0,a.kt)("inlineCode",{parentName:"li"},"xss: true"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PwnHubCTF/challenges/tree/main/web-xss"},"Exemple")),(0,a.kt)("p",null,"Then, you need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"sign_flag: true")," in your challenge ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")))}g.isMDXComponent=!0}}]);