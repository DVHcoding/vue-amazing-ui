!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("vue-router")):"function"==typeof define&&define.amd?define(["exports","vue","vue-router"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueAmazingUI={},e.Vue,e.VueRouter)}(this,(function(e,t,a){"use strict";const l=e=>(t.pushScopeId("data-v-0b4fe0d6"),e=e(),t.popScopeId(),e),o={class:"m-pagination-wrap"},n={key:0,class:"mr8"},r=[l((()=>t.createElementVNode("svg",{class:"u-arrow",viewBox:"64 64 896 896","data-icon":"left","aria-hidden":"true",focusable:"false"},[t.createElementVNode("path",{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"})],-1)))],i={class:"u-ellipsis"},s={class:"u-icon",viewBox:"64 64 896 896","data-icon":"double-left","aria-hidden":"true",focusable:"false"},u=[l((()=>t.createElementVNode("path",{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"},null,-1)))],c=["onClick"],d={class:"u-ellipsis"},p={class:"u-icon",viewBox:"64 64 896 896","data-icon":"double-right","aria-hidden":"true",focusable:"false"},f=[l((()=>t.createElementVNode("path",{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"},null,-1)))],m=[l((()=>t.createElementVNode("svg",{class:"u-arrow",viewBox:"64 64 896 896","data-icon":"right","aria-hidden":"true",focusable:"false"},[t.createElementVNode("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"})],-1)))],v={key:1,class:"u-jump-page"},h=(e,t)=>{const a=e.__vccOpts||e;for(const[l,o]of t)a[l]=o;return a},g=h(t.defineComponent({__name:"Pagination",props:{current:{default:1},pageSize:{default:10},total:{default:0},pageListNum:{default:5},hideOnSinglePage:{type:Boolean,default:!1},showQuickJumper:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},placement:{default:"right"}},emits:["change"],setup(e,{emit:a}){const l=e,h=t.ref(l.current),g=t.ref(""),y=t.ref(!1),k=t.ref(!1),w=t.ref(!1),B=t.ref(!1),S=t.computed((()=>Math.ceil(l.total/l.pageSize))),b=t.computed((()=>function(e){var t=[],a=Math.floor(l.pageListNum/2),o={start:e-a,end:e+a};o.start<1&&(o.end=o.end+(1-o.start),o.start=1);o.end>S.value&&(o.start=o.start-(o.end-S.value),o.end=S.value);o.start<1&&(o.start=1);o.start>1?y.value=!0:y.value=!1;o.end<S.value?k.value=!0:k.value=!1;for(let l=o.start;l<=o.end;l++)t.push(l);return t}(h.value).filter((e=>1!==e&&e!==S.value))));function C(){h.value=h.value-l.pageListNum>0?h.value-l.pageListNum:1}function E(){h.value=h.value+l.pageListNum<S.value?h.value+l.pageListNum:S.value}function V(e){if(0===e||e===S.value+1)return!1;h.value!==e&&(h.value=e)}return t.watch(h,(e=>{a("change",{page:e,pageSize:l.pageSize})})),t.onMounted((()=>{document.onkeydown=e=>{const t=e||window.event;t&&13===t.keyCode&&g.value&&function(e){Number(e)&&(Number(e)<1&&(e=1),Number(e)>S.value&&(e=S.value),V(Number(e)));g.value=""}(g.value)}})),(a,l)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass([`m-pagination ${e.placement}`,{hidden:e.hideOnSinglePage&&e.total<=e.pageSize}])},[t.createElementVNode("div",o,[e.showTotal?(t.openBlock(),t.createElementBlock("span",n,"共 "+t.toDisplayString(t.unref(S))+" 页 / "+t.toDisplayString(e.total)+" 条",1)):t.createCommentVNode("",!0),t.createElementVNode("span",{class:t.normalizeClass(["u-item",{disabled:1===h.value}]),onClick:l[0]||(l[0]=e=>V(h.value-1))},r,2),t.createElementVNode("span",{class:t.normalizeClass(["u-item",{active:1===h.value}]),onClick:l[1]||(l[1]=e=>V(1))},"1",2),t.withDirectives(t.createElementVNode("span",{class:"m-arrow",ref:"forward",onClick:C,onMouseenter:l[2]||(l[2]=e=>w.value=!0),onMouseleave:l[3]||(l[3]=e=>w.value=!1)},[t.withDirectives(t.createElementVNode("span",i,"•••",512),[[t.vShow,!w.value]]),t.withDirectives((t.openBlock(),t.createElementBlock("svg",s,u,512)),[[t.vShow,w.value]])],544),[[t.vShow,y.value&&t.unref(b)[0]-1>1]]),(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(b),((e,a)=>(t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(["u-item",{active:h.value===e}]),key:a,onClick:t=>V(e)},t.toDisplayString(e),11,c)))),128)),t.withDirectives(t.createElementVNode("span",{class:"m-arrow",ref:"backward",onClick:E,onMouseenter:l[4]||(l[4]=e=>B.value=!0),onMouseleave:l[5]||(l[5]=e=>B.value=!1)},[t.withDirectives(t.createElementVNode("span",d,"•••",512),[[t.vShow,!B.value]]),t.withDirectives((t.openBlock(),t.createElementBlock("svg",p,f,512)),[[t.vShow,B.value]])],544),[[t.vShow,k.value&&t.unref(b)[t.unref(b).length-1]+1<t.unref(S)]]),t.withDirectives(t.createElementVNode("span",{class:t.normalizeClass(["u-item",{active:h.value===t.unref(S)}]),onClick:l[6]||(l[6]=e=>V(t.unref(S)))},t.toDisplayString(t.unref(S)),3),[[t.vShow,1!==t.unref(S)]]),t.createElementVNode("span",{class:t.normalizeClass(["u-item",{disabled:h.value===t.unref(S)}]),onClick:l[7]||(l[7]=e=>V(h.value+1))},m,2),e.showQuickJumper?(t.openBlock(),t.createElementBlock("span",v,[t.createTextVNode("跳至"),t.withDirectives(t.createElementVNode("input",{type:"text","onUpdate:modelValue":l[8]||(l[8]=e=>g.value=e)},null,512),[[t.vModelText,g.value]]),t.createTextVNode("页")])):t.createCommentVNode("",!0)])],2))}}),[["__scopeId","data-v-0b4fe0d6"]]);g.install=e=>{e.component(g.__name,g)};const y=e=>(t.pushScopeId("data-v-574bc864"),e=e(),t.popScopeId(),e),k=["onClick","title"],w={key:0,class:"u-separator"},B={key:1,class:"u-arrow",viewBox:"64 64 896 896","data-icon":"right","aria-hidden":"true",focusable:"false"},S=[y((()=>t.createElementVNode("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"},null,-1)))],b=y((()=>t.createElementVNode("div",{class:"assist"},null,-1))),C=h(t.defineComponent({__name:"Breadcrumb",props:{routes:{default:()=>[]},height:{default:60},separator:{default:""}},setup(e){const l=e,o=t.computed((()=>l.routes.length)),n=a.useRouter();return(a,l)=>(t.openBlock(),t.createElementBlock("div",{class:"m-breadcrumb",style:t.normalizeStyle(`height: ${e.height}px;`)},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.routes,((a,l)=>(t.openBlock(),t.createElementBlock("div",{class:"m-bread",key:l},[t.createElementVNode("a",{class:t.normalizeClass(["u-route",{active:l===t.unref(o)-1}]),onClick:e=>l===t.unref(o)-1?e=>e.preventDefault():function(e){n.push({path:e.path,query:e.query||{}})}(a),title:a.name},t.toDisplayString(a.name||"--"),11,k),l!==t.unref(o)-1?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[e.separator?(t.openBlock(),t.createElementBlock("span",w,t.toDisplayString(e.separator),1)):(t.openBlock(),t.createElementBlock("svg",B,S))],64)):t.createCommentVNode("",!0)])))),128)),b],4))}}),[["__scopeId","data-v-574bc864"]]);C.install=e=>{e.component(C.__name,C)};const E={class:"m-countdown"},V={class:"u-title"},N={class:"u-time"},x={key:2},_=h(t.defineComponent({__name:"Countdown",props:{countdown:{default:0},title:{default:"Countdown"},format:{default:"HH:mm:ss"},prefix:{default:""},suffix:{default:""},finishedText:{default:""}},emits:["finish"],setup(e,{emit:a}){const l=e,o=t.ref(l.countdown);function n(e){return e<10?"0"+e:String(e)}const r=t.computed((()=>function(e){let t=l.format;if(t.includes("s"))var a=e;else a=0;if(t.includes("m")){a%=60;var o=Math.floor((e-a)/60)}else o=0;if(t.includes("H")){o%=60;var r=Math.floor((e-a-60*o)/60/60)}else r=0;if(t.includes("D")){r%=24;var i=Math.floor((e-a-60*o-60*r*60)/60/60/24)}else i=0;if(t.includes("M")){i%=30;var s=Math.floor((e-a-60*o-60*r*60-24*i*60*60)/60/60/24/30)}else s=0;if(t.includes("Y")){s%=12;var u=Math.floor((e-a-60*o-60*r*60-24*i*60*60-30*s*24*60*60)/60/60/24/30/12)}else u=0;return t=t.includes("ss")?t.replace("ss",n(a)):t.replace("s",String(a)),t=t.includes("mm")?t.replace("mm",n(o)):t.replace("m",String(o)),t=t.includes("HH")?t.replace("HH",n(r)):t.replace("H",String(r)),t=t.includes("DD")?t.replace("DD",n(i)):t.replace("D",String(i)),t=t.includes("MM")?t.replace("MM",n(s)):t.replace("M",String(s)),t=t.includes("YY")?t.replace("YY",n(u)):t.replace("Y",String(u)),t}(o.value)));function i(e){setTimeout((()=>{e.value--,e.value>0?i(e):a("finish")}),1e3)}return t.onMounted((()=>{o.value>Date.now()&&(o.value=Math.floor((o.value-Date.now())/1e3)),i(o)})),(a,n)=>(t.openBlock(),t.createElementBlock("div",E,[t.renderSlot(a.$slots,"title",{},(()=>[t.createElementVNode("p",V,t.toDisplayString(l.title),1)]),!0),t.createElementVNode("div",N,[o.value>0?t.renderSlot(a.$slots,"prefix",{key:0},(()=>[t.createTextVNode(t.toDisplayString(e.prefix),1)]),!0):t.createCommentVNode("",!0),e.finishedText&&0===o.value?t.renderSlot(a.$slots,"finish",{key:1},(()=>[t.createTextVNode(t.toDisplayString(e.finishedText),1)]),!0):(t.openBlock(),t.createElementBlock("span",x,t.toDisplayString(t.unref(r)),1)),o.value>0?t.renderSlot(a.$slots,"suffix",{key:3},(()=>[t.createTextVNode(t.toDisplayString(e.suffix),1)]),!0):t.createCommentVNode("",!0)])]))}}),[["__scopeId","data-v-203f9659"]]);_.install=e=>{e.component(_.__name,_)};const z=e=>(t.pushScopeId("data-v-19a2828d"),e=e(),t.popScopeId(),e),M=["src","poster","width","height","autoplay","controls","loop","muted","preload","onClickOnce"],D=[z((()=>t.createElementVNode("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"},null,-1))),z((()=>t.createElementVNode("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15.25 12L9.75 8.75V15.25L15.25 12Z"},null,-1)))],L=h(t.defineComponent({__name:"Video",props:{videoUrl:{default:""},videoCover:{default:""},width:{default:800},height:{default:450},autoplay:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},preload:{default:"auto"},showPlay:{type:Boolean,default:!1},playWidth:{default:96},zoom:{default:"none"}},setup(e){const a=e,l=t.ref(!0),o=t.ref(!1),n=t.ref(null);function r(){var e,t;a.autoplay?null==(e=n.value)||e.pause():(o.value=!0,l.value=!1,null==(t=n.value)||t.play())}function i(){o.value=!1}function s(){o.value=!0}return t.onMounted((()=>{var e,t;a.showPlay&&(null==(e=n.value)||e.addEventListener("pause",i),null==(t=n.value)||t.addEventListener("playing",s)),a.autoplay&&(o.value=!0,l.value=!1)})),t.onUnmounted((()=>{var e,t;null==(e=n.value)||e.removeEventListener("pause",i),null==(t=n.value)||t.removeEventListener("playing",s)})),(a,i)=>(t.openBlock(),t.createElementBlock("div",{class:"m-video",style:t.normalizeStyle(`width: ${e.width}px; height: ${e.height}px;`)},[t.createElementVNode("video",{ref_key:"veo",ref:n,style:t.normalizeStyle(`object-fit: ${e.zoom};`),src:e.videoUrl,poster:e.videoCover,width:e.width,height:e.height,autoplay:e.autoplay,controls:!l.value&&e.controls,loop:e.loop,muted:e.autoplay||e.muted,preload:e.preload,onClickOnce:t.withModifiers(r,["prevent"])}," 您的浏览器不支持video标签。 ",44,M),t.withDirectives((t.openBlock(),t.createElementBlock("svg",{class:t.normalizeClass([o.value?"hidden":"u-play"]),style:t.normalizeStyle(`width: ${e.playWidth}px; height: ${e.playWidth}px;`),viewBox:"0 0 24 24"},D,6)),[[t.vShow,l.value||e.showPlay]])],4))}}),[["__scopeId","data-v-19a2828d"]]);L.install=e=>{e.component(L.__name,L)};const T=["disabled"],H=h(t.defineComponent({__name:"Button",props:{name:{default:"按钮"},type:{default:"default"},effect:{default:"fade"},size:{default:"middle"},width:{default:0},height:{default:40},borderRadius:{default:4},route:{default:()=>({})},target:{default:"_self"},disabled:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},setup(e){const a=e,l=t.computed((()=>"{}"!==JSON.stringify(a.route)));return(a,o)=>{const n=t.resolveComponent("router-link");return t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(["m-button",{center:e.center}])},[t.unref(l)?(t.openBlock(),t.createBlock(n,{key:0,to:e.route,target:e.target,disabled:e.disabled,class:t.normalizeClass(["u-button fade",[e.type,e.size,{[e.effect]:"default"===e.type,widthType:e.width,disabled:e.disabled}]]),style:t.normalizeStyle({borderRadius:e.borderRadius+"px",width:e.width-2+"px",height:e.height-2+"px",lineHeight:e.height-2+"px"})},{default:t.withCtx((()=>[t.renderSlot(a.$slots,"default",{},(()=>[t.createTextVNode(t.toDisplayString(e.name),1)]),!0)])),_:3},8,["to","target","disabled","class","style"])):(t.openBlock(),t.createElementBlock("a",{key:1,onClick:o[0]||(o[0]=e=>a.$emit("click")),disabled:e.disabled,class:t.normalizeClass(["u-button",[e.type,e.size,{[e.effect]:"default"===e.type,widthType:e.width,disabled:e.disabled}]]),style:t.normalizeStyle({borderRadius:e.borderRadius+"px",width:e.width-2+"px",height:e.height-2+"px",lineHeight:e.height-2+"px"})},[t.renderSlot(a.$slots,"default",{},(()=>[t.createTextVNode(t.toDisplayString(e.name),1)]),!0)],14,T))],2)}}}),[["__scopeId","data-v-90914f40"]]);H.install=e=>{e.component(H.__name,H)};const $=[g,C,_,L,H],I={install:e=>{$.forEach((t=>e.component(t.__name,t)))}};e.Breadcrumb=C,e.Button=H,e.Countdown=_,e.Pagination=g,e.Video=L,e.default=I,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
