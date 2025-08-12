exports.id=371,exports.ids=[371],exports.modules={4475:(e,t,r)=>{"use strict";r.d(t,{b:()=>a,f:()=>i});var s=r(49195),n=r(92526),o=r(86728);let{sanityFetch:i,SanityLive:a}=(0,s.g)({client:n.S,serverToken:o.S,browserToken:o.S})},11816:(e,t,r)=>{"use strict";r.d(t,{L8:()=>c,U8:()=>d,ij:()=>l});var s=r(26235),n=r.n(s),o=r(99693),i=r(87790);let a=n()({projectId:o.Lg||"",dataset:o.RT||""}),l=e=>{if(!e?.asset?._ref)return;let t=e?.asset?._ref,r=e.crop,{width:s,height:n}=(0,i.vX)(t);if(r){let t=Math.floor(s*(1-(r.right+r.left))),o=Math.floor(n*(1-(r.top+r.bottom))),i=Math.floor(s*r.left),l=Math.floor(n*r.top);return a?.image(e).rect(i,l,t,o).auto("format")}return a?.image(e).auto("format")};function d(e,t=1200,r=627){if(!e)return;let s=l(e)?.width(1200).height(627).fit("crop").url();if(s)return{url:s,alt:e?.alt,width:t,height:r}}function c(e){if(!e)return null;switch(!e.linkType&&e.href&&(e.linkType="href"),e.linkType){case"href":return e.href||null;case"page":if(e?.page&&"string"==typeof e.page)return`/${e.page}`;case"post":if(e?.post&&"string"==typeof e.post)return`/posts/${e.post}`;default:return null}}},26570:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,49782,23)),Promise.resolve().then(r.t.bind(r,23552,23)),Promise.resolve().then(r.t.bind(r,30708,23)),Promise.resolve().then(r.t.bind(r,17319,23)),Promise.resolve().then(r.t.bind(r,92079,23)),Promise.resolve().then(r.t.bind(r,8487,23)),Promise.resolve().then(r.t.bind(r,55543,23)),Promise.resolve().then(r.t.bind(r,42241,23))},36810:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var s=r(51441),n=r(11107),o=r(64996);r(72647);var i=r(973);function a(){(0,s.Ay)(),(0,s.r7)(),(0,n.useRouter)();let[e,t]=(0,o.useTransition)();return null}i.callServer,i.findSourceMapURL},37019:(e,t,r)=>{"use strict";r.d(t,{handleError:()=>s});let s=(0,r(20413).registerClientReference)(function(){throw Error("Attempted to call handleError() from the server but handleError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/macbooknow/smeandme/frontend/app/client-utils.ts","handleError")},38165:(e,t,r)=>{"use strict";r.d(t,{handleError:()=>o});var s=r(22875),n=r(72647);function o(e){if((0,s.K)(e)){let{addOriginUrl:t}=e;n.o.error("Sanity Live couldn't connect",{description:"Your origin is blocked by CORS policy",duration:1/0,action:t?{label:"Manage",onClick:()=>window.open(t.toString(),"_blank")}:void 0})}else e instanceof Error?(console.error(e),n.o.error(e.name,{description:e.message,duration:1/0})):(console.error(e),n.o.error("Unknown error",{description:"Check the console for more details",duration:1/0}))}},46373:(e,t,r)=>{"use strict";r.d(t,{$R:()=>u,C6:()=>l,D:()=>m,FQ:()=>p,IR:()=>n,cn:()=>d,dm:()=>f,hq:()=>c});var s=r(38404);let n=(0,s.E)('*[_type == "settings"][0]'),o=`
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`,i=`
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`,a=`
  link {
      ...,
      ${i}
      }
`,l=(0,s.E)(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${a},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${i}
          }
        }
      },
    },
  }
`),d=(0,s.E)(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`),c=(0,s.E)(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${o}
  }
`),p=(0,s.E)(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${o}
  }
`),u=(0,s.E)(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${i}
    }
  },
    ${o}
  }
`),m=(0,s.E)(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`),f=(0,s.E)(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)},55863:(e,t,r)=>{Promise.resolve().then(r.bind(r,37019)),Promise.resolve().then(r.bind(r,75172)),Promise.resolve().then(r.bind(r,37231)),Promise.resolve().then(r.bind(r,62054)),Promise.resolve().then(r.bind(r,63795)),Promise.resolve().then(r.bind(r,1204)),Promise.resolve().then(r.t.bind(r,36018,23)),Promise.resolve().then(r.bind(r,61273))},66322:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,88416,23)),Promise.resolve().then(r.t.bind(r,27342,23)),Promise.resolve().then(r.t.bind(r,74078,23)),Promise.resolve().then(r.t.bind(r,64193,23)),Promise.resolve().then(r.t.bind(r,91573,23)),Promise.resolve().then(r.t.bind(r,95405,23)),Promise.resolve().then(r.t.bind(r,97301,23)),Promise.resolve().then(r.t.bind(r,36159,23))},73332:(e,t,r)=>{"use strict";r.d(t,{Q:()=>n});var s=r(973);let n=(0,s.createServerReference)("7f1cdc5dd80d1d1866c32a4ffa452e9e40258cfac7",s.callServer,void 0,s.findSourceMapURL,"revalidateSyncTags")},75172:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(20413).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/macbooknow/smeandme/frontend/app/components/DraftModeToast.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/macbooknow/smeandme/frontend/app/components/DraftModeToast.tsx","default")},77190:()=>{},83887:(e,t,r)=>{Promise.resolve().then(r.bind(r,38165)),Promise.resolve().then(r.bind(r,36810)),Promise.resolve().then(r.bind(r,42613)),Promise.resolve().then(r.bind(r,43664)),Promise.resolve().then(r.bind(r,89469)),Promise.resolve().then(r.bind(r,60094)),Promise.resolve().then(r.t.bind(r,93948,23)),Promise.resolve().then(r.bind(r,72647))},86728:(e,t,r)=>{"use strict";r.d(t,{S:()=>s});let s=process.env.SANITY_API_READ_TOKEN;if(!s)throw Error("Missing SANITY_API_READ_TOKEN")},87710:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j,generateMetadata:()=>_});var s=r(57307);r(77190);var n=r(63795),o=r(58009),i=r.n(o),a=r(80129),l=r(61374),d=r(68987),c=r(61273),p=r(75172);function u(){return(0,s.jsxs)("footer",{className:"bg-gray-50 relative",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-[url(/images/tile-grid-black.png)] bg-size-[17px] opacity-20 bg-position-[0_1]"}),(0,s.jsx)("div",{className:"container relative",children:(0,s.jsxs)("div",{className:"flex flex-col items-center py-28 lg:flex-row",children:[(0,s.jsx)("h3",{className:"mb-10 text-center text-4xl font-mono leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-2xl",children:"Built with Sanity + Next.js."}),(0,s.jsxs)("div",{className:"flex flex-col gap-3 items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4",children:[(0,s.jsx)("a",{href:"https://github.com/sanity-io/sanity-template-nextjs-clean",className:"rounded-full flex gap-2 font-mono whitespace-nowrap items-center bg-black hover:bg-blue focus:bg-blue py-3 px-6 text-white transition-colors duration-200",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"}),(0,s.jsx)("a",{href:"https://nextjs.org/docs",className:"mx-3 hover:underline font-mono",children:"Read Next.js Documentation"})]})]})})]})}var m=r(36018),f=r.n(m),h=r(46373),g=r(4475);async function b(){let{data:e}=await (0,g.f)({query:h.IR});return(0,s.jsx)("header",{className:"fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg",children:(0,s.jsx)("div",{className:"container py-6 px-2 sm:px-6",children:(0,s.jsxs)("div",{className:"flex items-center justify-between gap-5",children:[(0,s.jsx)(f(),{className:"flex items-center gap-2",href:"/",children:(0,s.jsx)("span",{className:"text-lg sm:text-2xl pl-2 font-semibold",children:e?.title||"Sanity + Next.js"})}),(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{role:"list",className:"flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight font-mono",children:[(0,s.jsx)("li",{children:(0,s.jsx)(f(),{href:"/about",className:"hover:underline",children:"About"})}),(0,s.jsx)("li",{className:"sm:before:w-[1px] sm:before:bg-gray-200 before:block flex sm:gap-4 md:gap-6",children:(0,s.jsxs)(f(),{className:"rounded-full flex gap-4 items-center bg-black hover:bg-blue focus:bg-blue py-2 px-4 justify-center sm:py-3 sm:px-6 text-white transition-colors duration-200",href:"https://github.com/sanity-io/sanity-template-nextjs-clean",target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)("span",{className:"whitespace-nowrap",children:"View on GitHub"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"hidden sm:block h-4 sm:h-6",children:(0,s.jsx)("path",{d:"M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"})})]})})]})})]})})})}let x=[{_key:"9f1a629887fd",_type:"block",children:[{_key:"4a58edd077880",_type:"span",marks:[],text:"A statically generated blog example using "},{_key:"4a58edd077881",_type:"span",marks:["ec5b66c9b1e0"],text:"Next.js"},{_key:"4a58edd077882",_type:"span",marks:[],text:" and "},{_key:"4a58edd077883",_type:"span",marks:["1f8991913ea8"],text:"Sanity"},{_key:"4a58edd077884",_type:"span",marks:[],text:"."}],markDefs:[{_key:"ec5b66c9b1e0",_type:"link",href:"https://nextjs.org/"},{_key:"1f8991913ea8",_type:"link",href:"https://sanity.io/"}],style:"normal"}];var v=r(11816),y=r(37019);async function _(){let e,{data:t}=await (0,g.f)({query:h.IR,stega:!1}),r=t?.title||"Sanity + Next.js",s=t?.description||x,n=(0,v.U8)(t?.ogImage);try{e=t?.ogImage?.metadataBase?new URL(t.ogImage.metadataBase):void 0}catch{}return{metadataBase:e,title:{template:`%s | ${r}`,default:r},description:(0,l.bo)(s),openGraph:{images:n?[n]:[]},formatDetection:{telephone:!1,date:!1,email:!1,address:!1}}}async function j({children:e}){let{isEnabled:t}=await (0,a.rQ)();return(0,s.jsx)("html",{lang:"en",className:`${i().variable} bg-white text-black`,children:(0,s.jsxs)("body",{suppressHydrationWarning:!0,children:[(0,s.jsxs)("section",{className:"min-h-screen pt-24",children:[(0,s.jsx)(c.Toaster,{}),t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.default,{}),(0,s.jsx)(d.FV,{})]}),(0,s.jsx)(g.b,{onError:y.handleError}),(0,s.jsx)(b,{}),(0,s.jsx)("main",{className:"",children:e}),(0,s.jsx)(u,{})]}),(0,s.jsx)(n.SpeedInsights,{})]})})}},88517:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"00c3497ffd0bb11ec1212a644ded045181c7888824":()=>i,"7f03d8f911901519958b0ca33a754831492e8ef188":()=>s.q,"7f1cdc5dd80d1d1866c32a4ffa452e9e40258cfac7":()=>a.Q,"7fad1a86866eae8159178192bea6c7eac425da0af7":()=>a.L});var s=r(91349),n=r(24817);r(69821);var o=r(87558);async function i(){await Promise.allSettled([(await (0,o.rQ)()).disable(),new Promise(e=>setTimeout(e,1e3))])}(0,r(54661).D)([i]),(0,n.A)(i,"00c3497ffd0bb11ec1212a644ded045181c7888824",null);var a=r(19466)},92526:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});var s=r(50680),n=r(99693),o=r(86728);let i=(0,s.UU)({projectId:n.Lg,dataset:n.RT,apiVersion:n.XV,useCdn:!0,perspective:"published",token:o.S,stega:{studioUrl:n.EL,filter:e=>"title"===e.sourcePath.at(-1)||e.filterDefault(e)}})},99693:(e,t,r)=>{"use strict";function s(e,t){if(void 0===e)throw Error(t);return e}r.d(t,{EL:()=>a,Lg:()=>o,RT:()=>n,XV:()=>i});let n=s("production","Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"),o=s("ihejaq0w","Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"),i="2024-10-28",a="http://localhost:3333"}};