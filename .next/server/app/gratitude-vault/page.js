(()=>{var e={};e.id=106,e.ids=[106],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},75525:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(17469),r(78864),r(90996);var n=r(30170),a=r(45002),s=r(83876),o=r.n(s),i=r(66299),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["gratitude-vault",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,17469)),"/home/matth/Projects/GratitudeVault3/app/gratitude-vault/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,78864)),"/home/matth/Projects/GratitudeVault3/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,90996,23)),"next/dist/client/components/not-found-error"]}],u=["/home/matth/Projects/GratitudeVault3/app/gratitude-vault/page.tsx"],c="/gratitude-vault/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/gratitude-vault/page",pathname:"/gratitude-vault",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},73800:(e,t,r)=>{Promise.resolve().then(r.bind(r,74031))},63462:(e,t,r)=>{Promise.resolve().then(r.bind(r,45438))},98202:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,63642,23)),Promise.resolve().then(r.t.bind(r,87586,23)),Promise.resolve().then(r.t.bind(r,47838,23)),Promise.resolve().then(r.t.bind(r,58057,23)),Promise.resolve().then(r.t.bind(r,77741,23)),Promise.resolve().then(r.t.bind(r,13118,23))},74031:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eU});var n,a=r(97247),s=r(28964),o=r(58053),i=r(70170),l=r(25008);let d=s.forwardRef(({className:e,...t},r)=>a.jsx("textarea",{className:(0,l.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));d.displayName="Textarea";var u=r(70319),c=r(93191),f=r(20732),p=r(85090);function m({prop:e,defaultProp:t,onChange:r=()=>{}}){let[n,a]=function({defaultProp:e,onChange:t}){let r=s.useState(e),[n]=r,a=s.useRef(n),o=(0,p.W)(t);return s.useEffect(()=>{a.current!==n&&(o(n),a.current=n)},[n,a,o]),r}({defaultProp:t,onChange:r}),o=void 0!==e,i=o?e:n,l=(0,p.W)(r);return[i,s.useCallback(t=>{if(o){let r="function"==typeof t?t(e):t;r!==e&&l(r)}else a(t)},[o,e,a,l])]}var v=r(9537),x=r(22251),h="Switch",[g,y]=(0,f.b)(h),[b,w]=g(h),E=s.forwardRef((e,t)=>{let{__scopeSwitch:r,name:n,checked:o,defaultChecked:i,required:l,disabled:d,value:f="on",onCheckedChange:p,form:v,...h}=e,[g,y]=s.useState(null),w=(0,c.e)(t,e=>y(e)),E=s.useRef(!1),j=!g||v||!!g.closest("form"),[N=!1,k]=m({prop:o,defaultProp:i,onChange:p});return(0,a.jsxs)(b,{scope:r,checked:N,disabled:d,children:[(0,a.jsx)(x.WV.button,{type:"button",role:"switch","aria-checked":N,"aria-required":l,"data-state":T(N),"data-disabled":d?"":void 0,disabled:d,value:f,...h,ref:w,onClick:(0,u.M)(e.onClick,e=>{k(e=>!e),j&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())})}),j&&(0,a.jsx)(P,{control:g,bubbles:!E.current,name:n,value:f,checked:N,required:l,disabled:d,form:v,style:{transform:"translateX(-100%)"}})]})});E.displayName=h;var j="SwitchThumb",N=s.forwardRef((e,t)=>{let{__scopeSwitch:r,...n}=e,s=w(j,r);return(0,a.jsx)(x.WV.span,{"data-state":T(s.checked),"data-disabled":s.disabled?"":void 0,...n,ref:t})});N.displayName=j;var P=e=>{let{control:t,checked:r,bubbles:n=!0,...o}=e,i=s.useRef(null),l=function(e){let t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(r),d=function(e){let[t,r]=s.useState(void 0);return(0,v.b)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,a;if(!Array.isArray(t)||!t.length)return;let s=t[0];if("borderBoxSize"in s){let e=s.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,a=t.blockSize}else n=e.offsetWidth,a=e.offsetHeight;r({width:n,height:a})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}(t);return s.useEffect(()=>{let e=i.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==r&&t){let a=new Event("click",{bubbles:n});t.call(e,r),e.dispatchEvent(a)}},[l,r,n]),(0,a.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function T(e){return e?"checked":"unchecked"}let k=s.forwardRef(({className:e,...t},r)=>a.jsx(E,{className:(0,l.cn)("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...t,ref:r,children:a.jsx(N,{className:(0,l.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));k.displayName=E.displayName;var C=r(44538),R=r(26323);let S=(0,R.Z)("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);function M({onAddGratitude:e}){let[t,r]=(0,s.useState)(""),[n,l]=(0,s.useState)(""),[u,c]=(0,s.useState)(!1);return(0,a.jsxs)("div",{className:"bg-card p-4 rounded-lg",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Express Your Gratitude"}),a.jsx(i.I,{placeholder:"What are you grateful for?",value:t,onChange:e=>r(e.target.value),className:"mb-2"}),a.jsx(d,{placeholder:"Describe why you're grateful...",value:n,onChange:e=>l(e.target.value),className:"mb-2",rows:5}),(0,a.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[a.jsx(k,{id:"public",checked:u,onCheckedChange:c}),a.jsx(C._,{htmlFor:"public",children:"Make this gratitude public"})]}),a.jsx(o.z,{variant:"outline",size:"icon",children:a.jsx(S,{className:"h-4 w-4"})})]}),(0,a.jsxs)("div",{className:"flex justify-end space-x-2",children:[a.jsx(o.z,{onClick:()=>console.log("Get prompt"),children:"Get Prompt"}),a.jsx(o.z,{onClick:()=>{t&&n&&(e({title:t,content:n,isPublic:u}),r(""),l(""),c(!1))},children:"Add to Vault"})]})]})}let A=0,D=new Map,L=e=>{if(D.has(e))return;let t=setTimeout(()=>{D.delete(e),I({type:"REMOVE_TOAST",toastId:e})},1e6);D.set(e,t)},_=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?L(r):e.toasts.forEach(e=>{L(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},O=[],W={toasts:[]};function I(e){W=_(W,e),O.forEach(e=>{e(W)})}function V({...e}){let t=(A=(A+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>I({type:"DISMISS_TOAST",toastId:t});return I({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>I({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function F(){let[e,t]=s.useState(W);return s.useEffect(()=>(O.push(t),()=>{let e=O.indexOf(t);e>-1&&O.splice(e,1)}),[e]),{...e,toast:V,dismiss:e=>I({type:"DISMISS_TOAST",toastId:e})}}var z=r(46817),$=r(69008),G="dismissableLayer.update",q=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),K=s.forwardRef((e,t)=>{let{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:d,onDismiss:f,...m}=e,v=s.useContext(q),[h,g]=s.useState(null),y=h?.ownerDocument??globalThis?.document,[,b]=s.useState({}),w=(0,c.e)(t,e=>g(e)),E=Array.from(v.layers),[j]=[...v.layersWithOutsidePointerEventsDisabled].slice(-1),N=E.indexOf(j),P=h?E.indexOf(h):-1,T=v.layersWithOutsidePointerEventsDisabled.size>0,k=P>=N,C=function(e,t=globalThis?.document){let r=(0,p.W)(e),n=s.useRef(!1),a=s.useRef(()=>{});return s.useEffect(()=>{let e=e=>{if(e.target&&!n.current){let n=function(){U("dismissableLayer.pointerDownOutside",r,s,{discrete:!0})},s={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",a.current),a.current=n,t.addEventListener("click",a.current,{once:!0})):n()}else t.removeEventListener("click",a.current);n.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",e),t.removeEventListener("click",a.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,r=[...v.branches].some(e=>e.contains(t));!k||r||(i?.(e),d?.(e),e.defaultPrevented||f?.())},y),R=function(e,t=globalThis?.document){let r=(0,p.W)(e),n=s.useRef(!1);return s.useEffect(()=>{let e=e=>{e.target&&!n.current&&U("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target;[...v.branches].some(e=>e.contains(t))||(l?.(e),d?.(e),e.defaultPrevented||f?.())},y);return function(e,t=globalThis?.document){let r=(0,p.W)(e);s.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[r,t])}(e=>{P!==v.layers.size-1||(o?.(e),!e.defaultPrevented&&f&&(e.preventDefault(),f()))},y),s.useEffect(()=>{if(h)return r&&(0===v.layersWithOutsidePointerEventsDisabled.size&&(n=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),v.layersWithOutsidePointerEventsDisabled.add(h)),v.layers.add(h),H(),()=>{r&&1===v.layersWithOutsidePointerEventsDisabled.size&&(y.body.style.pointerEvents=n)}},[h,y,r,v]),s.useEffect(()=>()=>{h&&(v.layers.delete(h),v.layersWithOutsidePointerEventsDisabled.delete(h),H())},[h,v]),s.useEffect(()=>{let e=()=>b({});return document.addEventListener(G,e),()=>document.removeEventListener(G,e)},[]),(0,a.jsx)(x.WV.div,{...m,ref:w,style:{pointerEvents:T?k?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,R.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,C.onPointerDownCapture)})});K.displayName="DismissableLayer";var B=s.forwardRef((e,t)=>{let r=s.useContext(q),n=s.useRef(null),o=(0,c.e)(t,n);return s.useEffect(()=>{let e=n.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,a.jsx)(x.WV.div,{...e,ref:o})});function H(){let e=new CustomEvent(G);document.dispatchEvent(e)}function U(e,t,r,{discrete:n}){let a=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),n?(0,x.jH)(a,s):a.dispatchEvent(s)}B.displayName="DismissableLayerBranch";var X=s.forwardRef((e,t)=>{let{container:r,...n}=e,[o,i]=s.useState(!1);(0,v.b)(()=>i(!0),[]);let l=r||o&&globalThis?.document?.body;return l?z.createPortal((0,a.jsx)(x.WV.div,{...n,ref:t}),l):null});X.displayName="Portal";var Z=r(67264),Y=s.forwardRef((e,t)=>(0,a.jsx)(x.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Y.displayName="VisuallyHidden";var J="ToastProvider",[Q,ee,et]=function(e){let t=e+"CollectionProvider",[r,n]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>s.createContext(e));return function(r){let n=r?.[e]||t;return s.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let o=s.createContext(n),i=r.length;function l(t){let{scope:r,children:n,...l}=t,d=r?.[e][i]||o,u=s.useMemo(()=>l,Object.values(l));return(0,a.jsx)(d.Provider,{value:u,children:n})}return r=[...r,n],l.displayName=t+"Provider",[l,function(r,a){let l=a?.[e][i]||o,d=s.useContext(l);if(d)return d;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let a=r(e)[`__scope${n}`];return{...t,...a}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}(t),[o,i]=r(t,{collectionRef:{current:null},itemMap:new Map}),l=e=>{let{scope:t,children:r}=e,n=s.useRef(null),i=s.useRef(new Map).current;return(0,a.jsx)(o,{scope:t,itemMap:i,collectionRef:n,children:r})};l.displayName=t;let d=e+"CollectionSlot",u=s.forwardRef((e,t)=>{let{scope:r,children:n}=e,s=i(d,r),o=(0,c.e)(t,s.collectionRef);return(0,a.jsx)($.g7,{ref:o,children:n})});u.displayName=d;let f=e+"CollectionItemSlot",p="data-radix-collection-item",m=s.forwardRef((e,t)=>{let{scope:r,children:n,...o}=e,l=s.useRef(null),d=(0,c.e)(t,l),u=i(f,r);return s.useEffect(()=>(u.itemMap.set(l,{ref:l,...o}),()=>void u.itemMap.delete(l))),(0,a.jsx)($.g7,{[p]:"",ref:d,children:n})});return m.displayName=f,[{Provider:l,Slot:u,ItemSlot:m},function(t){let r=i(e+"CollectionConsumer",t);return s.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},n]}("Toast"),[er,en]=(0,f.b)("Toast",[et]),[ea,es]=er(J),eo=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:l}=e,[d,u]=s.useState(null),[c,f]=s.useState(0),p=s.useRef(!1),m=s.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${J}\`. Expected non-empty \`string\`.`),(0,a.jsx)(Q.Provider,{scope:t,children:(0,a.jsx)(ea,{scope:t,label:r,duration:n,swipeDirection:o,swipeThreshold:i,toastCount:c,viewport:d,onViewportChange:u,onToastAdd:s.useCallback(()=>f(e=>e+1),[]),onToastRemove:s.useCallback(()=>f(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:m,children:l})})};eo.displayName=J;var ei="ToastViewport",el=["F8"],ed="toast.viewportPause",eu="toast.viewportResume",ec=s.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:n=el,label:o="Notifications ({hotkey})",...i}=e,l=es(ei,r),d=ee(r),u=s.useRef(null),f=s.useRef(null),p=s.useRef(null),m=s.useRef(null),v=(0,c.e)(t,m,l.onViewportChange),h=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=l.toastCount>0;s.useEffect(()=>{let e=e=>{0!==n.length&&n.every(t=>e[t]||e.code===t)&&m.current?.focus()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n]),s.useEffect(()=>{let e=u.current,t=m.current;if(g&&e&&t){let r=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(ed);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},n=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(eu);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},a=t=>{e.contains(t.relatedTarget)||n()},s=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",a),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",s),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",a),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",s),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[g,l.isClosePausedRef]);let y=s.useCallback(({tabbingDirection:e})=>{let t=d().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[d]);return s.useEffect(()=>{let e=m.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){let r=document.activeElement,n=t.shiftKey;if(t.target===e&&n){f.current?.focus();return}let a=y({tabbingDirection:n?"backwards":"forwards"}),s=a.findIndex(e=>e===r);eR(a.slice(s+1))?t.preventDefault():n?f.current?.focus():p.current?.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,y]),(0,a.jsxs)(B,{ref:u,role:"region","aria-label":o.replace("{hotkey}",h),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&(0,a.jsx)(ep,{ref:f,onFocusFromOutsideViewport:()=>{eR(y({tabbingDirection:"forwards"}))}}),(0,a.jsx)(Q.Slot,{scope:r,children:(0,a.jsx)(x.WV.ol,{tabIndex:-1,...i,ref:v})}),g&&(0,a.jsx)(ep,{ref:p,onFocusFromOutsideViewport:()=>{eR(y({tabbingDirection:"backwards"}))}})]})});ec.displayName=ei;var ef="ToastFocusProxy",ep=s.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:n,...s}=e,o=es(ef,r);return(0,a.jsx)(Y,{"aria-hidden":!0,tabIndex:0,...s,ref:t,style:{position:"fixed"},onFocus:e=>{let t=e.relatedTarget;o.viewport?.contains(t)||n()}})});ep.displayName=ef;var em="Toast",ev=s.forwardRef((e,t)=>{let{forceMount:r,open:n,defaultOpen:s,onOpenChange:o,...i}=e,[l=!0,d]=m({prop:n,defaultProp:s,onChange:o});return(0,a.jsx)(Z.z,{present:r||l,children:(0,a.jsx)(eg,{open:l,...i,ref:t,onClose:()=>d(!1),onPause:(0,p.W)(e.onPause),onResume:(0,p.W)(e.onResume),onSwipeStart:(0,u.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,u.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,u.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,u.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})})});ev.displayName=em;var[ex,eh]=er(em,{onClose(){}}),eg=s.forwardRef((e,t)=>{let{__scopeToast:r,type:n="foreground",duration:o,open:i,onClose:l,onEscapeKeyDown:d,onPause:f,onResume:m,onSwipeStart:v,onSwipeMove:h,onSwipeCancel:g,onSwipeEnd:y,...b}=e,w=es(em,r),[E,j]=s.useState(null),N=(0,c.e)(t,e=>j(e)),P=s.useRef(null),T=s.useRef(null),k=o||w.duration,C=s.useRef(0),R=s.useRef(k),S=s.useRef(0),{onToastAdd:M,onToastRemove:A}=w,D=(0,p.W)(()=>{E?.contains(document.activeElement)&&w.viewport?.focus(),l()}),L=s.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(S.current),C.current=new Date().getTime(),S.current=window.setTimeout(D,e))},[D]);s.useEffect(()=>{let e=w.viewport;if(e){let t=()=>{L(R.current),m?.()},r=()=>{let e=new Date().getTime()-C.current;R.current=R.current-e,window.clearTimeout(S.current),f?.()};return e.addEventListener(ed,r),e.addEventListener(eu,t),()=>{e.removeEventListener(ed,r),e.removeEventListener(eu,t)}}},[w.viewport,k,f,m,L]),s.useEffect(()=>{i&&!w.isClosePausedRef.current&&L(k)},[i,k,w.isClosePausedRef,L]),s.useEffect(()=>(M(),()=>A()),[M,A]);let _=s.useMemo(()=>E?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,a=""===t.dataset.radixToastAnnounceExclude;if(!n){if(a){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(E):null,[E]);return w.viewport?(0,a.jsxs)(a.Fragment,{children:[_&&(0,a.jsx)(ey,{__scopeToast:r,role:"status","aria-live":"foreground"===n?"assertive":"polite","aria-atomic":!0,children:_}),(0,a.jsx)(ex,{scope:r,onClose:D,children:z.createPortal((0,a.jsx)(Q.ItemSlot,{scope:r,children:(0,a.jsx)(K,{asChild:!0,onEscapeKeyDown:(0,u.M)(d,()=>{w.isFocusedToastEscapeKeyDownRef.current||D(),w.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,a.jsx)(x.WV.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":w.swipeDirection,...b,ref:N,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,u.M)(e.onKeyDown,e=>{"Escape"!==e.key||(d?.(e.nativeEvent),e.nativeEvent.defaultPrevented||(w.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:(0,u.M)(e.onPointerDown,e=>{0===e.button&&(P.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,u.M)(e.onPointerMove,e=>{if(!P.current)return;let t=e.clientX-P.current.x,r=e.clientY-P.current.y,n=!!T.current,a=["left","right"].includes(w.swipeDirection),s=["left","up"].includes(w.swipeDirection)?Math.min:Math.max,o=a?s(0,t):0,i=a?0:s(0,r),l="touch"===e.pointerType?10:2,d={x:o,y:i},u={originalEvent:e,delta:d};n?(T.current=d,ek("toast.swipeMove",h,u,{discrete:!1})):eC(d,w.swipeDirection,l)?(T.current=d,ek("toast.swipeStart",v,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(P.current=null)}),onPointerUp:(0,u.M)(e.onPointerUp,e=>{let t=T.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),T.current=null,P.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};eC(t,w.swipeDirection,w.swipeThreshold)?ek("toast.swipeEnd",y,n,{discrete:!0}):ek("toast.swipeCancel",g,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),w.viewport)})]}):null}),ey=e=>{let{__scopeToast:t,children:r,...n}=e,o=es(em,t),[i,l]=s.useState(!1),[d,u]=s.useState(!1);return function(e=()=>{}){let t=(0,p.W)(e);(0,v.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>l(!0)),s.useEffect(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),d?null:(0,a.jsx)(X,{asChild:!0,children:(0,a.jsx)(Y,{...n,children:i&&(0,a.jsxs)(a.Fragment,{children:[o.label," ",r]})})})},eb=s.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,a.jsx)(x.WV.div,{...n,ref:t})});eb.displayName="ToastTitle";var ew=s.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,a.jsx)(x.WV.div,{...n,ref:t})});ew.displayName="ToastDescription";var eE="ToastAction",ej=s.forwardRef((e,t)=>{let{altText:r,...n}=e;return r.trim()?(0,a.jsx)(eT,{altText:r,asChild:!0,children:(0,a.jsx)(eP,{...n,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${eE}\`. Expected non-empty \`string\`.`),null)});ej.displayName=eE;var eN="ToastClose",eP=s.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e,s=eh(eN,r);return(0,a.jsx)(eT,{asChild:!0,children:(0,a.jsx)(x.WV.button,{type:"button",...n,ref:t,onClick:(0,u.M)(e.onClick,s.onClose)})})});eP.displayName=eN;var eT=s.forwardRef((e,t)=>{let{__scopeToast:r,altText:n,...s}=e;return(0,a.jsx)(x.WV.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...s,ref:t})});function ek(e,t,r,{discrete:n}){let a=r.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),n?(0,x.jH)(a,s):a.dispatchEvent(s)}var eC=(e,t,r=0)=>{let n=Math.abs(e.x),a=Math.abs(e.y),s=n>a;return"left"===t||"right"===t?s&&n>r:!s&&a>r};function eR(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var eS=r(87972);let eM=(0,R.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),eA=s.forwardRef(({className:e,...t},r)=>a.jsx(ec,{ref:r,className:(0,l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));eA.displayName=ec.displayName;let eD=(0,eS.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),eL=s.forwardRef(({className:e,variant:t,...r},n)=>a.jsx(ev,{ref:n,className:(0,l.cn)(eD({variant:t}),e),...r}));eL.displayName=ev.displayName,s.forwardRef(({className:e,...t},r)=>a.jsx(ej,{ref:r,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=ej.displayName;let e_=s.forwardRef(({className:e,...t},r)=>a.jsx(eP,{ref:r,className:(0,l.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:a.jsx(eM,{className:"h-4 w-4"})}));e_.displayName=eP.displayName;let eO=s.forwardRef(({className:e,...t},r)=>a.jsx(eb,{ref:r,className:(0,l.cn)("text-sm font-semibold",e),...t}));eO.displayName=eb.displayName;let eW=s.forwardRef(({className:e,...t},r)=>a.jsx(ew,{ref:r,className:(0,l.cn)("text-sm opacity-90",e),...t}));function eI(){let{toasts:e}=F();return(0,a.jsxs)(eo,{children:[e.map(function({id:e,title:t,description:r,action:n,...s}){return(0,a.jsxs)(eL,{...s,children:[(0,a.jsxs)("div",{className:"grid gap-1",children:[t&&a.jsx(eO,{children:t}),r&&a.jsx(eW,{children:r})]}),n,a.jsx(e_,{})]},e)}),a.jsx(eA,{})]})}async function eV(e){try{await fetch("/api/gratitude",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gratitude:e})})}catch(e){console.error(e)}}async function eF(){try{let e=await fetch("/api/gratitude"),t=await e.json();if(e.ok)return t.message.reverse()}catch(e){console.error(e)}}eW.displayName=ew.displayName;var ez=r(81775);let e$=(0,R.Z)("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),eG=(0,R.Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),eq=(0,R.Z)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);var eK=r(19898);let eB=async e=>{try{await window.navigator.clipboard.writeText(e),console.log("URL copied to clipboard")}catch(e){console.error("Failed to copy URL: ",e)}};function eH({gratitudes:e}){let{data:t}=(0,eK.useSession)(),{toast:r}=F(),[n,i]=(0,s.useState)(!1);return(0,a.jsxs)("div",{className:"w-full md:w-1/3 bg-secondary p-4 rounded-lg",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Your Gratitude Vault"}),(0,a.jsxs)("div",{className:"flex space-x-2 mb-4",children:[(0,a.jsxs)(o.z,{variant:"outline",size:"sm",children:[a.jsx(e$,{className:"mr-2 h-4 w-4"}),"Explore"]}),(0,a.jsxs)(o.z,{variant:"outline",size:"sm",children:[a.jsx(eG,{className:"mr-2 h-4 w-4"}),"Settings"]}),(0,a.jsxs)(o.z,{variant:"outline",size:"sm",onClick:()=>{let e=`${window.location.protocol}//${window.location.host}/gratitude-vault/${t?.user?.publicUrl}`;n?(r({title:"Copied to clipboard",description:e}),eB(e)):r({title:"Please copy to clipboard to share!",description:e})},children:[a.jsx(eq,{className:"mr-2 h-4 w-4"}),"Share"]})]}),a.jsx(ez.ScrollArea,{className:"h-[calc(100vh-200px)]",children:e.map((e,t)=>(0,a.jsxs)("div",{className:"bg-background p-2 rounded mb-2",children:[a.jsx("h3",{className:"font-semibold",children:e.title}),a.jsx("p",{className:"text-sm",children:e.content.slice(0,50)}),e.isPublic&&a.jsx("span",{className:"text-xs text-blue-500",children:"Public"})]},t))})]})}function eU(){let[e,t]=(0,s.useState)([]),{toast:r}=F(),n=async()=>{try{let e=await eF();console.log("Gratitudes from fetch Gratitudes",e),t(e)}catch(e){console.error("Error fetching gratitudes:",e),r({title:"Error",description:"Failed to fetch gratitudes. Please try again later.",variant:"destructive"})}},o=async e=>{try{await eV(e),await n(),r({title:"Gratitude Added",description:"Your gratitude has been added to the vault."})}catch(e){console.error("Error adding gratitude:",e),r({title:"Error",description:"Failed to add gratitude. Please try again.",variant:"destructive"})}};return(0,a.jsxs)("div",{className:"flex flex-col md:flex-row h-screen bg-background text-foreground p-4",children:[a.jsx(eH,{gratitudes:e}),a.jsx("div",{className:"flex-grow md:ml-4",children:a.jsx(M,{onAddGratitude:o})}),a.jsx(eI,{})]})}},45438:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>s});var n=r(97247),a=r(19898);function s({children:e}){return n.jsx(a.SessionProvider,{children:e})}},58053:(e,t,r)=>{"use strict";r.d(t,{z:()=>d});var n=r(97247),a=r(28964),s=r(69008),o=r(87972),i=r(25008);let l=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...o},d)=>{let u=a?s.g7:"button";return n.jsx(u,{className:(0,i.cn)(l({variant:t,size:r,className:e})),ref:d,...o})});d.displayName="Button"},70170:(e,t,r)=>{"use strict";r.d(t,{I:()=>o});var n=r(97247),a=r(28964),s=r(25008);let o=a.forwardRef(({className:e,type:t,...r},a)=>n.jsx("input",{type:t,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...r}));o.displayName="Input"},44538:(e,t,r)=>{"use strict";r.d(t,{_:()=>u});var n=r(97247),a=r(28964),s=r(22251),o=a.forwardRef((e,t)=>(0,n.jsx)(s.WV.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";var i=r(87972),l=r(25008);let d=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=a.forwardRef(({className:e,...t},r)=>n.jsx(o,{ref:r,className:(0,l.cn)(d(),e),...t}));u.displayName=o.displayName},81775:(e,t,r)=>{"use strict";r.d(t,{ScrollArea:()=>i});var n=r(97247),a=r(28964),s=r(67290),o=r(25008);let i=a.forwardRef(({className:e,children:t,...r},a)=>(0,n.jsxs)(s.fC,{ref:a,className:(0,o.cn)("relative overflow-hidden",e),...r,children:[n.jsx(s.l_,{className:"h-full w-full rounded-[inherit]",children:t}),n.jsx(l,{}),n.jsx(s.Ns,{})]}));i.displayName=s.fC.displayName;let l=a.forwardRef(({className:e,orientation:t="vertical",...r},a)=>n.jsx(s.gb,{ref:a,orientation:t,className:(0,o.cn)("flex touch-none select-none transition-colors","vertical"===t&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===t&&"h-2.5 border-t border-t-transparent p-[1px]",e),...r,children:n.jsx(s.q4,{className:"relative flex-1 rounded-full bg-border"})}));l.displayName=s.gb.displayName},25008:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var n=r(61929),a=r(35770);function s(...e){return(0,a.m6)((0,n.W)(e))}},26323:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(28964);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,n.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:i="",children:l,iconNode:d,...u},c)=>(0,n.createElement)("svg",{ref:c,...o,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:s("lucide",i),...u},[...d.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let r=(0,n.forwardRef)(({className:r,...o},l)=>(0,n.createElement)(i,{ref:l,iconNode:t,className:s(`lucide-${a(e)}`,r),...o}));return r.displayName=`${e}`,r}},17469:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(45347).createProxy)(String.raw`/home/matth/Projects/GratitudeVault3/app/gratitude-vault/page.tsx#default`)},78864:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>i});var n=r(72051),a=r(31312),s=r.n(a);r(67272);let o=(0,r(45347).createProxy)(String.raw`/home/matth/Projects/GratitudeVault3/components/AuthProvider.tsx#AuthProvider`),i={title:"Gratitude Vault",description:"Your personal space for gratitude and reflection"};function l({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:s().className,children:n.jsx(o,{children:e})})})}},67272:()=>{},87972:(e,t,r)=>{"use strict";r.d(t,{j:()=>o});var n=r(61929);let a=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,s=n.W,o=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:i}=t,l=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],n=null==i?void 0:i[e];if(null===t)return null;let s=a(t)||a(n);return o[e][s]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return s(e,l,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...d}[t]):({...i,...d})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[787,110,538,290],()=>r(75525));module.exports=n})();