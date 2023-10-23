"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[32315],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>b});var r=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,p=t.parentName,u=n(t,["components","mdxType","originalType","parentName"]),s=m(a),b=l,c=s["".concat(p,".").concat(b)]||s[b]||h[b]||o;return a?r.createElement(c,i(i({ref:e},u),{},{components:a})):r.createElement(c,i({ref:e},u))}));function b(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,i=new Array(o);i[0]=s;var n={};for(var p in e)hasOwnProperty.call(e,p)&&(n[p]=e[p]);n.originalType=t,n.mdxType="string"==typeof t?t:l,i[1]=n;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7661:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>m});var r=a(87462),l=(a(67294),a(3905));const o={title:"HertzBeat v1.4.1 released, better experience!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},i=void 0,n={permalink:"/blog/2023/09/26/hertzbeat-v1.4.1",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2023-09-26-hertzbeat-v1.4.1.md",source:"@site/blog/2023-09-26-hertzbeat-v1.4.1.md",title:"HertzBeat v1.4.1 released, better experience!",description:"hertzBeat",date:"2023-09-26T00:00:00.000Z",formattedDate:"September 26, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:5.32,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat v1.4.1 released, better experience!",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},nextItem:{title:"HertzBeat v1.4.0 released, cluster is coming!",permalink:"/blog/2023/08/14/hertzbeat-v1.4.0"}},p={authorsImageUrls:[void 0]},m=[{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:3},{value:"Features",id:"features",level:3},{value:"HertzBeat&#39;s 1.4.1 version is coming!",id:"hertzbeats-141-version-is-coming",level:3},{value:"Install quickly via docker",id:"install-quickly-via-docker",level:3},{value:"What&#39;s Changed",id:"whats-changed",level:3},{value:"\u26c4 Supported",id:"-supported",level:2}],u={toc:m};function h(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzBeat",src:a(48243).Z,width:"4064",height:"2166"})),(0,l.kt)("h3",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat")," is an open source, real-time monitoring system with custom monitoring, high performance cluster and agentless capabilities."),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Combines ",(0,l.kt)("strong",{parentName:"li"},"monitoring, alarm, and notification")," features into one platform, and supports monitoring for web service, database, os, middleware, cloud-native, network and more."),(0,l.kt)("li",{parentName:"ul"},"Easy to use and agentless, offering full web-based operations for monitoring and alerting with just a few clicks, all at zero learning cost."),(0,l.kt)("li",{parentName:"ul"},"Makes protocols such as ",(0,l.kt)("inlineCode",{parentName:"li"},"Http, Jmx, Ssh, Snmp, Jdbc")," configurable, allowing you to collect any metrics by simply configuring the template ",(0,l.kt)("inlineCode",{parentName:"li"},"YML")," file online. Imagine being able to quickly adapt to a new monitoring type like K8s or Docker simply by configuring online with HertzBeat."),(0,l.kt)("li",{parentName:"ul"},"High performance, supports horizontal expansion of multi-collector clusters, multi-isolated network monitoring and cloud-edge collaboration."),(0,l.kt)("li",{parentName:"ul"},"Provides flexible alarm threshold rules and timely notifications delivered via  ",(0,l.kt)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Email")," ",(0,l.kt)("inlineCode",{parentName:"li"},"DingDing")," ",(0,l.kt)("inlineCode",{parentName:"li"},"WeChat")," ",(0,l.kt)("inlineCode",{parentName:"li"},"FeiShu")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhook")," ",(0,l.kt)("inlineCode",{parentName:"li"},"SMS"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"HertzBeat's powerful customization, multi-type support, high performance, easy expansion, and low coupling, aims to help developers and teams quickly build their own monitoring system.",(0,l.kt)("br",{parentName:"p"}),"\n","We also provide ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"SaaS Monitoring Cloud")),", users no longer need to deploy a cumbersome monitoring system to monitor their resources. ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"Get started online for free")),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzBeat",src:a(10288).Z,width:"2814",height:"1772"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Github: ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Gitee: ",(0,l.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))),(0,l.kt)("h3",{id:"hertzbeats-141-version-is-coming"},"HertzBeat's 1.4.1 version is coming!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"new login page"),(0,l.kt)("img",{width:"1952",alt:"image",src:"https://github.com/dromara/hertzbeat/assets/24788200/5bc5015a-9343-472d-9754-6b06b9138893"}),(0,l.kt)("img",{width:"1950",alt:"image",src:"https://github.com/dromara/hertzbeat/assets/24788200/71a29284-9cad-4ed2-983a-50430ddb1e2f"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"collector manage"))),(0,l.kt)("img",{width:"1943",alt:"image",src:"https://github.com/dromara/hertzbeat/assets/24788200/ba79f743-a450-4b01-adf0-5f15f3722c19"}),(0,l.kt)("img",{width:"1901",alt:"image",src:"https://github.com/dromara/hertzbeat/assets/24788200/b090ec18-5aae-444e-9ef6-e62fd1d8d239"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"new help moudle")),(0,l.kt)("img",{width:"1942",alt:"image",src:"https://github.com/dromara/hertzbeat/assets/24788200/c635fab6-504b-47de-9b7e-0c2df86f7e6a"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"monitor metrics dashboard name i18n")),(0,l.kt)("img",{width:"1802",alt:"image",src:"https://github.com/dromara/hertzbeat/assets/24788200/d5c74647-6c18-4b12-b858-f29cf1c61661"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"refactor collector dispatcher and more")),(0,l.kt)("h3",{id:"install-quickly-via-docker"},"Install quickly via docker"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Just one command to get started:")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"or use quay.io (if dockerhub network connect timeout)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat quay.io/tancloud/hertzbeat")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Access ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:1157")," to start, default account: ",(0,l.kt)("inlineCode",{parentName:"p"},"admin/hertzbeat"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploy collector clusters"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run -d -e IDENTITY=custom-collector-name -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector tancloud/hertzbeat-collector\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e IDENTITY=custom-collector-name")," : set the collector unique identity name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e MANAGER_HOST=127.0.0.1")," : set the main hertzbeat server ip."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-e MANAGER_PORT=1158")," : set the main hertzbeat server port, default 1158.")),(0,l.kt)("p",null,"Detailed config refer to ",(0,l.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Install HertzBeat via Docker")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"whats-changed"},"What's Changed"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Welcome to explore more new version updates, thanks to the hard work of the community partners, love \ud83d\udc97!")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"bugfix npe when get undefined name monitor template yml by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1173"},"https://github.com/dromara/hertzbeat/pull/1173")),(0,l.kt)("li",{parentName:"ul"},"[bug fixed]","When importing and exporting monitoring, support export collectors, configure collectors when importing by @zqr10159 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1178"},"https://github.com/dromara/hertzbeat/pull/1178")),(0,l.kt)("li",{parentName:"ul"},"support alert threshold rule config system value row count by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1180"},"https://github.com/dromara/hertzbeat/pull/1180")),(0,l.kt)("li",{parentName:"ul"},"Update README.md by @zqr10159 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1182"},"https://github.com/dromara/hertzbeat/pull/1182")),(0,l.kt)("li",{parentName:"ul"},"support config alert threshold tags bind by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1181"},"https://github.com/dromara/hertzbeat/pull/1181")),(0,l.kt)("li",{parentName:"ul"},"the back-end of help component has been built by @YutingNie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1160"},"https://github.com/dromara/hertzbeat/pull/1160")),(0,l.kt)("li",{parentName:"ul"},"support enable alert threshold auto resolved notice by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1185"},"https://github.com/dromara/hertzbeat/pull/1185")),(0,l.kt)("li",{parentName:"ul"},"Delete tag of the dashboard's homepage on the top four pages by @Ceilzcx in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1189"},"https://github.com/dromara/hertzbeat/pull/1189")),(0,l.kt)("li",{parentName:"ul"},"replace obsolete ",(0,l.kt)("inlineCode",{parentName:"li"},"registry.npm.taobao.org")," to",(0,l.kt)("inlineCode",{parentName:"li"},"registry.npmmirror.com")," by @zqr10159 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1192"},"https://github.com/dromara/hertzbeat/pull/1192")),(0,l.kt)("li",{parentName:"ul"},"refactor MonitorServiceImpl by @Carpe-Wang in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1190"},"https://github.com/dromara/hertzbeat/pull/1190")),(0,l.kt)("li",{parentName:"ul"},"config default system timezone and fix monitor status auto recover by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1187"},"https://github.com/dromara/hertzbeat/pull/1187")),(0,l.kt)("li",{parentName:"ul"},"update-doc-doris by @zqr10159 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1193"},"https://github.com/dromara/hertzbeat/pull/1193")),(0,l.kt)("li",{parentName:"ul"},"[manager]"," support tidb database monitoring  by @luxx-lq in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/733"},"https://github.com/dromara/hertzbeat/pull/733")),(0,l.kt)("li",{parentName:"ul"},"refactor fix potential npe by @Carpe-Wang in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1197"},"https://github.com/dromara/hertzbeat/pull/1197")),(0,l.kt)("li",{parentName:"ul"},"[ospp]"," support ui help massage component  by @YutingNie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1199"},"https://github.com/dromara/hertzbeat/pull/1199")),(0,l.kt)("li",{parentName:"ul"},"support monitor metrics name i18n by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1198"},"https://github.com/dromara/hertzbeat/pull/1198")),(0,l.kt)("li",{parentName:"ul"},"support google analytics by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1202"},"https://github.com/dromara/hertzbeat/pull/1202")),(0,l.kt)("li",{parentName:"ul"},"refactor code and fix some npe  by @Carpe-Wang in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1201"},"https://github.com/dromara/hertzbeat/pull/1201")),(0,l.kt)("li",{parentName:"ul"},"bugfix fix found 2 dataQueue bean when not config common.queue param by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1205"},"https://github.com/dromara/hertzbeat/pull/1205")),(0,l.kt)("li",{parentName:"ul"},"Help component update by @YutingNie in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1207"},"https://github.com/dromara/hertzbeat/pull/1207")),(0,l.kt)("li",{parentName:"ul"},"bugfix enterprise wechat push display content is too cumbersome by @l646505418 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1149"},"https://github.com/dromara/hertzbeat/pull/1149")),(0,l.kt)("li",{parentName:"ul"},"bugfix WeChatAppAlertNotifyHandlerImpl by @LINGLUOJUN in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1208"},"https://github.com/dromara/hertzbeat/pull/1208")),(0,l.kt)("li",{parentName:"ul"},"add LINGLUOJUN as a contributor for code by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1209"},"https://github.com/dromara/hertzbeat/pull/1209")),(0,l.kt)("li",{parentName:"ul"},"fix jmx jndi inject vulnerability by @luelueking in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1215"},"https://github.com/dromara/hertzbeat/pull/1215")),(0,l.kt)("li",{parentName:"ul"},"add luelueking as a contributor for code by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1217"},"https://github.com/dromara/hertzbeat/pull/1217")),(0,l.kt)("li",{parentName:"ul"},"bugfix monitoring param number limit range by @qyaaaa in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1216"},"https://github.com/dromara/hertzbeat/pull/1216")),(0,l.kt)("li",{parentName:"ul"},"add qyaaaa as a contributor for code by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1218"},"https://github.com/dromara/hertzbeat/pull/1218")),(0,l.kt)("li",{parentName:"ul"},"add app-ping i18n by @qyaaaa in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1220"},"https://github.com/dromara/hertzbeat/pull/1220")),(0,l.kt)("li",{parentName:"ul"},"some codes opt by @LINGLUOJUN in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1214"},"https://github.com/dromara/hertzbeat/pull/1214")),(0,l.kt)("li",{parentName:"ul"},"support deploy hertzbeat by kubernetes helm charts by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1221"},"https://github.com/dromara/hertzbeat/pull/1221")),(0,l.kt)("li",{parentName:"ul"},"bugfix threshold setting template variables has repeated parameters by @qyaaaa in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1223"},"https://github.com/dromara/hertzbeat/pull/1223")),(0,l.kt)("li",{parentName:"ul"},"support display metrics i18n label when threshold setting by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1225"},"https://github.com/dromara/hertzbeat/pull/1225")),(0,l.kt)("li",{parentName:"ul"},"bugfix user role display not correctly on webui by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1227"},"https://github.com/dromara/hertzbeat/pull/1227")),(0,l.kt)("li",{parentName:"ul"},"add hertzbeat about msg card by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1229"},"https://github.com/dromara/hertzbeat/pull/1229")),(0,l.kt)("li",{parentName:"ul"},"add app-api i18n by @novohit in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1236"},"https://github.com/dromara/hertzbeat/pull/1236")),(0,l.kt)("li",{parentName:"ul"},"add novohit as a contributor for code by @allcontributors in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1238"},"https://github.com/dromara/hertzbeat/pull/1238")),(0,l.kt)("li",{parentName:"ul"},"[feature]","Add ",(0,l.kt)("inlineCode",{parentName:"li"},"getAlertDefinesByName"),". by @zqr10159 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1237"},"https://github.com/dromara/hertzbeat/pull/1237")),(0,l.kt)("li",{parentName:"ul"},"thread pool executor support shutdown gracefully by @LINGLUOJUN in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1240"},"https://github.com/dromara/hertzbeat/pull/1240")),(0,l.kt)("li",{parentName:"ul"},"fix: expression injection RCE by @mikezzb in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1241"},"https://github.com/dromara/hertzbeat/pull/1241")),(0,l.kt)("li",{parentName:"ul"},"[bugfix]",'Replace schema "{key1:value1}" to "{\\"key1\\":\\"value1\\"}" by @zqr10159 in ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1245"},"https://github.com/dromara/hertzbeat/pull/1245")),(0,l.kt)("li",{parentName:"ul"},"[Refactor]"," Use static methods instead of constructors for Message.java by @gcdd1993 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1247"},"https://github.com/dromara/hertzbeat/pull/1247")),(0,l.kt)("li",{parentName:"ul"},"bugfix snake yaml decode rce by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1239"},"https://github.com/dromara/hertzbeat/pull/1239")),(0,l.kt)("li",{parentName:"ul"},"bugfix jackson deserialize localDatetime error by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1249"},"https://github.com/dromara/hertzbeat/pull/1249")),(0,l.kt)("li",{parentName:"ul"},"netty as an independent module, add new feature about collector list by @Ceilzcx in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1244"},"https://github.com/dromara/hertzbeat/pull/1244")),(0,l.kt)("li",{parentName:"ul"},"support show deploy collector script in web by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1251"},"https://github.com/dromara/hertzbeat/pull/1251")),(0,l.kt)("li",{parentName:"ul"},"bugfix mongodb collect extra metrics npe by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1257"},"https://github.com/dromara/hertzbeat/pull/1257")),(0,l.kt)("li",{parentName:"ul"},"bugfix fix collector run cyclic when connect auth failed by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1256"},"https://github.com/dromara/hertzbeat/pull/1256")),(0,l.kt)("li",{parentName:"ul"},"update webapp login ui by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1260"},"https://github.com/dromara/hertzbeat/pull/1260")),(0,l.kt)("li",{parentName:"ul"},"bugfix collector can not auto reconnect when channel idle by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1259"},"https://github.com/dromara/hertzbeat/pull/1259")),(0,l.kt)("li",{parentName:"ul"},"update alarm notice wework app send content ui by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1258"},"https://github.com/dromara/hertzbeat/pull/1258")),(0,l.kt)("li",{parentName:"ul"},"[hertzbeat]"," release hertzbeat version v1.4.1 by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1261"},"https://github.com/dromara/hertzbeat/pull/1261")),(0,l.kt)("li",{parentName:"ul"},"auto split webhook token when user input hook url by @tomsun28 in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/1262"},"https://github.com/dromara/hertzbeat/pull/1262"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"-supported"},"\u26c4 Supported"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,l.kt)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,l.kt)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,l.kt)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,l.kt)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,l.kt)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,l.kt)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,l.kt)("li",{parentName:"ul"},"Notifications support ",(0,l.kt)("inlineCode",{parentName:"li"},"Discord")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Slack")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Telegram")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Mail")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Pinning")," ",(0,l.kt)("inlineCode",{parentName:"li"},"WeChat")," ",(0,l.kt)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,l.kt)("inlineCode",{parentName:"li"},"SMS")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhook")," ",(0,l.kt)("inlineCode",{parentName:"li"},"ServerChan"),".")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Github: ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Gitee: ",(0,l.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}h.isMDXComponent=!0},10288:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/hertzbeat-arch-758b3f08da56310b5f1fe1d1bfd99d82.png"},48243:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/0-e6b0a393f2a8e43af9bf271c436a823d.png"}}]);