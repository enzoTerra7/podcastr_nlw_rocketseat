if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,r)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/YJ3dJGWEkKyxt4nZQWzLP/_buildManifest.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/YJ3dJGWEkKyxt4nZQWzLP/_ssgManifest.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/7b172eb4e6875643a31fcdec031a5c3b3b09702d.b02761dc2757b8b4da04.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/commons.5cb22003cbf9e09c1c4e.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/main-35d28c2a16eac7cf2fec.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/pages/_app-dfe96d5ca9f3cbfc263a.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/pages/_error-1befdc2eb3d48e2bfbf9.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/pages/episodes/%5Bslug%5D-409cfca0f8dc0cb85885.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/pages/index-ba44c378ad1a034600c6.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/polyfills-8f31809deb7932dd0187.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/css/2f350d6154b548508b7b.css",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/css/c65de5e551a510bc88bb.css",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/_next/static/css/c91628b9416022806e69.css",revision:"YJ3dJGWEkKyxt4nZQWzLP"},{url:"/arrow-left.svg",revision:"a4bec8983393a6650eeadc70ceaca3f1"},{url:"/close.svg",revision:"9b6771f1b7acd57867acc9eea3ef9dcc"},{url:"/favicon.png",revision:"9a10a0c57853a065708f39c0cf7c8640"},{url:"/icon-1024x1024.png",revision:"07717d5e7c78398ab549fac81db49a19"},{url:"/icon-128x128.png",revision:"f944a36fa089827baff0c85f2265e5a6"},{url:"/icon-256x256.png",revision:"84bbba49f8419fbf82a2870291fc48f7"},{url:"/icon-512x512.png",revision:"1a3728b6addda79f67debdb58168f110"},{url:"/logo.svg",revision:"270fed2f85e264e3b1b678bb7fb3f2fd"},{url:"/manifest.json",revision:"2fe7c34951291cef57327c1869bdb8b8"},{url:"/pause.svg",revision:"54841e81896727b41392f30ac032a7be"},{url:"/play-green.svg",revision:"de07138a15303202044cb5e780d3fdd3"},{url:"/play-next.svg",revision:"25a2b47e3cda80ad6285c6725bf9d5ba"},{url:"/play-previous.svg",revision:"85b6ed81bd274cf318272535025f002b"},{url:"/play.svg",revision:"4639f696f322c696dc52f91fdf2f6fcc"},{url:"/playing.svg",revision:"2f05f6b73a93700697b0491d1b77370a"},{url:"/repeat.svg",revision:"f61d9bb4e9c66d07ecb06fc5844a52c8"},{url:"/shuffle.svg",revision:"34540ba61de3ff9c3fff2af2c9cad007"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/api\/(?!auth\/callback\/).*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^\/(?!api\/).*$/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
