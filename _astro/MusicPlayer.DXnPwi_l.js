import{o as Ma,a as Pa,i as za,s as N,b as rt,e as Le}from"./lifecycle.BEG9Hqc7.js";import{a3 as Wa,aa as Ia,aH as $a,aI as Ra,o as Na,u as Oa,aJ as Ka,aK as ze,aL as Ya,v as qa,aM as ht,c as st,f as tt,a as O,p as Ha,b as Ua,h as o,m as B,aF as q,g as t,d as vt,s as v,e as r,r as i,n as Ga,t as Pt,k as h}from"./utils.BRGgQGxY.js";import{a as Xa,s as J}from"./render.BvoO-zwv.js";import{i as z}from"./if.DArQ9Kbp.js";import{e as Ja,i as Va}from"./each.BJig15T2.js";import{b as Te}from"./this.C5OF1Wpg.js";import{I as p}from"./Icon.BAZp79VP.js";import{m as xt}from"./config.DA06Tzdn.js";import{I as Qa}from"./zh_TW.D-i86LJH.js";import{i as Za}from"./translation.BXeeSs4s.js";import"./props.CFgvYuj9.js";const ti=()=>performance.now(),V={tick:c=>requestAnimationFrame(c),now:()=>ti(),tasks:new Set};function We(){const c=V.now();V.tasks.forEach(s=>{s.c(c)||(V.tasks.delete(s),s.f())}),V.tasks.size!==0&&V.tick(We)}function ei(c){let s;return V.tasks.size===0&&V.tick(We),{promise:new Promise(w=>{V.tasks.add(s={c,f:w})}),abort(){V.tasks.delete(s)}}}function zt(c,s){ze(()=>{c.dispatchEvent(new CustomEvent(s))})}function ai(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const s=c.split("-");return s.length===1?s[0]:s[0]+s.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function Me(c){const s={},w=c.split(";");for(const E of w){const[S,C]=E.split(":");if(!S||C===void 0)break;const W=ai(S.trim());s[W]=C.trim()}return s}const ii=c=>c;function ri(c,s,w,E){var S=(c&Ka)!==0,C="both",W,x=s.inert,A=s.style.overflow,d,g;function P(){return ze(()=>W??=w()(s,E?.()??{},{direction:C}))}var F={is_global:S,in(){s.inert=x,zt(s,"introstart"),d=ae(s,P(),g,1,()=>{zt(s,"introend"),d?.abort(),d=W=void 0,s.style.overflow=A})},out(T){s.inert=!0,zt(s,"outrostart"),g=ae(s,P(),d,0,()=>{zt(s,"outroend"),T?.()})},stop:()=>{d?.abort(),g?.abort()}},j=Wa;if((j.transitions??=[]).push(F),Xa){var L=S;if(!L){for(var u=j.parent;u&&(u.f&Ia)!==0;)for(;(u=u.parent)&&(u.f&$a)===0;);L=!u||(u.f&Ra)!==0}L&&Na(()=>{Oa(()=>F.in())})}}function ae(c,s,w,E,S){var C=E===1;if(Ya(s)){var W,x=!1;return qa(()=>{if(!x){var T=s({direction:C?"in":"out"});W=ae(c,T,w,E,S)}}),{abort:()=>{x=!0,W?.abort()},deactivate:()=>W.deactivate(),reset:()=>W.reset(),t:()=>W.t()}}if(w?.deactivate(),!s?.duration)return S(),{abort:ht,deactivate:ht,reset:ht,t:()=>E};const{delay:A=0,css:d,tick:g,easing:P=ii}=s;var F=[];if(C&&w===void 0&&(g&&g(0,1),d)){var j=Me(d(0,1));F.push(j,j)}var L=()=>1-E,u=c.animate(F,{duration:A,fill:"forwards"});return u.onfinish=()=>{u.cancel();var T=w?.t()??1-E;w?.abort();var b=E-T,et=s.duration*Math.abs(b),at=[];if(et>0){var I=!1;if(d)for(var m=Math.ceil(et/16.666666666666668),y=0;y<=m;y+=1){var a=T+b*P(y/m),Q=Me(d(a,1-a));at.push(Q),I||=Q.overflow==="hidden"}I&&(c.style.overflow="hidden"),L=()=>{var H=u.currentTime;return T+b*P(H/et)},g&&ei(()=>{if(u.playState!=="running")return!1;var H=L();return g(H,1-H),!0})}u=c.animate(at,{duration:et,fill:"forwards"}),u.onfinish=()=>{L=()=>E,g?.(E,1-E),S()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=ht)},deactivate:()=>{S=ht},reset:()=>{E===0&&g?.(1,0)},t:()=>L()}}function Pe(c){return function(...s){var w=s[0];return w.stopPropagation(),c?.apply(this,s)}}function si(c){const s=c-1;return s*s*s+1}function ni(c,{delay:s=0,duration:w=400,easing:E=si,axis:S="y"}={}){const C=getComputedStyle(c),W=+C.opacity,x=S==="y"?"height":"width",A=parseFloat(C[x]),d=S==="y"?["top","bottom"]:["left","right"],g=d.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),P=parseFloat(C[`padding${g[0]}`]),F=parseFloat(C[`padding${g[1]}`]),j=parseFloat(C[`margin${g[0]}`]),L=parseFloat(C[`margin${g[1]}`]),u=parseFloat(C[`border${g[0]}Width`]),T=parseFloat(C[`border${g[1]}Width`]);return{delay:s,duration:w,easing:E,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*W};${x}: ${b*A}px;padding-${d[0]}: ${b*P}px;padding-${d[1]}: ${b*F}px;margin-${d[0]}: ${b*j}px;margin-${d[1]}: ${b*L}px;border-${d[0]}-width: ${b*u}px;border-${d[1]}-width: ${b*T}px;min-${x}: 0`}}var li=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),oi=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ui=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),ci=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),di=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vi=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Fi(c,s){Ua(s,!1);let w=xt.mode??"local",E=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",S=xt.id??"14164869977",C=xt.server??"netease",W=xt.type??"playlist",x=B(!1),A=B(!1),d=B(!1),g=B(!1),P=B(0),F=B(0),j=B(.7),L=B(!1),u=B(!1),T=B(!1),b=B(0),et=B(""),at=B(!1),I=B({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),m=B([]),y=B(0),a=B(),Q=B(),H=B();const Ie=[{id:1,title:"把回忆拼好给你",artist:"王贰浪",cover:"assets/music/cover/把回忆拼好给你.jpg",url:"assets/music/url/把回忆拼好给你.mp3",duration:240},{id:2,title:"斑马斑马",artist:"宋东野",cover:"assets/music/cover/斑马斑马.jpg",url:"assets/music/url/斑马斑马.mp3",duration:180},{id:3,title:"不要说话",artist:"陈奕迅",cover:"assets/music/cover/不要说话.png",url:"assets/music/url/不要说话.mp3",duration:200},{id:4,title:"程艾影",artist:"赵雷",cover:"assets/music/cover/程艾影.jpg",url:"assets/music/url/程艾影.mp3",duration:200},{id:5,title:"朵",artist:"赵雷",cover:"assets/music/cover/朵.jpg",url:"assets/music/url/朵.mp3",duration:200},{id:6,title:"房间",artist:"刘瑞琦",cover:"assets/music/cover/房间.jpg",url:"assets/music/url/房间.mp3",duration:200},{id:7,title:"富士山下",artist:"陈奕迅",cover:"assets/music/cover/富士山下.png",url:"assets/music/url/富士山下.mp3",duration:200},{id:8,title:"孤独患者",artist:"陈奕迅",cover:"assets/music/cover/孤独患者.jpg",url:"assets/music/url/孤独患者.mp3",duration:200},{id:9,title:"怪咖",artist:"薛之谦",cover:"assets/music/cover/怪咖.png",url:"assets/music/url/怪咖.mp3",duration:200},{id:10,title:"南方姑娘",artist:"赵雷",cover:"assets/music/cover/南方姑娘.jpg",url:"assets/music/url/南方姑娘.mp3",duration:200},{id:11,title:"十面埋伏",artist:"陈奕迅",cover:"assets/music/cover/十面埋伏.png",url:"assets/music/url/十面埋伏.mp3",duration:200},{id:12,title:"我只能离开",artist:"颜人中",cover:"assets/music/cover/我只能离开.png",url:"assets/music/url/我只能离开.mp3",duration:200},{id:13,title:"下一个天亮",artist:"郭静",cover:"assets/music/cover/下一个天亮.png",url:"assets/music/url/下一个天亮.mp3",duration:200},{id:14,title:"像风一样",artist:"薛之谦",cover:"assets/music/cover/像风一样.jpg",url:"assets/music/url/像风一样.mp3",duration:200},{id:15,title:"最初的记忆",artist:"徐佳莹",cover:"assets/music/cover/最初的记忆.jpg",url:"assets/music/url/最初的记忆.mp3",duration:200},{id:16,title:"CruelSummer",artist:"Talor Swift",cover:"assets/music/cover/CruelSummer.png",url:"assets/music/url/CruelSummer.mp3",duration:200},{id:17,title:"exile",artist:"Talor Swift",cover:"assets/music/cover/exile.png",url:"assets/music/url/exile.mp3",duration:200},{id:18,title:"OneLastKiss",artist:"宇多田ヒカル",cover:"assets/music/cover/OneLastKiss.jpg",url:"assets/music/url/OneLastKiss.mp3",duration:200},{id:19,title:"WhoSays",artist:"Selena Gomez",cover:"assets/music/cover/WhoSays.jpg",url:"assets/music/url/WhoSays.mp3",duration:200}];async function $e(){if(!E||!S)return;o(u,!0);const n=E.replace(":server",C).replace(":type",W).replace(":id",S).replace(":auth","").replace(":r",Date.now().toString());try{const M=await fetch(n);if(!M.ok)throw new Error("meting api error");const U=await M.json();o(m,U.map(R=>{let pt=R.name??R.title??"未知歌曲",Bt=R.artist??R.author??"未知艺术家",$=R.duration??0;return $>1e4&&($=Math.floor($/1e3)),(!Number.isFinite($)||$<=0)&&($=0),{id:R.id,title:pt,artist:Bt,cover:R.pic??"",url:R.url??"",duration:$}})),t(m).length>0&&It(t(m)[0]),o(u,!1)}catch{Ft("Meting 歌单获取失败"),o(u,!1)}}function Re(){!t(a)||!t(I).url||(t(x)?t(a).pause():t(a).play())}function yt(){o(A,!t(A)),t(A)&&(o(g,!1),o(d,!1))}function _t(){o(d,!t(d)),t(d)&&(o(A,!1),o(g,!1))}function ie(){o(g,!t(g))}function Ne(){o(T,!t(T))}function Oe(){o(b,(t(b)+1)%3)}function Ke(){if(t(m).length<=1)return;const n=t(y)>0?t(y)-1:t(m).length-1;wt(n)}function Wt(){if(t(m).length<=1)return;let n;if(t(T))do n=Math.floor(Math.random()*t(m).length);while(n===t(y)&&t(m).length>1);else n=t(y)<t(m).length-1?t(y)+1:0;wt(n)}function wt(n){if(n<0||n>=t(m).length)return;const M=t(x);o(y,n),t(a)&&t(a).pause(),It(t(m)[t(y)]),(M||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function Et(n){return n.startsWith("http://")||n.startsWith("https://")||n.startsWith("/")?n:`/${n}`}function It(n){!n||!t(a)||(o(I,{...n}),n.url?(o(u,!0),t(a).pause(),q(a,t(a).currentTime=0),o(P,0),o(F,n.duration??0),t(a).removeEventListener("loadeddata",re),t(a).removeEventListener("error",se),t(a).removeEventListener("loadstart",ne),t(a).addEventListener("loadeddata",re,{once:!0}),t(a).addEventListener("error",se,{once:!0}),t(a).addEventListener("loadstart",ne,{once:!0}),q(a,t(a).src=Et(n.url)),t(a).load()):o(u,!1))}function re(){o(u,!1),t(a)?.duration&&t(a).duration>1&&(o(F,Math.floor(t(a).duration)),t(m)[t(y)]&&q(m,t(m)[t(y)].duration=t(F)),q(I,t(I).duration=t(F)))}function se(n){o(u,!1),Ft(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(m).length>1?setTimeout(()=>Wt(),1e3):Ft("播放列表中没有可用的歌曲")}function ne(){}function Ft(n){o(et,n),o(at,!0),setTimeout(()=>{o(at,!1)},3e3)}function Ye(){o(at,!1)}function qe(n){if(!t(a)||!t(Q))return;const M=t(Q).getBoundingClientRect(),R=(n.clientX-M.left)/M.width*t(F);q(a,t(a).currentTime=R),o(P,R)}function He(n){if(!t(a)||!t(H))return;const M=t(H).getBoundingClientRect(),U=Math.max(0,Math.min(1,(n.clientX-M.left)/M.width));o(j,U),q(a,t(a).volume=t(j)),o(L,t(j)===0)}function le(){t(a)&&(o(L,!t(L)),q(a,t(a).muted=t(L)))}function oe(n){if(!Number.isFinite(n)||n<0)return"0:00";const M=Math.floor(n/60),U=Math.floor(n%60);return`${M}:${U.toString().padStart(2,"0")}`}function Ue(){t(a)&&(t(a).addEventListener("play",()=>{o(x,!0)}),t(a).addEventListener("pause",()=>{o(x,!1)}),t(a).addEventListener("timeupdate",()=>{o(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(b)===1?(q(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(b)===2||t(y)<t(m).length-1||t(T)?Wt():o(x,!1)}),t(a).addEventListener("error",n=>{o(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ma(()=>{o(a,new Audio),q(a,t(a).volume=t(j)),Ue(),w==="meting"?$e():(o(m,[...Ie]),t(m).length>0?It(t(m)[0]):Ft("本地播放列表为空"))}),Pa(()=>{t(a)&&(t(a).pause(),q(a,t(a).src=""))}),za();var ue=st(),Ge=tt(ue);{var Xe=n=>{var M=vi(),U=tt(M);{var R=e=>{var f=li(),_=r(f),k=r(_);p(k,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var D=v(k,2),l=r(D,!0);i(D);var G=v(D,2),ct=r(G);p(ct,{icon:"material-symbols:close",class:"text-lg"}),i(G),i(_),i(f),Pt(()=>J(l,t(et))),h("click",G,Ye),O(e,f)};z(U,e=>{t(at)&&e(R)})}var pt=v(U,2);let Bt;var $=r(pt);let ce;var Je=r($);{var Ve=e=>{p(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var f=st(),_=tt(f);{var k=l=>{var G=oi();O(l,G)},D=l=>{p(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(_,l=>{t(x)?l(k):l(D,!1)},!0)}O(e,f)};z(Je,e=>{t(u)?e(Ve):e(Qe,!1)})}i($);var nt=v($,2);let de;var ve=r(nt),$t=r(ve),Rt=r($t);let pe;var me=v(Rt,2),Ze=r(me);{var ta=e=>{p(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ea=e=>{var f=st(),_=tt(f);{var k=l=>{p(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},D=l=>{p(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(_,l=>{t(x)?l(k):l(D,!1)},!0)}O(e,f)};z(Ze,e=>{t(u)?e(ta):e(ea,!1)})}i(me),i($t);var Nt=v($t,2),Ot=r(Nt),aa=r(Ot,!0);i(Ot);var fe=v(Ot,2),ia=r(fe,!0);i(fe),i(Nt);var ge=v(Nt,2),Ct=r(ge),ra=r(Ct);p(ra,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ct);var Kt=v(Ct,2),sa=r(Kt);p(sa,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Kt),i(ge),i(ve),i(nt);var kt=v(nt,2);let be;var Yt=r(kt),qt=r(Yt),he=r(qt);let xe;i(qt);var Ht=v(qt,2),Ut=r(Ht),na=r(Ut,!0);i(Ut);var Gt=v(Ut,2),la=r(Gt,!0);i(Gt);var ye=v(Gt,2),oa=r(ye);i(ye),i(Ht);var _e=v(Ht,2),At=r(_e),ua=r(At);p(ua,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(At);var Xt=v(At,2),ca=r(Xt);p(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Xt),i(_e),i(Yt);var Jt=v(Yt,2),lt=r(Jt),da=r(lt);i(lt),Te(lt,e=>o(Q,e),()=>t(Q)),i(Jt);var Vt=v(Jt,2),ot=r(Vt);let we;var va=r(ot);p(va,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var mt=v(ot,2),pa=r(mt);p(pa,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(mt);var ut=v(mt,2);let Ee;var ma=r(ut);{var fa=e=>{p(e,{icon:"eos-icons:loading",class:"text-xl"})},ga=e=>{var f=st(),_=tt(f);{var k=l=>{p(l,{icon:"material-symbols:pause",class:"text-xl"})},D=l=>{p(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(_,l=>{t(x)?l(k):l(D,!1)},!0)}O(e,f)};z(ma,e=>{t(u)?e(fa):e(ga,!1)})}i(ut);var ft=v(ut,2),ba=r(ft);p(ba,{icon:"material-symbols:skip-next",class:"text-xl"}),i(ft);var Dt=v(ft,2);let Fe;var ha=r(Dt);{var xa=e=>{p(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ya=e=>{var f=st(),_=tt(f);{var k=l=>{p(l,{icon:"material-symbols:repeat",class:"text-lg"})},D=l=>{p(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(_,l=>{t(b)===2?l(k):l(D,!1)},!0)}O(e,f)};z(ha,e=>{t(b)===1?e(xa):e(ya,!1)})}i(Dt),i(Vt);var Be=v(Vt,2),St=r(Be),_a=r(St);{var wa=e=>{p(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ea=e=>{var f=st(),_=tt(f);{var k=l=>{p(l,{icon:"material-symbols:volume-down",class:"text-lg"})},D=l=>{p(l,{icon:"material-symbols:volume-up",class:"text-lg"})};z(_,l=>{t(j)<.5?l(k):l(D,!1)},!0)}O(e,f)};z(_a,e=>{t(L)||t(j)===0?e(wa):e(Ea,!1)})}i(St);var it=v(St,2),Fa=r(it);i(it),Te(it,e=>o(H,e),()=>t(H));var jt=v(it,2);let Ce;var Ba=r(jt);p(Ba,{icon:"material-symbols:queue-music",class:"text-lg"}),i(jt),i(Be),i(kt);var Ca=v(kt,2);{var ka=e=>{var f=di(),_=r(f),k=r(_),D=r(k,!0);i(k);var l=v(k,2),G=r(l);p(G,{icon:"material-symbols:close",class:"text-lg"}),i(l),i(_);var ct=v(_,2);Ja(ct,5,()=>t(m),Va,(gt,Z,K)=>{var X=ci();let Lt;var bt=r(X),Aa=r(bt);{var Da=Y=>{p(Y,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Sa=Y=>{var Mt=st(),te=tt(Mt);{var ee=dt=>{p(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ta=dt=>{var je=ui();je.textContent=K+1,O(dt,je)};z(te,dt=>{K===t(y)?dt(ee):dt(Ta,!1)},!0)}O(Y,Mt)};z(Aa,Y=>{K===t(y)&&t(x)?Y(Da):Y(Sa,!1)})}i(bt);var Qt=v(bt,2),ke=r(Qt);i(Qt);var Ae=v(Qt,2),Tt=r(Ae);let De;var ja=r(Tt,!0);i(Tt);var Zt=v(Tt,2);let Se;var La=r(Zt,!0);i(Zt),i(Ae),i(X),Pt((Y,Mt,te,ee)=>{Lt=N(X,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Lt,Y),rt(X,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),rt(ke,"src",Mt),rt(ke,"alt",t(Z).title),De=N(Tt,1,"font-medium truncate",null,De,te),J(ja,t(Z).title),Se=N(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,Se,ee),J(La,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":K===t(y),"text-[var(--primary)]":K===t(y)}),()=>Et(t(Z).cover),()=>({"text-[var(--primary)]":K===t(y),"text-90":K!==t(y)}),()=>({"text-[var(--primary)]":K===t(y)})]),h("click",X,()=>wt(K)),h("keydown",X,Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),wt(K))}),O(gt,X)}),i(ct),i(f),Pt(gt=>J(D,gt),[()=>Za(Qa.playlist)]),h("click",l,ie),ri(3,f,()=>ni,()=>({duration:300,axis:"y"})),O(e,f)};z(Ca,e=>{t(g)&&e(ka)})}i(pt),Ga(2),Pt((e,f,_,k,D,l,G,ct,gt,Z,K,X,Lt,bt)=>{Bt=N(pt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Bt,e),ce=N($,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,f),de=N(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,_),rt(Rt,"src",k),pe=N(Rt,1,"w-full h-full object-cover transition-transform duration-300",null,pe,D),J(aa,t(I).title),J(ia,t(I).artist),be=N(kt,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,be,l),rt(he,"src",G),xe=N(he,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),J(na,t(I).title),J(la,t(I).artist),J(oa,`${gt??""} / ${Z??""}`),rt(lt,"aria-valuenow",t(F)>0?t(P)/t(F)*100:0),Le(da,`width: ${t(F)>0?t(P)/t(F)*100:0}%`),we=N(ot,1,"w-10 h-10 rounded-lg",null,we,K),ot.disabled=t(m).length<=1,mt.disabled=t(m).length<=1,Ee=N(ut,1,"btn-regular w-12 h-12 rounded-full",null,Ee,X),ut.disabled=t(u),ft.disabled=t(m).length<=1,Fe=N(Dt,1,"w-10 h-10 rounded-lg",null,Fe,Lt),rt(it,"aria-valuenow",t(j)*100),Le(Fa,`width: ${t(j)*100}%`),Ce=N(jt,1,"btn-plain w-8 h-8 rounded-lg",null,Ce,bt)},[()=>({expanded:t(A),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(A)||t(d),"scale-95":t(A)||t(d),"pointer-events-none":t(A)||t(d)}),()=>Et(t(I).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>({"opacity-0":!t(A),"scale-95":!t(A),"pointer-events-none":!t(A)}),()=>Et(t(I).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>oe(t(P)),()=>oe(t(F)),()=>({"btn-regular":t(T),"btn-plain":!t(T)}),()=>({"opacity-50":t(u)}),()=>({"btn-regular":t(b)>0,"btn-plain":t(b)===0}),()=>({"text-[var(--primary)]":t(g)})]),h("click",$,_t),h("keydown",$,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),h("click",Ct,Pe(_t)),h("click",Kt,Pe(yt)),h("click",nt,yt),h("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),h("click",At,_t),h("click",Xt,yt),h("click",lt,qe),h("keydown",lt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const _=.5*t(F);t(a)&&(q(a,t(a).currentTime=_),o(P,_))}}),h("click",ot,Ne),h("click",mt,Ke),h("click",ut,Re),h("click",ft,Wt),h("click",Dt,Oe),h("click",St,le),h("click",it,He),h("keydown",it,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&le())}),h("click",jt,ie),O(n,M)};z(Ge,n=>{n(Xe)})}O(c,ue),Ha()}export{Fi as default};
