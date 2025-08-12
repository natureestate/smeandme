(()=>{var e={};e.id=475,e.ids=[475],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4475:(e,t,r)=>{"use strict";r.d(t,{b:()=>s,f:()=>o});var i=r(49195),n=r(92526),a=r(86728);let{sanityFetch:o,SanityLive:s}=(0,i.g)({client:n.S,serverToken:a.S,browserToken:a.S})},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},22507:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e:[e]}function i(e){if(null!=e)return r(e)}function n(e){let t;if("string"==typeof e)try{t=(e=new URL(e)).origin}catch{}return t}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getOrigin:function(){return n},resolveArray:function(){return r},resolveAsArrayOrUndefined:function(){return i}})},24429:()=>{},28354:e=>{"use strict";e.exports=require("util")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},36213:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveManifest:function(){return o},resolveRobots:function(){return n},resolveRouteData:function(){return s},resolveSitemap:function(){return a}});let i=r(22507);function n(e){let t="";for(let r of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,i.resolveArray)(r.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(r.allow)for(let e of(0,i.resolveArray)(r.allow))t+=`Allow: ${e}
`;if(r.disallow)for(let e of(0,i.resolveArray)(r.disallow))t+=`Disallow: ${e}
`;r.crawlDelay&&(t+=`Crawl-delay: ${r.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,i.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function a(e){let t=e.some(e=>Object.keys(e.alternates??{}).length>0),r=e.some(e=>{var t;return!!(null==(t=e.images)?void 0:t.length)}),i=e.some(e=>{var t;return!!(null==(t=e.videos)?void 0:t.length)}),n="";for(let l of(n+='<?xml version="1.0" encoding="UTF-8"?>\n',n+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',r&&(n+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),i&&(n+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),t?n+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':n+=">\n",e)){var a,o,s;n+="<url>\n",n+=`<loc>${l.url}</loc>
`;let e=null==(a=l.alternates)?void 0:a.languages;if(e&&Object.keys(e).length)for(let t in e)n+=`<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;if(null==(o=l.images)?void 0:o.length)for(let e of l.images)n+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(s=l.videos)?void 0:s.length)for(let e of l.videos)n+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(l.lastModified){let e=l.lastModified instanceof Date?l.lastModified.toISOString():l.lastModified;n+=`<lastmod>${e}</lastmod>
`}l.changeFrequency&&(n+=`<changefreq>${l.changeFrequency}</changefreq>
`),"number"==typeof l.priority&&(n+=`<priority>${l.priority}</priority>
`),n+="</url>\n"}return n+"</urlset>\n"}function o(e){return JSON.stringify(e)}function s(e,t){return"robots"===t?n(e):"sitemap"===t?a(e):"manifest"===t?o(e):""}},38404:(e,t,r)=>{"use strict";function i(e){return e}r.d(t,{E:()=>i})},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},46373:(e,t,r)=>{"use strict";r.d(t,{$R:()=>p,C6:()=>l,D:()=>f,FQ:()=>c,IR:()=>n,cn:()=>u,dm:()=>g,hq:()=>d});var i=r(38404);let n=(0,i.E)('*[_type == "settings"][0]'),a=`
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`,o=`
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`,s=`
  link {
      ...,
      ${o}
      }
`,l=(0,i.E)(`
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
        ${s},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${o}
          }
        }
      },
    },
  }
`),u=(0,i.E)(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`),d=(0,i.E)(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${a}
  }
`),c=(0,i.E)(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${a}
  }
`),p=(0,i.E)(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${o}
    }
  },
    ${a}
  }
`),f=(0,i.E)(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`),g=(0,i.E)(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)},49195:(e,t,r)=>{"use strict";r.d(t,{g:()=>d});var i=r(57307),n=r(62054),a=r(37231),o=r(80129),s=r(50680);let l="sanity-preview-perspective";async function u(){return(await (0,o.rQ)()).isEnabled?(await (0,o.UL)()).has(l)?function(e,t){let r="string"==typeof e&&e.includes(",")?e.split(","):e;try{return(0,s.x_)(r),"raw"===r?t:r}catch(i){return console.warn("Invalid perspective:",e,r,i),t}}((await (0,o.UL)()).get(l)?.value,"drafts"):"drafts":"published"}function d(e){let{client:t,serverToken:r,browserToken:s,fetchOptions:l,stega:d=!0}=e;if(!t)throw Error("`client` is required for `defineLive` to function");let c=t.withConfig({allowReconfigure:!1,useCdn:!1}),{token:p}=c.config(),f="u">typeof c.config().stega.studioUrl,g=async function({query:e,params:t={},stega:i,tags:n=["sanity"],perspective:a,tag:s,requestTag:g=s??"next-loader.fetch"}){let v=i??(d&&f&&(await (0,o.rQ)()).isEnabled),m=a??await u(),y="published"===m,_=!(l?.revalidate??!0)&&void 0,{syncTags:h}=await c.fetch(e,await t,{filterResponse:!1,perspective:m,stega:!1,returnQuery:!1,next:{revalidate:_,tags:[...n,"sanity:fetch-sync-tags"]},useCdn:y,cacheMode:y?"noStale":void 0,tag:[g,"fetch-sync-tags"].filter(Boolean).join(".")}),w=[...n,...h?.map(e=>`sanity:${e}`)||[]],{result:x,resultSourceMap:$}=await c.fetch(e,await t,{filterResponse:!1,perspective:m,stega:v,token:"published"!==m&&r?r:p,next:{revalidate:_,tags:w},useCdn:y,cacheMode:y?"noStale":void 0,tag:g});return{data:x,sourceMap:$||null,tags:w}};return{sanityFetch:g,SanityLive:async function(e){let{refreshOnMount:t,refreshOnFocus:r,refreshOnReconnect:a,tag:l,requestTag:d=l,onError:p,onGoAway:f,intervalOnGoAway:g,revalidateSyncTags:v}=e,{projectId:m,dataset:y,apiHost:_,apiVersion:h,useProjectHostname:w,requestTagPrefix:x}=c.config(),{isEnabled:$}=await (0,o.rQ)();return(0,i.jsx)(n.default,{projectId:m,dataset:y,apiHost:_,apiVersion:h,useProjectHostname:w,requestTagPrefix:x,requestTag:d,token:"string"==typeof s&&$?s:void 0,draftModeEnabled:$,draftModePerspective:await u(),refreshOnMount:t,refreshOnFocus:r,refreshOnReconnect:a,onError:p,onGoAway:f,intervalOnGoAway:g,revalidateSyncTags:v})},SanityLiveStream:async function(e){let{query:t,params:r,perspective:n,stega:s,tags:l,children:p,tag:v,requestTag:m=v??"next-loader.live-stream.fetch"}=e,{data:y,sourceMap:_,tags:h}=await g({query:t,params:r,tags:l,perspective:n,stega:s,requestTag:m}),{isEnabled:w}=await (0,o.rQ)();if(w){let e=s??(d&&f&&(await (0,o.rQ)()).isEnabled),l=n??await u(),{projectId:g,dataset:v}=c.config();return(0,i.jsx)(a.default,{projectId:g,dataset:v,query:t,params:await r,perspective:l,stega:e,initial:p({data:y,sourceMap:_,tags:h}),children:p})}return p({data:y,sourceMap:_,tags:h})}}}},55511:e=>{"use strict";e.exports=require("crypto")},55591:e=>{"use strict";e.exports=require("https")},57307:(e,t,r)=>{"use strict";e.exports=r(5853).vendored["react-rsc"].ReactJsxRuntime},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64749:()=>{},72840:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>w,routeModule:()=>m,serverHooks:()=>h,workAsyncStorage:()=>y,workUnitAsyncStorage:()=>_});var i={};r.r(i),r.d(i,{default:()=>p});var n={};r.r(n),r.d(n,{GET:()=>v});var a=r(30781),o=r(60554),s=r(31625),l=r(96396),u=r(4475),d=r(46373),c=r(80129);async function p(){let e=await (0,u.f)({query:d.cn}),t=await (0,c.b3)(),r=[],i=t.get("host");if(r.push({url:i,lastModified:new Date,priority:1,changeFrequency:"monthly"}),null!=e&&0!=e.data.length){let t,n,a;for(let o of e.data){switch(o._type){case"page":t=.8,n="monthly",a=`${i}/${o.slug}`;break;case"post":t=.5,n="never",a=`${i}/posts/${o.slug}`}r.push({lastModified:o._updatedAt||new Date,priority:t,changeFrequency:n,url:a})}}return r}var f=r(36213);let g={...i}.default;if("function"!=typeof g)throw Error('Default export is missing in "/Users/macbooknow/smeandme/frontend/app/sitemap.ts"');async function v(e,t){let{__metadata_id__:r,...i}=await t.params||{},n=!!r&&r.endsWith(".xml");if(r&&!n)return new l.NextResponse("Not Found",{status:404});let a=r&&n?r.slice(0,-4):void 0,o=await g({id:a}),s=(0,f.resolveRouteData)(o,"sitemap");return new l.NextResponse(s,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}let m=new a.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"next-metadata-route-loader?filePath=%2FUsers%2Fmacbooknow%2Fsmeandme%2Ffrontend%2Fapp%2Fsitemap.ts&isDynamicRouteExtension=1!?__next_metadata_route__",nextConfigOutput:"standalone",userland:n}),{workAsyncStorage:y,workUnitAsyncStorage:_,serverHooks:h}=m;function w(){return(0,s.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:_})}},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},86728:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});let i=process.env.SANITY_API_READ_TOKEN;if(!i)throw Error("Missing SANITY_API_READ_TOKEN")},92526:(e,t,r)=>{"use strict";r.d(t,{S:()=>o});var i=r(50680),n=r(99693),a=r(86728);let o=(0,i.UU)({projectId:n.Lg,dataset:n.RT,apiVersion:n.XV,useCdn:!0,perspective:"published",token:a.S,stega:{studioUrl:n.EL,filter:e=>"title"===e.sourcePath.at(-1)||e.filterDefault(e)}})},94735:e=>{"use strict";e.exports=require("events")},99693:(e,t,r)=>{"use strict";function i(e,t){if(void 0===e)throw Error(t);return e}r.d(t,{EL:()=>s,Lg:()=>a,RT:()=>n,XV:()=>o});let n=i("production","Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"),a=i("ihejaq0w","Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"),o="2024-10-28",s="http://localhost:3333"}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[29,971,146],()=>r(72840));module.exports=i})();